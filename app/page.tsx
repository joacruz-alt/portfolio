import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#22241f]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-[#22241f]/10 py-6">
          <a
            aria-label="Joji Allan, home"
            className="text-lg font-semibold tracking-[-0.06em]"
            href="#home"
          >
            joji allan<span className="text-[#8d9a64]">.</span>
          </a>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-2 text-xs sm:gap-8 sm:text-sm"
          >
            <a className="transition-colors hover:text-[#81905a]" href="#home">
              Home
            </a>
            <Link className="transition-colors hover:text-[#81905a]" href="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/contact">
              Contact
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/education">
              Education
            </Link>
            <Link className="transition-colors hover:text-[#81905a]" href="/hobbies">
              Hobbies
            </Link>
          </nav>
        </header>

        <section
          aria-labelledby="intro-title"
          className="grid items-center gap-8 py-12 sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20"
          id="home"
        >
          <div className="order-2 flex flex-col items-center justify-center px-2 py-10 text-center sm:px-4 lg:order-1 lg:px-0">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-[#82925a] sm:mb-7 sm:text-xs">
              HELLO, I AM
            </p>
            <h1
              className="whitespace-nowrap font-serif text-[clamp(3.75rem,10vw,8rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#174c3e]"
              id="intro-title"
            >
              <span className="relative inline-block">
                Joji Allan
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-1 right-2 -z-10 h-[0.16em] -rotate-2 rounded-full bg-[#edcc70] sm:-bottom-3"
                />
              </span>
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#66675f] sm:mt-8 sm:text-base sm:leading-8">
              A creative soul with a curious mind, always learning, exploring,
              and finding inspiration in the little things.
            </p>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[470px] lg:order-2">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-[#e5e3d7]" />
            <Image
              alt="Joji Allan standing in a hallway"
              className="relative aspect-[0.78] w-full rounded-[1.75rem] object-cover object-[center_38%]"
              height={1024}
              priority
              src="/joji-allan-arcade.png"
              width={768}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
