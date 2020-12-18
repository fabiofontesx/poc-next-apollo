import Head from 'next/head';
import Books from '../templates/Books';

import { ALL_BOOKS } from '../lib/queries';
import apolloClient from '../lib/apolloClient';

const Home = ({books}) =>{
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {books &&<Books booksData={books.data.books} />}
    </div>
  );
};


export async function getServerSideProps({ params, req, res }) {
  let error = null;
  try{
    const books = await apolloClient.query({ query: ALL_BOOKS });
    return {
      props:
      {
        books,
        error
      }
    };
  }catch(erro){
    return {
      props: {
        books: null
      }
    };
  }
}


export default Home;


