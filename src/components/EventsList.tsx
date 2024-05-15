import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

function EventsList({ events }: { events: EventoEvent[] }) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
