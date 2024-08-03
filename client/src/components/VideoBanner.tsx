const VideoBanner = () => {
  return (
    <div className="w-full p-7 flex flex-col items-center justify-center">
      <h1 className="uppercase font-bold text-4xl">
        want to design your own? calm, we can do it!
      </h1>
      <div className="w-full mt-5 bg-black rounded-lg">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_I56eDHwQr8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBanner;
