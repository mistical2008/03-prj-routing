import {
  eventsObjToArray,
  fetchAllEvents,
  getEventById,
  getFeaturedEvents,
} from "../../helpers/api-utils";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Head from "next/head";

function EventDetailsPage({ event }) {
  if (!event) {
    return (
      <div>
        <h1 className="center">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export async function getStaticPaths() {
  const events = await fetchAllEvents(eventsObjToArray);
  const data = Object.keys(getFeaturedEvents(events)).map((eventId) => ({
    params: { eventId },
  }));
  return {
    paths: data,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { eventId },
  } = context;
  const events = await fetchAllEvents(eventsObjToArray);
  const event = getEventById(events, eventId);
  return {
    props: {
      event,
      revalidate: 30,
    },
  };
}

export default EventDetailsPage;
