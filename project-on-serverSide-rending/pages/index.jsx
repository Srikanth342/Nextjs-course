import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "@/dummy-data";
import Head from "next/head";

const HomePage = (props) => {
  const { events } = props;
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta name="description" content="Find alot of events that helps you to evolve..."/>
      </Head>
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 30,
  };
}

export default HomePage;
