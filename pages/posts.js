import {Flex, Box} from 'reflexbox'
const { NEXT_PUBLIC_API_URL } = process.env;
import Post from "../components/Post";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect,useState } from 'react';

const Posts =({data}) => {
    const [posts, setPosts] = useState(data)
    const getMorePosts = async() => {
        const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/posts?_start=${posts.length}&_limit=10`)
        const newPosts  = await  res.json()
        if( newPosts){
            console.log("newPosts", newPosts)
        setPosts(prevPosts => [...prevPosts, ...newPosts.data])
        }
    }
   
    return (
        <Box variant="container">
            <Box my={40} as="h2"> Posts </Box>
         <InfiniteScroll 
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={true}
          loader={<h4>Loading.....</h4>}
          endMessage={
              <p style={{textAlign: "center"}}>
              <b>YAY!!! You have seen it all</b>
              </p>
          }
         >
      
         {posts.map(post => (
            <Post key={post.id} post={post}/>
        ))}
         </InfiniteScroll>
          
        </Box>
    )
}

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/posts?_limit=10`)
  const data = await res.json()
  return {
      props: {
          data: data.data
      }
  }
}
export default Posts