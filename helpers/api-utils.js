const LINK = process.env.DB_EVENTS_LINK;

export async function fetchAllEvents(midleware) {
  const response = await fetch(LINK);
  const serverData = await response.json();

  if (midleware) {
    return midleware(serverData);
  }

  return serverData;
}


export function eventsObjToArray(serverData) {
  return Object.keys(serverData).map(id => {
    return {
      id: id,
      ...serverData[id]
    }
  })
}

export function getFeaturedEvents(events) {
  return events.filter((event) => event.isFeatured);
}

export function getEventById(events, id) {
  return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const {year, month} = dateFilter;
  const allEvents = await fetchAllEvents(eventsObjToArray);

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
