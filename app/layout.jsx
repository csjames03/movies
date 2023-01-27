import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className='w-full h-auto flex justify-evenly p-5 fixed bg-neutral-900 z-10'>
          <Link href={"/"} className="hover:text-red-500 hover:scale-110 transition duration-300 ease-in-out">Popular</Link>
          <Link href={"/latest"} className="hover:text-red-500 hover:scale-110 transition duration-300 ease-in-out">Latest</Link>
          <Link href={"/toprated"} className="hover:text-red-500 hover:scale-110 transition duration-300 ease-in-out">Top Rated</Link>
          <Link href={"/upcoming"} className="hover:text-red-500 hover:scale-110 transition duration-300 ease-in-out">Upcoming</Link>
        </nav>
        {children}
        <div className='w-screen h-auto p-2 flex justify-center'>
         &copy; 
         
         <Link href={"https://github.com/csjames03/"}>James Ocao 2023</Link>
        </div>
        </body>
        
    </html>
  )
}
