import React from "react";
import img from "../assets/photo1.jpg";
import Divider from "../common/Divider";
import SinglePageSlider from "../common/SinglePageSlider";
import { Ri24HoursLine } from 'react-icons/ri'

const SinglePage = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-center items-center space-y-10 absolute top-[50%] -translate-y-[50%] z-10 text-start left-20 xs:left-36">
          <h1 className="text-xl xs:text-[.75rem] ss:text-[1rem] sm:text-[1.5rem] text-white font-[900]">
            <p>100% ZADOVOLJNIH KLIJENATA</p>
            <p>100% KVALITET</p>
            <p>100% GARANCIJA</p>
            <div className="flex text-xl xs:text-[.75rem] ss:text-[1rem] sm:text-[1.5rem] text-white font-[900]">
           <Ri24HoursLine className="text-2xl mr-2"/>
            <p> 24h DOSTUPNI</p>
          </div>
          </h1>
        </div>
        <div className="h-[500px]">
          <img
            src={img}
            className="w-[100%] h-[100%] object-cover brightness-[.7]"
          />
        </div>
      </div>

      <div className="singleWrapper w-[90%] mx-auto text-center text-black mt-20 py-4 relative shadow-slate-400 shadow-lg rounded-[10px]">
        <h2 className="text-3xl xs:text-base ss:text-xl sm:text-xl md:text-2xl font-bold inline mx-2">
          O nama:
        </h2>
        <p className="mt-20 xs:mt-4 ss:mt-6 sm:mt-8 md:mt-10 text-center sm:text-base xs:text-sm px-20 xs:px-4">
          Mi smo mala ali vrlo ozbiljna firma sa savremenom opremom i velikim
          iskustvom u obradi metala. Uspešno zadovoljavamo stroge zahteve sve
          brojnijih klijenata. Nalazimo se u selu Trupale, blizu Niša. Kvalitet,
          fleksibilnost i pouzdanost metalne obrade su karakteristike na koje
          smo veoma ponosni, a u kombnaciji sa iskustvom i bogatim znanjem to
          predstavlja našu najveću snagu! Pozovite nas i bićemo vaš siguran
          partner!
        </p>
        <Divider />
      </div>

      <div className="popular h-full">
        <article className="px-20 pt-16">
          <SinglePageSlider />
        </article>
        <Divider />
      </div>

      <div className="singleWrapper w-[90%] mx-auto text-center text-black mb-20 py-4 relative shadow-slate-400 shadow-lg rounded-[10px]">
        <h2 className="text-3xl xs:text-base ss:text-xl sm:text-xl md:text-2xl inline mx-2 font-bold">
          Nudimo sve vrste usluga:
        </h2>
        <div className="flex justify-center items-center">
        <ul className="mt-20 xs:mt-4 ss:mt-6 sm:mt-8 md:mt-10 text-start sm:text-base xs:text-sm px-8 xs:px-4 list-disc">
          <li>Metalostrugarskih</li>
          <li>Glodačkih</li>
          <li>Mašinobravarskih</li>
          <li>Serijsku proizvodnju od
          fi-2 do f-25</li>
          <li>Horizontalno brušenje</li>
          <li>Kao i mnoge druge...</li>
        </ul>
        </div>
        <Divider />
      </div>

    </>
  );
};

export default SinglePage;
