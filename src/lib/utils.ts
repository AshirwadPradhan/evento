import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvent(params: string) {
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events/" + params
  );
  return await resp.json();
}

export async function getEventList(params: string) {
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" +
      params,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  return await resp.json();
}
