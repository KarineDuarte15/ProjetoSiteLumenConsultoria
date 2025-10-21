import React from 'react';
import { MessageCircle } from 'lucide-react'; // Ícone de mensagem, representativo
import { Button } from '@/components/ui/button'; // Usaremos o componente Button do Shadcn UI
import { cn } from '@/lib/utils'; // Utilitário para mesclar classes Tailwind

// Interface para definir as propriedades que o componente aceita
interface WhatsAppButtonProps {
    phoneNumber: string; // Número de telefone (formato internacional, ex: 5585999998888)
    message?: string; // Mensagem pré-definida opcional
    className?: string; // Permite adicionar classes extras de fora
    ariaLabel?: string; // Para acessibilidade
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message = "Olá! Gostaria de saber mais sobre a Lumen Consultoria.", // Mensagem padrão
    className,
    ariaLabel = "Fale conosco no WhatsApp", // Label padrão para acessibilidade
}) => {
    // Remove caracteres não numéricos do telefone para a URL
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Monta a URL do WhatsApp Click to Chat
    const whatsappUrl = `https://wa.me/${sanitizedPhoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        // O componente Button do Shadcn com 'asChild' renderiza um 'a' (link)
        <Button
            size="icon" // Tamanho predefinido para ícones
            className={cn(
                // Estilos base para posicionamento e aparência
                "fixed bottom-6 right-6 z-50", // Posição fixa no canto inferior direito
                "rounded-full",                // Formato circular
                "h-14 w-14",                   // Tamanho do botão
                "bg-green-500 hover:bg-green-600", // Cores estilo WhatsApp
                "text-white",                  // Cor do ícone
                "shadow-lg",                   // Sombra para destaque
                "hover-scale",                 // Efeito de escala definido no index.css
                "transition-all duration-300 ease-in-out", // Transições suaves
                className                      // Permite adicionar/sobrescrever classes
            )}
            asChild // Faz o Button renderizar o elemento filho ('a') em vez de um <button>
        >
            <a
                href={whatsappUrl}
                target="_blank" // Abrir em nova aba/aplicativo
                rel="noopener noreferrer" // Boas práticas de segurança para target="_blank"
                aria-label={ariaLabel} // Importante para acessibilidade
            >
                {/* Ícone do Lucide React */}
                <MessageCircle className="h-7 w-7" />
            </a>
        </Button>
    );
};

export default WhatsAppButton;