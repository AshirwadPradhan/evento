import EventsList from "@/components/EventsList";
import Heading from "@/components/Heading";
import { EventoEvent } from "@/lib/types";
import React from "react";

async function EventsPage({ params }: { params: { city: string } }) {
  const city = params.city;
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" + city
  );
  const events = await resp.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {params.city === "all" ? (
        <Heading className="mb-28">All Events</Heading>
      ) : (
        <Heading className="mb-28">
          Events in {city.charAt(0).toUpperCase() + city.slice(1)}
        </Heading>
      )}

      <EventsList events={events} />
    </main>
  );
}

export default EventsPage;
