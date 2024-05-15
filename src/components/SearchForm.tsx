"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form className="w-full sm:w-[500px]" onSubmit={handleSubmit}>
      <input
        className="w-full sm:w-[500px] rounded-lg bg-white/[7%] outline-none px-6 h-16 ring-accent/50 focus:ring-1 transition focus:bg-white/10"
        placeholder="Search events in your city..."
        spellCheck={false}
        value={searchText}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
