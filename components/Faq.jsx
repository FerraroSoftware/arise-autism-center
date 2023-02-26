import Link from "next/link";
const faqs = [
  {
    id: 1,
    question: "What is autism?",
    answer:
      "Autism is a neurodevelopmental disorder that affects social communication and behavior.",
  },
  {
    id: 2,
    question: "When do the signs of autism appear?",
    answer:
      "Signs of autism may appear as early as 18 months of age, but may not be recognized until later in childhood.",
  },
  {
    id: 3,
    question: "What are the signs of autism?",
    answer:
      "Signs of autism may include difficulties with social communication, repetitive behaviors, sensory sensitivities, and more.",
  },
  {
    id: 4,
    question: "How common is autism?",
    answer:
      "Autism affects an estimated 1 in 68 children in the United States, according to the Centers for Disease Control and Prevention (CDC).",
  },
  {
    id: 5,
    question: "How is autism diagnosed?",
    answer:
      "Autism is typically diagnosed through a comprehensive evaluation by a team of professionals.",
  },
  {
    id: 6,
    question: "What causes Autism?",
    answer:
      "The exact cause of autism is unknown, but research suggests that a combination of genetic and environmental factors may contribute to its development.",
  },

  // More questions...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to us by{" "}
          <Link
            href="/contact"
            className="font-semibold text-b500 hover:text-sky-300"
          >
            sending us an email
          </Link>{" "}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
