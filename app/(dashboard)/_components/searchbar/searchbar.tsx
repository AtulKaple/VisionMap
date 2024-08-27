"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
import { Search } from "lucide-react";
import qs from "query-string";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
   const router = useRouter();
    const [value, setValue] = useDebounceValue("", 1);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                const input = document.querySelector("input");
                input?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const url = qs.stringifyUrl(
            {
                url: "/",
                query: {
                    search: value,
                },
            },
            {
                skipEmptyString: true,
                skipNull: true,
            }
        );

        router.push(url);
    }, [value, router]);
  // const router = useRouter();
  // const [value, setValue] = useState("");
  // const [debouncedValue] = useDebounceValue(value, 500);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  // useEffect(() => {
  //   const url = qs.stringifyUrl(
  //     {
  //       url: "/",
  //       query: {
  //         search: debouncedValue,
  //       },
  //     },
  //     { skipEmptyString: true, skipNull: true }
  //   );

  //   router.push(url);
  // }, [debouncedValue, router]);

  return (
    <div className="w-full relative ">
      <Search
        className="absolute top-1/2 left-3 transform -translate-y-1/2
        text-muted-foreground h-4 w-4"
      />
      <Input
        className="w-full max-w-[516px] pl-9 rounded-2xl border-solid border-black border-2"
        placeholder="Search Boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
