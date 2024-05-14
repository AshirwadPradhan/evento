import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="mb-12 mt-3 lg:mt-7 text-2xl lg:text-4xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-[#a4f839]">
          10,000
        </span>{" "}
        events around you
      </p>
      <form className="w-full sm:w-[500px]">
        <input
          className="w-full sm:w-[500px] rounded-lg bg-white/[7%] outline-none px-6 h-16 ring-[#a4f839]/50 focus:ring-1 transition focus:bg-white/10"
          placeholder="Search events in your city..."
          spellCheck={false}
        />
      </form>

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
