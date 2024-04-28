interface ISelect {
  label: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ label, options, onChange }: ISelect) => {
  return (
    <div className='flex flex-col md:w-56'>
      <label
        htmlFor='filter-title'
        className='md:text-lg text-lg text-gray-300 ml-2'
      >
        {label}
      </label>
      <select
        name='filter-title'
        className='px-4 py-2 rounded-lg'
        onChange={onChange}
      >
        <option value='all'>Todos</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
