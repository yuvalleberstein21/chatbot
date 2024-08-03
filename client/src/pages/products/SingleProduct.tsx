import Image1 from '../../assets/banner1.webp';
const SingleProduct = () => {
  return (
    <div className="flex flex-wrapl p-7 gap-4">
      <div className="w-full md:w-1/2 ">
        <img
          src={Image1}
          alt="image"
          className="object-cover rounded-lg w-[750px] h-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h1>NEW CLOTHES</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
