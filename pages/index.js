import EventsList from "../components/events/events-list";
import EventsTitle from '../components/events/results-title';
import {eventsObjToArray, getFeaturedEvents} from "../helpers/api-utils";
import {fetchAllEvents} from "../helpers/api-utils";

function HomePage({events}) {
  if (!events) return <div>Loading...</div>
  const date = Date.now();

  return (
    <>
      <div className="center">
        <EventsTitle date={date} />
      </div>
      <EventsList events={events} />
    </>
  )
}

export async function getStaticProps() {
  const events = getFeaturedEvents(
    await fetchAllEvents(eventsObjToArray)
  );

  return {
    props: {events},
    revalidate: 30,
  };
}

export default HomePage;
