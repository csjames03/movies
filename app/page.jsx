import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Movie from './Movie'
const inter = Inter({ subsets: ['latin'] })

async function getData(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=77fc4e87dcbfeab9d5b4b72c9682f909`)
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const movies = await getData()
  return (
    <main className="grid md:grid-cols-3 lg:grid-cols-4 p-5  lg:p-20 content-center text-red-200">
      {movies.results.map((movie)=>(
        <Movie
          id={movie.id}
          imagesrc = {movie.poster_path}
          title = {movie.title}
        />
      ))}
    </main>
  )
}
