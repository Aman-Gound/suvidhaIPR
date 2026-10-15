const questions = [
  {
    question: "How quickly can I start my IP filing?",
    answer:
      "Complete the digital intake form and our team will guide you through the next steps and required documents.",
  },
  {
    question: "Is my invention information kept confidential?",
    answer:
      "Yes. A mutual NDA is completed before proprietary technical material is shared for review.",
  },
  {
    question: "Can I track my application online?",
    answer:
      "Yes. Filing progress and important updates are shared transparently throughout the prosecution process.",
  },
  {
    question: "Do you support both patents and copyrights?",
    answer:
      "Yes. Suvidha IPR supports patent filings, software and source-code copyright, creative works, and related IP advisory.",
  },
];

const FAQ = () => {
  return (
    <section id="faqs" className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
            Clear Answers Before You Begin
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {questions.map((item) => (
            <details key={item.question} className="neo-raised rounded-2xl p-5">
              <summary className="cursor-pointer list-none pr-8 text-sm font-bold text-[#2e3040] marker:hidden">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#585a68]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
