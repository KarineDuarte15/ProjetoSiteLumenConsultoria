import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { toast } from "@/components/ui/use-toast"; // Usando o toast do Shadcn UI

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel, // Descomente se quiser usar labels visíveis
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react"; // Import React for useState

// 1. Defina o schema de validação com Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  company: z.string().optional(), // Empresa é opcional
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

// 2. Defina o tipo inferido do schema
type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  // 3. Inicialize o formulário com react-hook-form e zodResolver
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Estado para controlar o envio (opcional, use form.formState.isSubmitting)
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // 4. Função para lidar com o envio do formulário
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true); // Indica que o envio começou

    // Substitua com suas credenciais REAIS do EmailJS
    const SERVICE_ID = 'service_sduk5kq';
    const TEMPLATE_ID = 'template_pzysi2o';
    const PUBLIC_KEY = 'ep4Q3ePPc9HQvAxdC';

    // Mapeie os dados do formulário para as variáveis do seu template EmailJS
    // Certifique-se que estes nomes correspondem aos usados no seu template EmailJS (ex: {{from_name}})
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: 'Equipe Lumen', // Ou o nome que deseja que apareça no email recebido
        company: data.company || 'Não informada', // Lida com o campo opcional
        message: data.message,
    };

    try {
      // Envia o email usando EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Mostra notificação de sucesso
      toast({
        title: "Mensagem Enviada com Sucesso!",
        description: "Obrigado por entrar em contato. Retornaremos em breve.",
        variant: "default", // Ou omita para usar o padrão
      });

      form.reset(); // Limpa os campos do formulário
    } catch (error) {
      console.error('Falha ao enviar o email:', error);

      // Mostra notificação de erro
      toast({
        variant: "destructive",
        title: "Erro ao Enviar Mensagem",
        description: "Houve um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.",
      });
    } finally {
       setIsSubmitting(false); // Indica que o envio terminou (sucesso ou falha)
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar seu negócio em todo o Brasil
          </p>
        </div>

        {/* Grid Principal (Formulário e Informações) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Coluna do Formulário */}
          <div className="animate-fade-in lg:animate-slide-in-left"> {/* Adiciona animação */}
            <h3 className="text-2xl font-bold mb-6 text-foreground">Fale Conosco</h3>
            {/* 5. Componente Form do react-hook-form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Campo Nome */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Nome completo</FormLabel> */}
                      <FormControl>
                        <Input placeholder="Nome completo" {...field} className="h-12 bg-input text-foreground placeholder:text-muted-foreground"/>
                      </FormControl>
                      <FormMessage /> {/* Exibe mensagens de erro de validação */}
                    </FormItem>
                  )}
                />

                {/* Campo Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>E-mail corporativo</FormLabel> */}
                      <FormControl>
                         <Input type="email" placeholder="E-mail corporativo" {...field} className="h-12 bg-input text-foreground placeholder:text-muted-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campo Empresa */}
                 <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Empresa (Opcional)</FormLabel> */}
                      <FormControl>
                         <Input placeholder="Empresa (Opcional)" {...field} className="h-12 bg-input text-foreground placeholder:text-muted-foreground"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campo Mensagem */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Mensagem</FormLabel> */}
                      <FormControl>
                         <Textarea placeholder="Sua mensagem..." {...field} className="min-h-32 bg-input text-foreground placeholder:text-muted-foreground"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Botão de Envio */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 hover-scale transition-all duration-300"
                  disabled={isSubmitting} // Usa o estado local ou form.formState.isSubmitting
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Coluna de Informações de Contato */}
          <div className="space-y-8 animate-fade-in lg:animate-slide-in-right"> {/* Adiciona animação */}
            <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de Contato</h3>

            <div className="flex items-start gap-4 hover-scale">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                <a href="mailto:lumenconsultoriaempresarial@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">lumenconsultoriaempresarial@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 hover-scale">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                 {/* Link clicável para WhatsApp */}
                 <a
                    href="https://wa.me/5585997111727" // Substitua pelo número correto
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    (85) 99711-1727
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 hover-scale">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Atuação</h4>
                <p className="text-muted-foreground">
                  Atendemos empresas em todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;