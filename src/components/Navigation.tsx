import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
//   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
//   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navArray: { title: string; href: string }[] = [
  { title: "home", href: "#" },
  { title: "create", href: "#" },
  { title: "profile", href: "#" },
];
//["home", "create", "profile"];

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navArray.map(({ title, href }, index: number) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={href}>{title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent >
            <NavigationMenuLink className="w-66 text-right">Link</NavigationMenuLink>
            <NavigationMenuLink className="w-66 text-right">Link</NavigationMenuLink>
            <NavigationMenuLink className="w-66 text-right">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
