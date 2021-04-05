export async function fetchAllEvents(link, prepare) {
  const response = await fetch(link);
  const serverData = await response.json();

  if (prepare) {
    return prepare(serverData);
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

