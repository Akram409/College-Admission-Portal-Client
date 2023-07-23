import banner from "../../../assets/img/slider/sl1.png";
const Banner = () => {
  return (
    <div className="">
      <div className="w-full  ">
        <div className="w-full relative">
          <img src={banner} className="w-full object-fill h-[100vh]" />
          <div className="absolute flex items-center h-full gap-5 left-16 top-3 ">
            <div className="lg:space-y-7 lg:pl-12 w-full lg:w-1/2 ">
              <h5
                className="text-3xl font-bold text-white "
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                welcome To Qeducato
              </h5>
              <h2
                className="text-5xl font-bold text-white "
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                Education is the best key success in life
              </h2>
              <p className="text-white" data-animation="fadeInUp" data-delay=".6s">
                Donec vitae libero non enim placerat eleifend aliquam erat
                volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed
                nisl tristique, commodo gravida lectus non.
              </p>
              <div>
                <button className="btn btn-active btn-warning w-1/3 text-white text-xl hover:btn-secondary hover:text-black">
                  Explore Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
