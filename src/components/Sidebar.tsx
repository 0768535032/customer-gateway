import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const menuItems = [
  { label: "Dashboard" },
  { label: "My Assets" },
  { label: "My Orders" },
  { label: "Recent Views" },
  { label: "Message" },
  { label: "Chats with sellers" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 flex flex-col">
      <div className="mb-8 flex flex-col items-center">
        <Avatar className="h-16 w-16 mb-4"> {/* Adjusted size */}
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
            className="px-4 py-3 text-gray-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors block"
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};