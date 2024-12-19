import { Question } from "@/components/question";

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
            <Question key={title} title={title} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};
