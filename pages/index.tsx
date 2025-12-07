import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
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
import Image from "next/image";

const Index = () => {
    const router = useRouter();
    const canonical = buildCanonical(router.asPath || "/");
    const heroDescription = "Automatizamos processos financeiros e operacionais com soluções em Python, RPA e integrações personalizadas para empresas que precisam reduzir retrabalho e erros manuais.";
    const heroMessages = ["Automatize processos.", "Elimine erros manuais."];
    const [heroIndex, setHeroIndex] = useState(0);

    // Refs and state to size/position the left black container (box2)
    const box1Ref = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [box1Metrics, setBox1Metrics] = useState({ top: 0, height: 0, left: 0, imageLeft: 0 });
    const imageRef = useRef<HTMLImageElement | HTMLDivElement | null>(null);

    useEffect(() => {
        const updateMetrics = () => {
            if (!box1Ref.current || !sectionRef.current) return;
            const boxRect = box1Ref.current.getBoundingClientRect();
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const left = Math.max(0, boxRect.left - sectionRect.left);
            let imageLeft = 0;
            if (imageRef.current) {
                const imgRect = (imageRef.current as Element).getBoundingClientRect();
                imageLeft = Math.max(0, imgRect.left - sectionRect.left);
            }
            setBox1Metrics({ top: Math.max(0, boxRect.top - sectionRect.top), height: boxRect.height, left, imageLeft });
        };

        // Initial calculation and on resize
        updateMetrics();
        window.addEventListener("resize", updateMetrics);
        const ro = new ResizeObserver(updateMetrics);
        if (box1Ref.current) ro.observe(box1Ref.current);

        return () => {
            window.removeEventListener("resize", updateMetrics);
            ro.disconnect();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroMessages.length);
        }, 2800);

        return () => clearInterval(interval);
    }, [heroMessages.length]);


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

                <section ref={sectionRef} className="relative pt-16 pb-56 px-0 bg-white w-screen overflow-x-hidden border-b-8 border-[#071833]">
                    {/* box2: left black container constrained vertically to box1 (only on md+) */}
                    {box1Metrics.height > 0 && (
                        <div
                            aria-hidden
                            className="hidden md:block"
                            style={{
                                position: 'absolute',
                                // expand from left edge of image up to immediately left of box1
                                // compute left and width dynamically
                                // expand all the way to the left edge of the page
                                left: 0,
                                // width goes from left 0 up to just before box1 (small gap of 8px)
                                width: Math.max(0, (box1Metrics.left || 0) - 8),
                                // small gap between box2 and box1 is 8px
                                top: box1Metrics.top,
                                height: box1Metrics.height,
                                // temporarily make box2 fully transparent
                                background: 'transparent',
                                boxShadow: 'none',
                                border: 'none',
                                borderRadius: '8px 0 0 8px',
                                zIndex: 0,
                            }}
                        />
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 min-h-[500px] w-full">
                        {/* Parte 1: Imagem no fundo preto */}
                        <div className="flex items-center justify-center">
                            <div ref={imageRef} style={{ position: 'relative', display: 'inline-block' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    borderRadius: '8px',
                                    zIndex: -1,
                                    clipPath: 'inset(0 round 8px)' // Restrict to box 1 size
                                }}></div>
                                <img
                                    src="/novo_logo.png"
                                    alt="Farol Dev. Logo"
                                    className="w-[450px] h-auto md:w-[530px] object-contain"
                                    // moved slightly up and nudged a tiny bit more to the right (vertical unchanged)
                                    // scaled slightly larger without changing surrounding layout
                                    style={{ transform: 'translateX(40px) translateY(120px) scale(1.06)', transformOrigin: 'left center', transition: 'transform 0.3s, width 0.3s' }}
                                />
                            </div>
                        </div>
                        {/* Parte 2: Texto e botões unificados */}
                        <div ref={box1Ref} className="col-span-2 box1-animate flex flex-col justify-start items-start px-6 py-10 translate-x-8 translate-y-8 md:translate-x-16 md:translate-y-16 lg:translate-x-24 lg:translate-y-24 transition-transform duration-300" id="box1" style={{ position: 'relative', zIndex: 10, background: 'linear-gradient(135deg, #ff4d4d, #4b0082, #00008b, #000080)', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            <div className="box1-inner w-full">
                                <h2 className="text-lg md:text-xl font-medium text-white mb-4" style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'inline-block' }}>Soluções em tecnologia.</h2>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-12 bg-gradient-to-r from-white to-white/70 bg-clip-text text-white/90 relative" style={{ marginTop: '3rem' }}>
                                    <span className="relative block w-full h-[1.2em] whitespace-nowrap">
                                        {heroMessages.map((message, index) => (
                                            <span
                                                key={index}
                                                className={`absolute left-0 top-0 w-full transition-opacity duration-700 whitespace-nowrap ${
                                                    heroIndex === index ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                style={{ minHeight: '1em', fontSize: '1.25em' }}
                                            >
                                                {message}
                                            </span>
                                        ))}
                                    </span>
                                </h1>
                                <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-6 mt-28" style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                                    Desenvolvemos automações robustas focadas em reduzir retrabalho<br />
                                    e acelerar processos operacionais e financeiros.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-10">
                                    <a href="/solucoes">
                                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-2">
                                            Ver Soluções
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a href="/contato">
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-11 rounded-full bg-green-100 backdrop-blur-xl border border-green-200 px-4 py-2 text-black hover:bg-green-100/90 transition-all duration-300 ease-in-out">
                                            Fale Conosco
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Botão animado para scroll */}
                    <div className="flex justify-center mt-20">
                        <button
                            style={{ marginTop: '6rem' }}
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
                            // same gradient but with darker green tones at the end
                            background: "linear-gradient(180deg, #071833 0%, #0c1f3f 18%, #123558 36%, #17606a 54%, #16634f 72%, #1c7f5b 88%, #1f6f5f 100%)",
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

                        <div className="container mx-auto max-w-7xl px-6 py-28">
                            <div className="text-center mb-12 -mt-6 md:-mt-8">
                                <h2 className="text-4xl md:text-[2.75rem] font-bold mb-4 text-white">O que podemos automatizar?</h2>
                                <p className="text-lg text-white/90 max-w-2xl mx-auto">Automatizações sob medida que liberam sua equipe para o que importa, enquanto garantem produtividade e consistência.</p>
                            </div>

                            <div className="automation-grid pb-20">
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

                {/* Espaçador branco entre 'O que podemos automatizar' e a faixa 120+ Empresas */}
                <div className="w-full bg-white h-20" />

                {/* 120+ Empresas Contratantes - mantida fora do contêiner escuro */}
                <div className="w-full">
                    <section
                        className="section-reveal py-10 flex items-center justify-center text-center w-full mt-12"
                        style={{ background: 'linear-gradient(135deg, #ff4d4d, #4b0082, #00008b, #000080)' }}
                    >
                        <div className="container mx-auto max-w-4xl px-6">
                            <h2 className="text-5xl font-bold text-white animate-fade-in">
                                <span className="text-6xl md:text-7xl font-extrabold">120+</span> Empresas Contratantes
                            </h2>
                            <p className="text-lg text-white/90 mt-4">Já confiaram em nossos serviços para transformar seus processos.</p>
                        </div>
                    </section>
                </div>

                <section className="section-reveal pt-8 pb-20 bg-gray-100">
                    <div
                        className="relative container mx-auto max-w-8xl rounded-lg bg-gray-300/80 backdrop-blur-md shadow-lg section-container-spacing"
                        // keep vertical padding large but horizontal padding fixed on small screens
                        style={{ padding: "4rem 1rem 8rem 1rem" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Linha do Tempo de Automatização</h2>
                        <div className="relative flex flex-col md:flex-row items-center justify-center" style={{ gap: "12px" }}>

                            {[
                                { icon: Lightbulb, title: "Entendimento do processo", description: "Compreender como o processo funciona, quais ferramentas são utilizadas e onde estão os principais gargalos." },
                                { icon: Bug, title: "Mapeamento da dor", description: "Identificação dos pontos críticos que geram retrabalho, atrasos, erros manuais ou perda de eficiência." },
                                { icon: Code, title: "Desenvolvimento", description: "Criação da automação, integração ou solução digital de acordo com as necessidades identificadas." },
                                { icon: CheckCircle, title: "Testes", description: "Validação prática da automação em diferentes cenários para garantir precisão, estabilidade e confiabilidade." },
                                { icon: Users, title: "Entrega e treinamento", description: "Capacitação da equipe para utilizar a solução e suporte contínuo para ajustes e melhorias." },
                            ].map((step) => (
                                <div
                                    key={step.title}
                                    className="timeline-card relative z-10 shadow-xl rounded-3xl p-6 text-center mb-6 md:mb-0 mx-2 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-2xl w-full md:w-[240px] h-auto md:h-[360px] box-border bg-opaque-solucoes backdrop-blur-md"
                                    style={{ flex: "none" }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="timeline-card__title text-base font-semibold mb-1 text-white p-3 rounded-xl self-stretch h-14 flex items-center justify-center">
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

                <div className="section-reveal container mx-auto max-w-6xl text-center mt-20 md:mt-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ferramentas que utilizamos</h2>
                </div>
                <section className="section-reveal py-8 bg-gray-900 mt-24 md:mt-28">
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

                <section className="section-reveal py-20 px-4 mt-40">
                    <div className="w-full mx-auto max-w-full">
                        <Card className="bg-gradient-to-br from-blue-950/90 via-blue-900/90 to-blue-800/90 backdrop-blur-md border border-blue-900/50 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 mx-0">
                            <CardContent className="p-12 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronto para automatizar seus processos?</h2>
                                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                    A tecnologia resolvendo dores reais. Você cuida da estratégia; a automação cuida do resto.
                                </p>
                                <Button size="lg" variant="neon" className="gap-2 !border-0 bg-gradient-to-r from-emerald-400 to-green-600 text-white shadow-[0_10px_40px_rgba(16,185,129,0.18)] hover:brightness-110" asChild>
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