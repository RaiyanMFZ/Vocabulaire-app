"use client"

import { Hero1 } from "@/components/ui/hero-with-text-and-two-button";
import Header from "@/components/ui/header";



export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        <Hero1 />
      </main>
    </>
  );
}
