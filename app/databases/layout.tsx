import { ReactNode } from "react";
import InfoBlock from "@/app/_components/InfoBlock";

export default function Layout({ children }: { children: ReactNode }) {
  return <main className="container flex flex-col gap-4 my-4">{children}</main>;
}
