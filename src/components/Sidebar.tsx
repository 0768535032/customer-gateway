import { Home, CircleDollarSign, ShoppingBag, Eye, MessageCircle, MessagesSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: CircleDollarSign, label: "My Assets" },
  { icon: ShoppingBag, label: "My Orders" },
  { icon: Eye, label: "Recent Views" },
  { icon: MessageCircle, label: "Message" },
  { icon: MessagesSquare, label: "Chats with sellers" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 flex flex-col">
      <div className="mb-8 flex flex-col items-center">
        <Avatar className="h-20 w-20 mb-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>OS</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold">ossy</h2>
      </div>

      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};