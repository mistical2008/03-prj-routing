import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
// import {
// eventsObjToArray,
// fetchAllEvents,
// getFilteredEvents,
// } from "../../helpers/api-utils";
import EventsList from "../../components/events/events-list";
import EventsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
// import {getFilteredEvents} from "../../dummy-store";

function FilteredEventsPage() {
  const router = useRouter();
  // console.log(router.query);
  const [year, month] = router.query.slug;
  const [loadedEvents, setLoadedEvents] = useState();

  const yearNum = Number(year);
  const monthNum = Number(month);

  // validate query params before fetching data
  // in case to feedback user and not send unneeded request to server
  if (
    isNaN(yearNum) ||
    isNaN(monthNum) ||
    yearNum > 2030 ||
    yearNum < 2021 ||
    monthNum < 1 ||
    monthNum > 12 ||
    error
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

  const { data, error } = useSWR(
    "https://nextjs-test-c75bc-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  // console.log(data);

  useEffect(() => {
    if (data) {
      //transformation logic
      const events = Object.keys(data).map((id) => {
        console.log(data[id]);
        return {
          ...data[id],
          id: id,
        };
      });

      setLoadedEvents(events);
    }
  }, [data]);

  // As useSWR do async work and loadedEvents undefined
  // respond to user with loading status
  if (!year || !month || !loadedEvents) {
    return (
      <>
        <div className="center">Loading...</div>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === yearNum &&
      eventDate.getMonth() === monthNum - 1
    );
  });

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

  // Validate parameters and return error alert:

  const date = new Date(yearNum, monthNum - 1);
  return (
    <>
      <EventsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
}

// export async function getServerSideProps(context) {
// const {
// slug: [year, month],
// } = context.params;
//
// const yearNum = Number(year);
// const monthNum = Number(month);
// const events = await getFilteredEvents({ year: yearNum, month: monthNum });
//
// if (!year && !month) {
// return { props: { hasError: true } };
// }
//
// return {
// props: {
// events,
// month: monthNum,
// year: yearNum,
// },
// };
// }

export default FilteredEventsPage;
