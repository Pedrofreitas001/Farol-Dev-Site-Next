import { useState } from "react";
import { useRouter } from "next/router";
import { BreadcrumbJsonLd, CorporateContactJsonLd, NextSeo } from "next-seo";
import { Mail, MessageSquare, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildCanonical, siteUrl } from "@/lib/seo";

const Contato = () => {
    const router = useRouter();
    const canonical = buildCanonical(router.asPath || "/contato");
    const { toast } = useToast();
    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (!web3FormsKey) {
                throw new Error("Chave do Web3Forms não configurada");
            }

            const data = new FormData();
            data.append("access_key", web3FormsKey);
            data.append("name", formData.name);
            data.append("email", formData.email);
            if (formData.phone) {
                data.append("phone", formData.phone);
            }
            data.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (response.ok && result.success !== false) {
                toast({
                    title: "Mensagem enviada!",
                    description: result.message ?? "Entraremos em contato Faroldev@gmail.com.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                throw new Error(result.message ?? "Erro ao enviar mensagem");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast({
                title: "Erro ao enviar mensagem",
                description: error instanceof Error ? error.message : "Por favor, tente novamente mais tarde.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <NextSeo
                title="Contato e Propostas"
                description="Preencha o formulário para receber um diagnóstico gratuito sobre como automatizar os processos da sua empresa."
                canonical={canonical}
                openGraph={{
                    url: canonical,
                    title: "Contato e Propostas | Farol Dev.",
                    description: "Receba um diagnóstico gratuito sobre como automatizar processos financeiros e operacionais.",
                    type: "website",
                }}
            />
            <BreadcrumbJsonLd
                itemListElements={[
                    { position: 1, name: "Início", item: siteUrl },
                    { position: 2, name: "Contato", item: canonical },
                ]}
            />
            <CorporateContactJsonLd
                url={siteUrl}
                contactPoint={[
                    {
                        contactType: "customer service",
                        telephone: "+55-11-99999-9999",
                        email: "contato@faroldev.com.br",
                        areaServed: "BR",
                        availableLanguage: ["Portuguese", "English"],
                    },
                ]}
            />
            <div className="min-h-screen">
                <Navbar />

                <section className="pt-32 pb-32 px-4 w-full bg-opaque-solucoes">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center max-w-3xl mx-auto mb-28">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
                                Vamos conversar?
                            </h1>
                            <p className="text-xl text-white/90">Entre em contato conosco e descubra como podemos automatizar seus processos.</p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-8 md:items-center">
                            <div className="space-y-6 md:col-span-2">
                                <Card className="automation-tile contact-sm bg-transparent border-0">
                                    <CardContent className="p-4">
                                        <div className="flex items-start gap-4">
                                            <div className="automation-tile__icon shadow-[0_0_18px_rgba(75,248,219,0.18)] flex-shrink-0">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="automation-tile__title">Email</h3>
                                                <p className="automation-tile__description">Faroldev@gmail.com</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="automation-tile contact-sm bg-transparent border-0">
                                    <CardContent className="p-4">
                                        <div className="flex items-start gap-4">
                                            <div className="automation-tile__icon shadow-[0_0_18px_rgba(75,248,219,0.18)] flex-shrink-0">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="automation-tile__title">Telefone</h3>
                                                <p className="automation-tile__description">Em breve</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="automation-tile contact-sm bg-transparent border-0">
                                    <CardContent className="p-4">
                                        <div className="flex items-start gap-4">
                                            <div className="automation-tile__icon shadow-[0_0_18px_rgba(75,248,219,0.18)] flex-shrink-0">
                                                <MessageSquare className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="automation-tile__title">Horário de Atendimento</h3>
                                                <p className="automation-tile__description">Segunda a Sexta: 9h às 18h</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="bg-[#021121]/70 border border-cyan-400/20 backdrop-blur-md shadow-[0_20px_60px_rgba(2,8,23,0.6)] md:col-span-2 md:col-start-4">
                                <CardContent className="p-10">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-white/95 text-base" style={{ textShadow: '0 1px 10px rgba(255,255,255,0.06)' }}>Nome completo</Label>
                                            <Input id="name" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="w-full h-14 bg-[#071226] border-[#0ea5e9]/40 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#0ea5e9]/50 shadow-[0_0_12px_rgba(14,165,233,0.06)] text-base" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-white/95 text-base" style={{ textShadow: '0 1px 10px rgba(255,255,255,0.06)' }}>Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="seu@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full h-14 bg-[#071226] border-[#0ea5e9]/40 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#0ea5e9]/50 shadow-[0_0_12px_rgba(14,165,233,0.06)] text-base"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-white/95 text-base" style={{ textShadow: '0 1px 10px rgba(255,255,255,0.06)' }}>Telefone</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="(11) 99999-9999"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full h-14 bg-[#071226] border-[#0ea5e9]/40 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#0ea5e9]/50 shadow-[0_0_12px_rgba(14,165,233,0.06)] text-base"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-white/95 text-base" style={{ textShadow: '0 1px 10px rgba(255,255,255,0.06)' }}>Mensagem</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Conte-nos sobre o processo que você gostaria de automatizar..."
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full min-h-[160px] bg-[#071226] border-[#0ea5e9]/40 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#0ea5e9]/50 shadow-[0_0_12px_rgba(14,165,233,0.06)] text-base"
                                            />
                                        </div>

                                        <Button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:brightness-105 h-12 rounded-md px-8 w-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-[0_8px_30px_rgba(14,165,233,0.12)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]" size="lg" disabled={isSubmitting}>
                                            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Contato;
