import { Card } from "./ui/card";
import { Star } from "lucide-react";

export const ProductCard = () => {
  return (
    <Card className="bg-zinc-900 border-gray-800 overflow-hidden">
      <div className="aspect-square">
        <img 
          src="/lovable-uploads/a9438007-d198-40fc-9596-e1e47be76d76.png" 
          alt="Kales" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2">kales</h3>
        <div className="flex gap-1">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </Card>
  );
};