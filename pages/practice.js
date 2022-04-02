import React from 'react'
import styled from '@emotion/styled'
import SearchBar from '../components/search'


const PracticeContainer= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
margin-top: 7em;
`
function practice() {
  return (
    <PracticeContainer>
        <SearchBar/>
    </PracticeContainer>
  )
}


export default practice