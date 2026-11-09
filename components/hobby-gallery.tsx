"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const hobbies = [
  {
    name: "Music & Guitar",
    description:
      "Playing guitar and enjoying music are among the things I love most.",
    image: "/music-guitar-hobby.png",
  },
  {
    name: "Playing the Flute",
    description:
      "The flute is another instrument I enjoy playing and improving at.",
    image: "/flute-hobby.png",
  },
  {
    name: "Band Performance",
    description:
      "Performing with the DLC and DXMC bands has been a big part of my life.",
    image: "/band-performance-hobby.png",
  },
  {
    name: "Band Training",
    description:
      "I enjoy sharing what I know and helping fellow band members grow.",
    image: "/band-training-hobby.png",
  },
  {
    name: "Making Music Together",
    description:
      "Being part of a band lets me learn, collaborate, and make music with others.",
    image: "/making-music-together.png",
  },
  {
    name: "Learning New Things",
    description:
      "I like discovering new interests and finding ways to keep growing.",
    image: "/learning-new-things.png",
  },
];

export default function HobbyGallery() {
  const [selectedHobby, setSelectedHobby] = useState<
    (typeof hobbies)[number] | null
  >(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedHobby && !dialog.open) {
      dialog.showModal();
    } else if (!selectedHobby && dialog.open) {
      dialog.close();
    }
  }, [selectedHobby]);

  return (
    <>
      <section
        aria-label="Hobbies and interests"
        className="mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {hobbies.map((hobby) => {
          const { name, description, image } = hobby;

          return (
            <button
              aria-haspopup="dialog"
              aria-label={`${name}. ${description} View larger`}
              className="group w-full rounded-[1.35rem] border border-[#22241f]/10 bg-white p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-[#82925a]/40 hover:shadow-[0_14px_36px_rgba(34,36,31,0.07)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82925a] sm:p-6"
              key={name}
              onClick={() => setSelectedHobby(hobby)}
              type="button"
            >
              <span className="mb-5 flex items-center gap-3">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-11 w-11 shrink-0 rounded-2xl object-cover"
                  height={44}
                  src={image}
                  width={44}
                />
                <span className="text-base font-semibold tracking-[-0.03em] text-[#174c3e]">
                  {name}
                </span>
              </span>
              <span className="block text-sm leading-6 text-[#707168]">
                {description}
              </span>
            </button>
          );
        })}
      </section>

      <dialog
        aria-labelledby="hobby-dialog-title"
        className="m-auto w-[calc(100%-2rem)] max-w-3xl overflow-visible rounded-[1.75rem] bg-transparent p-0 text-[#22241f] shadow-2xl backdrop:bg-[#10130f]/70 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setSelectedHobby(null);
          }
        }}
        onClose={() => setSelectedHobby(null)}
        ref={dialogRef}
      >
        {selectedHobby && (
          <div className="overflow-hidden rounded-[1.75rem] bg-[#f7f6f2]">
            <div className="relative flex h-[min(60vh,600px)] min-h-64 items-center justify-center bg-[#e9ece3]">
              <Image
                alt={selectedHobby.name}
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                src={selectedHobby.image}
              />
              <button
                autoFocus
                aria-label="Close enlarged hobby"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f6f2]/95 text-[#174c3e] shadow transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#82925a]"
                onClick={() => setSelectedHobby(null)}
                type="button"
              >
                <X aria-hidden="true" size={21} />
              </button>
            </div>
            <div className="px-6 py-5 sm:px-8 sm:py-6">
              <h2
                className="font-serif text-2xl font-bold tracking-[-0.05em] text-[#174c3e] sm:text-3xl"
                id="hobby-dialog-title"
              >
                {selectedHobby.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#707168] sm:text-base">
                {selectedHobby.description}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
