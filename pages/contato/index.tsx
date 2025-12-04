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
                    description: result.message ?? "Entraremos em contato em breve.",
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

                <section className="pt-32 pb-20 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Vamos conversar?</h1>
                            <p className="text-xl text-muted-foreground">
                                Entre em contato conosco e descubra como podemos automatizar seus processos.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <Mail className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Email</h3>
                                                <p className="text-muted-foreground">Em breve</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <Phone className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Telefone</h3>
                                                <p className="text-muted-foreground">Em breve</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <MessageSquare className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                                                <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card>
                                <CardContent className="p-6">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nome completo</Label>
                                            <Input id="name" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="seu@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Telefone</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="(11) 99999-9999"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Mensagem</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Conte-nos sobre o processo que você gostaria de automatizar..."
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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
