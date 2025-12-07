import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BreadcrumbJsonLd, FAQPageJsonLd, NextSeo, OrganizationJsonLd } from "next-seo";
import {
    ArrowRight,
    Zap,
    Shield,
    TrendingUp,
    FileText,
    ClipboardList,
    MailCheck,
    Layers,
    Folders,
    BellRing,
    LayoutDashboard,
    Code,
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
    const heroMessages = ["Automatize processos.", "Elimine erros manuais."];
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroMessages.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);


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
    const automationServices = [
        {
            title: "Envio Automático de Relatórios",
            icon: FileText,
            front: "Automatizamos a geração e envio de relatórios a partir de planilhas e bases de dados.",
            back: [
                "Leitura e tratamento de planilhas",
                "Criação de relatórios PDF/Excel",
                "Estilização padronizada",
                "Envio automático",
            ],
        },
        {
            title: "Preenchimento de Sistemas e Planilhas",
            icon: ClipboardList,
            front: "Automatização de tarefas repetitivas de digitação e alimentação de dados.",
            back: [
                "Extrair dados de planilhas",
                "Preencher formulários web ou desktop",
                "Validar e cruzar informações",
                "Relatório pós-processamento",
            ],
        },
        {
            title: "Geração de Documentos Padronizados em Lote",
            icon: Layers,
            front: "Criação de certificados, relatórios e contratos em massa com identidade visual.",
            back: [
                "Inserção dinâmica de campos",
                "Padronização visual",
                "Exportação em lote",
                "Distribuição e arquivamento",
            ],
        },
        {
            title: "Organização e Estruturação de Arquivos",
            icon: Folders,
            front: "Automatizamos a gestão de ambientes desorganizados com alto volume de arquivos.",
            back: [
                "Renomear em lote",
                "Criar pastas automaticamente",
                "Remover duplicidades",
                "Padronizar nomenclaturas",
            ],
        },
        {
            title: "Alertas Personalizados WhatsApp, Telegram e e-mail",
            icon: BellRing,
            front: "Sistema de alertas que notifica responsáveis a partir de gatilhos.",
            back: [
                "Monitoramento contínuo",
                "Notificação imediata",
                "Integração mensageira",
                "Logs de auditoria",
            ],
        },
        {
            title: "Criação de Interfaces e Aplicações Web",
            icon: LayoutDashboard,
            front: "Desenvolvimento rápido de aplicativos internos para demandas específicas.",
            back: [
                "Formulários web",
                "Dashboards",
                "Conexão com planilhas ou bancos de dados",
                "Controle de acesso",
            ],
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

                <section className="pt-20 pb-56 px-4 bg-white">
                    <div className="container mx-auto max-w-[1800px] px-2">
                        <div className="w-full max-w-screen-xl mx-auto mb-12 px-2">
                            <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-8 xl:gap-16 text-left">
                                <img
                                    src="/logo_2.png"
                                    alt="Farol Dev. Logo"
                                    className="w-[355px] h-auto md:w-[440px] object-contain md:-ml-6 lg:-ml-10 xl:-ml-12 md:mt-2"
                                />

                                <div className="flex flex-col h-full flex-1 md:pl-10 md:mt-8 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 pt-14 pb-20 px-6 rounded-lg md:mr-0 md:w-full lg:w-full xl:w-full 2xl:w-full">
                                    <div className="inline-block w-fit mt-0 px-2 py-1 bg-primary/40 rounded-full mb-4">
                                        <span className="text-sm font-medium text-blue-400">Automação Inteligente para Empresas Modernas</span>
                                    </div>
                                    {/* Título animado mais alto, mas com espaçamento próprio */}
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-white relative">
                                        {heroMessages.map((message, index) => (
                                            <span
                                                key={index}
                                                className={`absolute top-0 left-0 transition-opacity duration-1000 ${heroIndex === index ? "opacity-100" : "opacity-0"}`}
                                            >
                                                {message}
                                            </span>
                                        ))}
                                    </h1>
                                    {/* Subtexto mais abaixo do título, com espaçamento independente */}
                                    <p className="text-lg md:text-xl text-white leading-relaxed mt-24 mb-4">
                                        Desenvolvemos automações robustas em Python focadas em reduzir retrabalho e acelerar processos operacionais e financeiros.
                                    </p>
                                    {/* Botões ainda mais abaixo, com espaçamento maior que o subtexto */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-20">
                                        <Link href="/solucoes">
                                            <Button size="lg" className="gap-2">
                                                Ver Soluções
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                        <Link href="/contato">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="rounded-full bg-green-100 backdrop-blur-xl border border-green-200 px-4 py-2 text-black hover:bg-green-100/90 transition-all duration-300 ease-in-out"
                                            >
                                                Fale Conosco
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Botão animado para scroll */}
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => {
                                const target = document.getElementById('porque-farol-dev');
                                if (target) {
                                    const header = document.querySelector('header');
                                    const headerHeight = header ? header.offsetHeight : 80;
                                    const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            className="animate-bounce bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
                            aria-label="Ir para próxima sessão"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </section>

                <section className="section-reveal pt-0 pb-0 px-0">
                    <div
                        className="w-full backdrop-blur-md shadow-lg"
                        style={{
                            background: "linear-gradient(180deg, #071833 0%, #0c1f3f 18%, #123558 36%, #17606a 54%, #1e8a68 72%, #27a773 88%, #2f9f7c 100%)",
                        }}
                    >
                        <div className="container mx-auto max-w-7xl px-6 py-12 block">
                            <div id="porque-farol-dev" className="text-center mb-12">
                                <h2 className="text-4xl md:text-[2.75rem] font-bold mb-4 text-white">Por que escolher a Farol Dev.</h2>
                                <p className="text-lg text-white/90 max-w-2xl mx-auto">Cada automação nasce de um diagnóstico preciso da sua rotina</p>
                            </div>

                            <div className="why-cards flex flex-col md:flex-row gap-8 md:gap-10 mt-4 md:mt-24">
                                {[Zap, Shield, TrendingUp].map((Icon, index) => (
                                    <div key={index} className="why-card text-center flex-1">
                                        <div className="why-card__accent"></div>
                                        <div className="why-card__icon">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="why-card__title">
                                            {[
                                                "Redução de Retrabalho",
                                                "Zero Erros Manuais",
                                                "Processos Acelerados",
                                            ][index]}
                                        </h3>
                                        <p className="text-[1.05rem] text-white/80 leading-relaxed font-light" style={{ fontFamily: "San Francisco, sans-serif" }}>
                                            {[
                                                "Eliminamos tarefas repetitivas que consomem tempo valioso da sua equipe.",
                                                "Automações testadas e documentadas para garantir precisão total.",
                                                "Transforme horas de trabalho manual em minutos automatizados.",
                                            ][index]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="container mx-auto max-w-7xl px-6 py-12">
                            <div className="text-center mb-12 -mt-6 md:-mt-8">
                                <h2 className="text-4xl md:text-[2.75rem] font-bold mb-4 text-white">O que podemos automatizar?</h2>
                                <p className="text-lg text-white/90 max-w-2xl mx-auto">Automatizações sob medida que liberam sua equipe para o que importa, enquanto garantem produtividade e consistência.</p>
                            </div>

                            <div className="automation-grid pb-4">
                                {automationServices.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <div key={service.title} className="automation-tile">
                                            <div className="automation-tile__shape" aria-hidden="true"></div>
                                            <div className="automation-tile__icon">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="automation-tile__title">{service.title}</h3>
                                            <p className="automation-tile__description">{service.front}</p>
                                            <ul className="automation-tile__list">
                                                {service.back.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="section-reveal bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 py-10 flex items-center justify-center text-center w-full mt-12"
                >
                    <div className="container mx-auto max-w-4xl px-6">
                        <h2 className="text-5xl font-bold text-white animate-fade-in">
                            <span className="text-6xl md:text-7xl font-extrabold">120+</span> Empresas Contratantes
                        </h2>
                        <p className="text-lg text-black mt-4">Já confiaram em nossos serviços para transformar seus processos.</p>
                    </div>
                </section>

                <section className="section-reveal py-8 bg-gray-100">
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

                <div className="section-reveal container mx-auto max-w-6xl text-center mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ferramentas que utilizamos</h2>
                </div>
                <section className="section-reveal py-8 bg-gray-900 mt-4">
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

                <section className="section-reveal py-20 px-4">
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