import { ReactNode } from "react";
import InfoBlock from "@/app/_components/InfoBlock";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="container flex flex-col gap-4 my-4 md:my-8">
      <InfoBlock>
        Click on any line in the snippet below for additional information. To
        close it, press{" "}
        <kbd className="px-1.5 py-0.5 rounded-lg bg-blue-50">ESC</kbd> on your
        keyboard or click anywhere outside the popover.
      </InfoBlock>
      {children}
    </main>
  );
}
