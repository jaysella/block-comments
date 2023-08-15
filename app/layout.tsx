import { Toaster } from "@/app/_components/ui/toaster";
import { TooltipProvider } from "@/app/_components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

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
        className={cn(
          inter.className,
          spaceMono.variable,
          "bg-white dark:bg-black"
        )}
      >
        <TooltipProvider>{children}</TooltipProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
