import styled from '@emotion/styled'
import React,{useState} from 'react'
import {Box} from "reflexbox"
const {NEXT_PUBLIC_API_URL} = process.env

function login() {
  const [ username, setUsername] = useState('')
  const [ password, setPassword] = useState('')
 async function handleClick () {
    const loginInfo = {
      identifier: username,
      password: password
    }
    const login = await fetch(`${NEXT_PUBLIC_API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Accept": 'appliction/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })
    const loginRespnse = await login.json()
    console.log("loginRespnse", loginRespnse)
  }
  return (
    <LonginStyled>
        <Box variant="container">
          <Box as="h2" my={40}>
          You need to login in
          </Box>
          <form>
            <input type="email" onChange={e =>setUsername(e.target.value)} value={username}/><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password}/><br/>
            <button type='button' onClick={() => handleClick()}>Login</button>
          </form>
        </Box>
    </LonginStyled>
  )
}

const LonginStyled = styled.div`
input{
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

`

export default login