import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 bg-white/95 backdrop-blur-sm p-0">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
          Nuevo
        </div>
      </div>

      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-lg font-bold text-primary line-clamp-2 group-hover:text-primary/80 transition-colors">
          {product.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4 pt-0 pb-4">
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="px-4 flex justify-between items-center pt-0 pb-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground">por 250g</span>
        </div>
        <Button className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
            Comprar
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
