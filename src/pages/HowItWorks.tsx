import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-ocean text-center mb-8">
        Comment ça marche ?
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-fresh">1. Prenez une photo</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Prenez une photo claire de votre poisson entier, en vous assurant que
              les yeux et les branchies sont bien visibles.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-fresh">2. Téléchargez l'image</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Utilisez notre interface simple pour télécharger votre photo. Le
              système accepte les formats JPG, PNG et GIF.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-fresh">3. Obtenez les résultats</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Notre IA analysera votre image et vous fournira une évaluation
              détaillée de la fraîcheur du poisson en quelques secondes.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default HowItWorks;