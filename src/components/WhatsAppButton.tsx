// src/components/WhatsAppButton.tsx
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import WhatsappIcon from '@/assets/WhatsApp.svg.webp'; // Ajuste o caminho/nome se necessário

import { Button } from '@/components/ui/button'; // Mantido para o botão "Enviar"
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// Importar componentes do Tooltip
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
    phoneNumber: string;
    defaultMessage?: string;
    className?: string; // Para classes extras no botão flutuante
    tooltipMessage?: string; // Mensagem para o hover
    ariaLabel?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    defaultMessage = "Olá! Gostaria de saber mais sobre a Lumen Consultoria.",
    className,
    tooltipMessage = "Olá, precisa de ajuda?", // Mensagem padrão do hover
    ariaLabel = "Abrir chat no WhatsApp",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(defaultMessage);

    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');

    const openWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${sanitizedPhoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setIsOpen(false);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            {/* Envolver o gatilho com Tooltip */}
            <Tooltip>
                <TooltipTrigger asChild>
                     {/* PopoverTrigger agora envolve uma tag 'button' estilizada */}
                    <PopoverTrigger asChild>
                        <button
                            aria-label={ariaLabel}
                            className={cn(
                                "fixed bottom-6 right-6 z-50",
                                "flex items-center justify-center", // Para centralizar o ícone
                                "rounded-full h-14 w-14", // Tamanho ajustado (era h-16 w-16)
                                "bg-[#25D366] hover:bg-[#1DB954]", // Cor verde WhatsApp e hover um pouco mais claro/diferente
                                "text-white",
                                "shadow-md hover:shadow-lg", // Sombra sutil
                                "transition-all duration-300 ease-in-out",
                                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB954]", // Estilo de foco
                                "hover:scale-105", // Efeito de escala no hover
                                className
                            )}
                        >
                            <img src={WhatsappIcon} alt="WhatsApp" className="h-7 w-7" /> {/* Ajuste o tamanho H/W conforme necessário */}
                        </button>
                    </PopoverTrigger>
                </TooltipTrigger>
                {/* Conteúdo do Tooltip (mensagem de hover) */}
                <TooltipContent side="left" className="bg-black text-white text-xs rounded px-2 py-1 mr-1">
                    <p>{tooltipMessage}</p>
                </TooltipContent>
            </Tooltip>

            {/* Conteúdo do Popover (Caixa de Chat) - sem alterações */}
            <PopoverContent
                side="top"
                align="end"
                className="w-80 rounded-lg shadow-xl bg-card p-0 mr-2 mb-2 border-none"
                sideOffset={10}
            >
                <div className="flex items-center justify-between p-3 bg-primary text-primary-foreground rounded-t-lg">
                    <h3 className="font-semibold text-sm">Iniciar conversa</h3>
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:bg-white/20" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Fechar</span>
                    </Button>
                </div>
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