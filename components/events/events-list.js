import EventItem from './event-item';
import styles from './events-list.module.css';

function EventsList({events}) {

  return (
    <ul className={styles.list}>
      {
        events.map(event => (
          <EventItem key={event.id} event={event} />
        ))
      }
    </ul>
  )
}
export default EventsList;
