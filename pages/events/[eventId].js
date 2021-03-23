import {useRouter} from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import {getEventById} from '../../dummy-store';

function EventDetailsPage() {
  const router = useRouter();
  const {eventId} = router.query;
  const {date, location, image, title, description} = getEventById(eventId);

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title} />
      <EventContent>
        {description}
      </EventContent>
    </>
  )
}

export default EventDetailsPage;
