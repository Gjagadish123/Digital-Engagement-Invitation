"use client";

import { useState } from "react";
import { venue } from "@/content/invitation";

/** The brief's embedded map, kept off the cloth until a guest asks for it (Google's colours, and its weight). */
export function LiveMap() {
  const [show, setShow] = useState(false);

  return (
    <div className="kframe [--kf:22px]">
      {show ? (
        <iframe
          title={`Map showing ${venue.name}, Duvvada, Visakhapatnam`}
          src={venue.mapEmbed}
          referrerPolicy="no-referrer-when-downgrade"
          className="block aspect-[4/3] w-full border-0 bg-ecru"
        />
      ) : (
        <button type="button" onClick={() => setShow(true)} className="cloth dye-ecru group grid aspect-[4/3] w-full place-items-center px-6 text-center">
          <span className="flex flex-col items-center">
            <svg viewBox="0 0 48 56" className="h-16 w-14 transition-transform group-hover:-translate-y-1" aria-hidden="true">
              <path d="M24 3C14.6 3 7 10.4 7 19.6 7 31.4 24 52 24 52s17-20.6 17-32.4C41 10.4 33.4 3 24 3z" fill="var(--madder)" stroke="var(--ink)" strokeWidth="1.6" />
              <path d="M24 10.5c3.6 4 4.4 9.5 0 15-4.4-5.5-3.6-11 0-15z" fill="var(--ecru)" stroke="var(--ink)" strokeWidth="1.1" />
              <path d="M24 25.5c-3.8-.9-7-4-7.5-8.6 3.4.9 6.1 4 7.5 8.6zM24 25.5c3.8-.9 7-4 7.5-8.6-3.4.9-6.1 4-7.5 8.6z" fill="var(--myro)" stroke="var(--ink)" strokeWidth="1" />
            </svg>
            <span className="mt-4 font-serif text-[1.375rem] font-bold leading-tight text-madder">Show the live map</span>
            <span className="mt-1 text-[1.0625rem]">Google Maps · Duvvada, Visakhapatnam</span>
          </span>
        </button>
      )}
    </div>
  );
}
