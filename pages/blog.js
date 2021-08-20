import Header from '../src/components/Header'
import Logo from '../src/components/Logo'
import Nav from '../src/components/Nav'
import Post from '../src/components/Post'
import BlogMain from '../src/components/BlogMain'

import { request } from "../src/libs/dato-cms";

const BLOG_QUERY = `query {
  allPosts {
    id
    title
		datatime
    article
    img{url}
  }
}`;
  export async function getStaticProps() {
    const data = await request({
      query: BLOG_QUERY,
      variables: { limit: 10 }
    });
    return {
      props: { 
          data 
        }, 
      revalidate: 120
    };
  }

function Blog({data}) {
    return(   
        <>
            <Header>
                <Logo />
            </Header>
            <Nav />
            <h1>blog</h1>
            <BlogMain>
            {data.allPosts.map((post, index)=>{
              return <Post key={index} dados={post} />
            })}
            </BlogMain>
            {console.log("aqui tem data",data.allPosts)}
        </>
    )
}

export default Blog