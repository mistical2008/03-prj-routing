import EventsList from "../components/events/events-list";
import {eventsObjToArray, getFeaturedEvents} from "../helpers/api-utils";
import {fetchAllEvents} from "../helpers/api-utils";

function HomePage({events}) {
  if (!events) return <div>Loading...</div>

  return (
    <>
      <EventsList events={events} />
    </>
  )
}

export async function getStaticProps() {
  const link = process.env.DB_EVENTS_LINK;
  const events = getFeaturedEvents( 
    await fetchAllEvents(link, eventsObjToArray) 
  );

  return {
    props: {events},
    revalidate: 30,
  };
}

export default HomePage;
