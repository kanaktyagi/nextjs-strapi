import React from 'react'
import {Box, Flex} from 'reflexbox'
import styled from '@emotion/styled'
import fetch from 'isomorphic-unfetch'

function Movies({movie}) {
  return (
    <Box variant="container">
        <Box as="h2" my={40}>{movie.data.attributes.Title} </Box>
        <Box maxWidth={600}>
        <p dangerouslySetInnerHTML={{ __html:movie.data.attributes.description}}/>
        </Box>
    </Box>
  )
}
export async function getServerSideProps(context) {
    const {id} = context.query
    const {NEXT_PUBLIC_API_URL} = process.env
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies/${id}`)
    const data = await res.json()
    return{
        props: {
            movie: data
        }
    }
}

export default Movies