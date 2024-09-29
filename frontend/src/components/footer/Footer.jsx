import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      <div className="">
      <img src="/logo/Lucky2.png" className="h-14 w-14 relative ml-24 rounded-md " />
        <p className="py-4">
        Ujjain also boasts a rich cultural heritage, with ancient astronomical sites like the Vedh Shala, constructed by Raja Jai Singh for celestial observations.
        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6">
          <FaWhatsappSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="flex md:justify-around justify-start mt-8">
        <div>
          <h6 className="font-bold text-red-500">Reservations</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Hotels</li>
            <li className="py-2 text-sm">Tour Packages</li>
            <li className="py-2 text-sm">Vehicles</li>
            <li className="py-2 text-sm">Restaurants</li>
            <li className="py-2 text-sm">Events</li>
          </ul>
        </div>
        <div className="ml-[8rem]">
          <h6 className="font-bold text-red-500">Support</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Contact us</li>
            <li className="py-2 text-sm">About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
