import React from "react";


const Navbar = () => {
  return (
    <>
        <nav className="flex justify-between items-center px-32 xs:px-2 ss:px-4 sm:px-6 py-4 sticky top-0 z-30 bg-white">
          <a to="/">
            <h3 className="text-2xl xs:text-sm font-extrabold text-red-500">
              SD METAL
            </h3>
          </a>
          <div className="text-xl xs:text-sm text-center font-semibold">
            <p>+381642486474</p>
            <p>sale1970@live.com</p>
            <p>Knjaza Miloša 23, 18211, Trupale</p>
          




          </div>
        </nav>
    </>
  );
};

export default Navbar;