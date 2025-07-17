"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
      <AlertTriangle className="size-10" />
      <p className="text-sm">Something went wrong</p>
      <Button variant={"secondary"} size={"sm"} asChild>
        <Link href={"/"}>Back to home</Link>
      </Button>
    </div>
  );
}
