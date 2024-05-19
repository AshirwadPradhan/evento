import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvents(params: string) {
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events/" + params
  );
  return await resp.json();
}