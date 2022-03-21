import React,{useState,useEffect} from 'react'
import fetch from 'isomorphic-unfetch'
import {Flex, Box} from 'reflexbox'
import qs from 'qs'
import { useRouter } from 'next/router'
const {NEXT_PUBLIC_API_URL} = process.env


function MoviesPage({movies}) {
  const [pageno, setPageNo] = useState(1);
  console.log("pageNO initial", pageno)
  const router = useRouter();
  const [data, setData] = useState(movies);

    const handlePageChange = async function(argu){
      console.log(argu)
      if(argu === 'add') {
    setPageNo(prevState => prevState +1)
      } else {
        setPageNo(prevState => prevState -1)
      }
    console.log("pageno", pageno)
  }
  useEffect(() => {
    // declare the data fetching function
  const fetchData = async () => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies?pagination[page]=${pageno}&pagination[pageSize]=3&populate=*`)
    const data = await res.json()
     await setData(data)
  }
  fetchData()
    // make sure to catch any error
    .catch(console.error);
   
    console.log("data from block function", data)
    
  },[pageno])
  console.log("data", data)
  return (
   <Box variant="container" pt={40}>
    <ul> 
   {data ?    data?.data?.map (movie => (
    <li key={movie.id}>
        <h3>{movie.attributes.Title}</h3>
    </li>
  )) :
     movies.data.map (movie => (
        <li key={movie.id}>
            <h3>{movie.attributes.Title}</h3>
        </li>
      ))} 
    </ul>
  {data?.meta?.pagination?.page !== 1 &&  <button onClick={() => handlePageChange('subs')}>Prev</button>}
  {data?.meta?.pagination?.page !==  data?.meta?.pagination?.pageCount  &&   <button onClick={() => handlePageChange('add')}>Next</button>}
   </Box>
  )
}


export async function getServerSideProps() {
    const query = qs.stringify({
      pagination: {
        page: 1,
        pageSize: 3,
      },
    }, {
      encodeValuesOnly: true,
    });
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies?${query}&populate=*`)
    const data = await res.json()
     return {
      props: {
            movies: data
      }
    }
  }
  export default MoviesPage