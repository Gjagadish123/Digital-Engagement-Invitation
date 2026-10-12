const paths = {
  music: "M9 18.5V6.2l10-2.2v12.2 M9 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z M19 16.2a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z M9 9.6l10-2.2",
  musicOff: "M9 18.5V9.5 M9 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z M12.5 5.4 19 4v9 M4 4l16 16",
  share: "M12 3v12 M7.5 7.5 12 3l4.5 4.5 M5 12v7.5h14V12",
  calendar: "M4 6.5h16v13.5H4z M4 10.5h16 M8.5 3.5v5 M15.5 3.5v5",
  directions: "M12 2.8 21.2 12 12 21.2 2.8 12z M9 14.5v-3h5 M12.5 9.5l2 2-2 2",
  copy: "M8.5 8.5h11v11h-11z M15.5 8.5v-4h-11v11h4",
  check: "M5 12.5l4.5 4.5L19 7.5",
  left: "M14.5 5.5 8 12l6.5 6.5",
  right: "M9.5 5.5 16 12l-6.5 6.5",
  close: "M6 6l12 12 M18 6 6 18",
  chat: "M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5z",
  plus: "M12 5.5v13 M5.5 12h13",
  minus: "M5.5 12h13",
  down: "M12 4.5v15 M6 13.5l6 6 6-6",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
