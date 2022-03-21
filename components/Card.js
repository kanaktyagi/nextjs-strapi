import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export default function Card({movie}) {
  const {NEXT_PUBLIC_API_URL} = process.env
  return (
   <CardStyled>
   <div className='poster'>
   <img src={ NEXT_PUBLIC_API_URL + movie.attributes.Poster.data.attributes.formats?.small?.url}/>
   </div>
   <div className='body'>
   <h3>{movie.attributes.Title}</h3>
   <p dangerouslySetInnerHTML={{__html: movie.attributes.description}}/>
   <Link href="/movies/api/[slug]" as={`movies/api/${movie.attributes.slug}`}>
   <a>More about this movies</a>
   </Link>
   </div>
   </CardStyled>
  )
}

const CardStyled = styled.div `
width: 100%;
border: 1px solid #cccccc;
margin-top: 50px;
border-radius: 20px;
overflow: hidden;
box-shadow: 0 0 10px rgba(0,0,0,0.2);

.body {
  padding: 20px;
}
h3 {
  margin-bottom: 20px;
}
p {
  color: #666666;
  line-height: 1.5;
}
a{
  display: inline-block;
  margin: 20px 0;
  color: #4d1a7f;
  text-decoration: underline;
}
 
`