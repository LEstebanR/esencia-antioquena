"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 bg-white/95 backdrop-blur-sm p-0 h-full">
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: (index || 0) * 0.1 }}
            className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold"
          >
            Nuevo
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <CardHeader className="px-4 pt-4 pb-2">
          <CardTitle className="text-lg font-bold text-primary line-clamp-2 transition-colors">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-4 pt-0 pb-4">
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="px-4 flex justify-between items-center pt-0 pb-4">
          <motion.div
            className="flex flex-col"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-bold text-primary">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">por 250g</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Comprar
              </motion.span>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
