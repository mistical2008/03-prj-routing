import {useRouter} from 'next/router';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import {eventsObjToArray, fetchAllEvents} from '../../helpers/api-utils';

function AllEventsPage({events}) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList events={events} />
    </>
  )
}

export async function getStaticProps() {
  const events = await fetchAllEvents(eventsObjToArray)

  return {
    props: {events},
    revalidate: 30,
  };
}

export default AllEventsPage;
