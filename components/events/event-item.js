import Link from 'next/link';
import Button from '../ui/button';
import IconDate from '../icons/icon-date';
import IconAdress from '../icons/icon-adress';
import IconArrowRight from '../icons/icon-arrow-right';
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
            <IconDate />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <IconAdress />
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span> Explore Event </span>
            <span className={styles.icon}> <IconArrowRight /> </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem;
