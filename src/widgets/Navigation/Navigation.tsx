import { cn } from "@/shared/lib/utils";
import { BotMessageSquare, File, Home, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAdmin = true;
  const items = [
    {
      link: "/",
      text: "Главная",
      alias: ["/profile"],
      icon: <Home strokeWidth={1} />,
    },
    {
      link: "/bot",
      alias: [""],
      text: "Бот",
      icon: <BotMessageSquare strokeWidth={1} />,
    },
    {
      link: "/reports",
      alias: [],
      text: "Отчёты",
      icon: <File strokeWidth={1} />,
    },
  ];
  if (isAdmin) {
    items.push({
      link: "/admin",
      text: "Админ",
      alias: [],
      icon: <Shield strokeWidth={1} />,
    });
  }
  return (
    <nav className="fixed py-3 bg-bg z-[2] bottom-0 left-0 w-full px-6 flex-row flex items-center justify-between">
      {items.map((item, index) => {
        const isActive =
          location.pathname === item.link ||
          item.alias.includes(location.pathname);

        return (
          <Link
            to={isActive ? "" : item.link}
            key={index}
            className={cn(
              "flex flex-col gap-xs items-center text-[12px] text-subtitletext w-[50px]",
              isActive && "text-link pointer-events-none"
            )}
          >
            {item.icon}
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
