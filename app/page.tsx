import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex gap-5 items-center">
        implement Debounce
        <Link href={"/implement-debounce"}>Link</Link>
      </div>
      <div className="flex gap-5 items-center">
        implement Throttling
        <Link href={"/implement-throttling"}>Link</Link>
      </div>
    </div>
  );
}
