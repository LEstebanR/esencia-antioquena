"use client";

import { StoreIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-center h-[4rem] fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10"
    >
      <div className="flex items-center justify-between md:w-10/12 w-full max-w-6xl px-4 md:px-0">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-bold text-2xl"
        >
          Esencia Antioqueña
        </motion.p>
        <div className="flex gap-4">
          {menuItems
            .filter((item) => item.href !== pathname)
            .map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-primary hover:transition-all hover:duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.div>
                  {item.label}
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.header>
  );
}
