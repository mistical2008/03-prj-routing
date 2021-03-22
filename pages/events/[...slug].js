import {useRouter} from 'next/router';

export default function FilteredEventsPage() {
  const router = useRouter();
  const {slug} = router.query;
  console.log(router.query);

  return (
    <>
      <h1>Filtered events</h1>
      <p>There will be filtered events list</p>
      <ul>
        {
          slug.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
    </>
  )
}
