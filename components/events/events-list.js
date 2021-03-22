import EventItem from './event-item';

function EventsList({events}) {
  return (
    <ul>
      {
        events.map(event => (
          <EventItem event={event} />
        ))
      }
    </ul>
  )
}
export default EventsList;
