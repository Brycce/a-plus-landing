import { useParams, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, getAllTags } from '@/data/blogPosts';
import BlogLayout from '@/components/blog/BlogLayout';
import MarkdownContent from '@/components/blog/MarkdownContent';
import SEOHead from '@/components/blog/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2 } from 'lucide-react';
import { useEffect } from 'react';

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
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Generate JSON-LD structured data for SEO
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
        
        {/* Share Button */}
        <div className="flex justify-center pt-8 border-t mt-12">
          <button 
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share this article
          </button>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-2xl p-8 mt-12 text-center border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to get more Google reviews?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Join thousands of service businesses using A+ Reviews to automate their review collection and beat their competition.
          </p>
          <Link 
            href="https://app.aplusreview.io/auth"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPost;