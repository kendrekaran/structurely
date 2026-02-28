import BlogCard from "@/components/blog/blog-card";

const posts = [
  {
    id: 1,
    title: "24/7 Lead Handling with Structurely's AI Assistant",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 2,
    title: "Embrace the Multi-Channel Approach",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 3,
    title: "Maximize Your CRM Automation With AI",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 4,
    title: "24/7 Lead Handling with Structurely's AI Assistant",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 5,
    title: "Embrace the Multi-Channel Approach",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 6,
    title: "Maximize Your CRM Automation With AI",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 7,
    title: "24/7 Lead Handling with Structurely's AI Assistant",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 8,
    title: "Embrace the Multi-Channel Approach",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
  {
    id: 9,
    title: "Maximize Your CRM Automation With AI",
    description:
      "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
    date: "October 11, 2024",
  },
];

function BlogPostsSection() {
  return (
    <section id="blog-posts" className="relative z-0">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPostsSection;
