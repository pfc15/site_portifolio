'use client';

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Slide } from "@mui/material";
import { a } from "framer-motion/client";
import {PRIMARY_COLOR,  SECONDARY_COLOR, TERCIARY_COLOR } from "@/app/globals_var";

type Info_projetos = {
    image_path: string;
    tecnologias:Array<string>;
    titulo: string;
    descricao: string;
    github_url: string;
}

type Recibo_Projetos = {
    projetos:Array<Info_projetos>;
}

type Direction = 1 | -1;
type AnimationVariant = {
  x: number | string;
  opacity: number;
  transition?: {
    duration: number;
    ease: string;
  };
};

type Variants = {
    active: AnimationVariant,
    inactive: AnimationVariant, 
  enter: (direction: Direction) => AnimationVariant;
  center: AnimationVariant;
  exit: (direction: Direction) => AnimationVariant;
};


export default function Projetos(
    {projetos}:Recibo_Projetos
) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<Direction>(1); // 1: forward, -1: backward
    const [isAnimating, setIsAnimating] = useState(false);


    const projeto_atual = projetos[index];

    const handleNextProject = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setDirection(1); // Right direction
        setTimeout(() => {
        setIndex((prev) => (prev + 1) % projetos.length);
        setIsAnimating(false);
        }, 200); // Match the animation duration
    };


    const handlePrevProject = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(-1); // Left direction
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
      setIsAnimating(false);
    }, 200);
  };

  const imageVariants: Variants = {
    active: {
        x:1,
        opacity: 0
    },
    inactive: {
        x:1,
        opacity: 0
    },
    enter: (direction: Direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: (direction: Direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

    return (
    <div className={`h-[95vh] w-[80vw] flex items-center justify-center p-4`}>
        
        <div className={`relative flex flex-col h-[80vh] w-full rounded-xl shadow-2xl overflow-hidden`}
        style={{color:TERCIARY_COLOR}}>
            {/* Project Image */}
            <AnimatePresence custom={direction} mode="wait" initial={false}>
            <motion.div className="relative flex h-1/2 w-full overflow-hidden items-center justify-center"
            key={index}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            >
                
            <img 
                src={projeto_atual.image_path} 
                alt={projeto_atual.titulo}
                className="w-auto h-full object-cover"
            />
            </motion.div>
            </AnimatePresence>


            {/* Project Content */}
            <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div className="flex-1 p-6 flex flex-col items-center justify-center text-center"
                key={index}
                variants={imageVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                >
                    <h1 className="text-3xl font-bold mb-4">{projeto_atual.titulo}</h1>
                    <p className="mb-6 max-w-2xl">{projeto_atual.descricao}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {projeto_atual.tecnologias.map((tech, index) => (
                        <a href={`#habilidades`}>    
                        <span key={index} className="px-3 py-1 bg-blue-600  rounded-full text-sm">
                            {tech}
                        </span></a>
                        ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-4 mb-8">
                        <a 
                        href={projeto_atual.github_url}
                        className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:bg-gray-600 transition"
                        style={{background:TERCIARY_COLOR, color:PRIMARY_COLOR}}
                        >
                        <FaGithub className="text-lg" />
                        Code
                        </a>
                    </div>
                    
                    {/* Project Counter */}
                    <div className="text-gray-400">
                        {index + 1} / {projetos.length}
                    </div>
                </motion.div>
            </AnimatePresence>


            {/* Navigation Buttons */}
            <button 
            onClick={handlePrevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500/50 hover:bg-blue-500/70 text-white p-4 rounded-full transition-all backdrop-blur-sm"
            aria-label="Previous project"
            >
            <GoArrowLeft className="text-xl" />
            </button>
            
            <button 
            onClick={handleNextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500/50 hover:bg-blue-500/70 text-white p-4 rounded-full transition-all backdrop-blur-sm"
            aria-label="Next project"
            >
            <GoArrowRight className="text-xl" />
            </button>
        </div>
        </div>
    )
}
