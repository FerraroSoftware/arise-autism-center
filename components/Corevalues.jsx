import {
  InboxIcon,
  TrashIcon,
  UsersIcon,
  DocumentIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Pyschological & Functional Assessments",
    description:
      "Arise autism center provides comprehensive psychological and functional assessments to identify strengths, needs, and areas of focus to tailor treatment plans for each individual with autism. We are here to help.",
    href: "#",
    icon: DocumentIcon,
  },
  {
    name: "Comprehensive ABA Services",
    description:
      "We offer comprehensive Applied Behavior Analysis (ABA) services, which are evidence-based interventions that focus on developing skills and reducing challenging behaviors for individuals with autism.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Family and Community",
    description:
      "Our autism center recognizes the importance of family and community support in the treatment and management of autism and provides resources and services to empower families and promote community understanding and acceptance.",
    href: "#",
    icon: HomeIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" id="corevalues">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compassionate Services for Autism
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transforming the lives of individuals with Autism through
            exceptional support and services. We are near you in Seminole
            County.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-base font-semibold leading-7 text-purple-600 hover:text-purple-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
