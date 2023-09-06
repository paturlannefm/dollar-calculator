import React from "react";

export default function Home() {
  return (
    <main className="flex gap-4 h-full ">
      <section className="flex-1">Left</section>
      <section className="flex-1 bg-cyan-700 rounded-3xl p-10 text-white">
        Right
      </section>
    </main>
  );
}
