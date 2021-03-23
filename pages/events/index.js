import EventsList from '../../components/events/events-list';
import {getAllEvents} from '../../dummy-store';

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsList events={events} />
    </>
  )
}
