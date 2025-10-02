import { TERCIARY_COLOR } from "@/app/globals_var";


export default function Header(){
    return (
        <header className="fixed top-0 left-0 w-full bg-black z-50 text-2xl"
        style={{color: TERCIARY_COLOR}}>
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <a href="#home" className="relative after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Início</a>
                <ul className="flex gap-6">
                    <li><a href="#sobre_mim" className="relative after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Sobre Mim</a></li>
                    <li><a href="#habilidades" className="relative after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Habilidades</a></li>
                    <li><a href="#experiencias" className="relative after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Experiencias</a></li>
                    <li><a href="#projetos" className="relative after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}