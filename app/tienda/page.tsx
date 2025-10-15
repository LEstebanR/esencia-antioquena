"use client";

import { ProductCard } from "@/components/product-card";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Café Esencia Antioqueña",
    description: "Café en grano o molido, con su tostado artesanal - 250g",
    price: 30000,
    image: "/cafe-empaque.avif",
  },
  {
    id: 2,
    name: "Café Esencia Antioqueña",
    description: "Café en grano o molido, con su tostado artesanal - 250g",
    price: 30000,
    image: "/cafe-empaque.avif",
  },
  {
    id: 3,
    name: "Café Esencia Antioqueña",
    description: "Café en grano o molido, con su tostado artesanal - 250g",
    price: 30000,
    image: "/cafe-empaque.avif",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Tienda() {
  return (
    <section className="my-[6rem] px-4 md:px-0 md:w-8/12 w-full mx-auto min-h-[calc(100vh-4rem)]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center text-primary mb-12 font-bold"
      >
        Nuestros Productos
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {products.map((product, index) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
