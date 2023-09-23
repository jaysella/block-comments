import { ReactNode } from "react";
import NewTabLink from "../_components/NewTabLink";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NewTabLink />
      {children}
    </>
  );
}
