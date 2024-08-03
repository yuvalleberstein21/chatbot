import Image1 from '../../assets/banner1.webp';
import Image2 from '../../assets/banner2.webp';
import Image3 from '../../assets/banner3.webp';
const BannerPage = () => {
  return (
    <div className="flex flex-wrap p-7">
      {/* <!-- Left Column --> */}
      <div className="w-full md:w-1/2 rounded-lg relative">
        <img
          src={Image1}
          alt="Left Image"
          className="w-full h-full object-cover rounded-lg bg-center"
        />
        <div className="absolute flex justify-center gap-5 bottom-5 right-10 left-10">
          <button className="uppercase bg-gray-100 font-medium text-md text-black rounded-full p-1 items-center w-1/2">
            Learn more
            <i className="fa-solid fa-arrow-down m-2"></i>
          </button>
          <button className="uppercase w-1/2 text-md font-medium text-white gap-5 items-center bg-black bg-opacity-60 rounded-full p-1">
            contact us
            <i className="fa-regular fa-envelope items-end m-2"></i>
          </button>
        </div>
      </div>
      {/* <!-- Right Column --> */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* <!-- Big Image --> */}
        <div className="flex-grow mx-2 bg-[rgba(234,228,225,255)] rounded-lg">
          <h1 className="p-5 text-black font-bold uppercase h1-banner">
            real designs <br /> by real artists <br /> for real people
          </h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{' '}
            Eligendi sint ab harum incidunt non voluptates fugit doloribus{' '}
            <br />
            placeat tenetur ullam.
          </p>
        </div>
        {/* <!-- Small Images --> */}
        <div className="flex mt-4 space-x-4 mx-2">
          <div className="w-1/2 rounded-lg relative">
            <img
              src={Image2}
              alt="Small Image 1"
              className="w-full h-full object-cover rounded-lg relative"
            />

            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <h2 className="absolute text-white uppercase bottom-3 left-4 font-bold h2-banner">
              #trending 2024
            </h2>
          </div>
          <div className="w-1/2 rounded-lg relative">
            <img
              src={Image3}
              alt="Small Image 2"
              className="w-full h-full object-cover rounded-lg relative"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <h2 className="absolute text-white uppercase bottom-3 left-4 font-bold h2-banner">
              #oldbutgold
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
