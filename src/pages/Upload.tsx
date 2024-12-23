import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          variant: "destructive",
          title: "Type de fichier non valide",
          description: "Veuillez sélectionner une image (JPG, PNG, etc.)",
        });
      }
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    try {
      setAnalyzing(true);
      
      const genAI = new GoogleGenerativeAI("AIzaSyD52MnfxmZHNe0gBWTG3Tt3T9W9ca3B8wM");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedImage);
      
      fileReader.onload = async () => {
        const base64Image = fileReader.result as string;
        
        const imageData = {
          inlineData: {
            data: base64Image.split(',')[1],
            mimeType: selectedImage.type
          }
        };

        const prompt = `Analyse cette image de poisson et évalue sa fraîcheur selon ces critères:

1. Texture de la chair (ferme ou molle)
2. État des yeux (bombés et brillants ou plats et ternes)
3. Couleur des branchies (rouge vif ou brune)
4. Aspect de la peau (brillante ou terne)

Donne une note globale:
- EXTRA: Tous les critères sont excellents
- A: Qualité moyenne mais acceptable
- B: Qualité inférieure

Explique en 2-3 phrases simples pourquoi.`;

        const result = await model.generateContent([prompt, imageData]);
        const response = await result.response;
        const text = response.text();

        toast({
          title: "Résultat de l'analyse",
          description: text,
          duration: 10000,
        });
      };
    } catch (error) {
      console.error("Erreur d'analyse:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible d'analyser l'image. Veuillez réessayer.",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-ocean">
            Analysez votre poisson
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-fresh rounded-lg bg-sky/10">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center space-y-4"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Aperçu"
                  className="max-w-full h-auto max-h-64 rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <p className="text-ocean mb-2">
                    Glissez-déposez une image ici ou cliquez pour sélectionner
                  </p>
                  <p className="text-sm text-gray-500">
                    JPG, PNG ou GIF (max. 10MB)
                  </p>
                </div>
              )}
            </label>
          </div>
          {selectedImage && (
            <Button
              className="w-full bg-fresh hover:bg-ocean text-white"
              onClick={analyzeImage}
              disabled={analyzing}
            >
              {analyzing ? "Analyse en cours..." : "Analyser l'image"}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Upload;