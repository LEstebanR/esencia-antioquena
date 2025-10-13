"use client";

import { MenuIcon, StoreIcon, HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
    <header className="w-full flex items-center justify-center h-[4rem] fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between md:w-8/12 w-full px-4 md:px-0">
        <p className="text-primary font-bold text-2xl">Esencia Antioqueña</p>
        <div className="hidden md:flex gap-4">
          {menuItems
            .filter((item) => item.href !== pathname)
            .map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="flex items-center gap-2"
              >
                {item.icon} {item.label}
              </Link>
            ))}
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen left-0 right-0 rounded-none border-x-0 border-t-0">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 w-full"
                  >
                    {item.icon} {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
