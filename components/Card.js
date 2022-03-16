import styled from '@emotion/styled'

import React from 'react'

export default function Card({movie}) {
  const {NEXT_PUBLIC_API_URL} = process.env
  return (
   <CardStyled>
   <div className='poster'>
   <img src={ NEXT_PUBLIC_API_URL + movie.attributes.Poster.data.attributes.formats.medium.url}/>
   </div>
   <div className='body'>
   <h3>{movie.attributes.Title}</h3>
   <p dangerouslySetInnerHTML={{__html: movie.attributes.description}}/>
   </div>
   </CardStyled>
  )
}

const CardStyled = styled.div `
width: 400px;
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
 
`