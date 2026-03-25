import React from "react";

export default function Footer({ profile }) {
  return (
    <footer className="border-t-2 border-black bg-[#f2f2f2] swiss-dots">
      <div className="swiss-wrap py-5 flex flex-wrap items-center justify-between gap-4">
        <span className="swiss-label text-black">
          &copy; {new Date().getFullYear()} {profile.name.toUpperCase()}
        </span>
        <span className="swiss-label text-gray-500">
          React&nbsp;·&nbsp;Vite&nbsp;·&nbsp;Tailwind
        </span>
      </div>
    </footer>
  );
}
