import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaDocker } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import ResumePdf  from "../assets/Fabio_Quaino_Resume.pdf"

export default function Footer() {
    return (
        <footer className="bg-slate-900 flex w-full items-center justify-between px-20 p-6">
            <p className="text-slate-600 font-semibold hidden sm:block">Fabio Quaino</p>
            <div className="flex justify-center w-full sm:w-auto">
                <Link className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 flex items-center justify-center hover:bg-slate-600 rounded-md mx-2" to={ResumePdf} target="_blank">
                    <FaFilePdf/>
                </Link>
                <Link className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 flex items-center justify-center hover:bg-slate-600 rounded-md mx-2" to="https://www.linkedin.com/in/fabioquaino/" target="_blank">
                    <FaLinkedin/>
                </Link>
                <Link className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 flex items-center justify-center hover:bg-slate-600 rounded-md mx-2" to="https://github.com/fabioquaino" target="_blank">
                    <FaGithub/>
                </Link>
                <Link className="text-slate-600 hover:text-orange-500 transition-colors text-2xl p-2 flex items-center justify-center hover:bg-slate-600 rounded-md mx-2" to="https://hub.docker.com/u/quaino" target="_blank">
                    <FaDocker/>
                </Link>
            </div>
        </footer>
    )
}