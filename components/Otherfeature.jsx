import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  UsersIcon,
  UserGroupIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import happy from "../public/happy.png";

const features = [
  {
    name: "Therapy Sessions",
    description:
      "Our therapy sessions are tailored to meet the unique needs of each individual and help them develop the skills they need to succeed.",
    icon: UsersIcon,
  },
  {
    name: "Social Skill Groups",
    description:
      "Our social skills groups provide a supportive environment where individuals with autism can connect with others and develop their social skills.",
    icon: UserGroupIcon,
  },
  {
    name: "Educational Programs",
    description:
      "Our educational programs are designed to help individuals with autism reach their full potential and achieve their goals.",
    icon: BookOpenIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#F09839]">
                Autism Center
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sensory Friendly Environment
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to Arise autism center, where we provide a supportive
                and inclusive environment for individuals with autism. Come and
                visit us today to see how we can help you or your loved one
                thrive.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-purple-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={happy}
              alt="happy"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
