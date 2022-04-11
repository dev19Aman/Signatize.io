import Footer from "Component/Footer/Footer";
import React from "react";

const Tutorials = () => {
  return (
    <>
      <div className="mt-20 w-10/12 mb-24 gap-6 mx-auto grid  md:grid-cols-2 bg-gray-50 animate__animated animate__fadeInRight animate__faster">
        {[...new Array(6)].map((v, i) => (
          <div
            className="bg-gray-200 h-72 rounded-lg shadow-lg overflow-hidden"
            key={i}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dFW7zT9X59k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="mt-6 bottom-0 w-screen">
        <Footer />
      </div>
    </>
  );
};

export default Tutorials;
