"use client";
import { useSearchContext } from "@/lib/hooks";

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();
  return (
    <form className="w-full h-full">
      <input
        className="w-full h-full bg-white/20 reounded-md px-5 outline-none transition-all focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
        placeholder="Search Pet"
      />
    </form>
  );
}
