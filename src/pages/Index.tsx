import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean to-fresh">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FreshFish Check
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-accent">
            Vérifiez la fraîcheur de votre poisson en un instant
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Grâce à l'intelligence artificielle, analysez la qualité de votre
            poisson à partir d'une simple photo. Obtenez des résultats précis et
            fiables en quelques secondes.
          </p>
          <Link
            to="/upload"
            className="bg-accent text-ocean font-bold py-4 px-8 rounded-lg text-lg hover:bg-sky transition-colors inline-block"
          >
            Commencer l'analyse
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-accent mb-4">
              Analyse instantanée
            </h3>
            <p className="text-white">
              Téléchargez une photo et obtenez les résultats en quelques secondes
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-accent mb-4">
              IA de pointe
            </h3>
            <p className="text-white">
              Utilisation de Gemini 2.0 pour une analyse précise et fiable
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-accent mb-4">
              Résultats clairs
            </h3>
            <p className="text-white">
              Obtenez une évaluation simple et compréhensible de la fraîcheur
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;