import {useRouter} from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import {getEventById} from '../../dummy-store';

function EventDetailsPage() {
  const router = useRouter();
  const {eventId} = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div>
        <h1>...Event not found.</h1>
      </div>
    )
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        {event.description}
      </EventContent>
    </>
  )
}
export default EventDetailsPage;
