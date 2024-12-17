const questions = [
  {
    title: "What payment methods do you accept?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "How does the pricing work for teams?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Can I change my plan later?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Is my data secure?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const FAQ = () => {
  return (
    <section className="section_padding bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="px-4 md:max-w-5xl lg:max-w-7xl mx-auto">
        <h1 className="section_title">Frequently asked questions</h1>
        <div className="flex flex-col mt-12 max-w-[672px] mx-auto">
          {questions.map(({ title, content }) => (
            <div className="py-7 border-b border-white/30">
              <div className="flex items-center">
                <h3 className="flex-1 text-white font-bold text-lg">{title}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
