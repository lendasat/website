import { Link, NavLink } from 'react-router-dom';
import Logo from './../assets/images/lendasat.png';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

export default function Navbar() {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className="fixed inset-x-0 top-0 md:top-4 flex items-center justify-center md:px-10 z-50">
            <div className="max-w-4xl w-full py-5 px-6 rounded-full lg:border border-[#E5E5E8] flex items-center justify-between bg-white">
                <Link to={'/'} className='relative z-50'>
                    <img src={Logo} alt="Logo" className='h-5 w-auto' />
                </Link>
                <button className='md:hidden z-50 relative' onClick={() => setOpen(!open)}>
                    <div className="h-5 w-7 grid gap-1 justify-center">
                        <span className={`h-0.5 w-7 rounded-md bg-secondary relative ${open && 'rotate-45 translate-y-1'} transition-all ease-in-out duration-500 block`}></span>
                        <span className={`h-0.5 w-7 rounded-md bg-secondary relative ${open && '-rotate-45 -translate-y-1'} transition-all ease-in-out duration-500 block`}></span>
                        <span className={`h-0.5 w-7 rounded-md bg-secondary relative ${open && '-rotate-45 -translate-y-3 opacity-0'} transition-all ease-in-out duration-500 block`}></span>
                    </div>
                </button>

                <div className={`fixed md:relative md:bg-transparent md:h-fit h-screen w-screen inset-x-0 px-8 pb-10 md:pb-0 md:px-0 z-40 text-center gap-6 top-0 flex flex-col md:flex-row items-center justify-center md:translate-x-0 md:w-fit ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-linear duration-300 bg-white md:bg-white/0`}>

                    <ul className='md:flex md:space-y-0 space-y-4 gap-5'>
                        {
                            [
                                {
                                    hash: 'Borrowing',
                                    url: '/'
                                },
                                {
                                    hash: 'For Lenders',
                                    url: '/lenders'
                                },
                                {
                                    hash: 'Features',
                                    url: '/#features'
                                }
                            ].map((items, idx) => {
                                return (
                                    <li key={idx} onClick={() => setOpen(false)} className='text-3xl md:text-base'>
                                        {
                                            items.hash == 'Features' ? (
                                                <Link className='inline-block active:text-primary hover:text-primary transition-all ease-in-out duration-300' to={items.url}>{items.hash}</Link>
                                            ) : (
                                                <NavLink className='inline-block active:text-primary hover:text-primary transition-all ease-in-out duration-300' to={items.url}>{items.hash}</NavLink>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link to="#subscribe" onClick={() => setOpen(false)} className='md:hidden justify-center text-white flex items-center gap-2 px-6 py-3 rounded-full bg-primary'>
                        <span>Try It</span> <GoArrowUpRight />
                    </Link>
                </div>
                <Link to="#subscribe" onClick={() => setOpen(false)} className='text-white md:flex items-center gap-2 px-6 py-3 rounded-full bg-primary hidden hover:bg-black transition-colors ease-linear duration-300'>
                    <span>Try It</span> <GoArrowUpRight className='arrow_movement' />
                </Link>
            </div>
        </nav>
    )
}
