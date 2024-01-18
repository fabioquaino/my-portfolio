import { FaGithub, FaDocker  } from "react-icons/fa";
import { Link } from "react-router-dom"
import projectsJson from "../data/projects.json"
import Project from "../components/Project";

export default function Portfolio() {
    return (
        <div className="w-full p-5 md:p-10 lg:py-16 lg:px-40">
            <div className="p-5 md:p-10 bg-slate-900 rounded-2xl shadow-md shadow-slate-900">
                <h1 className="text-4xl font-bold text-slate-400 text-left">My Portfolio</h1>
                <hr className="h-0.1 bg-slate-600 w-full mt-6 mb-4 opacity-20"/>

                <div className="flex gap-4 py-2 flex-col sm:flex-row font-semibold">
                    <Link 
                        className='flex gap-2 items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors'
                        to="https://github.com/fabioquaino"
                        target="_blank"
                    ><FaGithub />GitHub Profile</Link>
                    <Link 
                        className='flex gap-2 items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors'
                        to="https://hub.docker.com/u/quaino"
                        target="_blank"
                    ><FaDocker />DockerHub Profile</Link>
                </div>

                <div className="lg::text-justify mt-6">
                    <h2 className="text-3xl font-bold text-slate-400 text-left">Some Recent Public Projects</h2>
                    <hr className="h-0.1 bg-slate-600 w-full my-3 opacity-20"/>
                    <div className="flex flex-col gap-4 mt-4">
                        {projectsJson.projects.map((project, index) => (
                            <Project
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}