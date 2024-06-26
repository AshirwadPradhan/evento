import Heading from "@/components/Heading";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <Heading>Find events around you</Heading>
      <p className="mb-12 mt-3 lg:mt-7 text-2xl lg:text-4xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">10,000</span>{" "}
        events around you
      </p>
      <SearchForm />

      <section className="mt-4 flex items-center gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="flex gap-x-2">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
