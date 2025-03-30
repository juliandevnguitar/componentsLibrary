import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";
import { cn } from "../../../lib/utils";

const componentes = [
  {
    title: "Buttons",
    href: "/components/buttons",
    description: "Different styles of buttons for your application.",
  },
  {
    title: "Cards",
    href: "/components/cards",
    description: "Components of cards to show information.",
  },
  {
    title: "Tables",
    href: "/components/tables",
    description: "Tables to show data.",
  },
];

export function MainNavBar() {
  return (
    <div className="w-full bg-background border-b border-border py-2">
      <div className="container mx-auto flex items-center justify-center">
        <Link to="/" className="text-xl font-bold">Components UI</Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {componentes.map((componente) => (
                    <li key={componente.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={componente.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{componente.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {componente.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
