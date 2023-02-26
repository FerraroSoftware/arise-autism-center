const faqs = [
  {
    id: 1,
    question: "What is autism?",
    answer:
      "So what does “autism” mean? The terms ‘autism’ and ‘autism spectrum disorder’ or ASD are both broad terms for a group of very complex developmental disorders. These disorders are characterized by impairments in areas such as social interaction, verbal and nonverbal communication, and repetitive and restrictive behaviors. The disorders that are housed under the broader terms autism or ASD include: autistic disorder, Rett syndrome, childhood disintegrative disorder, pervasive developmental disorder- not otherwise specified (PDD-NOS), and Asperger syndrome. Autism can be associated with deficits in motor coordination, intellectual disabilities, and general health issues such as gastrointestinal disturbances, sleep difficulties, and feeding problems.",
    items: [],
  },
  {
    id: 2,
    question: "When do the signs and symptoms of autism emerge?",
    answer:
      "At what age do children with autism typically start showing signs and symptoms? Well, that is often difficult for parents to determine because often they do not know what to look for or are not even aware of what autism is. However, often the most obvious signs of autism tend to emerge around 12-18 months. Some infants and toddlers, however, do begin to develop normally until about 2 years old, when they begin to lose skills. This is often referred to as “regression” or “regressive type”.",
    items: [],
  },
  {
    id: 3,
    question: "What are the signs and symptoms of autism?",
    answer:
      "Many parents who have heard of autism ask themselves, “How will I know if my child has autism?” This is a very difficult question to answer because although there are common characteristics among individuals with autism, it is a spectrum disorder and no child with autism is alike. Broadly, autism is characterized by deficits in social interactions and communication, and repetitive behaviors. The severity of these, however, can vary drastically. Common signs of autism at a young age include:",
    items: [
      "Lack of eye contact",
      "Lack of facial expressions such as smiles and frowns",
      "Little to no social reciprocity",
      "Difficulty with perspective taking",
      "Delayed or complete lack of spoken language",
      "Delay or lack of the use of babbling and gestures",
      "Preoccupation with part of objects",
      "Rigid or repetitive behaviors",
      "Restricted behavior patterns",
    ],
  },
  {
    id: 4,
    question: "How common is autism?",
    answer:
      "According to the Center for Disease Control and Prevention (CDC), 1 in 68 children in the United States is diagnosed with autism. This is a 10 fold increase in prevalence in the last 40 years. Overall, ASD is estimated to affect over 2 million individuals in the U.S. alone and tens of millions worldwide. Autism is 4-5 times more common among boys then girls. It is estimated 1 out of every 42 boys are diagnosed with autism whereas 1 in 189 girls have a diagnosis.",
    items: [],
  },
  {
    id: 5,
    question: "What should I do if I think my child has autism?",
    answer:
      "If you suspect your child has autism, the best thing to do is contact a professional immediately. Do not wait. Talk to your child’s pediatrician and/or an Early Intervention program in your area about getting screened for autism. Research consistently shows that early detection, diagnosis, and intervention results in the greatest chance for your child to maximize skills gained.",
    items: [],
  },
  {
    id: 6,
    question: "How do I get the help my child needs?",
    answer:
      "Start by researching the early intervention services in your area. Talk to your child’s physician to find other resources such as Applied Behavior Analysis (ABA) services in the area. It is very important to make sure your child has an expert team of individuals including doctors, therapists, psychologists, and teachers. If you are not getting the information you need about services in your area from your healthcare professionals or educators, try finding local support groups or online/social media groups.",
    items: [],
  },
  {
    id: 7,
    question: "How is autism diagnosed?",
    answer:
      "Currently there is no medical test that can diagnose autism, so we must rely on specially trained professionals (physicians and psychologists) to administer behavioral evaluations specific to autism. Typically a pediatrician or other healthcare professional will implement the Modified Checklist of Autism in Toddlers (M-CHAT) which is a list of questions about your child and the answers indicate whether a specialist should further evaluate him or her. It should be noted, however, that not all healthcare professionals are appropriately trained on recognizing the signs and symptoms of autism. Thus, if you have concerns, urge your doctor to refer your child to a specialist. If he or she disagrees, always trust your instinct and find a specialist to conduct further testing. Typically multiple disciplines are involved in a diagnostic evaluation including a combination of some or all of the following professionals: pediatrician, psychologist, speech and language pathologist, and occupational therapist. During the evaluation, the team will conduct systematic behavioral observations and assessments to determine your child’s strengths and weaknesses.",
    items: [],
  },
  {
    id: 8,
    question: "What if my doctor says to wait or everything is fine?",
    answer:
      "We encourage parents to always trust their instinct and not wait. Many pediatricans and general practitioners are not specially trained to recognize the signs and symptoms of autism, so it is critical that, if you suspect your child may have autism, to contact a specialist as early as possible.",
    items: [],
  },
  {
    id: 9,
    question: "What causes autism?",
    answer:
      "There is no single cause of autism and, although we don’t know the exact cause of autism, over the last 5 years scientists have found several potential contributing factors such as rare gene changes/mutations, and environmental factors that may influence early brain development. So, why do some children get autism when others do not? It is likely that in the presence of a genetic predisposition to autism, there are a number of environmental factors that further increase the child’s risk, many of which occur before or during birth. Some environmental factors that may increase risk include:",
    items: [
      "Advanced age of mother and/or father at the time of conception",
      "Maternal illness during pregnancy",
      "Extreme prematurity or very low birth weight",
    ],
  },
  {
    id: 10,
    question: "Do Vaccines cause autism?",
    answer:
      "Many parents ask this question. They hear celebrities on the news and read stories posted on social media. The answer to the question “Are vaccines responsible for autism?” is simple: NO. Over the last 2 decades an extensive amount of research as examined whether there is a link between childhood vaccinations such as the MMR vaccination and autism and the results are clear: Vaccines do not cause autism.",
    items: [],
  },
  {
    id: 11,
    question: "How do you treat autism?",
    answer:
      "Because each child with autism is unique, each treatment/intervention plan should be individualized to meet the specific needs of each child. Autism intervention can involve behavioral treatments, medication, or a combination of both. Early intensive behavioral intervention (EIBI) based on the principles of Applied Behavior Analysis (ABA) has been shown to be the most effective treatment for autism to date.",
    items: [],
  },
  {
    id: 12,
    question: "What is Applied Behavior Analysis?",
    answer:
      "Applied behavior analysis, also known as ABA, is a branch of the science of behavior known as behavior analysis. Behavior analysis focuses on how the environment influences behavior and learning. Applied behavior analysis (ABA) uses these principles to make a meaningful and socially significant change in behavior of humans. Although ABA is most commonly known for being the only effective treatment for autism to date, it is not only used with individuals with autism. Treatments and interventions based on ABA are used in many other settings with other populations such as education, sports, organizations, and health.",
    items: [],
  },
  {
    id: 13,
    question: "How do those with Autism benefit from ABA?",
    answer:
      "ABA is the most effective treatment for autism to date. It has been recognized and endorsed by numerous state and federal agencies including the U.S. Surgeon General and the New York State Department of Health. So how does ABA help those with autism? Trained professionals called behavior analysts develop individualized programming and behavior plans based on the principles of ABA to promote basic and complex skills as well as reduce challenging behaviors often associated with individuals with autism.",
    items: [],
  },
  {
    id: 14,
    question: "What does the research say about ABA as a treatment for autism?",
    answer:
      "Many studies show that ABA produces improvements in communication, social development, play, self-help, employment, and challenging behaviors. Studies show that individuals with autism of all ages can benefit from ABA. Several peer-reviewed studies have demonstrated that Early Intensive Behavioral Intervention that incorporates ABA into its techniques produces significant improvements in learning, communication, and adaptability. Most studies show that participating in a comprehensive and intensive program (e.g., 25-40 hours per week) for 1-3 years produces the best outcomes.",
    items: [],
  },
];

export default function autismfaq() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>

          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                  <ul className="list-disc pl-6 pt-4">
                    {faq.items.map((item, key) => (
                      <li key={key} className="text-base text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* cta */}
      <div className="relative isolate overflow-hidden bg-g500">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Didn&apos;t see your question?
              <br />
              Contact us today!
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Apply today and take the first step towards unlocking your
              child&apos;s full potential. Together, we can help your child
              thrive and reach their goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
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
    </>
  );
}
