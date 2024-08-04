import Image1 from '../../assets/banner1.webp';
import Image2 from '../../assets/banner2.webp';
const CartPage = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap md:p-7 md:mx-20 gap-5">
      {/* left */}
      <div className="w-full md:w-4/5 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-medium">Cart</h1>
        <div className="flex-wrap flex md:py-5 md:mt-5 border-b-2 w-full md:gap-5">
          <img
            src={Image1}
            alt="image"
            height={300}
            width={180}
            className="rounded-lg object-cover max-h-[300px]"
          />
          <div className="mx-5">
            <h3 className="text-2xl font-medium">Slim Fit Casual Shirt</h3>
            <p className="text-sm text-black">
              Button-Down Collar & Placket...
            </p>
            <p className="text-gray-500 text-sm">
              Size <span className="font-medium text-black text-lg">XL</span>
            </p>
            <span className="text-2xl font-medium">$85</span>
          </div>
        </div>
        <div className="flex-wrap flex md:py-5 md:mt-5 border-b-2 w-full md:gap-5">
          <img
            src={Image2}
            alt="image"
            height={300}
            width={180}
            className="rounded-lg object-cover"
          />
          <div className="mx-5">
            <h3 className="text-2xl font-medium">Gold Hat Man</h3>
            <p className="text-sm text-black">
              Button-Down Collar & Placket...
            </p>
            <p className="text-gray-500 text-sm">
              Size <span className="font-medium text-black text-lg">M</span>
            </p>
            <span className="text-2xl font-medium">$35</span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-1/5 flex flex-col gap-5">
        <div className="p-3 bg-orange-100 rounded-lg">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="py-3 w-full flex justify-between">
            <p>Sub Total:</p>
            <span className="font-medium">$239.90</span>
          </div>
          <div className="py-3 w-full flex justify-between">
            <p>Discount:</p>
            <span className="font-medium">$35.52</span>
          </div>
          <div className="py-3 w-full flex justify-between">
            <p>Tax:</p>
            <span className="font-medium">$0.00</span>
          </div>
          <div className="py-3 w-full flex justify-between">
            <p>Shipping:</p>
            <span className="text-red-500 font-medium">Free</span>
          </div>
          <div className="py-3 w-full flex justify-between">
            <p>Total:</p>
            <span className="font-medium">$602.99</span>
          </div>
          <button className="bg-gray-900 text-gray-100 rounded-full p-2 w-full mt-2">
            Proceed to Checkout
          </button>
        </div>
        <div className="p-3 bg-orange-100 rounded-lg">
          {/* Add another row if needed */}
          <h2 className="text-xl font-medium">Have a Coupon?</h2>
          <div className="py-3 w-full flex justify-center">
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 bg-transparent focus:outline-none"
              placeholder="Coupon Code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
