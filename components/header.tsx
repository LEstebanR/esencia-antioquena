"use client";

import { StoreIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Inicio",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Tienda",
    href: "/tienda",
    icon: <StoreIcon />,
  },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-center h-[4rem] fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
      <div className="flex items-center justify-between md:w-10/12 w-full max-w-6xl px-4 md:px-0">
        <p className="text-primary font-bold text-2xl">Esencia Antioqueña</p>
        <div className="flex gap-4">
          {menuItems
            .filter((item) => item.href !== pathname)
            .map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="flex items-center gap-2  hover:text-primary hover:transition-all hover:duration-300"
              >
                {item.icon} {item.label}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
}
