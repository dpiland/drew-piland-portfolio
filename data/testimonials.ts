export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  year?: number;
  linkedInUrl?: string;
}

// Add new recommendations here — paste the quote, name, title, company, and relationship context from LinkedIn
export const testimonials: Testimonial[] = [
  {
    id: "dan-schaffer",
    quote:
      "Drew drove 20% YoY bookings growth (a record) on a nine-figure channel business and was nominated to speak at IBM Think while at Kyndryl (formerly IBM GTS). I led Akamai's IBM partner enablement strategy while Drew managed Kyndryl's go-to-market strategy and enablement delivery. In a field full of people who talk about results, Drew went deep on Akamai's cloud security and performance technology and turned it into something sellers could actually use. That translation work, taking a genuinely complex product and making the business value obvious, is the hardest part of this job and the part he is best at.\n\nWhat makes Drew different is how he works. Hand him a simple set of objectives and he returns a multi-step plan to deliver, plus the tools and techniques to pivot as the campaign starts generating feedback. He worked across Product, Sales, and Field Marketing on both sides of the partnership and made those teams better together, and he put status updates in my inbox before I asked. His high expectations of himself mean you can count on him to learn whatever he needs and turn results around fast. That tenacity is what carried a complex technical integration across our partnership from justification to launch.\n\nHis career since we worked together shows the same pattern: challenge, success, growth, new challenge. I learned a great deal about my own craft working alongside him, and I will always recommend Drew Piland for roles where execution and communication are essential.",
    name: "Dan Schaffer",
    title: "Director of Strategic Partnerships and Programs",
    company: "Akamai",
    relationship: "Worked with Drew across companies — Akamai & Kyndryl (IBM GTS)",
    year: 2026,
  },
  {
    id: "anna-tannas",
    quote:
      "Drew is equal parts strategic thinker and expert doer. We worked closely together at CloudBees, where I worked on the brand side and he worked on the product marketing side. Drew was a go-to subject matter expert for the broader marketing team, and I personally loved pressure-testing messaging ideas with him because of how deeply he understood the technology, the market, and our audience. He was very effective at translating that depth of knowledge into clear, accessible language.\n\nAs one of the longer-tenured employees at CloudBees, Drew had seen the company and its product portfolio through many changes and pivots. Through it all, he remained adaptable, positive, collaborative, and focused on what would create the greatest impact for customers.\n\nBeyond his expertise, Drew is simply a kind, thoughtful colleague who is incredibly easy to work with. Any team would be lucky to have him.",
    name: "Anna Tannas",
    title: "Brand Strategist | Creative Operations Leader",
    company: "Strategy, Systems, & Storytelling",
    relationship: "Senior to Drew at CloudBees, didn't manage directly",
    year: 2026,
  },
  {
    id: "bryan-elanko",
    quote:
      "Drew is what I call a proactive thinker, builder, and operator. He's incredibly easy to work with because he takes the initiative to address issues well before they become problems. Drew has a knack for connecting people across functions, building alignment, and delivering work that addresses the company's most pressing needs. Whether he's solving an immediate challenge or building a new capability from the ground up, he brings strong ownership and sound judgment. I highly recommend him!",
    name: "Bryan Elanko",
    title: "Technical PMM Leader | PMA Ambassador",
    company: "ex-Shopify",
    relationship: "Worked together on the same team",
    year: 2026,
  },
  {
    id: "joe-gallego",
    quote:
      "Drew has been key in driving some of our product go-to-market releases. His focus on market segments along with the right go-to-market tactics has helped increase pipeline and signings. Drew is also a great communicator and has lead sessions and webinars successfully by boiling down complex topics in a way that is easy to understand for everyone.",
    name: "Joe Gallego",
    title: "Director, Global SAP Practice",
    company: "Go-To-Market | Agentic AI",
    relationship: "Worked together on the same team",
    year: 2020,
  },
  {
    id: "abhijit-jain",
    quote:
      "Anyone who works with Drew would vouch for his dedication and commitment towards his work. Excellent organization and execution are striking characteristics of Drew's working style. He is a great person to work with because he easily lightens up an intense situation with his sense of humor. He is very good at setting up goals and motivating the team towards achieving them with positive results. It has been a great experience of working with him on several projects during our MBA and I am confident that he would be a great asset for any team that he works with.",
    name: "Abhijit Jain",
    title: "Analytics & Data Pipeline Architect",
    company: "Product & E-Commerce | AI Agents",
    relationship: "MBA colleagues at NC State",
    year: 2017,
  },
  {
    id: "keely-tyler",
    quote:
      "\"Ridiculously efficient\" is what comes to mind when I think of Drew — his organization, inspiration and insight into all aspects of c-store marketing make him fantastic to work with. I've had the pleasure of working with Drew for the last two years on Kangaroo Express' digital marketing endeavors, and all of the effort he puts in to learning all the details, considering all the angles, and following up on required information immediately, has not gone unnoticed. Drew absolutely \"gets\" marketing and always comes up with the best strategies to reach the end goal. He would be a solid asset to any team!",
    name: "Keely Tyler",
    title: "Business Owner/Operator",
    company: "Kangaroo Express",
    relationship: "Drew was Keely's client",
    year: 2015,
  },
];
