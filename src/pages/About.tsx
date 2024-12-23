import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-ocean text-center">
            À propos de FreshFish Check
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>
            FreshFish Check est une application innovante qui utilise
            l'intelligence artificielle pour aider les consommateurs à évaluer la
            fraîcheur des poissons avant l'achat ou la consommation.
          </p>
          <h3 className="text-fresh">Notre Mission</h3>
          <p>
            Notre mission est de permettre à chacun de faire des choix éclairés
            concernant la qualité et la fraîcheur des produits de la mer, en
            utilisant des technologies de pointe accessibles à tous.
          </p>
          <h3 className="text-fresh">Technologie</h3>
          <p>
            Nous utilisons l'API Gemini 2.0 de Google, une technologie d'IA
            avancée capable d'analyser les images avec une grande précision pour
            détecter les signes visuels de fraîcheur du poisson.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default About;