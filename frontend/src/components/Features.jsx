import "./Features.css";

const features = [
  {
    icon: "💬",
    title: "Conversational AI Chat",
    description:
      "Have a natural, multi-turn conversation about your health concerns, with the assistant remembering context as you go.",
  },
  {
    icon: "📚",
    title: "Trusted Medical Sources",
    description:
      "Responses are grounded in a curated knowledge base using Retrieval-Augmented Generation, not guesswork.",
  },
  {
    icon: "📈",
    title: "Symptom Tracking",
    description:
      "Log symptoms over time and see clear trends you can share with a licensed doctor.",
  },
  {
    icon: "🚨",
    title: "Emergency Detection",
    description:
      "The assistant flags potentially urgent situations and directs you to seek immediate medical attention.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "Your conversations are protected with authenticated, encrypted access — visible only to you.",
  },
  {
    icon: "📝",
    title: "Shareable Reports",
    description:
      "Generate a concise summary of your conversation or symptom log to bring to your next appointment.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2>What This Assistant Offers</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;