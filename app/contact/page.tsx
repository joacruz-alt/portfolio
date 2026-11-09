import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Joji Allan",
  description: "Get in touch with Joji Allan.",
};

const email = "joacruz@gbox.ncf.edu.ph";

export default function ContactPage() {
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
            <Link className="transition-colors hover:text-[#81905a]" href="/hobbies">
              Hobbies
            </Link>
            <Link
              aria-current="page"
              className="rounded-full bg-[#22241f] px-3 py-1.5 text-[#f7f6f2]"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16">
        <section aria-labelledby="contact-title">
          <h1
            className="font-serif text-5xl font-bold leading-[0.98] tracking-[-0.07em] text-[#174c3e] sm:text-7xl"
            id="contact-title"
          >
            Get in touch<span className="text-[#e7c96f]">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#707168] sm:text-base">
            Have a question or want to say hello? I&apos;d be happy to hear from
            you.
          </p>
        </section>

        <div className="mt-9 grid gap-5 sm:mt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <section aria-label="Contact details" className="grid gap-3">
            <a
              className="group flex items-center gap-4 rounded-[1.35rem] border border-[#22241f]/10 bg-white p-5 transition-colors hover:border-[#82925a]/40 sm:p-6"
              href={`mailto:${email}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9ece3] text-[#174c3e] transition-colors group-hover:bg-[#f4edcf]">
                <Mail aria-hidden="true" size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-[#85867b]">Email</span>
                <span className="mt-1 block break-all text-sm font-medium text-[#30352d]">
                  {email}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="shrink-0 text-[#82925a]"
                size={18}
              />
            </a>

            <div className="flex items-center gap-4 rounded-[1.35rem] border border-[#22241f]/10 bg-white p-5 sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f4edcf] text-[#846c2c]">
                <MapPin aria-hidden="true" size={20} />
              </span>
              <span>
                <span className="block text-xs text-[#85867b]">Location</span>
                <span className="mt-1 block text-sm font-medium text-[#30352d]">
                  Tambang, Tinambac, Camarines Sur
                </span>
              </span>
            </div>
          </section>

          <section
            aria-labelledby="message-title"
            className="rounded-[1.35rem] border border-[#22241f]/10 bg-white p-6 shadow-[0_12px_40px_rgba(34,36,31,0.035)] sm:p-8"
          >
            <h2
              className="text-xl font-semibold tracking-[-0.04em] text-[#174c3e]"
              id="message-title"
            >
              Send a message
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#77786f]">
              Fill out the form below and I&apos;ll get back to you.
            </p>

            <form
              aria-describedby="form-note"
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-[#41443b]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="name"
                    className="w-full rounded-xl border border-[#22241f]/15 bg-[#fbfaf7] px-3.5 py-2.5 text-sm outline-none transition focus:border-[#82925a] focus:ring-2 focus:ring-[#82925a]/15"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-[#41443b]"
                    htmlFor="sender-email"
                  >
                    Email
                  </label>
                  <input
                    autoComplete="email"
                    className="w-full rounded-xl border border-[#22241f]/15 bg-[#fbfaf7] px-3.5 py-2.5 text-sm outline-none transition focus:border-[#82925a] focus:ring-2 focus:ring-[#82925a]/15"
                    id="sender-email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-[#41443b]"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full rounded-xl border border-[#22241f]/15 bg-[#fbfaf7] px-3.5 py-2.5 text-sm outline-none transition focus:border-[#82925a] focus:ring-2 focus:ring-[#82925a]/15"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to talk about?"
                  type="text"
                />
              </div>

              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-[#41443b]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="min-h-32 w-full resize-y rounded-xl border border-[#22241f]/15 bg-[#fbfaf7] px-3.5 py-2.5 text-sm outline-none transition focus:border-[#82925a] focus:ring-2 focus:ring-[#82925a]/15"
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={4}
                />
              </div>

              <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
                <button
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[#a5a69e] px-5 py-2.5 text-sm font-medium text-white"
                  disabled
                  type="submit"
                >
                  <Send aria-hidden="true" size={15} />
                  Sending unavailable
                </button>
                <p className="text-xs leading-5 text-[#77786f]" id="form-note">
                  Form delivery isn&apos;t set up yet. Email me directly using
                  the link beside this form.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}