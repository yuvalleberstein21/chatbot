import BannerWomanImage from '../assets/banner-woman1.webp';
const BannerProducts = () => {
  return (
    <div className="flex md:flex-wrap p-7 py-10 mt-10">
      <div className="w-full md:flex gap-2">
        <div className="md:w-2/3 w-full rounded-lg bg-orange-600">
          <h1 className="h1-banner uppercase text-black font-bold p-5">
            we're changing <br />
            the way things <br />
            get made.
          </h1>
          <p className="border border-gray-900 w-full"></p>
          <div className="flex justify-between w-full mx-auto p-7">
            <div>
              <h2 className="uppercase text-black text-lg font-medium">
                <i className="fa-solid fa-globe m-2 text-white"></i>
                mission
              </h2>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia ipsa saepe inventore ad in, ullam dicta vitae corporis
                veniam. Tenetur.
              </span>
            </div>

            <div>
              <h2 className="uppercase text-black text-lg font-medium">
                <i className="fa-solid fa-earth-europe m-2 text-white"></i>
                sustaniblity
              </h2>
              <span>
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia ipsa saepe inventore ad in, ullam dicta vitae corporis
                veniam. Tenetur.
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full rounded-lg">
          <img
            src={BannerWomanImage}
            alt="Left Image"
            className="w-full h-[500px] object-cover rounded-lg bg-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerProducts;
