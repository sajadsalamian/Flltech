import { useState } from 'react'
import '../app/globals.css'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function App() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <main className='flex min-h-[100vh] bg-[#111315] relative'>
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
            <div className='flex-1 lg:ml-[300px]'>
                <Header  openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                <div className='p-5'>
                    <div className='bg-[#17191A] text-white p-3'>
                        <p>New Invoices</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non fugit ipsa voluptatum doloremque, expedita eius mollitia aut assumenda recusandae odit. Impedit voluptatibus tenetur aut corrupti soluta provident debitis minus?
                            Quam in expedita, eius tenetur labore fugit tempore consectetur iusto harum voluptates nisi minus cupiditate facere inventore aliquid enim provident molestiae autem libero similique reprehenderit soluta aut illum. Ipsum, soluta!
                            Nostrum vero architecto obcaecati totam porro voluptas eos debitis assumenda optio ipsam repellat officiis suscipit excepturi impedit quod, nam quae voluptatem at asperiores nesciunt. Sint at corporis pariatur esse est.
                            Veritatis doloribus saepe a labore quos, repudiandae mollitia molestias laboriosam, iusto impedit atque culpa architecto quas dicta tempore? Mollitia minima eius accusantium consectetur maxime. Tempore quos quae soluta minima itaque.
                            Ipsa consequatur unde, ullam labore vero ipsam corrupti laborum ea numquam quaerat blanditiis cupiditate repellendus optio, velit impedit enim itaque. Veritatis, culpa non voluptates est voluptatem quibusdam quo corporis cumque!
                            Quam totam eius veniam nobis omnis aspernatur quaerat repellendus qui nihil aut, neque culpa maiores, eaque tempora velit accusamus impedit quia? Fuga aperiam expedita possimus modi ea iusto, officiis quod!
                            Maiores consequuntur optio blanditiis velit. Nihil earum quaerat totam eaque ipsam sed, voluptate, eum repellendus itaque iste numquam eveniet? Delectus id excepturi vel eius earum ex, quisquam eaque similique soluta.
                            Nulla qui ea modi provident consequatur et cumque maxime consequuntur fuga laboriosam. Voluptatum eligendi aperiam, debitis deleniti dignissimos officiis modi harum corporis, ipsum amet saepe! Tempore dignissimos quaerat magnam ad.
                            Non nihil ducimus neque quod? Aliquam sed architecto eos possimus sunt velit at ab maiores delectus! Blanditiis doloribus quaerat hic culpa pariatur delectus illum iusto quisquam, sequi mollitia ut eos.
                            Illum ratione quis voluptatem incidunt excepturi ad, atque quod suscipit omnis perspiciatis dolore doloremque tempora cum obcaecati ea cupiditate in? Consectetur quis harum odio dolores animi eius quia fuga odit?</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
