import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images/black_hole.jpg";
import NavAbout from "./Planet-Page/components/NavAbout";

const about = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${images})` }}>
        <Link
          to="/homebody"
          className="duration-1000 ease-in-out -translate-x-1/2  hover:text-white  "
        >
          <div className="absolute text-lg text-white pb-[80vh] center content-center text-center  ml-[3vw] z-50 opacity-60 duration-700 ease-in-out -translate-x-1/2 l-0 hover:tracking-widest hover:text-white ">
            {"<"}
          </div>
        </Link>

        <div className="relative z-30 content-center font-secondary  ">
          <div className="pl-48 bg-cover bg-no-repeat ">
            <div className=" opacity-70 w-1/2 h-screen text-lg font-bold text-white rounded-3xl ml-vh30 bg-black  ">
              <div className="pt-10 pl-20">
                <h2> ABOUT US</h2>
              </div>

              <div>
                <div className="pt-9 text-xs ml-vh2 pr-9 pl-9 leading-8 tracking-wider text-center ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident alias, molestias labore accusamus eligendi eius
                    expedita ratione voluptates. Maxime aut alias aliquid
                    suscipit perspiciatis dolor quaerat incidunt. Maxime,
                    recusandae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nihil alias incidunt consectetur, officiis
                    pariatur error aliquam quibusdam provident nesciunt quis
                    dicta aspernatur praesentium molestiae perferendis dolor
                    tempora ipsa ut sint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavAbout />
    </div>
  );
};

export default about;
