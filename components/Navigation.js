import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Navigation() {
    const router = useRouter()
  return (
    <NavigationStyled>Navigation</NavigationStyled>
  )
}

export default Navigation

const NavigationStyled = styled.div`
ul {
    list-style: none;
    padding:0;
    margin: 0;
    display: flex;
}
li {
    margin-left: 10px;
}
a {
    text-decoration: none;
    color: #4C9EE3;
    &:hover{
        text-decoration: underline;
    } 
    &:active{
        color: #EF6800;
    }
}
`