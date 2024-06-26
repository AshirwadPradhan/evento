import "server-only";
import { notFound } from "next/navigation";
import prisma from "./db";
import { unstable_cache } from "next/cache";

export const getEvent = unstable_cache(async (params: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug: params },
  });

  if (!event) {
    return notFound();
  }
  return event;
});

export const getEventList = unstable_cache(async (params: string, page = 1) => {
  const eventList = await prisma.eventoEvent.findMany({
    where: {
      city:
        params === "all"
          ? undefined
          : params.charAt(0).toUpperCase() + params.slice(1),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalEvents = await prisma.eventoEvent.count({
    where: {
      city:
        params === "all"
          ? undefined
          : params.charAt(0).toUpperCase() + params.slice(1),
    },
  });

  return { eventList, totalEvents };
});
