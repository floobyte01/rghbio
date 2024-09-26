import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-red-500 mb-2 block text-lg font-semibold">
                  Travel with us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
                </h2>
                <p className="text-body-color mb-8 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p>
                <p className="text-body-color mb-12 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/10/f8650180385e100acabdaacef3d2f3081665364792110369_original.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.mptourism.com/web/image/catalog/New%20blogs/raja%20ram%20.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://natureworldwide.in/wp-content/uploads/2023/11/PachmarhiVV-Small.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
