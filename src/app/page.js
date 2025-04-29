"use client"

import { Hero1 } from "@/components/Hero1";
import { useUser } from "@stackframe/stack";



export default function Home() {
  useUser({ or: "redirect"})
  return (
    <div className="relative min-h-screen">
      <Hero1 />
    </div>
  );
}
