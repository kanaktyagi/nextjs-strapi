import styled from '@emotion/styled'
import React from 'react'

const TvShowContainer = styled.div`
width: 100%;
height: 6em;
display: flex;
border-bottom:  1px solid #d8d8d852;
padding: 6px 8px;
align-items: center;
`;
const Thumbnail = styled.div`
width: auto;
height: 100%;
display: flex;
flex: 0.4;
img {
    width: auto;
    height: 100%;
}
`;
const Name = styled.h3`
font-size: 15px;
color:#000;
margin-left: 10px;
display: flex;
flex:2;
justify-content: flex-start;
`;
const Rating = styled.span`
color: #a1a1a1;
font-size: 16px;
display: flex;
flex: 0.5;
`;
const LineSeparator = styled.span`
display: flex;
//min-width: 100%;
min-height: 2px;
background-color: #d8d8d878;
`

function TvShow(props) {
  const {thumbnailSrc, name, rating } = props
  
  return (
  
    <TvShowContainer>
        <Thumbnail>
        <img src={thumbnailSrc} />
        </Thumbnail>
        <Name>{name}</Name>
      {rating ? <Rating>{rating}</Rating> : <Rating>5</Rating>}

    </TvShowContainer>
  
  )
}

export default TvShow