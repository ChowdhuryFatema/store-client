

const ParallaxOverlay = () => {
  return (
    <div className='coupon-bg'>
      <div className='bg-black/75 !p-5 md:!p-10 lg:!p-16'>
        <div className='flex items-center justify-center h-full w-full'>
          <div>
            <h2 data-aos="flip-left" data-aos-duration="500" className='merienda uppercase text-xl md:text-3xl lg:text-5xl font-bold text-center !py-10'>
              <span className='text text-white'>Ride Beyond Limits</span> <br />
              <p className='text-orange-500 !pt-5'>Find Your Perfect Bike Today!</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxOverlay;
