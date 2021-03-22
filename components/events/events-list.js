import EventItem from './event-item';

function EventsList({events}) {
  console.log(events);

  return (
    <ul>
      {
        events.map(event => (
          <li>
            <EventItem event={event} />
          </li>
        ))
      }
    </ul>
  )
}
export default EventsList;
