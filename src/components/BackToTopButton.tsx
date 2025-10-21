// src/components/BackToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Button
            size="icon"
            className={cn(
                "fixed bottom-6 z-50", // Mantém fixo na parte inferior (ajuste 'bottom-6' se precisar de mais espaço do rodapé)
                "left-1/2 -translate-x-1/2", // *** NOVAS CLASSES PARA CENTRALIZAR HORIZONTALMENTE ***
                // "right-6", // REMOVE a classe que alinhava à direita
                "rounded-full h-12 w-12",
                "bg-primary hover:bg-primary/90",
                "text-primary-foreground",
                "shadow-md",
                "transition-opacity duration-300 ease-in-out",
                "hover-scale",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    );
};

export default BackToTopButton;