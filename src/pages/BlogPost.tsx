import { useParams, Navigate, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '@/data/blogPosts';
import BlogLayout from '@/components/blog/BlogLayout';
import MarkdownContent from '@/components/blog/MarkdownContent';
import SEOHead from '@/components/blog/SEOHead';
import { ArrowRight, Share2 } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "A+ Reviews",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo.png`
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", ")
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | A+ Reviews Blog`}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
        author={post.author}
        ogType="article"
        ogTitle={post.title}
        ogDescription={post.metaDescription}
        canonicalUrl={window.location.href}
        structuredData={structuredData}
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        section={post.category}
        tags={post.tags}
      />

      <BlogLayout post={post} showBackButton>
        <MarkdownContent content={post.content} />

        {/* Share */}
        <div className="flex justify-center pt-8 border-t border-gray-100 mt-12">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0040E6] transition-colors text-[15px] font-medium"
          >
            <Share2 className="w-4 h-4" />
            Share this article
          </button>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-3xl p-10 mt-14 text-center">
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
            Ready to get more Google reviews?
          </h3>
          <p className="text-gray-400 mb-8 text-lg max-w-lg mx-auto">
            Start collecting reviews automatically with QR codes and SMS campaigns.
          </p>
          <Button className="bg-[#0040E6] hover:bg-[#0033BF] text-white rounded-full px-8 h-12 text-[15px] font-semibold shadow-lg shadow-blue-500/20" asChild>
            <Link to="/auth?tab=signup">
              Start in 5 minutes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPost;
