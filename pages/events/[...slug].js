import {getFilteredEvents} from '../../helpers/api-utils';
import EventsList from "../../components/events/events-list";
import EventsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
// import {getFilteredEvents} from "../../dummy-store";

function FilteredEventsPage(props) {
  const {events, hasError, year, month, slug} = props;

  if (!events) {
    return (
      <>
        <div className="center">Loading...</div>
      </>
    );
  }
  // Validate parameters and return error alert:
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Filter error. Update your search values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  // Check for empty results and return fallback:
  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events for the choosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <>
      <EventsTitle date={date} />
      <EventsList events={events} />
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    slug: [year, month],
  } = context.params;

  const yearNum = Number(year);
  const monthNum = Number(month);
  const events = await getFilteredEvents({year: yearNum, month: monthNum});

  if (!year && !month) {
    return {props: {hasError: true}};
  }

  return {
    props: {
      events,
      month: monthNum,
      year: yearNum,
    }
  }
}

export default FilteredEventsPage;
