import type { Metadata } from "next";
import Link from "next/link";
import HobbyGallery from "@/components/hobby-gallery";

export const metadata: Metadata = {
  title: "Hobbies & Interests — Joji Allan",
  description:
    "Explore Joji Allan's interests in music, instruments, and learning.",
};

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#22241f]">
      <header className="border-b border-[#22241f]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-5 sm:px-10 lg:px-16">
          <Link
            aria-label="Joji Allan, home"
            className="shrink-0 text-lg font-semibold tracking-[-0.06em]"
            href="/"
          >
            joji allan<span className="text-[#8d9a64]">.</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-3 text-xs sm:gap-8 sm:text-sm"
          >
            <Link className="transition-colors hover:text-[#81905a]" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/education">
              Education
            </Link>
            <Link
              aria-current="page"
              className="rounded-full bg-[#22241f] px-3 py-1.5 text-[#f7f6f2]"
              href="/hobbies"
            >
              Hobbies
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16">
        <section aria-labelledby="hobbies-title">
          <h1
            className="font-serif text-5xl font-bold leading-[0.98] tracking-[-0.07em] text-[#174c3e] sm:text-7xl"
            id="hobbies-title"
          >
            Hobbies &amp; interests<span className="text-[#e7c96f]">.</span>
          </h1>
        </section>

        <HobbyGallery />
      </div>
    </main>
  );
}