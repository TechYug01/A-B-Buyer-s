"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Find Us", href: "/find-us" },
];

export default function Header() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY < lastScrollY || currentY < 10);
      setScrolled(currentY > 5);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-sm bg-light/70 dark:bg-dark/70 border-b",
        {
          "-translate-y-full": !showHeader,
          "translate-y-0": showHeader,
          "shadow-md": scrolled,
        }
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo-dark.png"
            alt="A&P Buyers Logo"
            className="h-12 w-auto dark:hidden"
          />
          <img
            src="/logo-light.png"
            alt="A&P Buyers Logo"
            className="h-12 w-auto hidden dark:block"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition hover:text-primary",
                pathname === link.href
                  ? "text-primary underline underline-offset-4"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}

          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 cursor-pointer"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          )}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] p-6 font-sans">
              <SheetTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <SheetDescription>
                <VisuallyHidden>
                  This menu allows you to navigate the website
                </VisuallyHidden>
              </SheetDescription>

              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      "text-base font-medium transition hover:text-primary",
                      pathname === link.href
                        ? "text-primary underline underline-offset-4"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}

                <Button asChild className="w-full">
                  <Link href="/book">Book Now</Link>
                </Button>

                {mounted && (
                  <Button
                    variant="outline"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    <div className="flex items-center gap-2">
                      {theme === "light" ? (
                        <Moon size={18} />
                      ) : (
                        <Sun size={18} />
                      )}
                      <span>
                        {theme === "light" ? "Dark Mode" : "Light Mode"}
                      </span>
                    </div>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
