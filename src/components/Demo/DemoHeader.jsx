import { Link } from 'react-router-dom'
import { navLinks } from '../../data/nav'
import { useEffect, useState } from 'react'
import Auth from './Auth/Auth'

const DemoHeader = () => {
    const [isActive, setIsActive] = useState(false);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const scrollMe = () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
        }
        window.addEventListener("scroll", scrollMe);
       
    }, [])
    return (
        <header className={`border-b border-black sticky top-0 z-50 ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`}>
            
            <div className='size w-[95%] md:w-[90%] h-[70px] flex items-center justify-between'>
                <Link to={'/'}>
                    <img src="/medlogo.png" alt="logo" className='' width="205px" height="175px" />
                </Link>
                <div className='flex items-center gap-5'>
                    <div className='hidden text-sm sm:flex items-center gap-5'>
                        {navLinks.map((link, i) => (
                            <Link to={link.path} key={i}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="relative">
                        <button
                        onClick={() => setModal(true)} className="hidden text-sm sm:flex items-center gap-5">
                            Sign In
                        </button>
                        <Auth modal={modal} setModal={setModal} />
                    </div>
                        <button onClick={() => setModal(true)} className={`text-white rounded-full px-3 p-2 text-sm font-medium
                        ${isActive ? "bg-green-700" : "bg-black"}`}>
                            Get Started
                        </button>
                </div>
            </div>
        </header>
    )
}

export default DemoHeader
