import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

interface BlogLayoutProps {
  children: ReactNode;
  post?: BlogPost;
  showBackButton?: boolean;
}

const BlogLayout = ({ children, post, showBackButton = false }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              A+ Reviews
            </Link>
            <div className="flex items-center gap-6">
              <Link 
                to="/blog" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                href="https://app.aplusreview.io/auth" 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {showBackButton && (
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        )}

        {post && (
          <article className="mb-12">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t">
                <span className="text-sm text-muted-foreground">By {post.author}</span>
                {post.tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-sm text-muted-foreground hover:text-primary cursor-pointer"
                      >
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </article>
        )}

        {!post && children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              A+ Reviews
            </Link>
            <p className="text-muted-foreground mt-4 mb-8">
              Helping service businesses get more Google reviews with automated SMS sequences.
            </p>
            <div className="flex justify-center gap-8">
              <Link 
                to="/blog" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;