import Heading from "@/components/Heading";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

async function EventPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events/" + slug
  );

  const event: EventoEvent = await resp.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <div className="z-1 relative flex flex-col gap-6 lg:gap-16 lg:flex-row">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="h-[60%] object-fit rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleString("default", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <Heading className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </Heading>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize mt-10 lg:mt-auto w-[95vw] sm:w-full rounded-md border-white/10 border-2 py-2 hover:scale-105 active:scale-[1.02] transition focus:scale-105">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
}

export default EventPage;
