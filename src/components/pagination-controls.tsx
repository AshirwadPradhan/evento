import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const btnStyles =
  "text=white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition duration-250 text-sm";

function PaginationControls({
  prevPath,
  nextPath,
}: {
  prevPath: string;
  nextPath: string;
}) {
  return (
    <section className="flex justify-between w-full">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div></div>
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}

export default PaginationControls;
