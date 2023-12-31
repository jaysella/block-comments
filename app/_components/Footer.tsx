import Link from "next/link";

export default function Footer() {
  return (
    <div className="container p-2 mx-auto my-2 text-xs text-center text-slate-500">
      Designed + built by{" "}
      <Link className="hover:underline" href="/credits">
        Jay Sella
      </Link>
    </div>
  );
}
