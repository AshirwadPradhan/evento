import { EventoEvent } from "@prisma/client";
import React from "react";
import EventCard from "./EventCard";
import { getEventList } from "@/lib/utils";

async function EventsList({ city, page }: { city: string, page: number}) {
  const events: EventoEvent[] = await getEventList(city, page);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
