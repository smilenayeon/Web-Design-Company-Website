import React from "react";
import FAQAccordian from "./FAQAccordian";

const FAQData = [
  {
    question: "What design services does Super Hello offer?",
    answer:
      "Whether you're after striking graphics for marketing materials, a cutting-edge UI/UX design for your mobile app, or a compelling web design, Super Hello has got your back. We deliver high-quality designs that align with your vision, all under one subscription."
  },
  {
    question: "What type of jobs aren't covered?",
    answer:
      "Due to the streamlined nature of our process we don't offer complex 3D/illustrations, motion or annual reports."
  },
  {
    question: "Who will be designing my work?",
    answer:
      "You'll be working directly with the founder of Super Hello, Dane Flighty. Dane brings to the table over a decade of design experience, having held senior positions in multiple prestigious agencies and has worked with clients including Disney, CGV, and Cointree. His work has been showcased in publications such as of IdN Magazine, Creative Magazine and can even be seen in the background of the popular TV show, 'The IT Crowd'."
  },
  {
    question: "How is Super Hello different from a traditional agency?",
    answer:
      "We're all about flexibility, affordability, and, above all, quality. Unlike traditional agencies, Super Hello offers unlimited design requests and revisions for a flat monthly fee. You get top-tier design services without the hefty price tag or the long-term commitment. Plus, we deliver in 48 hours. How's that for speed?"
  },
  {
    question: "I'm a small startup, is Super Hello a good fit for me?",
    answer:
      "Absolutely! Super Hello is the perfect partner for startups looking to scale. If you don't have an in-house designer or are currently relying on expensive agency retainers, our subscription service is a game-changer. Super Hello also works with other agencies who are busy or scaling and need an extra pair of creative hands."
  },
  {
    question: "Can I cancel or pause my subscription at any time?",
    answer:
      "Yes, you can! We understand that needs change. With Super Hello, you're never locked in. You can pause or cancel your subscription at any time. We're here when you need us."
  },
  {
    question:
      "I've heard you only take on a few clients per month. Why is that?",
    answer:
      "Quality matters to us. By limiting our service to a handful of clients per month, we ensure each client gets the personalized attention and top-notch design they deserve. It's all about delivering an exceptional experience for you."
  },
  {
    question: "What if I need a design revision?",
    answer:
      "Not quite right? No problem. We offer unlimited revisions until we hit the mark. Your satisfaction is our ultimate goal."
  },
  {
    question: "What's the turnaround time for design requests?",
    answer:
      "We deliver fast—within 48 hours. We understand that in the world of business, time is of the essence, and we're committed to keeping you ahead of the game."
  },
  {
    question: "What tasks can be completed within the 48-hour timeframe?",
    answer:
      "Our 48-hour turnaround covers a wide range of design tasks. Whether it's crafting a captivating landing page, developing a distinct brand concept, or presenting a preliminary look and feel for a multi-page brochure, we deliver high-quality results within this timeframe. These are just a few examples of what you can anticipate from our streamlined design service."
  },
  {
    question: "What software do you use for design?",
    answer:
      "I use a range of software depending on the job including Figma, Adobe suite, Blender, and Zbrush. Whatever your project requires we have the tools to make it happen."
  }
];

function FAQ() {
  return (
    <div id="FAQs" className="FAQ-section">
      <h1>FAQ</h1>
      <div className="FAQAccordian-area">
        {FAQData.map(({ question, answer }, index) =>
          <FAQAccordian key={index} question={question} answer={answer} />
        )}
      </div>
    </div>
  );
}

export default FAQ;
