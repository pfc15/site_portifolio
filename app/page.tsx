import Image from "next/image";
import Header from '@/components/header';
import Skill from '@/components/skill';
import Experiencia from "@/components/experiencia";
import Projetos from "@/components/projetos";
import { PRIMARY_COLOR, TERCIARY_COLOR } from "./globals_var";
import { FaGithub } from "react-icons/fa";

const HEIGHT = 25

export default function Home() {
  return (
    <section>
    <Header></Header>
    <section id='home' className="flex  items-center bg-black justify-center h-screen">
    
    <div className={`-translate-y-[3vw] h-[${HEIGHT}vw] w-[80vw] flex gap-4 items-center justify-center `}
    style={{color: TERCIARY_COLOR}}>
      <div className="basis-1/3 flex items-center justify-center">
        <img src="imagem_perfil.png" alt="" className={`h-[${HEIGHT}vw] w-auto rounded-full`}/>
      </div>
      <div className="basis-2/3 flex flex-col p-8 rounded-lg justify-center items-center text-center">
        <h1 className="text-7xl font-bold p-5">Pedro Fonseca Cruz</h1>
        <p className="text-3xl italic">Quando a oportunidade bater à porta, que me encontre trabalhando.</p>
        <div className="flex w-fit mt-15">
          <a href="curriculo.pdf"
        download
        className="basis-1/2 text-2xl relative after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
        >Baixar Currículo</a>
          <div className="basis-1/2  flex gap-4 mb-8 text-center justify-center items-center">
            <a 
            href="https://github.com/pfc15" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center w-[5vw] items-center text-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
            >
            <FaGithub className="text-3xl" />
            </a>
        </div>
        </div>
        </div>
    </div>
    </section>

    {/* sobre mim */}
    <section id='sobre_mim' className="flex relative h-screen bg-cover bg-center bg-fixed"
    style={{background:PRIMARY_COLOR}}>
      <div className="flex flex-col flex-2 p-8 rounded-lg items-center justify-center">
        <h1 className="text-7xl font-bold p-5 absolute top-[5vw]">Quem sou eu?</h1>
        <p className="text-2xl w-[35vw] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur quod animi rem eum inventore tenetur eos recusandae laudantium unde eaque amet praesentium impedit autem,
          voluptatum eligendi maxime ad sint aut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eum corrupti illo commodi quae excepturi nihil nulla pariatur quo ipsam dolor earum eos praesentium
           mollitia explicabo dolore fugit inventore, exercitationem aliquid?</p>
      </div>

      <div className=" flex-1 flex items-center justify-center mr-20">
        <img src="imagem_perfil.png" alt="" className={`h-[${HEIGHT}vw] w-auto rounded-full`}/>
      </div>
    </section>

    {/* habilidade */}
    <section id='habilidades' className="relative flex h-screen bg-cover bg-center bg-fixed justify-center items-center"
    style={{backgroundImage: "url('/parallax.jpg')"}}>
      <div className="flex-1"></div>
        <h1 className="text-7xl font-bold p-5 absolute top-[5vw]">Hablidades</h1>
      {/* col 1 */}
      <div className="flex flex-col flex-2 items-center justify-center">
        <Skill name='javascript' image_path='next.svg' percentage={80} ></Skill>
        <Skill name='javascript' image_path='next.svg' percentage={60} ></Skill>
        <Skill name='javascript' image_path='next.svg' percentage={50} ></Skill>
        <Skill name='javascript' image_path='next.svg' percentage={100} ></Skill>
      </div>        

      {/* col 2 */}
      <div className="flex flex-col flex-2 items-center justify-center">
        <Skill name='javascript' image_path='next.svg' percentage={20} ></Skill>
        <Skill name='javascript' image_path='next.svg' percentage={30} ></Skill>
        <Skill name='javascript' image_path='next.svg' percentage={80} ></Skill>
        <Skill name='javascript' image_path='next.svg' percentage={40} ></Skill>
      </div>

      <div className="flex-1"></div>
    </section>

    {/* experiencias */}
    <section id='experiencias' className={`flex h-screen bg-cover bg-center bg-fixed bg-${PRIMARY_COLOR} justify-center items-center`}>
      <h1 className="basis-1/3 text-7xl font-bold p-5 text-center">Experiencias</h1>
      
      <div className="relative basis-2/3 flex  ml-5 mr-10 h-[70vh]">
        {/* col 1 */}
        <div className="flex flex-col flex-1 items-center overflow-y-auto h-full space-y-6 p-4">
          <Experiencia
          periodo="fevereiro 2025 - atualmente"
          titulo='Pibic Projeto BEM-TE-VI'
          cargo='bolsista'
          descricao='Projeto BEM-TE-VI visa desenvolver e melhorar Tecnologias Assistivas para pessoas com
locomoção reduzida.Esteve evolvido diretamente com o processamento e análise de dados de caminhada de
usuários com dificuldade de locomoção'
          path_foto="unb.jpg"
        ></Experiencia>


        <Experiencia 
          periodo="Agosto 2024 - Fevereiro 2025"
          titulo='Portal Galt, Requisitos de Software'
          cargo='Desenvolvedor/líder'
          descricao='
          Liderou a equipe de desenvolvimento na matéria de Requisitos de software. Dentre as
responsabilidades da projeto estavam: conversar com cliente real, mapear e documentar os
requisitos do software a ser desenvolvido, e liderar o desenvolvimento do produto
foi desenvolvido um site para controle interno do cursinho para mapear frequencia dos
alunos e as notas de simulado. O site foi desenvolvido com nextJS (javascript) no front end e django RESTapi (python) no
back end.'
          path_foto="GALT-vestibulares.png"
        ></Experiencia>
        <Experiencia 
          periodo="julho 2022 - setembro 2022"
          titulo='Apex Brasil'
          cargo='estagiário'
          descricao='
          Dentro da APEX a gerência de inteligência tinha como principal função gerar e analisar
dados para ajudar empresas brasileiras na exportação de seus produtos. Como estagiário formatou e manipulou dados em excel e VBA (macros do excel) e
visualizações em power BI., principalmente com dados exportação e importação e outros
dados macroeconômicos. Também ajudou a implementar scripts em python para limpeza e manipulação de um grande
volume de dados (usando python com pandas e Dask).'
          path_foto="apex_brasil.png"
        ></Experiencia>
        <Experiencia 
          periodo="fevereiro 2022 - Dezembro 2023"
          titulo='Diretoria de Dados'
          cargo='Acessor (2022), Diretor (2023)'
          descricao='
          Galt é um cursinho voluntário, voltado a preparar alunos de baixa renda para o ENEM e
outros vestibulares. Dentro da diretoria de Dados realizou várias coletas de dados e tratamento de dados e
visualizações de dados. Utilizou python (pandas, plotly, matplotlab) , excel, Power BI,
Selenium entre outras ferramentas.'
          path_foto="GALT-vestibulares.png"
        ></Experiencia>
        <Experiencia 
          periodo="junho 2023 - dezembro 2023"
          titulo='GEROcuidado, Enactus/MDS'
          cargo='Desenvolvedor'
          descricao='
          A matéria de MDS (métodos de desenvolvimento de software) do Curso propõe fazer um
parceria com empresas para desenvolvimento de algum projeto da empresa com métodos
ágeis como Scrum, Kanbam e Lean inception. Projeto proposto pela enactus foi desenvolver um aplicativo para o cuidado de idosos,
visando a organização de rotina, lembretes de remédios, etc. Utilizou Java Script com react native para o desenvolvimento do projeto'
          path_foto="enactus.jpg"
        ></Experiencia>
          <Experiencia 
          periodo="fevereiro 2019 - setembro 2021"
          titulo='Simulações da ONU'
          cargo='Diretor'
          descricao='
  oi diretor nas seguintes edições: Sigma Mundi(19,20,21), CEM 01, colégio sérios,
MaxiMUN, Preparação para Yale MUN. Como diretor de comite, foi responsavel por
coordenar equipe, gerenciamento de pessoas e crises, escrever e lecionar em inglês. Co-autoria em um guia de estudo acerca do tema do comitê. planejamento e realização de treinamentos para ensinar os procedimentos ONU e também
para interar os alunos sobre o tema. Moderou o debate durante o evento. E avaliou os alunos dentro do debate'
          path_foto="modelUN.png"
        ></Experiencia>


        <Experiencia
          periodo="julho 2022 - setembro 2023"
          titulo='Monitorias Algorítimo e programação de computadores, Orientação a Objeto'
          cargo='monitor'
          descricao='
          Atuou como monitor das disciplinas de Algoritmos e programação de computadores, e de
Orientação a objeto. Tirava dúvidas dos alunos e auxiliava o professor a planejar aulas. Matérias eram baseadas em python'
          path_foto="apc.jpg"
        ></Experiencia>
        </div>
      </div>
    </section>
    

    {/* projetos */}
    <section id='projetos' className="flex relative items-center justify-center h-screen bg-cover bg-center bg-fixed"
    style={{backgroundImage: "url('/parallax.jpg')"}}>
      <Projetos projetos={[
        {image_path:"apex_brasil.png",
        titulo:"Super Site",
        tecnologias: ['python', 'pandas'],
        github_url: 'https://www.github.com',
        descricao:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, corporis maxime harum deserunt voluptate voluptatem soluta. Eos, suscipit? Quas, eveniet. Voluptatum soluta reprehenderit sed provident? Non quae tempore tenetur temporibus!"},
        {image_path:"imagem_perfil.png", 
        titulo:"outro super site",
        tecnologias: ['python', 'pandas'],
        github_url: 'github.com',
        descricao:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, corporis maxime harum deserunt voluptate voluptatem soluta. Eos, suscipit? Quas, eveniet. Voluptatum soluta reprehenderit sed provident? Non quae tempore tenetur temporibus!"},
      ]
      }
      ></Projetos>
    </section>

    </section>
  );
}
