import Link from "next/link";
import { useRouter } from "next/router";
import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from "next-seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Database, TrendingUp, Bot, Globe, Cog, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildCanonical, siteUrl } from "@/lib/seo";

const Solucoes = () => {
    const router = useRouter();
    const canonical = buildCanonical(router.asPath || "/solucoes");
    const solutions = [
        {
            icon: FileText,
            title: "Extração de Dados",
            description: "Extraia informações de documentos complexos com precisão",
            features: ["PDFs e imagens (OCR)", "Contratos e documentos jurídicos", "Boletos e notas fiscais", "Formulários e recibos"],
        },
        {
            icon: Database,
            title: "Processamento Financeiro",
            description: "Automatize tarefas contábeis e financeiras do dia a dia",
            features: [
                "Consolidação de dados para DRE",
                "Conferência de extratos bancários",
                "Conciliação de recebimentos",
                "Fechamento mensal automatizado",
            ],
        },
        {
            icon: TrendingUp,
            title: "Integração de Sistemas",
            description: "Conecte seus sistemas e elimine trabalho manual",
            features: [
                "Importação automática para ERP",
                "Atualização de dashboards",
                "Sincronização entre plataformas",
                "Integração via API",
            ],
        },
        {
            icon: Bot,
            title: "Preenchimento Automático",
            description: "Elimine digitação manual em formulários e planilhas",
            features: [
                "Planilhas Excel e Google Sheets",
                "Formulários em sistemas internos",
                "Portais externos",
                "Cadastros em múltiplos sistemas",
            ],
        },
        {
            icon: Globe,
            title: "Web Scraping e Automação Web",
            description: "Robôs que navegam, extraem e validam dados da web",
            features: [
                "Download automático de relatórios",
                "Coleta de dados de sites",
                "Monitoramento de portais",
                "Validação de informações online",
            ],
        },
        {
            icon: Cog,
            title: "Automações Customizadas",
            description: "Soluções sob medida para o seu processo específico",
            features: [
                "Análise do fluxo atual",
                "Identificação de gargalos",
                "Desenvolvimento personalizado",
                "Testes e documentação completa",
            ],
        },
    ];

    return (
        <>
            <NextSeo
                title="Automação e Soluções Digitais"
                description="Automatizações financeiras, integrações de sistemas, robôs e RPA sob medida para reduzir custos e acelerar operações."
                canonical={canonical}
                openGraph={{
                    url: canonical,
                    title: "Automação e Soluções Digitais | Farol Dev.",
                    description:
                        "Automatizações financeiras, integrações de sistemas, robôs e RPA sob medida para reduzir custos e acelerar operações.",
                    type: "article",
                }}
                additionalMetaTags={[
                    { name: "keywords", content: "automacao financeira, rpa, integraçao sistemas, robotização processos" },
                ]}
            />
            <BreadcrumbJsonLd
                itemListElements={[
                    { position: 1, name: "Início", item: siteUrl },
                    { position: 2, name: "Soluções", item: canonical },
                ]}
            />
            {solutions.map((solution, index) => (
                <ProductJsonLd
                    key={solution.title}
                    productName={solution.title}
                    description={solution.description}
                    brand="Farol Dev."
                    offers={{
                        priceCurrency: "BRL",
                        price: ((index + 1) * 1000).toString(),
                        availability: "https://schema.org/InStock",
                        url: canonical,
                    }}
                    images={[`${siteUrl}/og-cover.png`]}
                    sku={`FD-SOLUTION-${index}`}
                />
            ))}
            <div className="min-h-screen">
                <Navbar />

                <section className="pt-32 pb-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Nossas Soluções</h1>
                            <p className="text-xl text-muted-foreground">
                                Automações robustas que resolvem problemas reais em processos financeiros, administrativos e contábeis.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {solutions.map((solution) => (
                                <Card key={solution.title} className="border-2 hover:border-primary/50 transition-all duration-300">
                                    <CardHeader>
                                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            <solution.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                                        <p className="text-muted-foreground">{solution.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {solution.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                            <CardContent className="p-12 text-center">
                                <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Desenvolvemos automações sob medida para qualquer processo. Entre em contato e vamos entender sua necessidade específica.
                                </p>
                                <Button size="lg" className="gap-2" asChild>
                                    <Link href="/contato">
                                        Falar com especialista
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

export default Solucoes;
