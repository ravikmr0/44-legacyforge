import { Button } from "@/components/ui/button";
import { Badge } from "@/components/site/Badge";
import { Calendar, Clock, ArrowRight, Search, BookOpen } from "lucide-react";
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
      {/* Hero Section with Enhanced Design */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920&auto=format&fit=crop"
            alt="Person writing blog content"
            className="h-full w-full object-cover opacity-25"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />

          <motion.div
            aria-hidden
            className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 blur-3xl opacity-15"
            animate={{
              x: [-30, 30, -30],
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          <motion.div
            aria-hidden
            className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 blur-3xl opacity-10"
            animate={{
              x: [20, -20, 20],
              y: [10, 20, 10],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1,
            }}
          />

          {/* Floating elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-15, -40, -15],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <BookOpen className="h-4 w-4 text-white/30" />
            </motion.div>
          ))}

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container py-16 md:py-24 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
              Insights & Resources
            </motion.span>

            <motion.h1
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Marketing Insights for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Growth-Focused
              </span>{" "}
              Businesses
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Expert insights, proven strategies, and actionable tips to help your business grow through smarter marketing and digital transformation.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="mt-8 relative max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <input
                type="search"
                placeholder="Search articles, topics, and insights..."
                className="h-14 w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-md pl-12 pr-4 text-white placeholder:text-white/50 outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="container py-16 md:py-20">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Articles</h2>
          <p className="mt-3 text-muted-foreground text-lg">Our most popular and impactful content</p>
        </motion.div>

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
              <div className="relative overflow-hidden rounded-2xl border-2 bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/95 text-foreground backdrop-blur-sm">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">By {post.author}</span>
                    <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="container py-8">
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700" : "hover:border-blue-400"}
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </section>

      {/* All Posts */}
      <section className="container pb-16 md:pb-20">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">All Articles</h2>
          <p className="mt-2 text-muted-foreground text-lg">Explore our complete collection of insights</p>
        </motion.div>

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
              <div className="relative h-full overflow-hidden rounded-xl border-2 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/95 text-foreground text-xs backdrop-blur-sm">
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">By {post.author}</span>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-blue-600 to-cyan-600 p-[1px]">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Stay Updated with Marketing Insights
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Get the latest marketing strategies, industry insights, and growth tips delivered to your inbox every week.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-12 rounded-lg border-2 bg-white px-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                  >
                    Subscribe Now
                  </Button>
                </form>
                <p className="mt-4 text-xs text-muted-foreground">
                  Join 5,000+ marketers and business owners. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
