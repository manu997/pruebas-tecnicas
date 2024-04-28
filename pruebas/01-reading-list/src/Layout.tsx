import allBooks from '../books.json';
import BookPreview from './components/BookPreview';
import BooksBasket from './components/BooksBasket';
import { useState } from 'react';
import Header from './components/Header';
import { IBook } from './types';

function Layout() {
  const [books, setBooks] = useState<IBook[]>(allBooks.library);
  const [showBasket, setShowBasket] = useState(false);

  return (
    <>
      <div className='flex flex-col justify-center lg:px-24 lg:py-5 p-3 gap-3'>
        <Header
          books={books}
          setBooks={setBooks}
          setShowBasket={setShowBasket}
        />
        <div className='flex flex-col gap-5'>
          {books.map((book) => (
            <BookPreview key={book.ISBN} book={book} />
          ))}
        </div>
      </div>
      {showBasket && <BooksBasket setShowBasket={setShowBasket} />}
    </>
  );
}

export default Layout;
