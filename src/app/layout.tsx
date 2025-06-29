import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provaider";

import "./globals.css";

const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Line Management System",
  description:
    "Manage your team workflow with ease, and keep your team in sync.",
  icons: {
    icon: "/linelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(InterFont.className, "antialiased min-h-screen")}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
