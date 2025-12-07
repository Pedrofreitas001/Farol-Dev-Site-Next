import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "./ui/button";

const navLinks = [
    { href: "/", label: "Início" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/quem-somos", label: "Quem Somos" },
];

const Navbar = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => router.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4">
                <div className="relative flex items-center h-16">
                    <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
                        <span className="pointer-events-auto text-2xl md:text-3xl font-bold">Farol Dev.</span>
                    </div>
                </div>
            </div>

            {/* Navigation buttons positioned at the extreme right of the viewport */}
            <div className="absolute right-4 top-0 h-16 flex items-center">
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" asChild>
                        <Link href="/contato">Contato</Link>
                    </Button>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="p-2 text-muted-foreground hover:text-primary"
                        aria-label="Abrir menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="flex flex-col items-center gap-4 mt-16 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="w-full max-w-xs" asChild>
                        <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                            Contato
                        </Link>
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;