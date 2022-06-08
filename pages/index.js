import Head from 'next/head'
import ArticleList from '../Components/ArticleList'

export default function Home({articles}) {

  return (
    <div>
<Head>
  <title>EDU nextjs app</title>
  <meta name='keywords' content='nextjs blogs' />
</Head>

  <ArticleList articles={articles}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   const articles = await res.json()

   return{
     props: {
       articles
     }
   }
}