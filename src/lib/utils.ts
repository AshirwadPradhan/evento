import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvent(params: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug: params },
  });

  if (!event) {
    return notFound();
  }
  return event;
}

export async function getEventList(params: string, page = 1) {
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

  if (!eventList || eventList.length === 0) {
    return notFound();
  }

  return eventList;
}
