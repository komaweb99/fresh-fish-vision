import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-ocean text-center mb-8">
        Questions Fréquentes
      </h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Comment fonctionne l'analyse de fraîcheur ?
            </AccordionTrigger>
            <AccordionContent>
              Notre application utilise l'IA pour analyser plusieurs critères
              visuels comme l'apparence des yeux, la couleur des branchies et
              l'aspect général de la chair du poisson.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Quels types de photos dois-je prendre ?
            </AccordionTrigger>
            <AccordionContent>
              Pour de meilleurs résultats, prenez une photo claire du poisson
              entier sous un bon éclairage. Les yeux et les branchies doivent être
              bien visibles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Les résultats sont-ils fiables à 100% ?
            </AccordionTrigger>
            <AccordionContent>
              Bien que notre technologie soit très avancée, elle doit être
              utilisée comme un outil d'aide à la décision et non comme seul
              critère de jugement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
};

export default FAQ;