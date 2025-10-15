"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Coffee, Award, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const isHistoryInView = useInView(historyRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

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
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-center md:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl w-32 h-32 flex items-center justify-center shadow-2xl border-2 border-primary/20"
                >
                  <p className="text-primary font-bold text-sm text-center px-2">
                    Logo Esencia Antioqueña
                  </p>
                </motion.div>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold text-white leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-primary"
                  >
                    Esencia
                  </motion.span>{" "}
                  Antioqueña
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-lg"
                >
                  Somos una empresa dedicada a la producción y comercialización
                  de productos de café y otros derivados.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex justify-center md:justify-start"
              >
                <Link href="/tienda">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary/25 group transition-all duration-300"
                    >
                      Descubre nuestro café
                      <ArrowRightIcon className="ml-2 size-5 group-hover:translate-x-2 transition-all duration-300" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden md:block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <Image
                  src="/cafe.jpg"
                  alt="Esencia Antioqueña"
                  width={500}
                  height={600}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-primary/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <p className="text-primary font-semibold text-center">
                    Café 100% Antioqueño
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        ref={historyRef}
        className="py-24 bg-gradient-to-br from-background to-muted/30 px-4 md:px-0"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenido de texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isHistoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={
                    isHistoryInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
                >
                  <Coffee className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isHistoryInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-primary leading-tight"
                >
                  Nuestra Historia
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isHistoryInView ? { width: 80 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1 bg-primary rounded-full"
                ></motion.div>
              </div>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isHistoryInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Hace 27 años, en las montañas de Santa Bárbara, en la Finca El
                  Kinder, Luis Alonso y Luz Ángela sembraron más que café:
                  sembraron un sueño.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isHistoryInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Con amor, constancia y el legado de Don Emilio y Doña
                  Virgelina, hoy ese sueño florece en una taza con nombre
                  propio:
                  <span className="text-primary font-semibold">
                    {" "}
                    &quot;Esencia Antioqueña&quot;
                  </span>
                  , el reflejo del esfuerzo y la tradición de una familia
                  cafetera.
                </motion.p>
              </div>
            </motion.div>

            {/* Elemento visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isHistoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 h-80 flex items-center justify-center"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isHistoryInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-6xl font-bold text-primary/20"
                  >
                    27
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isHistoryInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-lg font-semibold text-primary"
                  >
                    Años de Tradición
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isHistoryInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-sm text-muted-foreground"
                  >
                    Finca El Kinder, Santa Bárbara
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isHistoryInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isHistoryInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        ref={valuesRef}
        className="py-24 bg-gradient-to-br from-muted/30 to-background px-4 md:px-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={
                isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Nuestros Valores
            </motion.h3>
            <motion.div
              initial={{ width: 0 }}
              animate={isValuesInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary rounded-full mx-auto mb-8"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isValuesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Los principios que guían cada grano de café que producimos
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center"
                >
                  <Award className="w-8 h-8 text-primary" />
                </motion.div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center"
                >
                  <Users className="w-8 h-8 text-primary" />
                </motion.div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center"
                >
                  <Zap className="w-8 h-8 text-primary" />
                </motion.div>
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
