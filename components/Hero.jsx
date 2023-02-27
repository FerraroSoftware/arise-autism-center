import Link from "next/link";
import Image from "next/image";
import autismcenter from "@/public/arise-autism-center.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <Image
        src={autismcenter}
        alt="arise autism center"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />

      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              initial={{ scale: 0.9, opacity: 0.2, y: -30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0, 0.31, 0.5, 1.01],
                delay: 0,
              }}
            >
              Helping Every Individual with Autism Reach Their Full Potential
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ scale: 0.2, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.61, 0.2, 1.01],
                delay: 0.1,
              }}
            >
              At Arise Autism Center, we empower individuals to achieve their
              dreams. We provide a safe and nurturing environment for them to
              learn and grow.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ scale: 0.2, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.61, 0.2, 1.01],
                delay: 0.3,
              }}
            >
              <Link
                href="/enrollment-form"
                className="rounded-full bg-g600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-g500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-450"
              >
                Start Application
              </Link>
              <Link
                href="#corevalues"
                className="text-base font-semibold leading-7 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
