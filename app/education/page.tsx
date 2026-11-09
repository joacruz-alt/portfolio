import type { Metadata } from "next";
import Link from "next/link";
import { Award, GraduationCap, Music2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Education — Joji Allan",
  description: "Joji Allan's senior high school and college education.",
};

const education = [
  {
    level: "Senior High School",
    school: "AMA Computer Learning Center",
    dates: "2023-2025",
    description:
      "Built lasting musical experience as a member of the DLC and DXMC bands, and shared my skills as a band trainer.",
    highlights: [
      "Member of the DLC and DXMC bands",
      "Served as a band trainer",
      "DXMC Awardee",
    ],
    Icon: Music2,
  },
  {
    level: "College",
    school: "Naga College Foundation",
    dates: "ONGOING",
    description:
      "Pursuing a degree in Computer Science with a focus on software development and design.",
    highlights: [
      "Currently enrolled in the Computer Science program",
      "Actively participating in coding clubs and hackathons",
    ],
    Icon: GraduationCap,
  },
];

export default function EducationPage() {
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
            <Link
              aria-current="page"
              className="rounded-full bg-[#22241f] px-3 py-1.5 text-[#f7f6f2]"
              href="/education"
            >
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
        <section aria-labelledby="education-title">
          <h1
            className="font-serif text-5xl font-bold leading-[0.98] tracking-[-0.07em] text-[#174c3e] sm:text-7xl"
            id="education-title"
          >
            My education<span className="text-[#e7c96f]">.</span>
          </h1>
        </section>

        <section aria-label="Education history" className="mt-10 space-y-5 sm:mt-14">
          {education.map(({ level, school, dates, description, highlights, Icon }) => (
            <article
              className="rounded-[1.5rem] border border-[#22241f]/10 bg-white p-6 shadow-[0_12px_40px_rgba(34,36,31,0.035)] sm:p-8"
              key={level}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9ece3] text-[#174c3e]">
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-[-0.04em] text-[#174c3e] sm:text-2xl">
                      {level}
                    </h2>
                    <p className="mt-1 text-sm text-[#77786f]">{school}</p>
                  </div>
                </div>
                <span className="pl-16 text-sm text-[#82925a] sm:pl-0">{dates}</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#66675f] sm:text-base">
                {description}
              </p>

              <div className="mt-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#30352d]">
                  <Award aria-hidden="true" className="text-[#b9993e]" size={17} />
                  Highlights
                </h3>
                <ul className="space-y-2 pl-1">
                  {highlights.map((highlight) => (
                    <li
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#66675f]"
                      key={highlight}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#82925a]"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}