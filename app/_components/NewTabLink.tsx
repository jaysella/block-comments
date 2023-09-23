"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { useIframe } from "./ui/use-iframe";

export default function NewTabLink() {
  const inFrame = useIframe();

  if (inFrame) {
    return (
      <div className="container mt-4 text-sm text-center uppercase">
        <a
          href="#"
          target="_blank"
          className="inline-flex flex-row items-center gap-1 link"
        >
          Open in a new tab
          <ArrowUpRightIcon size={16} />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
