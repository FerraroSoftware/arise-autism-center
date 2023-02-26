const people = [
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mikey.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mikey.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mikey.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  {
    name: "Sebnem Aras",
    role: "Founder",
    imageUrl: "/mikey.png",
    bio: "As the founder of Arise Autism, Sebnem Aras brings a wealth of knowledge and expertise to our center, and her commitment to making a difference in the lives of those with autism is truly inspiring.",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 relative">
      {/* <div className="absolute inset-x-0 left-[calc(70%-20rem)] top-[-10rem]  transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
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
      </div> */}
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
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                className="aspect w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
