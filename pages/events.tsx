import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Event } from '../types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const category = query?.category;
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data: Event[] = await response.json();

  return {
    props: {
      events: data,
    },
  };
};

const EventsList: NextPage<{ events: Event[] }> = ({ events }) => {
  const router = useRouter();
  const [eventList, setEventList] = useState(events);

  const fetchSportEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports');
    const data = await response.json();

    setEventList(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };

  return (
    <>
      <h1>List of Events</h1>
      <button
        type="button"
        onClick={fetchSportEvents}
      >
        Sports Events
      </button>
      {eventList.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default EventsList;
