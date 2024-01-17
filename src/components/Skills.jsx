import Skill from "./Skill"
import skillsJson from "../data/skills.json"

const ejemploSkill = {
    nombre: 'React',
    descripcion: 'Librería de JavaScript para construir interfaces de usuario.',
    link: 'https://reactjs.org/',
    icono: 'ruta-al-icono-de-react.png', // Reemplaza con la ruta real a tu icono
  }

export default function Skills() {
    return (
        <div className="w-full p-5 pt-0 md:px-10 md:tp-5 md:pb-10 lg:pb-16 lg:px-40">
            <div className="p-5 md:p-10 bg-slate-900 rounded-2xl shadow-md shadow-slate-900">
                <h1 className="text-4xl font-bold text-slate-400 text-left">Skills & Technologies</h1>
                <hr className="h-0.1 bg-slate-600 w-full mt-6 mb-4 opacity-20"/>

                <div className="grid grid-cols-1 2xl:grid-cols-3">
                    {skillsJson.tools.map((tool, index) => (
                        <Skill
                            key={index}
                            skill={tool}
                        />
                    ))}

                </div>

            </div>
        </div>
    )
}