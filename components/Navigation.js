import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Navigation({navigation}) {
    console.log("navigation", navigation)
    const router = useRouter()
    console.log("router.pathname" , router.pathname)

  return (
    <NavigationStyled>
        <ul>  
        { navigation.map(item => (
            <li key={item.id}>
                <Link href={item.attributes.slug}> 
                    <a className={router.pathname === item.attributes.slug ? "active" : " "}>{item.attributes.title} </a>
                </Link>
            </li>
        ))}  
           
        </ul>
    </NavigationStyled>
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
    color: blue;
    &:hover{
        text-decoration: underline;
    } 
    &:active{
        color: orange;
    } 
    a{
        :active {
            color: pink;
        }
    } 
}
`