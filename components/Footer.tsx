const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-lg px-3 py-2">
                            <img src="/logo.png" alt="Farol Dev. Logo" className="h-10 w-auto" />
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Farol Dev. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;