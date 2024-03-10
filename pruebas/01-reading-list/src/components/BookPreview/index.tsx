import { IBook } from '../../types';

const BookPreview = ({ book }: { book: IBook }) => {
  return (
    <div className='rounded-lg border border-light-200 flex md:flex-row flex-col md:gap-3'>
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
        <button className='px-4 py-2 mb-2 bg-sky-700 rounded-full text-gray-50 hover:bg-sky-600 transition w-fit'>
          + Añadir a mi lista de lectura
        </button>
      </div>
    </div>
  );
};

export default BookPreview;
