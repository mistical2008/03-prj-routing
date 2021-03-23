import Link from 'next/link';
import styles from './event-item.module.css';

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
    <li className={styles.item}>
      <img src={imageSrc} alt={title} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem;
