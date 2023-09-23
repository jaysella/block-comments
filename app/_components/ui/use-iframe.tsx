"use client";

import { useEffect, useState } from "react";

export function useIframe() {
  const [inFrame, setInFrame] = useState(false);

  useEffect(() => {
    if (window.self !== window.top) {
      // loaded within an iframe
      setInFrame(true);
    } else {
      // not loaded within an iframe
      setInFrame(false);
    }
  }, []);

  return inFrame;
}
