import fotoPersonal from '../assets/fotoPersonal.png'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';
import Skills from '../components/Skills';

export default function Home() {

    const EmailLink = () => {
        const emailLink = 'mailto:fabiomjq@gmail.com';
    }

    return (
        <>
        <div className="w-full p-5 md:p-10 lg:pt-16 lg:px-40">
            <div className="p-5 md:p-10 bg-slate-900 rounded-2xl shadow-md shadow-slate-900">

                <div className="flex flex-col lg:flex-row">
                    
                    <div className="2xl:w-4/5 lg:text-justify">
                        <h1 className="text-5xl font-bold text-slate-400 text-left">Hey, I'm Fabio Quaino</h1>
                        <hr className="h-0.1 bg-slate-600 w-full mt-6 mb-4 opacity-20"/>
                        <p className="text-slate-500 text-xl font-semibold">
                            I'm a <span className="font-bold text-orange-500">Software Systems Engineer</span> specialized in handling information by creating and
                            managing <span className="font-bold text-slate-400">ETLs</span>, <span className="font-bold text-slate-400">microservices</span>, <span className="font-bold text-slate-400">dashboards</span>, and <span className="font-bold text-slate-400">data models</span>.
                            My expertise also extends to <span className="font-bold text-slate-400">application integration</span>, connecting different systems together.
                            I'm also keen on <span className="font-bold text-slate-400">machine learning</span> and creating algorithms to make the most of
                            information.
                        </p>
                        <p className="text-slate-500 text-xl font-semibold hidden lg:block lg:mt-2">
                            Currently, my focus is on <span className="font-bold text-slate-400">data engineering</span> because of my interests and knowledge.
                            I'm always looking to expand my skills in this area, that is why I'm eager to learn new
                            tools and methodologies. My goal is to stay updated on the latest tech trends for topnotch data solutions.
                        </p>





                        <div className='text-slate-900 font-semibold text-md flex flex-col sm:flex-row gap-4 mt-8'>
                                <Link 
                                    className='flex gap-2 align-middle items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors'
                                    to="https://wa.me/543535626982"
                                    target="_blank"
                                ><FaWhatsapp/>WhatsApp</Link>
                                <Link 
                                    className='flex gap-2 align-middle items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors'
                                    to="https://t.me/FabioQuaino"
                                    target="_blank"
                                ><FaTelegram/>Telegram</Link>
                                <Link 
                                    className='flex gap-2 align-middle items-center justify-center p-2 bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors'
                                    to="mailto:fabiomjq@gmail.com"
                                    target="_blank"
                                ><FaEnvelope/>fabiomjq@gmail.com</Link>
                            </div>
                    </div>

                    <div className="2xl:w-1/5 p-6 2xl:p-10 hidden 2xl:flex">
                        <div className='flex items-center h-full'>
                            <img 
                                src={fotoPersonal} 
                                alt='My Photo'
                                className=' object-fill rounded-2xl opacity-75 border-4 border-slate-700 hover:border-orange-500 transition-colors select-none'
                            />
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
        <Skills/>
        </>
    )
}