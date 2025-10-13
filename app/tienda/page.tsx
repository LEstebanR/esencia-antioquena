import { ProductCard } from "@/components/product-card";

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

export default function Tienda() {
  return (
    <section className="py-20 px-4 md:px-0 md:w-8/12 w-full mx-auto min-h-[calc(100vh-4rem)]">
      <h2 className="text-2xl text-center text-primary mb-12 font-bold">
        Nuestros Productos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
