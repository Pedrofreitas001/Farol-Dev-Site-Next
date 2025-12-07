import type { DefaultSeoProps } from "next-seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.faroldev.com.br";

const config: DefaultSeoProps = {
    titleTemplate: "%s | Farol Dev.",
    defaultTitle: "Farol Dev. | Automação Inteligente",
    description:
        "Automatizamos processos financeiros e operacionais com soluções em Python, RPA e integrações personalizadas para empresas que precisam de eficiência.",
    canonical: siteUrl,
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: siteUrl,
        siteName: "Farol Dev.",
        title: "Farol Dev. | Automação Inteligente",
        description:
            "Automações sob medida para eliminar retrabalho, reduzir erros manuais e acelerar operações financeiras.",
        images: [
            {
                url: `${siteUrl}/og-cover.png`,
                width: 1200,
                height: 630,
                alt: "Farol Dev. Automação Inteligente",
            },
        ],
    },
    twitter: {
        handle: "@faroldev",
        site: "@faroldev",
        cardType: "summary_large_image",
    },
    additionalMetaTags: [
        { name: "theme-color", content: "#1d4ed8" },
        { name: "author", content: "Farol Dev." },
    ],
    additionalLinkTags: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/site.webmanifest" },
    ],
};

export default config;
