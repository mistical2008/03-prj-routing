import Link from 'next/link';

function EventItem({event: {id, title, location, date, image}}) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(", ", "\n")
  const exploreLink = `/events/${id}`;
  const imageSrc = `/${image}`;

  return (
    <>
      <img src={imageSrc} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </>
  )
}

export default EventItem;
