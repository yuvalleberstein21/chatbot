import modelVideo from '../assets/6007969_4k_Beautiful_1280x720 (1).mp4';
const VideoBanner = () => {
  return (
    <div className="w-full p-7 flex flex-col items-center justify-center">
      <h1 className="uppercase font-bold text-4xl py-4">
        want to design your own? calm, we can do it!
      </h1>
      <div className="w-full max-h-[650px] overflow-hidden rounded-lg">
        <video
          className="w-full h-full object-cover rounded-lg"
          controls
          autoPlay
          muted
          loop
          src={modelVideo}
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoBanner;
