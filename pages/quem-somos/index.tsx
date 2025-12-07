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
            <div className="min-h-screen flex flex-col relative">
                <div className="absolute inset-0 -z-20 bg-opaque-solucoes backdrop-blur-md" />
                <Navbar />

                <main className="flex-1">

                    <div className="w-full h-36 bg-transparent" />

                    <section className="pt-6 pb-12 px-4">
                        <div className="container mx-auto max-w-4xl">
                            <div className="relative p-10 md:p-14 min-h-[360px] md:min-h-[460px] flex flex-col">
                                <div className="absolute inset-0 -z-10 mx-0 my-0 rounded-xl md:rounded-2xl bg-black/30 backdrop-blur-sm" />
                                <div className="card-header mb-3 pb-2 border-b border-white/12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Quem Somos</h2>
                                </div>

                                <div className="card-body mt-0 flex-1 flex items-center justify-center">
                                    <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto text-center">
                                        Somos uma empresa dedicada a criar soluções inovadoras e personalizadas para automatizar processos, reduzir retrabalho e acelerar operações. Nossa missão é transformar desafios em oportunidades, utilizando tecnologia de ponta para entregar resultados excepcionais aos nossos clientes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default QuemSomos;
