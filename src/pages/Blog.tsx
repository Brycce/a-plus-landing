import { Link } from 'react-router-dom';
import { blogPosts, getAllCategories, getAllTags } from '@/data/blogPosts';
import BlogLayout from '@/components/blog/BlogLayout';
import SEOHead from '@/components/blog/SEOHead';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "A+ Reviews Blog",
    "description": "Expert insights on Google reviews, local SEO, and business growth for service businesses",
    "url": window.location.href,
    "publisher": {
      "@type": "Organization",
      "name": "A+ Reviews",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo.png`
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "url": `${window.location.origin}/blog/${post.slug}`
    }))
  };

  return (
    <>
      <SEOHead
        title="Blog | A+ Reviews - Google Reviews & Local SEO Insights"
        description="Expert insights on Google reviews, local SEO, and business growth strategies for service businesses. Learn how to get more reviews and beat your competition."
        keywords="Google reviews, local SEO, business growth, service business marketing, online reputation, review management"
        ogType="website"
        ogTitle="A+ Reviews Blog - Google Reviews & Local SEO Insights"
        ogDescription="Expert insights on Google reviews, local SEO, and business growth strategies for service businesses."
        canonicalUrl={window.location.href}
        structuredData={structuredData}
      />

      <BlogLayout>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            A+ Reviews Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert insights on Google reviews, local SEO, and business growth strategies for service businesses. 
            Learn how to get more reviews and beat your competition.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-primary font-medium text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readingTime} min read
                  </div>
                  <span>By {featuredPost.author}</span>
                </div>

                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {otherPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} min
                    </div>
                  </div>

                  {post.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-muted/30 rounded-2xl p-8 text-center border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Never Miss an Update
          </h3>
          <p className="text-muted-foreground mb-6">
            Get expert insights on Google reviews and business growth delivered to your inbox.
          </p>
          <Link 
            href="https://app.aplusreview.io/auth"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </BlogLayout>
    </>
  );
};

export default Blog;