import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Coffee, Award, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen md:h-[calc(100vh-4rem)] overflow-hidden px-4 md:px-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/paisaje.avif)",
            filter: "blur(2px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

        <div className="relative md:w-10/12 w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            {/* Contenido principal */}
            <div className="space-y-8 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl w-32 h-32 flex items-center justify-center shadow-2xl border-2 border-primary/20 group hover:scale-105 transition-transform duration-300">
                  <p className="text-primary font-bold text-sm text-center px-2">
                    Logo Esencia Antioqueña
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  <span className="text-primary">Esencia</span> Antioqueña
                </h1>
                <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-lg">
                  Somos una empresa dedicada a la producción y comercialización
                  de productos de café y otros derivados.
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <Link href="/tienda">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 group transition-all duration-300 hover:scale-105"
                  >
                    Descubre nuestro café
                    <ArrowRightIcon className="ml-2 size-5 group-hover:translate-x-2 transition-all duration-300" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative hidden md:block">
              <div className="relative group">
                <Image
                  src="/cafe.jpg"
                  alt="Esencia Antioqueña"
                  width={500}
                  height={600}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-primary/30 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-primary font-semibold text-center">
                    Café 100% Antioqueño
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-background to-muted/30 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenido de texto */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Nuestra Historia
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hace 27 años, en las montañas de Santa Bárbara, en la Finca El
                  Kinder, Luis Alonso y Luz Ángela sembraron más que café:
                  sembraron un sueño.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Con amor, constancia y el legado de Don Emilio y Doña
                  Virgelina, hoy ese sueño florece en una taza con nombre
                  propio:
                  <span className="text-primary font-semibold">
                    {" "}
                    &quot;Esencia Antioqueña&quot;
                  </span>
                  , el reflejo del esfuerzo y la tradición de una familia
                  cafetera.
                </p>
              </div>
            </div>

            {/* Elemento visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary/20">27</div>
                  <div className="text-lg font-semibold text-primary">
                    Años de Tradición
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Finca El Kinder, Santa Bárbara
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestros Valores
            </h3>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada grano de café que producimos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Calidad Premium
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Seleccionamos los mejores granos de café para ofrecerte una
                    experiencia única en cada taza.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Tradición Familiar
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Recetas transmitidas de generación en generación para
                    mantener el auténtico sabor de siempre.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Tostado Artesanal
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada lote es tostado con dedicación para resaltar sus
                    mejores cualidades y aromas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
