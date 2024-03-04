import Link from "next/link";

export default function HomePage({ brokkoli }) {
  return (
    <>
      <h1>Home Page {brokkoli}</h1>
      <Link href="/about">About</Link>
    </>
  );
}
