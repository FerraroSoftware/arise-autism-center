import Link from "next/link";
import Image from "next/image";
import damaris from "@/public/damaris.png";
import speech from "@/public/speech.png";

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#F09839]">
                ABA Therapy
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover the Benefits of ABA Therapy for Autism Treatment
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                ABA therapy is a proven, evidence-based intervention that can
                help individuals with autism develop social, communication, and
                adaptive skills while reducing challenging behaviors.
              </p>
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex rounded-full bg-purple-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Learn More About ABA
                </Link>
              </div>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                <blockquote className="text-base leading-7">
                  <p>
                    “My daughter just started here and she loves it. Everyone
                    has been great with her. Especially working with her other
                    therapy schedules and around siblings school schedule too.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                  <Image
                    src={damaris}
                    alt="review"
                    className="h-6 w-6 flex-none rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Damaris Figueroa
                    </span>{" "}
                    – Arise Member
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            src={speech}
            alt="Speech"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
