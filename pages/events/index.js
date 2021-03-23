import {useRouter} from 'next/router';
import {getAllEvents} from '../../dummy-store';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';

export default function AllEventsPage() {
  const events = getAllEvents();
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
