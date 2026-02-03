import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Menu, X } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
  post?: BlogPost;
  showBackButton?: boolean;
}

const BlogLayout = ({ children, post, showBackButton = false }: BlogLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation — matches landing header */}
      <header className="w-full bg-white sticky top-0 z-50 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
        <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/aplusblue.png" alt="A+ Reviews Logo" className="w-8 h-8 rounded" />
            <span className="text-[22px] text-gray-900 font-bold tracking-tight">A+ Reviews</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/#how-it-works" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">How it works</Link>
            <Link to="/#features" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link to="/#pricing" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link to="/blog" className="text-[15px] font-medium text-gray-900 transition-colors">Blog</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-[15px] font-medium text-gray-700 hover:text-gray-900" asChild>
              <Link to="https://app.aplusreviews.io/auth?tab=signin">Sign in</Link>
            </Button>
            <Button className="bg-[#3C83F6] hover:bg-[#2563EB] text-white text-[15px] font-semibold rounded-full px-6 h-10" asChild>
              <Link to="https://app.aplusreviews.io/auth?tab=signup">Get started</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 animate-fade-in">
            <Link to="/#how-it-works" className="block text-[15px] font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>How it works</Link>
            <Link to="/#features" className="block text-[15px] font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link to="/#pricing" className="block text-[15px] font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link to="/blog" className="block text-[15px] font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Blog</Link>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link to="https://app.aplusreviews.io/auth?tab=signin">Sign in</Link>
              </Button>
              <Button className="w-full bg-[#3C83F6] hover:bg-[#2563EB] text-white rounded-full" asChild>
                <Link to="https://app.aplusreviews.io/auth?tab=signup">Get started</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {showBackButton && (
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 mb-10 transition-colors text-[15px] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        )}

        {post && (
          <article className="mb-12">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="bg-[#E8F0FE] text-[#3C83F6] px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime} min read
                </div>
              </div>

              <h1 className="text-4xl lg:text-[3.25rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-400">By {post.author}</span>
                {post.tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#3C83F6] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600">
              {children}
            </div>
          </article>
        )}

        {!post && children}
      </main>

      {/* Footer — matches landing footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-2.5">
                <img src="/images/aplusblue.png" alt="A+ Reviews Logo" className="w-8 h-8 rounded" />
                <span className="text-xl font-bold tracking-tight">A+ Reviews</span>
              </Link>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Automate your review collection and grow your business with SMS campaigns that work.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Product</h3>
              <ul className="space-y-3.5">
                <li><Link to="/#features" className="text-gray-400 hover:text-white transition-colors text-[15px]">Features</Link></li>
                <li><Link to="/#pricing" className="text-gray-400 hover:text-white transition-colors text-[15px]">Pricing</Link></li>
                <li><Link to="https://app.aplusreviews.io/auth?tab=signup" className="text-gray-400 hover:text-white transition-colors text-[15px]">Get Started</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Company</h3>
              <ul className="space-y-3.5">
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-[15px]">Blog</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-[15px]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Legal</h3>
              <ul className="space-y-3.5">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-[15px]">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-[15px]">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} A+ Reviews. All rights reserved.
            </p>
            <span className="text-gray-500 text-sm">Built for local businesses</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
