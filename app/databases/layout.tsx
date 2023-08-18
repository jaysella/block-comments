import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <main className="container flex flex-col gap-4 mt-4">{children}</main>;
}
