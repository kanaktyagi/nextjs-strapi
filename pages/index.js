import Head from 'next/head'
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'
import Card from '../components/Card'

export default function Home({movies}) {
  console.log("movies",movies)
  return (
    <div className='container'>
     {movies.data.map (movie => (
       <Card key={movie.id} movie={movie}/>
     ))}  
    </div>
  )
}

export async function getServerSideProps() {
  const {NEXT_PUBLIC_API_URL} = process.env
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies?populate=*`)
  const data = await res.json()
   return {
    props: {
          movies: data
    }
  }
}