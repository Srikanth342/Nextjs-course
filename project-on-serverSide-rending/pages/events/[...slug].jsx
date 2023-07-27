import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { Fragment } from "react";
import Head from "next/head";

const FilteredEventPage = (props) => {
  const { filteredEvents, date1 } = props;

  // if (!filterData) {
  //   return <p className="center">Loading</p>;
  // }

  const pageHead = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`List of Filtered Events...`}
      />
    </Head>
  );

  if (props.hasError) {
    return (
      <Fragment>
        {pageHead}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={`/events`}>Shoe All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHead}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={`/events`}>Shoe All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(date1.year, date1.month - 1);

  return (
    <div>
      {pageHead}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      filteredEvents: filteredEvents,
      date1: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventPage;
