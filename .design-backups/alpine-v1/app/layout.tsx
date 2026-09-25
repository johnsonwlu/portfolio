import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnson Lu — Engineer by trade. Explorer by nature.",
  description: "Platform engineering, DevOps, software, and reliability. A personal portfolio by Johnson Lu, inspired by the outdoors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
