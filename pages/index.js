import Head from 'next/head'
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'
import Card from '../components/Card'
import {Flex, Box} from 'reflexbox'

export default function Home({movies}) {
  return (
    <Box variant="container" >
    <Box as="h2" my={40} >Latest Movies</Box>
      
      <Flex justifyContent="space-between" flexDirection={{ _ :"column", md: "row"}} mb={100} >
     {movies.data.map (movie => (
       <Box key={movie.id} width={{_: "100%", md: "30%"}}>
       <Card  movie={movie}/>
       </Box>
     ))} 
     </Flex> 
    </Box>
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