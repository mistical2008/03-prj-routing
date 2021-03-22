import {useRouter} from 'next/router';

function EventDetailsPage() {
  const router = useRouter();
  const {eventId} = router.query;

  return (
    <>
      <h1>Event details</h1>
      <p>Some information about event <code>{eventId}</code>.</p>
    </>
  )
}
export default EventDetailsPage;
