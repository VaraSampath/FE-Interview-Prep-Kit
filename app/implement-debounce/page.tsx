"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(()=>{
    const to = setTimeout(()=>{
        setDebouncedInput(searchInput)
    },300) //*update after 300 ms of wait period
    return ()=>{
        clearTimeout(to)
    }
  },[searchInput])

  return (
    <>
      <div className="flex flex-col gap-5">
        <h2>Debounce</h2>
        <p>
          Debouncing is a technique used to optimize function calls by delaying
          them until a certain amount of time has passed since the last call. In
          React, debouncing is particularly useful when handling user input,
          such as typing in a search field or submitting a form. It helps
          prevent excessive function calls, improving performance and reducing
          unnecessary API requests.
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-5">
        <div className="flex fle gap-4">
          <p>Without Debounce: {searchInput}</p>
          <p>With usage of Debounce: {debouncedInput}</p>
        </div>
        <input
          value={searchInput}
          type="search"
          onChange={(e)=>{
            setSearchInput(e.target.value)
          }}
          placeholder="Type Here"
          className="border rounded-md p-2 py-1 border-black w-full text-black"
        />
      </div>
    </>
  );
};

export default Page;
