import RevealOnScroll from "./RevealOnScroll";

const Card = ({ name, quote, title }) => (
  <div className="min-w-[700px] p-6 mx-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
    <h3 className="text-xl font-semibold">{name}</h3>
    <h4 className="font-semibold">{title}</h4>
    <p className="mt-2">{quote}</p>
  </div>
);
const FeedBack = () => {
  const testimonials = [
    {
      quote:
        "Muhammad und ich haben im Rahmen eines 3-tägigen Hackathons mit einem Kunden zusammengearbeitet. Muhammad hat sich in kürzester Zeit in die Thematik eingearbeitet, die Anforderungen des Kunden verstanden und eigenständig ein entsprechendes Frontend für den KI Prototypen entwickelt. Er hat vor allem durch seine hohe Einsatzbereitschaft, Motivation und sein Durchhaltevermögen geglänzt und überzeugt.",
      name: "Bianca K",
      title: "Senior Managing Consultant Public Sector & Project Lead",
    },
    {
      quote: `Muhammad works on the Project DocAdmin for the customer Commerzbank. He is also responsible for maintaining code clarity. He has demonstrated problem-solving skills and creativity in overcoming obstacles. 
              Using his expertise in TypeScript and React, he successfully implemented features and met customer requirements. He is a team player and collaborated effectively with colleagues, particularly while implementing the 
              “Providerwechsel” feature, which turned out to be more complex than initially expected and estimated. However, in the end, the task was successfully completed and presented. Muhammad takes on frontend subtasks and, 
              particularly in the recent past, has completed them independently. For example, in the implementation of the “Edit Default Document” feature, he thoroughly explored the codebase on his own to provide an effective solution.`,
      name: "Mubariz A",
      title: "Frontend Developer",
    },
    {
      quote: `Während der Arbeit in der Zelle DCA wurde bisher qualitativ gute Arbeit festgestellt. Zudem bringt Muhammad eigene Ideen ein und geht proaktiv auf Herausforderungen ein, was zur kontinuierlichen Verbesserung beiträgt.
        Übertragene bzw. von ihm „gepullte“ Aufgaben werden in einer guten Zeit erledigt wodurch er das Projekt und das Team sehr gut unterstützt. Ebenfalls positiv zu bewerten ist ein von mir geäußerter Wunsch, in Teams-Meetings die Kamera öfter anzumachen. 
        Seit dieser Äußerung wurde der Wunsch bereits zu 100 % umgesetzt – danke dafür.`,
      name: "Alessandro G",
      title: "Product Owner - Commerzbank",
    },

    {
      quote: `Dear Muhammad, I'm really impressed with your work on the DocAdmin project! You quickly got up to speed with React and TypeScript, and your ability to troubleshoot complex issues and learn from mistakes is top-notch. 
            Refactoring the code to simplify component interactions was a great call, and the final product looked awesome. 
            Everyone was stoked with the result! You also did a great job on the "Edit default document" feature. You applied your previous experience to tackle the challenges, and your creative solution to the outdated component library issue was impressive. 
            The end result looks modern and user-friendly, and you even managed to catch a backend bug - nice work! I've also received great feedback from the customer, who's been impressed with the quality of your work and your ability to deliver tasks on time. 
            You've been a huge support to the project and the team, and your skills have been a valuable asset. Overall, you've been doing a fantastic job, and I'm grateful to have you on the team. Keep up the great work!`,
      name: "Olexander T",
      title: "Practice Lead Cognitive, Data & AI",
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Colleague Testimonials
          </h2>

          <div className="moving-cards-container w-full py-10 ">
            <div className="moving-cards flex-row">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  name={testimonial.name}
                  quote={testimonial.quote}
                  title={testimonial.title}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default FeedBack;
