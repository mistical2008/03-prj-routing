import { useRouter } from "next/router";
import EventsList from "../../components/events/events-list";
import { getFilteredEvents } from "../../dummy-store";

export default function FilteredEventsPage() {
  const router = useRouter();
  const {
    slug: [year, month],
  } = router.query;
  const yearNum = Number(year);
  const monthNum = Number(month);
  const filteredEvents = getFilteredEvents({ year: yearNum, month: monthNum });
  console.log(router.query);

  // Validate parameters and return error alert:
  if (isNaN(yearNum) || isNaN(monthNum) || !year || !month) {
    return (
      <div>
        <p>Filter error. Update your search parameters.</p>
      </div>
    );
  }

  // Check for empty results and return fallback:
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <p>No events for your query</p>
      </div>
    );
  }

  return (
    <>
      <h1>Filtered events</h1>
      <EventsList events={filteredEvents} />
    </>
  );
}
