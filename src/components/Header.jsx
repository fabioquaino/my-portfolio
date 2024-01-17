import Logo from "./Logo"
import Navbar from "./Navbar"

export default function Header() {
    return (
        <header className="bg-slate-900 flex-wrap flex w-full items-center justify-between px-5 md:px-20 p-6">
            <Logo/>
            <Navbar/>
        </header>
    )
}