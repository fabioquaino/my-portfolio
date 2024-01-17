import { SiTalend, SiApacheairflow, SiNodered, SiPowerbi, SiMysql, SiOracle   } from "react-icons/si";
import { FaAws, FaPython, FaLinux, FaGitAlt, FaDocker, FaReact, FaAtlassian, FaProjectDiagram as FaBonitasoft    } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Skill({skill}) {
    const { id, name, description, link } = skill;

    const ToolIcon = ({ id }) => {
        if (id == 'tdi') {
          return <SiTalend />;
        } else if (id === 'tesb') {
          return <SiTalend />;
        } else if (id === 'airflow') {
          return <SiApacheairflow />;
        } else if (id === 'nodered') {
          return <SiNodered />;
        } else if (id === 'powerbi') {
          return <SiPowerbi />;
        } else if (id === 'mysql') {
          return <SiMysql />;
        } else if (id === 'oracle') {
          return <SiOracle />;
        } else if (id === 'aws') {
          return <FaAws />;
        } else if (id === 'pyml') {
          return <FaPython />;
        } else if (id === 'linux') {
          return <FaLinux />;
        } else if (id === 'git') {
          return <FaGitAlt />;
        } else if (id === 'docker') {
          return <FaDocker />;
        } else if (id === 'react') {
          return <FaReact />;
        } else if (id === 'bonita') {
          return <FaBonitasoft />;
        } else if (id === 'atlassian') {
          return <FaAtlassian />;
        } else {
          return <FaBonitasoft />;
        }
      };
      

    return(
        <div className="flex gap-4 p-4 m-2 md:m-4 text-slate-400 items-center border-2 rounded-xl border-slate-700 select-none hover:border-orange-500 transition-colors hover:text-orange-500">
            
            <Link className="text-3xl  p-1.5 bg-orange-500 rounded-xl text-slate-900 border-2 border-transparent hover:text-orange-500 hover:bg-slate-900 hover:border-orange-500 transition-colors" to={link} target="blank">
                <ToolIcon id={id}/>
            </Link>
                

            <div className="flex flex-col">
                <p className="font-bold hover:text-orange-500 text-base sm:text-xl">{name}</p>
                <p className="text-slate-500 text-sm sm:text-base">{description}</p>
            </div>

            
        </div>


    )
}

/*
        <div className="text-3xl text-white font-bold flex gap-2">
            <SiTalend />
            <SiTalend />
            <SiApacheairflow />

            <FaAws />
            <FaPython />
            <SiNodered />

            <SiPowerbi />
            <SiMysql />
            <SiOracle />

            <FaLinux />
            <FaGitAlt />
            <FaDocker />

            <FaReact />
            <FaBonitasoft />
            <FaAtlassian />

        </div>*/