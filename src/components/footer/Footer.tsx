import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Home, User, LogOut } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkStyle = (path: string) => `
		${navigationMenuTriggerStyle()}
		flex flex-col items-center text-xs transition-all duration-300"
		${
			currentPath === path
				? "text-white scale-110 -translate-y-1"
				: "text-white/70"
		}
  `;

  return (
    <>
      <footer className="fixed bottom-0 w-full bg-violet-500 z-50 py-2 shadow-md">
        <NavigationMenu className="flex flex-col justify-around items-center w-full">
          <NavigationMenuList className="flex justify-around items-center w-full px-4">
            <NavigationMenuItem>
              <Link to="/Home">
                <NavigationMenuLink className={linkStyle("/Home")}>
                  <Home className="w-4 h-4" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/Perfil">
                <NavigationMenuLink className={linkStyle("/Perfil")}>
                  <User className="w-4 h-4" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/Login">
                <NavigationMenuLink className={linkStyle("/Login")}>
                  <LogOut className="w-4 h-4" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    </>
  );
};

export default Footer;
