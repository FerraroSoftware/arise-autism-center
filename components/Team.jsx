import Image from "next/image";
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

const people = [
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mike.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mike.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mike.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mike.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get to know the dedicated leaders behind Arise Autism Center who are
            passionate about providing the best care and support for individuals
            with autism.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <motion.li
              key={person.name}
              className="flex flex-col gap-6 xl:flex-row"
              viewport={{ once: true }}
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
            >
              <Image
                className="aspect w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                width={300}
                height={300}
                alt="employee"
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
