import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Truck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/a9438007-d198-40fc-9596-e1e47be76d76.png" 
              alt="Witz Africa Logo" 
              className="h-12"
            />
          </div>
          <div className="flex-1 mx-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="I'm looking for..." 
                className="w-full pl-10 bg-white text-gray-900 border-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs px-2">25</span>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1">
            {/* Track Icon and Text outside the card */}
            <div className="flex flex-col items-end mb-4">
              <Truck className="h-8 w-8" />
              <h2 className="text-xl font-semibold mt-2">Track Your Order</h2>
            </div>

            <Card className="bg-zinc-900 border-gray-800 relative">
              <div className="p-6">
                <Tabs defaultValue="to_be_delivered">
                  <TabsList className="w-full justify-start border-b border-gray-800 bg-transparent">
                    <TabsTrigger value="to_be_delivered">To be delivered</TabsTrigger>
                    <TabsTrigger value="delivered">Delivered</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                  </TabsList>
                  <TabsContent value="to_be_delivered">
                    <div className="mt-4">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-400">
                            <th className="pb-4">Product</th>
                            <th className="pb-4">Order amount</th>
                            <th className="pb-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Add order items here */}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>

            {/* Recommendations Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">You May also like</h3>
              <Card className="p-6 bg-zinc-900 border-gray-800">
                <div className="grid grid-cols-5 gap-4">
                  {Array(10).fill(0).map((_, i) => (
                    <ProductCard key={i} />
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">SHOW MORE</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;