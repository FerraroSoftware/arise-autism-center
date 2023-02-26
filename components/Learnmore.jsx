import React from "react";
import centerbased from "../public/center-based-therapy.png";
import homebased from "../public/home-base-therapy.png";
import early from "../public/early-intervention.png";
import Image from "next/image";

export default function Learnmore() {
  return (
    <section className=" lg:py-20 bg-white py-24 sm:py-32">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-left sm:max-w-4xl sm:mx-auto sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Comprehensive Services{" "}
          </h2>
          <p className="max-w-2xl mx-auto mt-6  text-lg leading-8 text-gray-600 lg:mt-8 ">
            Explore the wide range of comprehensive services and resources
            offered by us at Arise Autism Center, designed to provide
            individuals with autism and their families with personalized care
            and support.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-16 text-center lg:grid-cols-3 lg:max-w-none">
          <div className="relative overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray group">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
              <Image
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-110"
                src={centerbased}
                alt="center based therapy"
              />
            </div>
            <div className="p-6 xl:px-8 xl:py-6">
              <h3 className="text-base leading-7 text-black font-semibold">
                Center Based Therapy
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center mt-10 text-base leading-7 text-black"
              >
                Read More
                <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-purple-400">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray group">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
              <Image
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src={homebased}
                alt="home based therapy"
              />
            </div>
            <div className="p-6 xl:px-8 xl:py-6">
              <h3 className="text-base leading-7 text-black font-semibold">
                Home Based Therapy
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center mt-10 text-base leading-7 text-black"
              >
                Read More
                <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-purple-400">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray group">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
              <Image
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src={early}
                alt="early intervention"
              />
            </div>
            <div className="p-6 xl:px-8 xl:py-6">
              <h3 className="text-base leading-7 text-black font-semibold">
                Early Intervention
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center mt-10 text-base leading-7 text-black"
              >
                Read More
                <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-purple-400">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Start Your Application
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          {/* <a
            href="#"
            title=""
            className="
                   inline-flex
                   items-center
                   justify-center
                   px-5
                   py-2
                   font-sans
                   text-base
                   font-semibold
                   transition-all
                   duration-200
                   border-2 border-transparent
                   rounded-full
                   sm:leading-8
                   bg-purple-300
                   sm:text-lg
                   text-black
                   hover:bg-opacity-90
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
               "
            role="button"
          >
            Explore All
            <svg
              className="w-6 h-6 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
}
