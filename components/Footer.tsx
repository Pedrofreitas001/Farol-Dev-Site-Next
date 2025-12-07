const Footer = () => {
    return (
        <footer className="bg-white text-black py-2 border-t border-gray-200 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm font-medium">
                Farol dev.
            </div>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <p className="text-xs text-black/60">© {new Date().getFullYear()} Farol Dev. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;