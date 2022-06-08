// import {useRouter} from 'next/router'
import Link from 'next/link'

const article = ({article}) => {
    // const router =useRouter()
    // const {id } = router.query
  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>

        <Link href='/'>Go Back</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()
  
  return{
      props: {
          article
      }
  }
}


export async function getStaticPaths(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const articles = await res.json()
  const ids = articles.map(article=> article.id)
  const paths = ids.map((id => ({params: {id: id.toString()
  }})))

return{
  paths, 
  fallback: false,
 } 
}

export default article