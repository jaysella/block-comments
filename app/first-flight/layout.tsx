import { ReactNode } from "react";
import InfoBlock from "@/app/_components/InfoBlock";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container my-4 md:my-8">
      <InfoBlock className="mb-4">
        Click on any line in the snippet below for additional information. To
        close it, press{" "}
        <kbd className="px-1.5 py-0.5 rounded-lg bg-blue-50">ESC</kbd> on your
        keyboard or click anywhere outside the popover.
      </InfoBlock>
      <main>{children}</main>
    </div>
  );
}
