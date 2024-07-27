"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-whote/10 py-2">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li
              key={route.path}
              className={pathname === route.path ? "text-white" : ""}
            >
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
