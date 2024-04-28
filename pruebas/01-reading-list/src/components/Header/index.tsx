import { useCallback, useMemo } from 'react';
import Select from '../SelectInput';
import allBooks from '../../../books.json';
import { IBook } from '../../types';
import { BiBasket } from 'react-icons/bi';
import { useBookStore } from '../../context';

interface IHeader {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  setShowBasket: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ books, setBooks, setShowBasket }: IHeader) => {
  const { booksStored } = useBookStore();

  const filterByGenre = useCallback(
    (genre: string) => {
      if (genre === 'all') {
        setBooks(allBooks.library);
      } else {
        const filteredBooks = allBooks.library.filter(
          (book) => book.genre === genre
        );
        setBooks(filteredBooks);
      }
    },
    [setBooks]
  );

  const genres = useMemo(() => {
    const allGenres = allBooks.library.map((book) => book.genre);
    const uniqueGenres = [...new Set(allGenres)];
    return uniqueGenres.map((genre) => ({ label: genre, value: genre }));
  }, []);

  return (
    <header className='gap-3 flex justify-between items-center pt-3 sticky top-0'>
      <div className='gap-3 flex flex-col'>
        <h1 className='lg:text-4xl text-3xl text-gray-200'>
          Catálogo de libros
        </h1>
        <h5 className='lg:text-xl text-lg text-gray-300'>
          Libros disponibles: {books.length}
        </h5>
        <div className='flex mb-5 lg:flex-row flex-col gap-3'>
          <Select
            label='Género'
            options={genres}
            onChange={(e) => filterByGenre(e.target.value)}
          />
        </div>
      </div>
      <div className='relative p-4 cursor-pointer'>
        <BiBasket
          className='text-gray-200'
          size={40}
          onClick={() => setShowBasket((prev) => !prev)}
        />
        <p className='p-1 w-7 h-7 text-lg font-bold bg-gray-100 rounded-full flex items-center justify-center absolute bottom-0 right-0'>
          {booksStored.length}
        </p>
      </div>
    </header>
  );
};

export default Header;
