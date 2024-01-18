import { FaGithub as FaRepo, FaInfoCircle as FaInfo  } from "react-icons/fa";
import { TbWorld as FaSite } from "react-icons/tb";
import { Link } from "react-router-dom";

import concontrol from "../assets/projects/concontrol.png"
import mejorar from "../assets/projects/mejorar.png"
import talendesb_deploy from "../assets/projects/talendesb_deploy.png"
import telegram_chat from "../assets/projects/telegram_chat.png"
import tableros_ctd from "../assets/projects/tableros_ctd.png"

export default function Project({project}) {

    const { name, description, image, link_repo, link_site, link_info } = project;

    let imagePath;
    if (image === "concontrol.png") {
        imagePath = concontrol;
    } else if (image === "mejorar.png") {
        imagePath = mejorar;
    } else if (image === "talendesb_deploy.png") {
        imagePath = talendesb_deploy;
    } else if (image === "tableros_ctd.png") {
        imagePath = tableros_ctd;
    } else if (image === "telegram_chat.png") {
        imagePath = telegram_chat;
    }

    return (
        <div className="p-5 border-2 border-slate-700 rounded-xl text-slate-500 hover:text-orange-500 hover:border-orange-500 transition-colors flex flex-row gap-6 items-center">
            <div className="text-lg  font-semibold xl:w-4/5 xl:text-justify">
                <h2 className="text-2xl pb-1 font-bold">{name}</h2>
                <p className="text-slate-500">{description}</p>
                <div className="flex gap-1 text-2xl mt-2">

                    {link_site ?<Link 
                        className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 hover:bg-slate-600 rounded-md"
                        to={link_site}
                        target="_blank"
                    ><FaSite /> </Link>: null}

                    {link_info ?<Link 
                        className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 hover:bg-slate-600 rounded-md"
                        to={link_info}
                        target="_blank"
                    ><FaInfo /> </Link>: null}

                    {link_repo ?<Link 
                        className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 hover:bg-slate-600 rounded-md"
                        to={link_repo}
                        target="_blank"
                    ><FaRepo /> </Link>: null}
                    
                </div>
            </div>
            <div className='hidden xl:flex xl:w-1/5 items-center h-full '>
                <img 
                    src={imagePath} 
                    alt='Project Image'
                    className=' object-fill rounded-2xl opacity-90 border-2 select-none border-slate-700'
                />
            </div>
        </div>

    )
}