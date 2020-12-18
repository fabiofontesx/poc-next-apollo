import Head from 'next/head';
import Books from '../templates/Books';

import { ALL_BOOKS } from '../lib/queries';
import { useQuery, useMutation } from '@apollo/client';

const Home = () =>{
  const {error, data, loading} = useQuery(ALL_BOOKS);
  const bookData = data && data.books;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Books booksData={bookData} />
    </div>
  );
};




export default Home;


