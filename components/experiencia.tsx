import { SECONDARY_COLOR, TERCIARY_COLOR } from "@/app/globals_var";

type Info_xp = {
    periodo: string;
    titulo: string;
    cargo: string;
    descricao: string;
    path_foto: string;
}


export default function  Experiencia({periodo, titulo, cargo, descricao, path_foto}:Info_xp) {
    return (
        <div className={`flex flex-col h-[100vh] w-[45vw] border-2 border-[${TERCIARY_COLOR}] rounded-lg items-center bg-white mb-5 mt-5`}>
            <div className="flex-1">
                <img src={path_foto} alt="" className="h-[18vh] m-5 "/>
            </div>
            <div className="flex-2 mb-5 text-center text-black m-2">
                <p className="text-sm"><i>{periodo}</i></p>
                <h2 className="mb-3 text-2xl"><b>{titulo}</b> - <i>{cargo}</i></h2>
                <div className="overflow-y-auto h-[5vw]">
                <p className="flex-1 text-black text-center">{descricao}</p>
                </div>
            </div>
        </div>
    )
}