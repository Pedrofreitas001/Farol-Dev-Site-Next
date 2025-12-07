import { useRouter } from "next/router";
import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from "next-seo";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildCanonical, siteUrl } from "@/lib/seo";

const QuemSomos = () => {
    const router = useRouter();
    const canonical = buildCanonical(router.asPath || "/quem-somos");
    const description =
        "Somos especialistas em automação de processos que combinam diagnóstico preciso, desenvolvimento ágil e acompanhamento próximo para gerar eficiência real em empresas brasileiras.";

    return (
        <>
            <NextSeo
                title="Quem Somos"
                description={description}
                canonical={canonical}
                openGraph={{
                    url: canonical,
                    title: "Quem Somos | Farol Dev.",
                    description,
                    type: "article",
                }}
            />
            <BreadcrumbJsonLd
                itemListElements={[
                    { position: 1, name: "Início", item: siteUrl },
                    { position: 2, name: "Quem Somos", item: canonical },
                ]}
            />
            <ArticleJsonLd
                url={canonical}
                title="Quem Somos | Farol Dev."
                images={[`${siteUrl}/quem_somos.png`]}
                datePublished="2024-01-01"
                dateModified={new Date().toISOString()}
                authorName="Farol Dev."
                publisherName="Farol Dev."
                publisherLogo={`${siteUrl}/logo_2.png`}
                description={description}
            />
            <div className="min-h-screen">
                <Navbar />

                <section className="pt-16 pb-8 px-4 bg-gradient-to-b from-background via-background to-muted/20">
                    <div className="container mx-auto max-w-6xl text-center">
                        <img src="/quem_somos.png" alt="Quem Somos" className="max-w-full max-h-[500px] mx-auto rounded-lg shadow-md" />
                    </div>
                </section>

                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Somos uma empresa dedicada a criar soluções inovadoras e personalizadas para automatizar processos, reduzir retrabalho e acelerar operações. Nossa missão é transformar desafios em oportunidades, utilizando tecnologia de ponta para entregar resultados excepcionais aos nossos clientes.
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default QuemSomos;
