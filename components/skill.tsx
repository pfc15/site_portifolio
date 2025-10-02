import { PRIMARY_COLOR, SECONDARY_COLOR, TERCIARY_COLOR } from "@/app/globals_var";

type Info_skill ={
    image_path: string;
    name: string;
    percentage: Number;
}


export default function Skill({image_path, name, percentage}:Info_skill) {
    return (
    <div className=" relative flex rounded-full h-[5vw] w-[25vw] mt-10 items-center justify-center"
    style={{background:TERCIARY_COLOR}} >
        <div className="relative h-[80%] w-[15%] ml-5 bg-gray-100 rounded-full flex items-center justify-center">
            <img src='next.svg' className="h-[75%] w-[75%]" />
        </div>
        <p className="text-black flex-1 text-center">{name}<br></br>{String(percentage)}%</p>
        <div className=" flex-2 w-full rounded-full h-4 ml-2 mr-7 overflow-hidden "
        style={{background:PRIMARY_COLOR}}>
            <div
                className="bg-blue-500 h-4 transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
        
        
      </div>
    )
}