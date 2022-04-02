import styled from '@emotion/styled'
import React, { useState,useRef } from 'react'
import {IoSearch,IoClose }from 'react-icons/io5'
import { motion,AnimatePresence } from 'framer-motion';
import  MoonLoader  from 'react-spinners/MoonLoader';

const SearchBarContainer = styled(motion.div)`
display: flex;
flex-direction: column;
width: 34em;
height: 3.8em;
background-color: #fff;
border-radius: 6px;
box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.14);
overflow: hidden;
`;
const SearchInputContainer = styled.div`
width: 100%;
min-height: 4em;
display: flex;
align-items: center;
position: relative;
padding: 2px 15px;
`;
const SearchInput = styled.input`
width: 100%;
height: 100%;
outline: none;
border: none;
font-size: 21px;
color: #12112e;
font-weight: 400;
border-radius: 6px;
background-color: transparent;

&:focus {
    outline: none;
    &::placeholder {
        opacity: 0;
    }
}
&::placeholder {
    color: #bebebe;
    transition:  all 250ms ease-in-out;
}
`
const SearchIcon = styled.span`
color: #bebebe;
font-size: 27px;
margin-right: 10px;
margin-top: 6px;
vertical-align: middle;
`
const CloseIcon = styled(motion.span)`
color: #bebebe;
font-size:23px;
margin-right:10px;
margin-top:6px;
vertical-align:middle;
transition: all 200ms ease-in-out;
cursor: pointer;
&:hover {
    color: #dfdfdf;
}
`
const containerVariant = {
    expanded: {
        height: "20em",
    },
    collapsed: {
        height: "3.8em"
    }
}
const containerTransition = {
    type: 'spring',
    damping: 22,
   stiffness: 150
}
const SearchContent = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 1rem;
`
const LineSeparator = styled.span`
display: flex;
min-width: 100%;
min-height: 2px;
background-color: #d8d8d878;
`
const LoadingWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
function SearchBar() {
    const [isExpanded, setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const inputRef = useRef()
    const expandContainer = () => {
        setExpanded(true)
    }
    const changeHandler=(e) => {
        e.preventDefault();
        setSearchQuery(e.target.value)
    }
    const collapseContainer = () => {
        setExpanded(false)
        setSearchQuery("")
        if(inputRef.current) {
            inputRef.current.value=""
        }
    }
  return (
    <SearchBarContainer transition={containerTransition} animate={isExpanded ? "expanded": "collapsed"} variants={containerVariant}>
        <SearchInputContainer>
            <SearchIcon>
                <IoSearch/>
            </SearchIcon>
            <SearchInput ref={inputRef}
             placeholder='search for movies and shows'
              onFocus={expandContainer}
               onBlur={collapseContainer}
               onChange={changeHandler}
               value={searchQuery}
               ></SearchInput>
            <AnimatePresence>
          { isExpanded && <CloseIcon
             key="close-icon" 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity:0}}
             transition={{duration: 0.2}}
              onClick={collapseContainer}>
                <IoClose/>
            </CloseIcon>
          }
        </AnimatePresence>

        </SearchInputContainer>
        <LineSeparator/>
            <SearchContent> 
                <LoadingWrapper>
                    <MoonLoader loading color='#000' size={20}/>
                </LoadingWrapper>
            </SearchContent>
    </SearchBarContainer>
  )
}

export default SearchBar