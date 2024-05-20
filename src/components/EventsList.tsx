import { EventoEvent } from "@prisma/client";
import React from "react";
import EventCard from "./EventCard";
import { getEventList } from "@/lib/utils";
import PaginationControls from "./pagination-controls";
import next from "next";

async function EventsList({ city, page = 1 }: { city: string; page?: number }) {
  const { eventList, totalEvents } = await getEventList(city, page);

  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalEvents > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20]">
      {eventList.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}

export default EventsList;
