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
    <Card className="shadow-lg border-2 border-primary/40 shadow-primary/30 p-2 py-4 ">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="w-full object-cover rounded-md mb-2"
        />
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>$ {product.price.toLocaleString()}</p>
        <Button>Comprar</Button>
      </CardFooter>
    </Card>
  );
}
