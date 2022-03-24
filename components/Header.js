import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import {rem} from 'polished'
import {Flex,Box} from 'reflexbox'
import Navigation from './Navigation'
import Link from 'next/link'
import {useContext} from 'react'
import HeaderContext from "./ContextWrapper"
import ToggleNavigationColorButton from './ToggleNavigationColorButton'

function Header({isDark}) {
  const {menuItems} = useContext(HeaderContext)
  console.log("menuItemsss", menuItems)
  
  return (
    <HearderStyles isDark={isDark}>
     <Box variant='container'>
     <Flex justifyContent="space-between" alignItems="center">
       <div className="logo"> 
       <Link href="/">
       <a>
        <Image src="/images/logo.svg" alt="sites logo" width="20" height="20"/>
        <span className="logo-text">Next Movies</span>
        </a>
        </Link>
     </div>
     <Navigation/>
     <ToggleNavigationColorButton/>
     </Flex>
     </Box>
     </HearderStyles>
  )
}

const HearderStyles = styled.header`
background : ${props =>props.isDark ? '#000000' : '#efefef'};
padding:20px;
.logo {
    a{
    display: flex;
    align-items: center;
    position:relative;
    }
    .logo-text {
        color: #333333;
        font-weight: bold;
        font-size: ${rem(20)};
        margin-left: ${rem(20)};
    }
}
`

export default Header