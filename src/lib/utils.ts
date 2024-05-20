import { PrismaClient } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvent(params: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug: params },
  });
  return event;
}

export async function getEventList(params: string) {
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
  });
  return eventList;
}
