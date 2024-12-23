import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
              onClick={() => {
                toast({
                  title: "Fonctionnalité en développement",
                  description:
                    "L'analyse d'image sera bientôt disponible avec l'API Gemini.",
                });
              }}
            >
              Analyser l'image
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Upload;