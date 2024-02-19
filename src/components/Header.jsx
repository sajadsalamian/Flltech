import { Icon } from '@iconify/react'
import React from 'react'

export default function Header({ openSidebar, setOpenSidebar }) {
    return (
        <header className='p-4 text-white border border-[#1D1F20]'>
            <div className='flex gap-x-4 items-center'>
                <Icon icon="gg:menu-round" className='w-5 h-5 lg:hidden' onClick={e => setOpenSidebar(true)}/>
                <h2 className='text-xl font-bold'>Invoices</h2>
                <div className='ml-auto flex gap-x-8 items-center'>
                    <Icon icon="zondicons:notification" />
                    <div className='flex gap-x-2 items-center'>
                        <img src="/src/assets/avatar.png" alt="" className='w-8 h-8 rounded-full' />
                        <span>profile</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
