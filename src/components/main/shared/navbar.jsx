import React from 'react'
import logo from '@/assets/images/logo.svg';
import {Button} from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import dropdownArrow from '@/assets/icons/down-arrow.svg';


function Navbar() {
    const navlink = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Services',
            path: '/services',
        },
        {
            title: 'Join as a Beauty Expert',
            path: '/',
        },
        {
            title: 'Contact',
            path: '/',
        },
        {
            title: 'FAQ',
            path: '/',
        },
    ]
  return (
    <div className='bg-white/30 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.04)] text-primary-foreground py-2'>
        <div className='container mx-auto py-2 flex items-center justify-between'>
           <img src={logo} alt="logo" className='h-10 w-[174px]'/> 
           <div className='flex items-center gap-6'>
            {
                navlink.map((navbar)=>(
                    <NavLink to={`${navbar?.path}`} className={`flex items-center gap-[6px]`}>
                        <p className='text-foreground text-base'>{navbar?.title}</p>
                        <img src={navbar.title === 'Services' && dropdownArrow} className={`${navbar.title === 'Services' && 'w-[10px] h-3'}` }/>
                    </NavLink>
                ))
            }
           </div>
           <div className='flex items-center gap-4'>
            <Button variant='ghost' className='rounded-[6px] border border-secondary px-5 py-2'>Sign In</Button>
            <Button variant='secondary' className='rounded-[6px] px-5 py-2'>Join</Button>
           </div>
        </div>
    </div>
  )
}

export default Navbar