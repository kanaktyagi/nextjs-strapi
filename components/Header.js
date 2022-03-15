import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import {rem} from 'polished'

function Header({isDark}) {
  return (
    <HearderStyles isDark={isDark}>
     <div className='container'>
       <div className="logo">
     <Image src="/images/logo.svg" alt="sites logo" width="20" height="20"/>
     <span className="logo-text">Next Movies</span>
     </div>
     
     </div>
     </HearderStyles>
  )
}

const HearderStyles = styled.header`
background : ${props =>props.isDark ? '#000000' : '#efefef'};
padding:20px;
.logo {
    display: flex;
    align-items: center;
    position:relative;
    .logo-text {
        color: #333333;
        font-weight: bold;
        font-size: ${rem(20)};
        margin-left: ${rem(20)};
    }
}
`

export default Header