import Image from "next/image"
export default async function({ params }){
    const { movie } = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { cache: 'no-store' })
    const movies = await data.json()
    return(
        <div className="w-screen h-auto p-10 text-red-200 mt-10">
            <Image
            src={`https://image.tmdb.org/t/p/original//${movies.backdrop_path}`}
            width={1000}
            height={1000}
            className="w-full h-full"
            />
            <h1 className="text-3xl flex">{movies.title}</h1>
            <p className="text-2xl text-red-500">{movies.tagline}</p>
            {movies.status == "Released"?(
                <p className="text-green-500 my-2">{movies.status}</p>
            ):(
                <p className="text-red-500 my-2">{movies.status}</p>
            )}
            <p className="my-2">Release date: {movies.release_date}</p>
            <p className="my-2">Runtime: {movies.runtime} minutes</p>
            <p className="my-2">Overview:   {movies.overview}</p>
        </div>
        
    )
}
