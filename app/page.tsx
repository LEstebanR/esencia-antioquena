import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen md:h-[calc(100vh-4rem)] overflow-hidden gap-4 px-4 md:px-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/paisaje.avif)",
            filter: "blur(2px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative md:w-8/12 w-full flex justify-between flex-col md:flex-row py-16">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex items-center justify-center bg-white rounded-md w-28 h-28 text-center p-2">
              <p>Logo Esencia Antioqueña</p>
            </div>
            <h2 className="text-4xl font-bold text-primary">
              Esencia Antioqueña
            </h2>
            <p className="text-white text-xl">
              Somos una empresa dedicada a la producción y comercialización de
              productos de café y otros derivados.
            </p>
            <Link href="/tienda">
              <Button size="lg" className="w-fit hover:bg-primary/90 group">
                Descubre nuestro café
                <ArrowRightIcon className="size-4 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
            </Link>
          </div>
          <Image
            src="/cafe.jpg"
            alt="Esencia Antioqueña"
            width={300}
            height={300}
            className="md:w-1/2 h-full object-cover rounded-md hidden md:block shadow-lg border-2 border-primary/40"
          />
        </div>
      </section>
      <section className="py-24 bg-white px-4 md:px-0">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block p-2 bg-gray-200 rounded-xl mb-6">
              <Coffee className="w-8 h-8 text-primary" />{" "}
            </div>
            <h2 className="text-3xl text-primary mb-6 tracking-tight font-bold">
              Nuestra Historia
            </h2>
            <div className="space-y-5 leading-relaxed text-gray-700 text-justify">
              <p>
                Hace 27 años, en las montañas de Santa Bárbara, en la Finca El
                Kinder, Luis Alonso y Luz Ángela sembraron más que café:
                sembraron un sueño. Con amor, constancia y el legado de Don
                Emilio y Doña Virgelina, hoy ese sueño florece en una taza con
                nombre propio: “Esencia Antioqueña”, el reflejo del esfuerzo y
                la tradición de una familia cafetera.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20  px-4 md:px-0">
        <div className="md:w-8/12 w-full mx-auto">
          <h3 className="text-3xl text-center text-primary mb-12 font-bold">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-coffee-accent/40 shadow-coffee-accent/30">
              <h4 className="text-lg font-bold mb-3">Calidad Premium</h4>
              <p className="text-gray-600 text-sm">
                Seleccionamos los mejores granos de café para ofrecerte una
                experiencia única.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-coffee-accent/40 shadow-coffee-accent/30">
              <h4 className="text-lg font-bold mb-3">Tradición Familiar</h4>
              <p className="text-gray-600 text-sm">
                Recetas transmitidas de generación en generación para mantener
                el auténtico sabor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-coffee-accent/40 shadow-coffee-accent/30">
              <h4 className="text-lg font-bold mb-3">Tostado Artesanal</h4>
              <p className="text-gray-600 text-sm">
                Cada lote es tostado con dedicación para resaltar sus mejores
                cualidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
