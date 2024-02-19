import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "./ui/accordion"


export default function Sidebar({ openSidebar, setOpenSidebar }) {
    const [sidebarItems, setSidebarItems] = useState([
        { label: 'dashboard', icon: 'material-symbols:dashboard' },
        { label: 'Wallets', icon: 'solar:wallet-bold', active: true },
        { label: 'Gas Station', icon: 'ph:gas-pump-bold' },
        { label: 'Referrals', icon: 'fluent:people-team-28-regular' },
        {
            label: 'Invoices', icon: 'iconamoon:invoice-bold', item: [
                { label: 'Withdraw' },
                { label: 'Deposit' },
            ]
        },
        { label: 'Transaction', icon: 'grommet-icons:transaction' },
        { label: 'Swap', icon: 'ic:baseline-swap-horizontal-circle' },
    ]);

    return (
        <>
            {openSidebar ? <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 lg:hidden' onClick={e => setOpenSidebar(false)}> </div> : null}
            <div className={`w-[300px] h-[100vh] ${openSidebar ? 'block' : 'hidden'} lg:block absolute top-0 left-0 bottom-0 bg-side-bg pt-5 border border-[#1D1F20]`}>
                <div className='flex flex-col h-full'>
                    <div className='flex'>
                        <img src="/src/assets/logo.png" alt="" className='w-20 h-auto mx-auto mb-10' />
                        <Icon icon="gg:menu-round" className='w-5 h-5 lg:hidden text-white mr-3' onClick={e => setOpenSidebar(false)} />
                    </div>
                    <div>
                        <ul>
                            {sidebarItems.map((item, index) => (
                                <li key={index} className={`px-4  ${item.active ? 'bg-[#23F4F9] text-black' : 'text-white'}`}>
                                    {item.item ?
                                        <MyAccordion item={item} />
                                        :
                                        <div className={`flex items-center gap-x-5 p-3`}>
                                            <Icon icon={item.icon} />
                                            <Link to="#">{item.label}</Link>
                                        </div>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-auto text-white px-2'>
                        <div className='flex gap-x-2'>
                            <img src="/src/assets/avatar.png" alt="" className='w-16 h-16 rounded-full mx-auto mb-10 bg-gray-400' />
                            <div>
                                <p>Frankie Evans</p>
                                <p className='text-gray-400'>Frankie@gmail.com</p>
                            </div>
                            <div>
                                <Icon icon="iconamoon:swap-bold" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const MyAccordion = ({ item }) => {
    return (
        <Accordion type="single" collapsible className='w-full'>
            <AccordionItem value="item-1" className='border-b-0'>
                <AccordionTrigger className='p-0'>
                    <div className='flex items-center gap-x-5'>
                        <Icon icon={item.icon} />
                        <span>{item.label}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='pl-10'>
                    {item.item.map((itm, inx) => (
                        <div className='p-3' key={inx}>
                            <Link to="#">{itm.label}</Link>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}