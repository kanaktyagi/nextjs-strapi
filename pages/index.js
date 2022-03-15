import Head from 'next/head'
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'

export default function Home({data}) {
  console.log("data",data)
  return (
    <div className='container'>
      <h1> This is our front page</h1>    
    </div>
  )
}

export async function getServerSideProps() {
  const {NEXT_PUBLIC_API_URL} = process.env
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies`)
  const data = await res.json()
   return {
    props: {
          data
    }
  }
}