import {useRouter} from "next/router";
import EventsList from "../../components/events/events-list";
import EventsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
// import {getFilteredEvents} from "../../dummy-store";

export default function FilteredEventsPage() {
  const router = useRouter();
  const {
    slug: [year, month],
  } = router.query;
  const yearNum = Number(year);
  const monthNum = Number(month);
  const date = new Date(yearNum, monthNum - 1);
  const filteredEvents = getFilteredEvents({year: yearNum, month: monthNum});
  console.log(router.query);

  // Validate parameters and return error alert:
  if (!year && !month) {
    return (
      <div className="center">
        <p>...Loading</p>
      </div>
    );
  }

  // Validate parameters and return error alert:
  if (
    isNaN(yearNum) ||
    isNaN(monthNum) ||
    yearNum > 2030 ||
    yearNum < 2021 ||
    monthNum < 1 ||
    monthNum > 12
  ) {
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
  if (!filteredEvents || filteredEvents.length === 0) {
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

  return (
    <>
      <EventsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
}
