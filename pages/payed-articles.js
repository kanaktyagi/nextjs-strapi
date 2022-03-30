import React from 'react'
import {Box} from "reflexbox"
const {NEXT_PUBLIC_API_URL} = process.env

function payedArticles({articles, authData}) {
    console.log("articles", articles)
  return (
   <div>
    <Box variant="container">
        <Box as="h2" my={40}>
            Payed articles
        </Box>
    </Box>
   </div>
  )
}

export async function getServerSideProps() {
    const loginInfo={
        identifier: 'test@test.com',
        password: 'Kanak@123'
    }
    const login = await fetch (`${NEXT_PUBLIC_API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    })
    const loginRespnse = await login.json()
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/payed-articles`, {
        headers: {
            Authorization: `Bearer ${loginRespnse.jwt}`
        }
    })
    const articles = await res.json()
    return{
        props: {
            articles: articles,
            authData: loginRespnse
        }
    }
}

export default payedArticles