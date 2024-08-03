import Image1 from '../assets/banner1.webp';
import Image2 from '../assets/banner2.webp';
import Image3 from '../assets/banner3.webp';
const ProductsCards = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent p-7">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
          <div className="relative group rounded-lg overflow-hidden">
            <img
              src={Image1}
              alt=""
              className="rounded-lg object-cover h-96 w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <div className="flex flex-col gap-2">
                <button className="bg-white text-xl text-black px-4 py-1 rounded-full uppercase text-BebasNeue">
                  add to cart
                </button>
                <button className="bg-black text-white text-xl px-4 py-1 rounded-full uppercase text-BebasNeue">
                  buy now
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-700 uppercase mt-1">Shirts new era</p>
          <p className="text-red-700 font-bold">$80.99</p>
        </div>
        <div>
          <div className="relative group rounded-lg overflow-hidden">
            <img
              src={Image2}
              alt=""
              className="rounded-lg object-cover h-96 w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <div className="flex flex-col gap-2">
                <button className="bg-white text-xl text-black px-4 py-1 rounded-full uppercase text-BebasNeue">
                  add to cart
                </button>
                <button className="bg-black text-white text-xl px-4 py-1 rounded-full uppercase text-BebasNeue">
                  buy now
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-700 uppercase mt-1">Shirts new era</p>
          <p className="text-red-700 font-bold">$80.99</p>
        </div>
        <div>
          <div className="relative group rounded-lg overflow-hidden">
            <img
              src={Image3}
              alt=""
              className="rounded-lg object-cover h-96 w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <div className="flex flex-col gap-2">
                <button className="bg-white text-xl text-black px-4 py-1 rounded-full uppercase text-BebasNeue">
                  add to cart
                </button>
                <button className="bg-black text-white text-xl px-4 py-1 rounded-full uppercase text-BebasNeue">
                  buy now
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-700 uppercase mt-1">Shirts new era</p>
          <p className="text-red-700 font-bold">$80.99</p>
        </div>
        <div>
          <div className="relative group rounded-lg overflow-hidden">
            <img
              src={Image3}
              alt=""
              className="rounded-lg object-cover h-96 w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <div className="flex flex-col gap-2">
                <button className="bg-white text-xl text-black px-4 py-1 rounded-full uppercase text-BebasNeue">
                  add to cart
                </button>
                <button className="bg-black text-white text-xl px-4 py-1 rounded-full uppercase text-BebasNeue">
                  buy now
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-700 uppercase mt-1">Shirts new era</p>
          <p className="text-red-700 font-bold">$80.99</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
