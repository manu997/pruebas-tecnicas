import allBooks from '../books.json';
import BookPreview from './components/BookPreview';
import Select from './components/Select';
import { useMemo, useState, useCallback } from 'react';

function Layout() {
  const [books, setBooks] = useState(allBooks.library);

  const filterByGenre = useCallback((genre: string) => {
    if (genre === 'all') {
      setBooks(allBooks.library);
    } else {
      const filteredBooks = allBooks.library.filter(
        ({ book }) => book.genre === genre
      );
      setBooks(filteredBooks);
    }
  }, []);

  const genres = useMemo(() => {
    const allGenres = allBooks.library.map(({ book }) => book.genre);
    const uniqueGenres = [...new Set(allGenres)];
    return uniqueGenres.map((genre) => ({ label: genre, value: genre }));
  }, []);

  return (
    <main className='flex md:flex-row flex-col justify-center mt-6 mb-12 mx-5'>
      <div className='md:w-[25%]'></div>
      <div className='flex flex-col md:w-[50%] justify-center gap-3'>
        <h1 className='md:text-4xl text-3xl text-gray-200'>
          Catálogo de libros
        </h1>
        <h5 className='md:text-xl text-lg text-gray-300'>
          Libros disponibles: {books.length}
        </h5>
        <hr className='opacity-8 ' />
        <div className='flex mb-5 md:flex-row flex-col gap-3'>
          <Select
            label='Género'
            options={genres}
            onChange={(e) => filterByGenre(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-5'>
          {books.map(({ book }) => (
            <BookPreview key={book.ISBN} book={book} />
          ))}
        </div>
      </div>
      <div className='md:w-[25%]'></div>
    </main>
  );
}

export default Layout;
