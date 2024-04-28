import { useBookStore } from '../../context';
import { FaX } from 'react-icons/fa6';

interface IBooksBasket {
  setShowBasket: React.Dispatch<React.SetStateAction<boolean>>;
}

const BooksBasket = ({ setShowBasket }: IBooksBasket) => {
  const { booksStored: books, removeBook } = useBookStore();

  return (
    <div className='flex flex-col md:gap-3 h-screen sticky top-0 bottom-0 right-0 w-[13rem] bg-sky-900 p-5 float-right'>
      <FaX
        className='cursor-pointer absolute top-5 right-5'
        color='white'
        onClick={() => setShowBasket((prev) => !prev)}
      />
      <h1 className='lg:text-2xl text-lg text-gray-200'>Cesta</h1>
      <hr className='opacity-80 border-t-gray-400 mb-3' />
      <div className=' overflow-y-scroll'>
        {books.map((book) => (
          <div
            className='flex flex-row items-center gap-2 relative p-2'
            key={book.ISBN}
          >
            <img
              className='md:w-full h-auto rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none'
              key={book.ISBN}
              src={book.cover}
              alt={book.title}
              loading='lazy'
              decoding='async'
            />
            <FaX
              className='cursor-pointer absolute top-0 right-0 bg-red-500 rounded-full p-1 w-6 h-6'
              onClick={() => removeBook(book.ISBN)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BooksBasket;
