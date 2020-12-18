import { useEffect } from "react";

const Books = ({ booksData}) => {
  console.log(booksData);
  useEffect(() => {
    console.log(booksData)
    if(!booksData){
      alert('Não tem livro');
    }
  }, [booksData]);
  return (
    <div>
      { booksData && booksData.map(book => (
        <div key={book.title}>
          <h1>{book.title}</h1>
          <h2>Autor: {book.author}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Books;