import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity: 0.2,
    scale: 1,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0, 0.31, 0.5, 1.01],
    },
    delay: 0,
    y: 0,
  },
};

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-[#5FA735]">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Center-Based Services.
            <br />
            Start Your ABA Therapy Journey Today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Take the first step towards improving the quality of life for your
            child with autism by starting your application for ABA therapy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/enrollment-form"
              className="rounded-full bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="text-base font-semibold leading-7 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#71BAC9" />
            <stop offset={1} stopColor="#71BAC9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
