const CategoriesSelections = () => {
  return (
    <div className="p-7 mt-10 w-full">
      <h1 className="h2-banner uppercase text-black">shop by essentials</h1>
      <div className="flex flex-wrap justify-center gap-3 py-2">
        <button className="uppercase border border-gray-500 rounded-full text-xl px-4 py-1 text-BebasNeue hover:bg-black hover:text-white">
          All
        </button>
        <button className="uppercase border border-gray-500 rounded-full text-xl px-4 py-1 text-BebasNeue hover:bg-black hover:text-white">
          winter collection
        </button>{' '}
        <button className="uppercase border border-gray-500 rounded-full text-xl px-4 py-1 text-BebasNeue hover:bg-black hover:text-white">
          new arrivals
        </button>{' '}
        <button className="uppercase border border-gray-500 rounded-full text-xl px-4 py-1 text-BebasNeue hover:bg-black hover:text-white">
          best sellers
        </button>{' '}
        <button className="uppercase border border-gray-500 rounded-full text-xl px-4 py-1 text-BebasNeue hover:bg-black hover:text-white">
          flash sale
        </button>
      </div>
    </div>
  );
};

export default CategoriesSelections;
