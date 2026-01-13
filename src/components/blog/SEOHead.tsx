import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  twitterCard = 'summary_large_image',
  structuredData,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (author) updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:url', ogUrl || window.location.href, true);
    updateMetaTag('og:site_name', 'A+ Reviews', true);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }

    // Twitter tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);

    // Article-specific meta tags
    if (ogType === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (author) updateMetaTag('article:author', author, true);
      if (section) updateMetaTag('article:section', section, true);
      
      // Remove existing article:tag meta tags
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      
      // Add new article:tag meta tags
      tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Structured Data
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // We'll leave the meta tags as they provide value for SEO
      // and will be replaced when navigating to other pages
    };
  }, [
    title,
    description,
    keywords,
    author,
    canonicalUrl,
    ogType,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    twitterCard,
    structuredData,
    publishedTime,
    modifiedTime,
    section,
    tags
  ]);

  return null; // This component doesn't render anything
};

export default SEOHead;