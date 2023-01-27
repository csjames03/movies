import Image from 'next/image'
import Link from 'next/link'
export default function Movie({id, title, imagesrc}){
    return(
        <div className='flex flex-col justify-center relative w-full h-auto p-10'>
          <Link href={`/${id}`}>
            <Image
            src={`https://image.tmdb.org/t/p/original//${imagesrc}`}
            width={1000}
            height={1000}
            className="w-auto h-auto hover:scale-110 transition duration-300 ease-in-out"
            />
          </Link>
           <h1 className='text-red-200 self-center  bottom-0 my-10'>{title}</h1>
        </div>
    )
}