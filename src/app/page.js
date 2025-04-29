"use client"

import { Hero1 } from "@/components/ui/hero-with-text-and-two-button";
import { useUser } from "@stackframe/stack";



export default function Home() {
  useUser({ or: "redirect"})
  return (
    <div className="relative min-h-screen">
      <Hero1 />
    </div>
  );
}
