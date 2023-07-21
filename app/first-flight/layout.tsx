import { ReactNode } from "react";
import InfoBlock from "@/app/_components/InfoBlock";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="container flex flex-col gap-4 my-4">
      <InfoBlock>
        Click on any line in the snippets below for additional info. To close
        it, press{" "}
        <kbd className="px-1.5 py-0.5 rounded-lg bg-slate-200 font-bold dark:bg-blue-600">
          ESC
        </kbd>{" "}
        on your keyboard or click anywhere outside the popover.
      </InfoBlock>
      {children}
    </main>
  );
}
