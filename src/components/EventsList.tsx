import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

async function EventsList({ city }: { city: string }) {
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" + city
  );
  const events: EventoEvent[] = await resp.json();
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
