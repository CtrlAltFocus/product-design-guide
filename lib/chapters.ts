export interface Chapter {
  id: string
  number: number
  title: string
  what: string
  how: string
  why: {
    intro: string
    whys: {
      question: string
      answer: string
    }[]
    conclusion: string
  }
  sequence: {
    after?: string
    before?: string
  }
  format: {
    outputs: string[]
  }
  formatHelps: {
    why: string
    how: string
  }
}

export const chapters: Chapter[] = [
  {
    id: "briefing",
    number: 1,
    title: "Briefing",
    what: "Run a focused solo session to write a clear project brief that defines the vision, objectives, and essential requirements. Seek feedback from friends, advisors, or potential users to refine the vision and identify blind spots.",
    how: "Sit down alone with a notebook or digital tool and articulate what your startup is about (the vision), what problem it solves (the objectives), who it's for (the target audience), and what success looks like (essential requirements). Then, share this brief with a small, trusted group—friends, mentors, or potential users—and ask for their honest input. Use their feedback to adjust and clarify your plan.",
    why: {
      intro: "Why is this step necessary? Let's break it down with the 5 Whys:",
      whys: [
        {
          question: "Why do I need a project brief?",
          answer:
            "To have a clear direction and foundation for your project. It acts as your roadmap, ensuring you know where you're going.",
        },
        {
          question: "Why is a clear direction important?",
          answer:
            "Without it, you might waste time and resources building something that doesn't solve the right problem or meet user needs.",
        },
        {
          question: "Why might I waste time and resources?",
          answer:
            "Because, as a solo founder, it's easy to get sidetracked by exciting ideas or feedback without a clear focus, leading to scope creep.",
        },
        {
          question: "Why is scope creep a problem?",
          answer:
            "It delays your launch, increases costs, and dilutes your product's focus, making it less effective for users.",
        },
        {
          question: "Why does effectiveness matter?",
          answer:
            "If your product isn't effective, users won't adopt it, and your startup could fail—exactly what you're afraid of.",
        },
      ],
      conclusion:
        "The briefing step combats your fear of failure by giving you a solid starting point. It reduces doubt by forcing you to define your goals upfront and validates them with feedback, so you're not guessing blindly. This clarity helps you avoid perfectionism-driven delays by focusing only on what's essential.",
    },
    sequence: {
      before:
        "You need a brief to clarify your vision and goals. Without it, your research could lack direction and waste time.",
    },
    format: {
      outputs: [
        "A written project brief (1–2 pages) including vision, objectives, and essential requirements",
        "Feedback notes from 2–3 trusted people (e.g., friends or potential users)",
      ],
    },
    formatHelps: {
      why: "A written brief solidifies your ideas and keeps you aligned. Feedback catches blind spots early.",
      how: "It prevents vague planning by giving you a reference point and ensures your concept resonates with others.",
    },
  },
  {
    id: "user-research",
    number: 2,
    title: "User Research",
    what: "Conduct informal interviews or surveys with target users, focusing on features for your Minimum Viable Product (MVP). Define a few initial personas and concentrate on their real, actionable motivations and problems.",
    how: 'Reach out to 5–10 potential users via email, social media, or in-person chats. Ask open-ended questions like: "What frustrates you about [problem area]?" or "What would make your life easier?" Record their pain points and needs, then use this data to shape your MVP\'s core features.',
    why: {
      intro: "Why is user research important?",
      whys: [
        {
          question: "Why do I need to talk to users?",
          answer: "To ensure you're solving a real problem they care about, not just what you assume they need.",
        },
        {
          question: "Why is solving a real problem important?",
          answer: "If users don't see value in your solution, they won't use it, and your startup risks failing.",
        },
        {
          question: "Why might users not see value?",
          answer: "Because you might base your product on untested assumptions that don't match their reality.",
        },
        {
          question: "Why do assumptions lead to failure?",
          answer: "They can steer you toward a product that misses the mark, wasting your effort.",
        },
        {
          question: "Why is it hard to predict needs without research?",
          answer:
            "Your perspective as a solo founder might be biased or limited, missing the complexity of user experiences.",
        },
      ],
      conclusion:
        "User research alleviates doubt by grounding your ideas in reality. It counters perfectionism by showing you what's truly important to users, so you don't overbuild or chase unnecessary features out of fear of missing something.",
    },
    sequence: {
      after: "The brief identifies your target users and problem, so you know who to research and what to explore.",
      before:
        "Knowing your users' needs first ensures you evaluate competitors based on what matters to your audience.",
    },
    format: {
      outputs: [
        "A summary of insights from 5–10 user interviews or surveys, highlighting pain points, desired solutions, and motivations",
        '1–2 user personas (e.g., "Jane, 30, freelance designer, needs quick invoicing")',
      ],
    },
    formatHelps: {
      why: "Summaries distill key findings, avoiding data overload. Personas make users feel real and relatable.",
      how: "It grounds your design in actual user needs, reducing assumptions and focusing your efforts.",
    },
  },
  {
    id: "design-benchmark",
    number: 3,
    title: "Design Benchmark",
    what: "Research similar apps and adjacent solutions, analyze competitors' features and technologies, and use these insights for inspiration and differentiation. Identify what's essential versus \"nice-to-have\" for your launch.",
    how: "Spend a few hours browsing competitor websites, apps, or reviews. Note their strengths (e.g., sleek design), weaknesses (e.g., slow performance), and gaps (e.g., missing features). Use this to brainstorm how your product can stand out.",
    why: {
      intro: "Why is benchmarking important?",
      whys: [
        {
          question: "Why do I need to look at competitors?",
          answer: "To understand the market landscape and see what's already out there.",
        },
        {
          question: "Why is understanding the market important?",
          answer: "So you can position your product uniquely and avoid duplicating existing solutions.",
        },
        {
          question: "Why is unique positioning important?",
          answer: "To attract users who are dissatisfied with current options or seeking something fresh.",
        },
        {
          question: "Why might users be dissatisfied?",
          answer: "Competitors may have flaws or unmet needs you can address better.",
        },
        {
          question: "Why is addressing these gaps valuable?",
          answer: "It gives your product a competitive edge, boosting its chances of success.",
        },
      ],
      conclusion:
        "Benchmarking reduces fear of failure by showing you where opportunities lie. It fights perfectionism by helping you focus on differentiation rather than trying to outdo everyone in every way.",
    },
    sequence: {
      after: "With user needs clear, you can assess how competitors meet (or miss) those needs.",
      before: "Understanding existing solutions helps you craft a journey that improves on what's out there.",
    },
    format: {
      outputs: [
        "A competitor analysis table or list with key features, strengths and weaknesses, and gaps",
        'A shortlist of "essential" vs. "nice-to-have" features for your MVP',
      ],
    },
    formatHelps: {
      why: "A table organizes insights clearly. The shortlist forces focus on priorities.",
      how: "It helps you differentiate your product and avoid overbuilding by sticking to what users need most.",
    },
  },
  {
    id: "user-journey",
    number: 4,
    title: "User Journey",
    what: "Map the ideal user journey with a strong focus on empathy. Envision potential pain points and sketch user flows or create journey maps based on research insights, paying attention to friction points.",
    how: "Imagine a user's experience from discovering your product to using it regularly. Draw a simple flowchart or list stages (e.g., sign-up, first use, key action). Highlight where they might struggle—e.g., confusing navigation—and plan solutions.",
    why: {
      intro: "Why is mapping the user journey important?",
      whys: [
        {
          question: "Why do I need to map it?",
          answer: "To anticipate and address user needs and pain points proactively.",
        },
        {
          question: "Why is anticipating pain points important?",
          answer: "To create a smooth, enjoyable experience that keeps users engaged.",
        },
        {
          question: "Why does user experience matter?",
          answer: "A poor experience can drive users away, even if your product solves their problem.",
        },
        {
          question: "Why do users leave due to poor experience?",
          answer: "Frustration or confusion can outweigh the product's benefits.",
        },
        {
          question: "Why is retention important?",
          answer: "Keeping users is cheaper than finding new ones and supports long-term success.",
        },
      ],
      conclusion:
        "The user journey step eases doubt by letting you design with empathy, ensuring users stick around. It curbs perfectionism by focusing effort on fixing real friction points, not hypothetical ones.",
    },
    sequence: {
      after: "Competitor insights let you design a journey that avoids their pitfalls.",
      before: "Mapping the journey shows which features are critical, guiding your prioritization.",
    },
    format: {
      outputs: [
        "A user journey map or flowchart detailing key stages and pain points",
        'Annotations on solutions (e.g., "Simplify onboarding with a tutorial")',
      ],
    },
    formatHelps: {
      why: "A visual map highlights friction areas. Annotations turn problems into actionable fixes.",
      how: "It ensures your product feels intuitive, catching issues before they frustrate users.",
    },
  },
  {
    id: "decision-matrix",
    number: 5,
    title: "Decision Matrix",
    what: "Use a weighted scoring system or impact vs. effort matrix to prioritize features. Consider feasibility as a solo founder and focus on high-value features that align with user needs and MVP simplicity.",
    how: "List all potential features, then score each based on impact (how much it solves the user's problem, 1–10) and effort (how hard it is to build alone, 1–10). Pick features with high impact and low effort for your MVP, saving others for later.",
    why: {
      intro: "Why is a decision matrix necessary?",
      whys: [
        {
          question: "Why do I need to prioritize features?",
          answer: "Because you can't build everything at once with limited solo resources.",
        },
        {
          question: "Why are resources limited?",
          answer: "Your time, money, and energy are finite as a solo founder.",
        },
        {
          question: "Why is focusing on what matters important?",
          answer: "To deliver a functional MVP quickly and get user feedback.",
        },
        {
          question: "Why is quick delivery important?",
          answer: "To test assumptions and iterate before over-investing.",
        },
        {
          question: "Why is iteration crucial?",
          answer: "It reduces the risk of building the wrong thing and boosts product-market fit.",
        },
      ],
      conclusion:
        'The decision matrix fights fear of failure by ensuring you use resources wisely. It reduces perfectionism by giving you a clear, objective way to say "no" to non-essential features.',
    },
    sequence: {
      after: "The journey reveals must-have features for a smooth experience.",
      before: "Prioritizing features ensures your wireframes focus on what's essential.",
    },
    format: {
      outputs: [
        'A table or matrix listing potential features, scores for impact (1–10) and effort (1–10), and a "yes" or "no" for MVP inclusion',
      ],
    },
    formatHelps: {
      why: "Scoring removes guesswork. Clear decisions prevent scope creep.",
      how: "It keeps your MVP lean and manageable, saving time and reducing stress.",
    },
  },
  {
    id: "wireframes",
    number: 6,
    title: "Wireframes",
    what: "Use tools like Figma or Sketch to create quick, efficient wireframes focusing on a minimal and intuitive structure.",
    how: "Sketch basic layouts—boxes for buttons, lines for text—showing how screens connect. Keep it rough; don't worry about colors or details yet. Test the flow yourself or with a friend.",
    why: {
      intro: "Why are wireframes important?",
      whys: [
        {
          question: "Why do I need wireframes?",
          answer: "To visualize the product's structure and functionality early.",
        },
        {
          question: "Why is visualization important?",
          answer: "It helps you spot usability issues before design or coding begins.",
        },
        {
          question: "Why is early detection important?",
          answer: "Fixing issues in wireframes is faster and cheaper than in code.",
        },
        {
          question: "Why is cost-saving important?",
          answer: "As a solo founder, you need to conserve time and money.",
        },
        {
          question: "Why is efficiency crucial?",
          answer: "It prevents burnout and keeps your project on track.",
        },
      ],
      conclusion:
        "Wireframes reduce doubt by letting you test ideas cheaply. They combat perfectionism by encouraging quick, rough drafts over polished overthinking.",
    },
    sequence: {
      after: "With features set, you can sketch how they'll work together.",
      before: "Wireframes focus on layout first; visuals come later.",
    },
    format: {
      outputs: [
        "Rough wireframes (hand-drawn or digital) for 3–5 key screens, showing element placement and navigation flow",
      ],
    },
    formatHelps: {
      why: "Rough sketches allow fast changes. Key screens keep it simple.",
      how: "It tests functionality early, catching layout issues before design polish.",
    },
  },
  {
    id: "mood-board",
    number: 7,
    title: "Mood Board",
    what: 'Pull visuals and ideas that resonate with your app\'s purpose, focusing on target user preferences to establish the desired "feeling."',
    how: "Collect images, colors, and design elements (e.g., from Pinterest or competitor apps) that match your vision and user tastes. Arrange them into a collage to guide your design.",
    why: {
      intro: "Why is a mood board necessary?",
      whys: [
        {
          question: "Why do I need a mood board?",
          answer: "To define the visual direction and emotional tone of your product.",
        },
        {
          question: "Why is visual direction important?",
          answer: "It creates a cohesive, appealing design that users connect with.",
        },
        {
          question: "Why does design matter?",
          answer: "Good design enhances user experience and makes your product stand out.",
        },
        {
          question: "Why is standing out important?",
          answer: "It influences user adoption and perceptions of quality.",
        },
        {
          question: "Why does perception matter?",
          answer: "Users judge your product by its look, affecting trust and engagement.",
        },
      ],
      conclusion:
        "A mood board eases fear of failure by aligning your design with user expectations. It curbs perfectionism by setting a creative direction without demanding immediate precision.",
    },
    sequence: {
      after: "With structure done, you can now define the visual tone.",
      before: "The mood board inspires the specific design rules that follow.",
    },
    format: {
      outputs: [
        "A collage (digital or physical) with colors, images, and textures",
        'Notes on fit (e.g., "Bold fonts for confidence")',
      ],
    },
    formatHelps: {
      why: 'A collage captures the "feel" intuitively. Notes tie it to your vision.',
      how: "It aligns the design with your brand, making it emotionally appealing to users.",
    },
  },
  {
    id: "style-guide",
    number: 8,
    title: "Style Guide",
    what: "Create a lightweight style guide with primary colors, fonts, and basic UI elements (e.g., buttons, forms) to maintain consistency.",
    how: "Pick 2–3 colors, 1–2 fonts, and define button styles (e.g., rounded, bold). Document these in a simple file to reference during design.",
    why: {
      intro: "Why is a style guide important?",
      whys: [
        {
          question: "Why do I need a style guide?",
          answer: "To ensure consistent design, improving usability and professionalism.",
        },
        {
          question: "Why is consistency important?",
          answer: "It makes your product easier to use and looks polished.",
        },
        {
          question: "Why does usability matter?",
          answer: "A usable product reduces user frustration and keeps them engaged.",
        },
        {
          question: "Why is reducing frustration important?",
          answer: "Frustrated users are more likely to abandon your product.",
        },
        {
          question: "Why is abandonment a problem?",
          answer: "It leads to lost users and revenue, threatening your success.",
        },
      ],
      conclusion:
        "A style guide fights doubt by ensuring a professional outcome with minimal effort. It reduces perfectionism by limiting design choices to essentials.",
    },
    sequence: {
      after: "The mood board's tone becomes concrete rules here.",
      before: "A style guide ensures consistency across screens.",
    },
    format: {
      outputs: ['A document or file with 2–3 colors, 1–2 fonts, and UI elements (e.g., "Rounded buttons")'],
    },
    formatHelps: {
      why: "Limited options speed decisions. Defined rules ensure polish.",
      how: "It streamlines design work, making your product look cohesive and professional.",
    },
  },
  {
    id: "gui-design",
    number: 9,
    title: "Graphic User Interface Design",
    what: "Develop a few key screens fully, iterate as needed, and validate the look and usability before committing to development.",
    how: "Use your wireframes, mood board, and style guide to design 2–3 critical screens (e.g., homepage, main feature). Share them with users or advisors for feedback, then tweak.",
    why: {
      intro: "Why is GUI design important?",
      whys: [
        {
          question: "Why do I need to design key screens?",
          answer: "To see how your product will look and feel in practice.",
        },
        {
          question: "Why is seeing the look and feel important?",
          answer: "It ensures the design matches user expectations and your vision.",
        },
        {
          question: "Why is alignment important?",
          answer: "A mismatch can confuse or disappoint users.",
        },
        {
          question: "Why is a disconnect problematic?",
          answer: "It leads to poor user experience and potential rejection.",
        },
        {
          question: "Why is poor experience bad?",
          answer: "It drives users away, risking your product's success.",
        },
      ],
      conclusion:
        "GUI design reduces fear by letting you validate your vision early. It counters perfectionism by focusing on key screens, not the whole app at once.",
    },
    sequence: {
      after: "The guide provides rules to design full screens.",
      before: "Finished screens are needed for a testable prototype.",
    },
    format: {
      outputs: ["Fully designed 2–3 key screens (e.g., in Figma), like the homepage or core feature"],
    },
    formatHelps: {
      why: "Key screens keep effort focused. Full designs test the visual appeal.",
      how: "It validates the look before building, ensuring users are drawn in.",
    },
  },
  {
    id: "prototype",
    number: 10,
    title: "Prototype",
    what: "Consider skipping a high-fidelity prototype and use a simple click-through in Figma or similar to understand flows and gather early feedback.",
    how: "Link your GUI screens in Figma to simulate navigation (e.g., click a button to go to the next screen). Test it yourself and with a few users, noting what works or confuses them.",
    why: {
      intro: "Why is prototyping important?",
      whys: [
        {
          question: "Why do I need a prototype?",
          answer: "To test functionality and usability before building.",
        },
        {
          question: "Why is testing important?",
          answer: "It catches issues early, when they're easy to fix.",
        },
        {
          question: "Why is early fixing important?",
          answer: "It saves time and money compared to changes in code.",
        },
        {
          question: "Why is saving resources crucial?",
          answer: "As a solo founder, you need to stay efficient.",
        },
        {
          question: "Why is efficiency key?",
          answer: "It speeds up iteration and improves your shot at success.",
        },
      ],
      conclusion:
        "Prototyping alleviates doubt by proving your concept works. It fights perfectionism by keeping things simple and actionable.",
    },
    sequence: {
      after: "Designed screens allow you to simulate the experience.",
      before: "Testing the prototype confirms what to build technically.",
    },
    format: {
      outputs: ["A click-through prototype (e.g., in Figma) linking 2–3 screens"],
    },
    formatHelps: {
      why: "A simple prototype is quick to create and test. It reveals usability flaws.",
      how: "It catches issues early, saving rework by validating flows.",
    },
  },
  {
    id: "architecture",
    number: 11,
    title: "High-level Architecture",
    what: "Focus on simplicity, minimize third-party dependencies, and plan a flexible, scalable tech stack with manageable integrations (e.g., authentication, payments).",
    how: "Choose basic tools (e.g., a simple database, a familiar coding language) and sketch how they'll connect. Avoid complex integrations unless essential for the MVP.",
    why: {
      intro: "Why is architecture planning important?",
      whys: [
        {
          question: "Why do I need to plan it?",
          answer: "To ensure your product can be built and scaled efficiently.",
        },
        {
          question: "Why is efficient building important?",
          answer: "It saves time and reduces complexity for you alone.",
        },
        {
          question: "Why is reducing complexity key?",
          answer: "Complex systems are harder to manage solo.",
        },
        {
          question: "Why is solo management a concern?",
          answer: "You'll handle fixes and updates yourself.",
        },
        {
          question: "Why is self-reliance critical?",
          answer: "Simplicity ensures sustainability without a team.",
        },
      ],
      conclusion:
        "Architecture planning reduces fear by making development doable. It curbs perfectionism by prioritizing simplicity over over-engineered solutions.",
    },
    sequence: {
      after: "A tested prototype clarifies the tech needed.",
      before: "Tech decisions inform a realistic timeline.",
    },
    format: {
      outputs: ["A diagram or list with core tech, integrations, and data flow"],
    },
    formatHelps: {
      why: "A simple overview avoids overthinking. It ensures feasibility.",
      how: "It aligns tech with your design, preventing build surprises.",
    },
  },
  {
    id: "project-plan",
    number: 12,
    title: "Project Plan",
    what: "Use a simple timeline with key milestones, set small achievable goals, and include realistic timeframes for MVP completion, launch, marketing, and iteration.",
    how: 'List tasks (e.g., "Finish wireframes by Friday"), assign deadlines, and track progress in a tool like Trello or a notebook. Keep goals small to stay motivated.',
    why: {
      intro: "Why is a project plan necessary?",
      whys: [
        {
          question: "Why do I need a plan?",
          answer: "To stay organized and make steady progress.",
        },
        {
          question: "Why is steady progress important?",
          answer: "It prevents overwhelm and burnout.",
        },
        {
          question: "Why is avoiding burnout crucial?",
          answer: "Your energy is limited as a solo founder.",
        },
        {
          question: "Why is energy important?",
          answer: "Without it, you might quit or falter.",
        },
        {
          question: "Why is persistence key?",
          answer: "Overcoming challenges takes sustained effort.",
        },
      ],
      conclusion:
        "A project plan fights doubt by breaking the process into manageable steps. It reduces perfectionism by focusing on progress, not flawless execution.",
    },
    sequence: {
      after: "With design and tech set, you can plan the build and launch.",
    },
    format: {
      outputs: ["A timeline or task list with milestones and deadlines"],
    },
    formatHelps: {
      why: "Small tasks feel achievable. Deadlines keep you moving.",
      how: "It breaks the process into steps, reducing overwhelm and driving progress.",
    },
  },
]

