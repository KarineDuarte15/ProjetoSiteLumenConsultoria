// src/components/BackToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função para verificar a posição do scroll
    const toggleVisibility = () => {
        // Mostra o botão após rolar 300px para baixo
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para rolar suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Efeito de rolagem suave
        });
    };

    // Adiciona e remove o listener de scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Função de limpeza para remover o listener quando o componente desmontar
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Button
            size="icon"
            className={cn(
                "fixed bottom-20 right-6 z-50", // Posição (acima do botão do WhatsApp)
                "rounded-full h-12 w-12",       // Tamanho e forma
                "bg-primary hover:bg-primary/90", // Cor primária
                "text-primary-foreground",        // Cor do ícone
                "shadow-md",
                "transition-opacity duration-300 ease-in-out", // Transição para aparecer/desaparecer
                "hover-scale", // Efeito de escala no hover
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none" // Controla visibilidade
            )}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    );
};

export default BackToTopButton;