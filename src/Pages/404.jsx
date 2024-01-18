import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Page404() {  
    return (
        <div className="w-full p-5 md:p-10 lg:py-16 lg:px-40">
            <div className="p-5 md:p-10 bg-slate-900 rounded-2xl shadow-md shadow-slate-900">
                <h1 className="text-6xl text-orange-500 font-bold">ERROR 404!</h1>
                <p className="text-slate-500 text-2xl mt-4 mb-10 font-bold">
                    The page you are looking for could not be found.
                </p>
                <Link 
                    className='flex gap-2 items-center p-2 w-fit bg-orange-500 rounded-md hover:bg-slate-900 hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition-colors font-semibold'
                    to="/"
                ><FaHome />Back to Home</Link>
            </div>
        </div>
    )
}