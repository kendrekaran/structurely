/**
 * Dummy news articles for development. Shape matches Sanity documents
 * so switching to Sanity later is straightforward.
 */

export type PortableTextBlock = {
  _type: "block";
  _key: string;
  style: string;
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
};

export type DummyNewsPost = {
  _id: string;
  title: string;
  /** When true, featured in the news hero; excluded from the grid listing. */
  pinned?: boolean;
  category?: string;
  /** Topic tags used to filter and discover related articles. */
  tags?: string[];
  description?: string;
  slug: { current: string };
  thumbnail?: string;
  publishedAt: string;
  author?: { name: string };
  content?: PortableTextBlock[];
  primaryKeywords?: string[];
  secondaryKeywords?: string[];
  relatedBlogs?: Array<
    | DummyNewsPost
    | {
        _id: string;
        title: string;
        slug: { current: string };
        publishedAt: string;
        description?: string;
      }
  >;
};

const pt = (blocks: PortableTextBlock[]) => blocks;

export const dummyNewsPosts: DummyNewsPost[] = [
  {
    _id: "struct-1",
    pinned: true,
    title: "How Structurely's Call and Text AI Improve Response Rates",
    category: "Press Release",
    tags: ["AI", "Lead Engagement", "Automation"],
    description:
      "To drive conversions and grow revenue, companies must reach out to leads at the right time. Structurely's AI-powered calling and texting tools automate follow-ups with precision timing and personalized messaging.",
    slug: { current: "how-structurely-call-text-ai-improve-response-rates" },
    publishedAt: "2025-02-15T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["Structurely", "AI", "response rates"],
    secondaryKeywords: ["calling", "text", "leads"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "In the modern world of sales, engaging with potential leads is both an art and a science. Structurely's AI-powered calling and texting tools eliminate the guesswork by automating follow-ups with precision timing and personalized messaging that actually gets responses.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "The Challenge of Low Response Rates",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "Leads are often too busy to answer cold calls or respond to emails right away. Structurely's Text AI sends a message first, then follows up with a call from the same number when the lead is ready—making outreach feel more human and less intrusive.",
            marks: [],
          },
        ],
      },
      {
        _key: "b4",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c4",
            _type: "span",
            text: "Benefits of Combining Call AI and Text AI",
            marks: [],
          },
        ],
      },
      {
        _key: "b5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c5",
            _type: "span",
            text: "By starting with text and following up with a call from the same number, Structurely ensures every lead is handled with care and precision. This approach improves response rates and enhances the overall customer experience.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
  {
    _id: "struct-2",
    title: "24/7 Lead Handling with Structurely's AI Assistant",
    category: "Related News",
    tags: ["AI", "Lead Handling", "Automation"],
    description:
      "Customers expect instant responses at any hour. With Structurely's AI assistant, your leads are never left waiting.",
    slug: { current: "247-lead-handling-structurely-ai-assistant" },
    publishedAt: "2025-02-10T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["AI assistant", "24/7", "lead handling"],
    secondaryKeywords: ["automation", "qualification"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "In today's digital age, customers expect quick, personalized responses no matter when they reach out. Structurely's AI assistant works around the clock to qualify leads, answer questions, and schedule appointments—all without human intervention.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "Never miss a lead again",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "When a lead texts or calls after hours, Structurely's AI picks up instantly. It can qualify the lead, capture key details, and book a meeting with your team—so you wake up to a pipeline that's already moving.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
  {
    _id: "struct-3",
    title: "Embrace the Multi-Channel Approach",
    category: "Stories",
    tags: ["Multi-Channel", "SMS", "Outreach"],
    description:
      "Reaching leads on a single channel is no longer enough. Discover how a multi-channel strategy drives higher engagement.",
    slug: { current: "embrace-the-multi-channel-approach" },
    publishedAt: "2025-02-05T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["multi-channel", "SMS", "email", "voice"],
    secondaryKeywords: ["engagement", "outreach"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "Modern buyers interact across email, SMS, phone, and chat. A multi-channel outreach strategy ensures your message reaches leads wherever they are, dramatically increasing the odds of a meaningful connection and a closed deal.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "One conversation, many touchpoints",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "Structurely unifies voice, text, and email into a single conversation thread. Your team sees the full picture, and leads get a consistent experience no matter how they choose to respond.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
  {
    _id: "struct-4",
    title: "Maximize Your CRM Automation With AI",
    category: "Press Release",
    tags: ["CRM", "Automation", "AI"],
    description:
      "Your CRM is only as powerful as the data inside it. AI-driven automation keeps everything clean, updated, and actionable.",
    slug: { current: "maximize-your-crm-automation-with-ai" },
    publishedAt: "2025-01-28T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["CRM", "Salesforce", "automation"],
    secondaryKeywords: ["AI", "data"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "Manual CRM updates are a productivity killer. Structurely's AI integrations automatically log conversations, update contact records, and surface high-priority leads—so your team can focus on closing, not data entry.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "Native Salesforce integration",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "Structurely lives inside your CRM. Every call and text is logged, activities are created, and lead status is updated in real time. No more switching between tools or copying notes by hand.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
  {
    _id: "struct-5",
    title: "Why Real Estate Teams Choose Structurely for Lead Follow-Up",
    category: "Related News",
    tags: ["Real Estate", "Lead Engagement", "Mortgage"],
    description:
      "From first touch to closed deal, see how real estate teams use Structurely to stay ahead of the curve.",
    slug: { current: "why-real-estate-teams-choose-structurely" },
    publishedAt: "2025-01-20T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["real estate", "lead follow-up", "Structurely"],
    secondaryKeywords: ["brokers", "LOs"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "Real estate leads come in fast and from everywhere. Structurely helps teams respond in seconds, qualify with AI, and book appointments without dropping a single lead.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "Scale without adding headcount",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "With AI handling initial outreach and qualification, your LOs spend time only on leads who are ready to talk. The result: higher contact rates, better conversion, and a pipeline that runs 24/7.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
  {
    _id: "struct-6",
    title: "Intelligent Qualification: How AI Decides Who Gets a Call",
    category: "Stories",
    tags: ["AI", "Lead Qualification", "Routing"],
    description:
      "Not every lead needs a human touch right away. Learn how Structurely uses signals like urgency and readiness to route leads intelligently.",
    slug: { current: "intelligent-qualification-ai-decides-who-gets-a-call" },
    publishedAt: "2025-01-12T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["qualification", "AI", "routing"],
    secondaryKeywords: ["signals", "conversion"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "Structurely evaluates leads in real time using signals like urgency, readiness, and engagement. Based on your rules, it can book appointments, route to specific reps, nurture leads, or escalate high-intent prospects—so the right lead gets the right action at the right time.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "From rule-based to AI-driven",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "Predefined routing logic is just the start. Over time, AI learns which paths lead to conversions and can suggest optimizations. You stay in control while the system gets smarter.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
  {
    _id: "struct-7",
    title: "Structurely Expands AI Agents for Home Services and Contractors",
    category: "Press Release",
    tags: ["AI", "Home Services", "Lead Qualification"],
    description:
      "New vertical-specific playbooks and qualification flows help remodelers, roofers, and home service teams convert more inbound leads without adding headcount.",
    slug: { current: "structurely-expands-ai-agents-home-services" },
    publishedAt: "2025-01-05T00:00:00.000Z",
    author: { name: "Structurely Team" },
    primaryKeywords: ["home services", "AI agents", "contractors"],
    secondaryKeywords: ["leads", "qualification"],
    content: pt([
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c1",
            _type: "span",
            text: "Home services businesses live and die by speed to lead. Structurely's AI agents now ship with templates tuned for estimates, scheduling, and service-area qualification—so every text and call moves the job forward.",
            marks: [],
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "c2",
            _type: "span",
            text: "Built for how crews actually work",
            marks: [],
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "c3",
            _type: "span",
            text: "Route urgent jobs to the right rep, capture photos and notes in the CRM, and keep homeowners in the loop with consistent follow-up—without burning out your office staff.",
            marks: [],
          },
        ],
      },
    ]),
    relatedBlogs: [],
  },
];

/** Resolve related posts by slug for detail view. Returns full posts so NewsCard can render them. */
export function getDummyNewsPostBySlug(slug: string): DummyNewsPost | null {
  const post = dummyNewsPosts.find((b) => b.slug.current === slug) ?? null;
  if (!post) return null;
  const others = dummyNewsPosts
    .filter((b) => b._id !== post._id)
    .slice(0, 3)
    .map((b) => ({
      ...b,
      description: b.description ?? "",
    }));
  return { ...post, relatedBlogs: others };
}
