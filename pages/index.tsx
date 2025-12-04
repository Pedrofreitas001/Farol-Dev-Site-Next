import Link from "next/link";
import { useRouter } from "next/router";
import { BreadcrumbJsonLd, FAQPageJsonLd, NextSeo, OrganizationJsonLd } from "next-seo";
import {
    ArrowRight,
    Zap,
    Shield,
    TrendingUp,
    FileText,
    Code,
    Globe,
    Lightbulb,
    Bug,
    CheckCircle,
    Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildCanonical, siteUrl } from "@/lib/seo";

const Index = () => {
    const router = useRouter();
    const canonical = buildCanonical(router.asPath || "/");
    const heroDescription = "Automatizamos processos financeiros e operacionais com soluções em Python, RPA e integrações personalizadas para empresas que precisam reduzir retrabalho e erros manuais.";
    const faqEntries = [
        {
            question: "Quais processos vocês conseguem automatizar?",
            answer:
                "Automatizamos rotinas financeiras, contábeis, fiscais e operacionais utilizando Python, RPA, integrações com APIs e robôs que interagem com planilhas, portais e ERPs.",
        },
        {
            question: "Em quanto tempo uma automação fica pronta?",
            answer:
                "Projetos simples podem ser entregues em poucas semanas após o diagnóstico do processo. Soluções complexas são divididas em sprints com validações contínuas.",
        },
        {
            question: "Vocês oferecem suporte após a entrega?",
            answer:
                "Sim. Incluímos testes, documentação e um período de acompanhamento para ajustes e monitoramento em produção.",
        },
    ];

    return (
        <>
            <NextSeo
                title="Automação Inteligente para Empresas Modernas"
                description={heroDescription}
                canonical={canonical}
                openGraph={{
                    url: canonical,
                    title: "Automação Inteligente para Empresas Modernas | Farol Dev.",
                    description: heroDescription,
                    type: "website",
                    images: [
                        {
                            url: `${siteUrl}/og-cover.png`,
                            width: 1200,
                            height: 630,
                            alt: "Equipe Farol Dev. automatizando processos",
                        },
                    ],
                }}
                additionalMetaTags={[
                    { name: "keywords", content: "automacao processos, RPA Python, integrações ERP, consultoria tecnologia" },
                ]}
            />
            <BreadcrumbJsonLd
                itemListElements={[
                    { position: 1, name: "Início", item: siteUrl },
                ]}
            />
            <OrganizationJsonLd
                type="Organization"
                id={`${siteUrl}#organization`}
                name="Farol Dev."
                url={siteUrl}
                logo={`${siteUrl}/logo_2.png`}
                description={heroDescription}
                sameAs={["https://www.linkedin.com/company/faroldev", "https://www.instagram.com/faroldev"]}
                contactPoint={[
                    {
                        contactType: "sales",
                        telephone: "+55-11-99999-9999",
                        areaServed: "BR",
                        availableLanguage: ["Portuguese", "English"],
                    },
                ]}
            />
            <FAQPageJsonLd
                mainEntity={faqEntries.map((faq) => ({
                    name: faq.question,
                    acceptedAnswer: {
                        text: faq.answer,
                    },
                }))}
            />
            <div className="min-h-screen">
                <Navbar />

                <section className="pt-16 pb-2 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="max-w-6xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <div className="flex flex-col md:flex-row items-start gap-8 text-left">
                                <img
                                    src="/logo_2.png"
                                    alt="Farol Dev. Logo"
                                    className="w-[300px] h-auto md:w-[400px] object-contain md:-ml-28 lg:-ml-36 xl:-ml-44 md:mt-2"
                                />

                                <div className="flex-1 md:pl-16 md:mt-20 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 p-10 rounded-lg md:mr-[-115px] md:w-[calc(100%+100px)]">
                                    <div className="inline-block px-4 py-2 bg-primary/40 rounded-full mb-6">
                                        <span className="text-sm font-medium text-blue-400">Automação Inteligente para Empresas Modernas</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-white">
                                        Automatize processos. Elimine erros manuais.
                                    </h1>
                                    <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                                        Desenvolvemos automações robustas em Python focadas em reduzir retrabalho e acelerar processos operacionais e financeiros.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <Button size="lg" className="gap-2" asChild>
                                            <Link href="/solucoes">
                                                Ver Soluções
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="rounded-full bg-green-100 backdrop-blur-xl border border-green-200 px-4 py-2 text-black hover:bg-green-100/90 transition-all duration-300 ease-in-out"
                                            asChild
                                        >
                                            <Link href="/contato">Fale Conosco</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="h-20 w-full"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, white, white 10px, #a2d2ff 10px, #a2d2ff 20px, #023e8a 20px, #023e8a 30px)",
                        backgroundSize: "200% 200%",
                        marginTop: "-4px",
                    }}
                ></div>

                <section className="pt-20 pb-12 px-4">
                    <div
                        className="relative container mx-auto max-w-8xl rounded-lg bg-gradient-to-br from-blue-800 via-gray-700 to-gray-600 backdrop-blur-md shadow-lg section-container-spacing"
                        style={{ padding: "4rem" }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Por que escolher a Farol Dev.</h2>
                            <p className="text-lg text-white max-w-2xl mx-auto">Cada automação nasce de um diagnóstico preciso da sua rotina</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 pb-4">
                            {[Zap, Shield, TrendingUp].map((Icon, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="p-6 pt-6">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {[
                                                "Redução de Retrabalho",
                                                "Zero Erros Manuais",
                                                "Processos Acelerados",
                                            ][index]}
                                        </h3>
                                        <p className="text-base text-black mt-1 flex-1 flex items-center justify-center font-sans leading-relaxed" style={{ fontFamily: "San Francisco, sans-serif" }}>
                                            {[
                                                "Eliminamos tarefas repetitivas que consomem tempo valioso da sua equipe.",
                                                "Automações testadas e documentadas para garantir precisão total.",
                                                "Transforme horas de trabalho manual em minutos automatizados.",
                                            ][index]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-10 px-6 bg-muted/30">
                    <div
                        className="relative container mx-auto max-w-8xl rounded-lg bg-gradient-to-br from-green-800 via-gray-700 to-gray-600 backdrop-blur-md shadow-lg section-container-spacing"
                        style={{ padding: "1.5rem" }}
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-[2.75rem] font-bold mb-4 text-white">O que podemos automatizar?</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                            {[
                                { icon: Zap, title: "Extração de Dados", description: "PDFs, imagens, contratos, boletos e notas fiscais" },
                                { icon: Shield, title: "Preenchimento Automático", description: "Planilhas, formulários e sistemas internos" },
                                { icon: TrendingUp, title: "Consolidação de Dados", description: "DRE, extratos bancários e conciliações" },
                                { icon: FileText, title: "Importação para ERP", description: "Dados prontos para uso sem intervenção manual" },
                                { icon: Globe, title: "Navegação em Sites", description: "Download de relatórios e validação de informações" },
                                { icon: Code, title: "Integração de APIs", description: "Conecte sistemas e automatize fluxos de dados" },
                            ].map((item) => (
                                <div key={item.title} className="bg-white shadow-md rounded-lg p-6 flex items-center h-48">
                                    <div className="mr-6">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-base text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className="bg-gradient-to-br from-purple-600 via-blue-500 to-blue-400 py-16 flex items-center justify-center text-center max-w-6xl mx-auto rounded-3xl mt-24"
                    style={{ border: "6px solid black", borderRadius: "1.5rem" }}
                >
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-5xl font-bold text-white animate-fade-in">
                            <span className="text-6xl md:text-7xl font-extrabold">120+</span> Empresas Contratantes
                        </h2>
                        <p className="text-lg text-black mt-4">Já confiaram em nossos serviços para transformar seus processos.</p>
                    </div>
                </section>

                <style>
                    {`
                    @keyframes fade-in {
                        0% { opacity: 0; }
                        50% { opacity: 1; }
                        100% { opacity: 1; }
                    }
                    .animate-fade-in {
                        animation: fade-in 2s ease-in-out 1;
                    }

                    @keyframes vibrate-gradient {
                        0%, 100% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                    }

                    .vibrating-gradient {
                        animation: vibrate-gradient 3s ease-in-out infinite;
                        background-size: 200% 200%;
                    }

                    @keyframes floating {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0); }
                    }

                    .floating-icon {
                        animation: floating 3s ease-in-out infinite;
                    }

                    @keyframes continuous-scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    .scrolling-container {
                        overflow: hidden;
                        width: 100%;
                    }

                    .scrolling-icons {
                        display: flex;
                        animation: continuous-scroll 15s linear infinite;
                        width: max-content;
                    }

                    .scrolling-icons img {
                        margin: 0 48px;
                        flex-shrink: 0;
                    }
                `}
                </style>

                <section className="py-32 bg-gray-100">
                    <div
                        className="relative container mx-auto max-w-8xl rounded-lg bg-gray-300/80 backdrop-blur-md shadow-lg section-container-spacing"
                        style={{ padding: "4rem" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Linha do Tempo de Automatização</h2>
                        <div className="relative flex flex-col md:flex-row items-center justify-center" style={{ gap: "12px" }}>
                            <div className="hidden md:block absolute top-1/2 w-full border-t-4 border-blue-200"></div>

                            {[
                                { icon: Lightbulb, title: "Entendimento do processo", description: "Compreender como o processo funciona, quais ferramentas são utilizadas e onde estão os principais gargalos." },
                                { icon: Bug, title: "Mapeamento da dor", description: "Identificação dos pontos críticos que geram retrabalho, atrasos, erros manuais ou perda de eficiência." },
                                { icon: Code, title: "Desenvolvimento", description: "Criação da automação, integração ou solução digital de acordo com as necessidades identificadas." },
                                { icon: CheckCircle, title: "Testes", description: "Validação prática da automação em diferentes cenários para garantir precisão, estabilidade e confiabilidade." },
                                { icon: Users, title: "Entrega e treinamento", description: "Capacitação da equipe para utilizar a solução e suporte contínuo para ajustes e melhorias." },
                            ].map((step) => (
                                <div
                                    key={step.title}
                                    className="relative z-10 bg-gradient-to-br from-purple-600 via-blue-500 to-blue-400 shadow-xl rounded-lg p-6 text-center mb-6 md:mb-0 mx-2 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-2xl"
                                    style={{ width: "240px", height: "360px", flex: "none" }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-base font-semibold mb-1 text-white p-3 rounded-xl self-stretch h-14 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/90 mt-1 flex-1 flex items-center justify-center font-sans leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container mx-auto max-w-6xl text-center mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ferramentas que utilizamos</h2>
                </div>
                <section className="py-8 bg-gray-900 mt-4">
                    <div className="scrolling-container">
                        <div className="scrolling-icons">
                            {["/BI_ICON.png", "/PY_ICON.png", "/SQL_ICON.png", "/JS_icon.png", "/TS_icon.png", "/HTML_icon.png", "/fabric_icon.png", "/lovable_icon.png"].map((src) => (
                                <img key={src} src={src} alt="Ferramenta" className="h-16 w-auto" />
                            ))}
                            {["/BI_ICON.png", "/PY_ICON.png", "/SQL_ICON.png", "/JS_icon.png", "/TS_icon.png", "/HTML_icon.png", "/fabric_icon.png", "/lovable_icon.png"].map((src) => (
                                <img key={`${src}-clone`} src={src} alt="Ferramenta" className="h-16 w-auto" />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                            <CardContent className="p-12 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para automatizar seus processos?</h2>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    A tecnologia resolvendo dores reais. Você cuida da estratégia; a automação cuida do resto.
                                </p>
                                <Button size="lg" className="gap-2" asChild>
                                    <Link href="/contato">
                                        Fale com a gente
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Index;