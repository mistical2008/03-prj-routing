import EventsList from "../components/events/events-list";
import {getFeaturedEvents} from "../dummy-store"

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventsList events={featuredEvents} />
    </>
  )
}
export default HomePage;
