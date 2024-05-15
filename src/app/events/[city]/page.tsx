import Heading from "@/components/Heading";
import React from "react";

function EventsPage({ params }: { params: { city: string } }) {
  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      {params.city === "all" ? (
        <Heading>All Events</Heading>
      ) : (
        <Heading>
          Events in {city.charAt(0).toUpperCase() + city.slice(1)}
        </Heading>
      )}
    </main>
  );
}

export default EventsPage;
