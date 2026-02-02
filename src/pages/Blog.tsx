import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import BlogLayout from '@/components/blog/BlogLayout';
import SEOHead from '@/components/blog/SEOHead';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);

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
        {/* Hero */}
        <div className="text-center mb-20">
          <p className="text-[#0040E6] font-semibold text-sm tracking-wide uppercase mb-4">Blog</p>
          <h1 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 tracking-tight mb-6">
            Insights for growing your<br />online reputation
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Expert strategies on Google reviews, local SEO, and turning happy customers into your best marketing channel.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="block bg-[#FFF8F0] rounded-3xl border border-orange-100/60 overflow-hidden hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#0040E6] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-[#0040E6] font-semibold text-xs uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-500 mb-5 leading-relaxed max-w-3xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readingTime} min read
                  </div>
                  <span>{featuredPost.author}</span>
                </div>

                <span className="inline-flex items-center gap-2 bg-[#0040E6] text-white px-6 py-3 rounded-full font-semibold text-[15px] shadow-lg shadow-blue-500/20">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Latest Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                >
                  <span className="bg-[#E8F0FE] text-[#0040E6] px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 leading-tight tracking-tight group-hover:text-[#0040E6] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} min
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-[#0040E6] font-semibold text-sm group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gray-900 rounded-3xl p-10 lg:p-14 text-center">
          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to grow your reviews?
          </h3>
          <p className="text-gray-400 mb-8 text-lg max-w-lg mx-auto">
            Start collecting more Google reviews automatically with QR codes and SMS campaigns.
          </p>
          <Button className="bg-[#0040E6] hover:bg-[#0033BF] text-white rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-blue-500/20" asChild>
            <Link to="/auth?tab=signup">
              Start in 5 minutes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </BlogLayout>
    </>
  );
};

export default Blog;
