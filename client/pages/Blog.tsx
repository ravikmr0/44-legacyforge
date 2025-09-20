import { Button } from "@/components/ui/button";
import { Badge } from "@/components/site/Badge";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing for Manufacturing Companies",
    excerpt: "Discover how manufacturing businesses can leverage digital marketing strategies to reach new customers and grow their market presence in 2025.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    category: "Digital Marketing",
    date: "2024-12-15",
    readTime: "8 min read",
    author: "Himanshu Shekhar",
    featured: true,
  },
  {
    id: 2,
    title: "Lead Generation Strategies That Actually Work for B2B Companies",
    excerpt: "Learn proven lead generation techniques that have helped our clients increase their qualified leads by 300% in just 6 months.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1200&auto=format&fit=crop",
    category: "Lead Generation",
    date: "2024-12-10",
    readTime: "6 min read",
    author: "Ishita Bansal",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Marketing for uPVC Window & Door Manufacturers",
    excerpt: "A comprehensive guide to building brand awareness and generating leads through strategic social media marketing in the construction industry.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
    category: "Social Media",
    date: "2024-12-05",
    readTime: "10 min read",
    author: "Ravi Kumar",
    featured: false,
  },
  {
    id: 4,
    title: "Website Design Best Practices for Manufacturing Businesses",
    excerpt: "Essential design principles and conversion optimization techniques for manufacturing company websites that drive results.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    category: "Web Design",
    date: "2024-11-28",
    readTime: "7 min read",
    author: "Ravi Kumar",
    featured: false,
  },
  {
    id: 5,
    title: "ROI-Driven PPC Campaigns: A Case Study",
    excerpt: "How we helped a uPVC manufacturer achieve 400% ROI through strategic Google Ads and Meta advertising campaigns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    category: "PPC Advertising",
    date: "2024-11-20",
    readTime: "9 min read",
    author: "Himanshu Shekhar",
    featured: false,
  },
  {
    id: 6,
    title: "Content Marketing Strategy for B2B Manufacturing",
    excerpt: "Build authority and drive organic traffic with a content marketing strategy tailored for manufacturing businesses.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    category: "Content Marketing",
    date: "2024-11-15",
    readTime: "12 min read",
    author: "Ishita Bansal",
    featured: false,
  },
];

const categories = ["All", "Digital Marketing", "Lead Generation", "Social Media", "Web Design", "PPC Advertising", "Content Marketing"];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920&auto=format&fit=crop"
            alt="Person writing blog content"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        
        <div className="container py-16 md:py-24 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Insights & Resources
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Marketing Insights for{" "}
              <span className="bg-gradient-to-r from-[#5170FF] to-[#5D17EB] bg-clip-text text-transparent">
                Growth-Focused
              </span>{" "}
              Businesses
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Expert insights, proven strategies, and actionable tips to help your business grow through smarter marketing and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 flex items-center relative max-w-md">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles..."
                className="h-12 w-full rounded-md border bg-background pl-10 pr-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Articles</h2>
          <p className="mt-2 text-muted-foreground">Our most popular and impactful content</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5170FF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <ArrowRight className="h-4 w-4 text-[#5170FF] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="container py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="container pb-16 md:pb-24">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">All Articles</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-foreground text-xs">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#5170FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                    <ArrowRight className="h-3 w-3 text-[#5170FF] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px]">
          <div className="relative rounded-2xl bg-background p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Stay Updated with Marketing Insights
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest marketing strategies, industry insights, and growth tips delivered to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
              <Button
                type="submit"
                className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}