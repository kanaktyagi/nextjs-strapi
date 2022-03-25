import React from 'react'
import{Box} from "reflexbox"
import fetch from "isomorphic-unfetch"

function about({page}) {
  console.log("page", page.data.attributes)
  return (
    <Box variant="container">
      <Box as="h2" my={40}>{page.data.attributes.title}</Box>
      <div dangerouslySetInnerHTML={{ __html: page.data.attributes.content}}/>
    </Box>
  )
}
export async function getStaticProps() {
  const {NEXT_PUBLIC_API_URL} = process.env

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/pages/1`)
  const data = await res.json()
 
  return {
    props: {
      page: data
    },
    revalidate: 1
  }
}

export default about