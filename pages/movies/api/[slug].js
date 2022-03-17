import React from 'react'
import {Box, Flex} from 'reflexbox'
import styled from '@emotion/styled'
import fetch from 'isomorphic-unfetch'
import qs from 'qs'

function Movies({movie}) {
  return (
    <Box variant="container">
     <Box as="h2" my={40}>{movie.data[0].attributes.Title} </Box>
         <Box maxWidth={600}>
         <p dangerouslySetInnerHTML={{ __html:movie.data[0].attributes.description}}/>
         </Box>
    </Box>
  )
}
export async function getServerSideProps(context) {
    const {slug} = context.query
    const {NEXT_PUBLIC_API_URL} = process.env
    const query = qs.stringify({
      filters: {
        slug: {
          $eq: `${slug}`,
        },
      },
    }, {
      encodeValuesOnly: true,
    });
    
     console.log("fetch",`${NEXT_PUBLIC_API_URL}/api/movies/?${query}` )
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies/?${query}`)
    const data = await res.json()
    return{
        props: {
            movie: data
        }
    }
}

export default Movies