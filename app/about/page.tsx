import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  AudioLines,
  GraduationCap,
  Guitar,
  Headphones,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Joji Allan",
  description:
    "Get to know Joji Allan, his story, interests, and approach to learning.",
};

const skills = [
  { name: "Guitar", icon: Guitar },
  { name: "Flute", icon: AudioLines },
  { name: "Band performance", icon: Headphones },
  { name: "Band training", icon: GraduationCap },
  { name: "Ensemble collaboration", icon: UsersRound },
  { name: "Musical practice", icon: AudioLines },
];

export default function AboutPage() {
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
            <Link
              aria-current="page"
              className="rounded-full bg-[#22241f] px-3 py-1.5 text-[#f7f6f2]"
              href="/about"
            >
              About
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/education">
              Education
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/hobbies">
              Hobbies
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16">
        <section aria-labelledby="about-title">
          <h1
            className="font-serif text-6xl font-bold leading-[0.95] tracking-[-0.07em] text-[#174c3e] sm:text-8xl"
            id="about-title"
          >
            About me<span className="text-[#e7c96f]">.</span>
          </h1>
        </section>

        <section
          aria-labelledby="story-title"
          className="relative mt-10 overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[0_12px_40px_rgba(34,36,31,0.045)] sm:mt-14 sm:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-14 h-40 w-40 rounded-full bg-[#f4edcf] sm:-right-8 sm:-top-20 sm:h-56 sm:w-56"
          />
          <div className="relative">
            <div className="mb-7 flex items-center justify-between gap-4">
              <h2
                className="text-2xl font-semibold tracking-[-0.05em] text-[#174c3e] sm:text-3xl"
                id="story-title"
              >
                My story
              </h2>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7c96f] text-[#174c3e]">
                <ArrowDownRight aria-hidden="true" size={20} />
              </span>
            </div>
            <div className="grid gap-5 text-sm leading-7 text-[#66675f] sm:grid-cols-2 sm:gap-8 sm:text-base sm:leading-8">
              <p>
                My name is Joji Allan L. Cruz Jr., and I&apos;m 19 years old,
                living in Tambang, Tinambac, Camarines Sur. You can call me
                Uno, as that&apos;s my nickname. I live a simple life and
                strive to be a happy, friendly, and kind person. I get lazy
                sometimes, but I am truly a hardworking individual.
              </p>
              <p>
                I also have a passion for musical instruments—especially those
                played in DXMC bands, like the guitar and flute. I even served
                as a band trainer because of my skill level. Since I&apos;ve
                been part of the DLC and DXMC from 3rd grade all the way through
                Senior High School, I can confidently say I&apos;ve built a
                professional level of experience, and my ultimate dream is to
                become a musician.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="skills-title"
          className="relative mt-6 rounded-[1.75rem] bg-[#e9ece3] p-7 sm:mt-8 sm:p-10"
        >
          <span
            aria-hidden="true"
            className="absolute -top-4 right-8 bg-[#f7f6f2] px-3 font-serif text-2xl tracking-[0.2em] text-[#b9993e]"
          >
            ♪ ♫
          </span>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#82925a]">
                Music &amp; performance
              </p>
              <h2
                className="text-2xl font-semibold tracking-[-0.05em] text-[#174c3e] sm:text-3xl"
                id="skills-title"
              >
                My skills
              </h2>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {skills.map(({ name, icon: SkillIcon }) => (
              <li
                className="inline-flex items-center gap-2 rounded-full border border-[#174c3e]/10 bg-[#f7f6f2] px-4 py-2.5 text-sm text-[#405348]"
                key={name}
              >
                <SkillIcon aria-hidden="true" className="text-[#82925a]" size={16} />
                {name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}