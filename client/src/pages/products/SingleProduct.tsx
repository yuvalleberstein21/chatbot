import Image1 from '../../assets/banner1.webp';
const SingleProduct = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-7">
      {/* left */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={Image1}
          alt="image"
          className="object-cover rounded-lg w-[750px] h-full"
        />
      </div>
      {/* right */}
      <div className="w-full md:w-1/2 flex flex-col justify-between min-h-full p-5">
        <div>
          <h1 className="uppercase font-medium text-xl">green footer</h1>
          <p className="md:mt-5">
            ⭐️⭐️⭐️⭐️⭐️{' '}
            <span className="text-gray-500 text-sm">reviews</span>
          </p>
          <h1 className="md:mt-5 md:py-3 text-4xl font-medium mb-3">$199.00</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            libero eum atque, quam voluptates, nostrum quisquam omnis cum a,
            reiciendis cumque deserunt vel impedit porro voluptate molestias
            temporibus ea aut?
          </p>
        </div>
        <div>
          <span className="font-medium text-gray-600 text-md">Size:</span>
          <div className="flex flex-wrap gap-4 mt-2 max-w-lg">
            <span className="border border-gray-300 rounded-md p-1 px-5 cursor-pointer hover:bg-black hover:text-white">
              XS
            </span>
            <span className="border border-gray-300 rounded-md p-1 px-5 cursor-pointer hover:bg-black hover:text-white">
              S
            </span>
            <span className="border border-gray-300 rounded-md p-1 px-5 cursor-pointer hover:bg-black hover:text-white">
              M
            </span>
            <span className="border border-gray-300 rounded-md p-1 px-5 cursor-pointer hover:bg-black hover:text-white">
              L
            </span>
            <span className="border border-gray-300 rounded-md p-1 px-5 cursor-pointer hover:bg-black hover:text-white">
              XL
            </span>
            <span className="border border-gray-300 rounded-md p-1 px-5 cursor-pointer hover:bg-black hover:text-white">
              XXL
            </span>
          </div>
          <button className="md:mt-5 mt-4 bg-black text-gray-100 p-2 text-center rounded-lg w-1/2">
            <i className="fa-solid fa-cart-plus m-2"></i>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
