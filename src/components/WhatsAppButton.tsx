// src/components/WhatsAppButton.tsx
import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react'; // Adiciona Send e X
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea'; // Para a mensagem
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // Usar Popover
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
    phoneNumber: string;
    defaultMessage?: string; // Mensagem padrão inicial
    className?: string;
    ariaLabel?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    defaultMessage = "Olá! Gostaria de saber mais sobre a Lumen Consultoria.",
    className,
    ariaLabel = "Abrir chat no WhatsApp",
}) => {
    const [isOpen, setIsOpen] = useState(false); // Controla a visibilidade do Popover
    const [message, setMessage] = useState(defaultMessage); // Estado para a mensagem digitada

    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Função para abrir o WhatsApp com a mensagem atual
    const openWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${sanitizedPhoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setIsOpen(false); // Fecha o popover após abrir o link
    };

    // Lida com a mudança no textarea
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            {/* Botão flutuante que abre o Popover */}
            <PopoverTrigger asChild>
                <Button
                    size="icon"
                    className={cn(
                        "fixed bottom-6 right-6 z-50",
                        "rounded-full h-16 w-16",
                        "bg-[#25D366] hover:bg-[#128C7E]",
                        "text-white", "shadow-lg hover:shadow-xl",
                        "hover-scale", "transition-all duration-300 ease-in-out",
                        className
                    )}
                    aria-label={ariaLabel}
                >
                    <MessageCircle className="h-8 w-8" />
                </Button>
            </PopoverTrigger>

            {/* Conteúdo do Popover (Caixa de Chat) */}
            <PopoverContent
                side="top" // Abre para cima
                align="end" // Alinha à direita do botão
                className="w-80 rounded-lg shadow-xl bg-card p-0 mr-2 mb-2 border-none" // Estilo da caixa
                sideOffset={10} // Distância do botão
            >
                {/* Cabeçalho da Caixa */}
                <div className="flex items-center justify-between p-3 bg-primary text-primary-foreground rounded-t-lg">
                    <h3 className="font-semibold text-sm">Iniciar conversa</h3>
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:bg-white/20" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Fechar</span>
                    </Button>
                </div>

                {/* Corpo com Textarea e Botão Enviar */}
                <div className="p-4 space-y-3">
                     <p className="text-sm text-muted-foreground">Digite sua mensagem:</p>
                    <Textarea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Sua mensagem..."
                        className="min-h-[80px] text-sm bg-input focus-visible:ring-1 focus-visible:ring-primary"
                        rows={3}
                    />
                    <Button
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                        onClick={openWhatsApp}
                    >
                        <Send className="h-4 w-4 mr-2" />
                        Enviar via WhatsApp
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default WhatsAppButton;