import Header from "@/components/_common/header";
import BlogDetailsHeroSection from "@/components/blog/blog-details-hero-section";
import BlogContentSection from "@/components/blog/blog-content-section";
import BlogShareSection from "@/components/blog/blog-share-section";
import BlogRelatedArticlesSection from "@/components/blog/blog-related-articles-section";
import Separator from "@/components/_ui/separator";

type BlogPost = {
  title: string;
  intro: string;
  description: string;
  image?: string;
};

const blogPosts: Record<string, BlogPost> = {
  "how-structurely-call-text-ai-improve-response-rates": {
    title: "How Structurely's Call and Text AI Improve Response Rates",
    intro:
      "In the modern world of sales, engaging with potential leads is both an art and a science.",
    description:
      "To drive conversions and grow revenue, companies must not only reach out to leads but do so at the right time, in the right way. Structurely's AI-powered calling and texting tools eliminate the guesswork by automating follow-ups with precision timing and personalized messaging that actually gets responses.",
  },
  "247-lead-handling-structurely-ai-assistant": {
    title: "24/7 Lead Handling with Structurely's AI Assistant",
    intro:
      "Customers expect instant responses, no matter the hour. With Structurely's AI assistant, your leads are never left waiting.",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out. Structurely's AI assistant works around the clock to qualify leads, answer questions, and schedule appointments — all without human intervention.",
  },
  "embrace-the-multi-channel-approach": {
    title: "Embrace the Multi-Channel Approach",
    intro:
      "Reaching leads on a single channel is no longer enough. Discover how a multi-channel strategy drives higher engagement.",
    description:
      "Modern buyers interact across email, SMS, phone, and chat. A multi-channel outreach strategy ensures your message reaches leads wherever they are, dramatically increasing the odds of a meaningful connection and a closed deal.",
  },
  "maximize-your-crm-automation-with-ai": {
    title: "Maximize Your CRM Automation With AI",
    intro:
      "Your CRM is only as powerful as the data inside it. AI-driven automation keeps everything clean, updated, and actionable.",
    description:
      "Manual CRM updates are a productivity killer. Structurely's AI integrations automatically log conversations, update contact records, and surface high-priority leads — so your team can focus on closing, not data entry.",
  },
};

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug] ?? {
    title: "Blog Post",
    intro: "Welcome to this blog post.",
    description: "More content coming soon.",
  };

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <BlogDetailsHeroSection
        title={post.title}
        intro={post.intro}
        description={post.description}
        image={post.image}
      />
      <BlogContentSection
        blocks={[
          {
            type: "paragraph",
            segments: [
              {
                text: "With the rise of technology, artificial intelligence (AI) has revolutionized how businesses interact with leads, making the process more efficient and effective. ",
              },
              { text: "Structurely's Call AI and Text AI", variant: "primary" },
              {
                text: " features are leading this innovation, helping sales teams improve response rates and follow-up calls in ways that feel seamless and natural.",
              },
            ],
          },
          {
            type: "paragraph",
            segments: [
              {
                text: "The secret behind the success of Structurely's AI features lies in its unique Text + Call + AI approach—engaging the lead via text message first and then following up with a call from the same phone number once the lead is ready. This process ensures that the outreach feels more human, less intrusive, and more in line with how people prefer to communicate today.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "heading",
            text: "The Challenge of Low Response Rates in Sales",
          },
          {
            type: "labeled-paragraph",
            label: "Busy Schedules",
            text: "Leads are often too busy to answer cold calls or respond to emails right away, and these outreach efforts can be seen as interruptions.",
          },
          {
            type: "labeled-paragraph",
            label: "Lack of Trust",
            text: "Cold outreach from an unfamiliar number or email address may feel untrustworthy to some leads, making them less likely to engage.",
          },
          {
            type: "labeled-paragraph",
            label: "Poor Timing",
            text: "Sales teams might contact leads at the wrong time, when they're preoccupied with other tasks and not in the right mindset to engage in a sales conversation.",
          },
          { type: "divider" },
          {
            type: "paragraph",
            segments: [
              {
                text: "With the rise of technology, artificial intelligence (AI) has revolutionized how businesses interact with leads, making the process more efficient and effective. Structurely's Call AI and Text AI features are leading this innovation, helping sales teams improve response rates and follow-up calls in ways that feel seamless and natural.",
              },
            ],
          },
          {
            type: "paragraph",
            segments: [
              {
                text: "The secret behind the success of Structurely's AI features lies in its unique Text + Call + AI approach—engaging the lead via text message first and then following up with a call from the same phone number once the lead is ready. This process ensures that the outreach feels more human, less intrusive, and more in line with how people prefer to communicate today.",
              },
            ],
          },
          {
            type: "heading",
            text: "How Structurely's Text AI Improves Engagement",
          },
          {
            type: "paragraph",
            segments: [
              { text: "To address these challenges, " },
              { text: "Structurely's Text AI", variant: "bold" },
              {
                text: " offers a smarter way to initiate contact with leads. Rather than jumping straight into a phone call—which can feel abrupt—Text AI sends a text message to the lead first. This softer approach allows the lead to engage with the message on their own terms, in their own time. Here's why this method is so effective.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "heading",
            text: "Benefits of Combining Call AI and Text AI",
          },
          {
            type: "paragraph",
            segments: [
              {
                text: "In an increasingly competitive market, businesses need innovative tools to stand out and engage leads more effectively. ",
              },
              { text: "Structurely's Call AI and Text AI", variant: "bold" },
              {
                text: " offer a game-changing approach to lead engagement and follow-up. By starting with a text message and following up with a call from the same number, Structurely ensures that every lead is handled with care, consistency, and precision. This strategic use of AI not only improves response rates but also enhances the overall customer experience, leading to more successful conversions and long-term growth.",
              },
            ],
          },
        ]}
      />
      <BlogShareSection />
      <BlogRelatedArticlesSection
        articles={[
          {
            title: "24/7 Lead Handling with Structurely's AI Assistant",
            description:
              "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
            date: "October 11, 2024",
          },
          {
            title: "Embrace the Multi-Channel Approach",
            description:
              "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
            date: "October 11, 2024",
          },
          {
            title: "Maximize Your CRM Automation With AI",
            description:
              "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
            date: "October 11, 2024",
          },
        ]}
      />
    </main>
  );
}
