import React from 'react'
import {Box} from "reflexbox"
const {NEXT_PUBLIC_API_URL} = process.env

function payedArticles({articles, authData}) {
    console.log("articles", articles)
  return (
   <div>
    <Box variant="container">
        <Box as="h2" my={40}>
            Payed articles
        </Box>
    </Box>
   </div>
  )
}

export async function getServerSideProps() {
   
    return{
      props: {
          
      }
    }
}

export default payedArticles