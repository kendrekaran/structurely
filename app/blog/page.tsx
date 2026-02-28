import Header from "@/components/_common/header";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import BlogFilterSection from "@/components/blog/blog-filter-section";
import BlogPostsSection from "@/components/blog/blog-posts-section";

export default function BlogPage() {
  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <BlogHeroSection />
      <BlogFilterSection />
      <BlogPostsSection />
    </main>
  );
}
