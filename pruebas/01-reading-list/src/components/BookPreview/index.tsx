import { useMemo } from 'react';
import { useBookStore } from '../../context';
import { IBook } from '../../types';
import { FaCheck, FaPlus } from 'react-icons/fa6';

const BookPreview = ({ book }: { book: IBook }) => {
  const { booksStored: books, addBook } = useBookStore();
  const isInBasket = useMemo(() => {
    return books.findIndex((b) => b.ISBN === book.ISBN) !== -1;
  }, [book.ISBN, books]);
  return (
    <div className='rounded-lg border border-light-200 flex md:flex-row flex-col md:gap-3 bg-sky-950'>
      <img
        className='md:w-36 h-auto rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none'
        key={book.ISBN}
        src={book.cover}
        alt={book.title}
        loading='lazy'
        decoding='async'
      />
      <div className='p-4 flex flex-col md:flex-1 justify-between'>
        <div className='mb-4'>
          <h1 className='text-xl text-gray-200'>{book.title}</h1>
          <p className='text-lg text-gray-400'>{book.author.name}</p>
          <p className='text-lg text-gray-400'>{book.pages} páginas</p>
          <p className='text-md mt-2 text-gray-400'>{book.synopsis}</p>
        </div>
        <button
          className={`px-4 py-2 mb-2 rounded-full text-gray-50 ${
            !isInBasket
              ? 'bg-sky-700 hover:bg-sky-600'
              : 'cursor-not-allowed bg-gray-600'
          } transition w-fit`}
          onClick={() => addBook(book)}
          disabled={isInBasket}
        >
          <div className='flex items-center gap-3'>
            {!isInBasket ? (
              <>
                <FaPlus />
                Añadir a mi lista de lectura
              </>
            ) : (
              <>
                <FaCheck />
                Añadido a la cesta
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default BookPreview;
