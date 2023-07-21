import { Toaster } from "@/app/_components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CS1200 Demos",
    default: "CS1200 Demos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, spaceMono.variable, "dark:bg-slate-950")}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
