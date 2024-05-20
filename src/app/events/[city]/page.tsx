import EventsList from "@/components/EventsList";
import Heading from "@/components/Heading";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = params.city;
  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
}

async function EventsPage({
  params,
  searchParams,
}: {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const city = params.city;
  const page = searchParams.page ?? 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {params.city === "all" ? (
        <Heading className="mb-28">All Events</Heading>
      ) : (
        <Heading className="mb-28">
          Events in {city.charAt(0).toUpperCase() + city.slice(1)}
        </Heading>
      )}

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
