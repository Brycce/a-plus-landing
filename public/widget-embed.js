(function() {
  'use strict';

  // Configuration
  const SUPABASE_URL = "https://vtuvampachualjdnxtjj.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dXZhbXBhY2h1YWxqZG54dGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMzM2NDksImV4cCI6MjA2NzkwOTY0OX0.jMBQEAVcKdTLeygxGiAAr-9eY5HMm1Lia6i55uRrbzA";

  // Extract businessId from script URL
  function getBusinessId() {
    const scripts = document.querySelectorAll('script[src*="widget-embed.js"]');
    for (let script of scripts) {
      const url = new URL(script.src);
      const businessId = url.searchParams.get('businessId');
      if (businessId) return businessId;
    }
    return null;
  }

  // Create Supabase client-like functionality
  function createSupabaseClient() {
    async function fetchReviews(businessId) {
      try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/google_reviews?business_id=eq.${businessId}&rating=eq.5&customer_name=not.is.null&customer_name=neq.&order=review_date.desc&limit=20`, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          }
        });

        if (!response.ok) {
          console.error('Failed to fetch reviews:', response.status, response.statusText);
          return [];
        }

        const data = await response.json();
        return data || [];
      } catch (error) {
        console.error('Error fetching reviews for widget:', error);
        return [];
      }
    }

    return {
      from: () => ({
        select: () => ({
          eq: () => ({
            not: () => ({
              neq: () => ({
                order: () => ({
                  limit: () => ({ 
                    then: (callback) => fetchReviews().then(data => callback({ data, error: null }))
                  })
                })
              })
            })
          })
        })
      }),
      fetchReviews
    };
  }

  // Widget class
  class FloatingReviewWidget {
    constructor(businessId) {
      this.businessId = businessId;
      this.reviews = [];
      this.currentIndex = 0;
      this.isVisible = false;
      this.isHovered = false;
      this.isDismissed = false;
      this.loading = true;
      this.intervalRef = null;
      this.visibilityTimeoutRef = null;
      this.widget = null;
      
      // Check if widget was previously dismissed
      const dismissed = localStorage.getItem(`reviewWidget_dismissed_${businessId}`);
      if (dismissed === 'true') {
        this.isDismissed = true;
      }

      this.supabase = createSupabaseClient();
      this.init();
    }

    async init() {
      await this.fetchReviews();
      if (this.reviews.length > 0 && !this.loading && !this.isDismissed) {
        this.createWidget();
        this.startCycle();
      }
    }

    async fetchReviews() {
      try {
        this.loading = true;
        const reviewsData = await this.supabase.fetchReviews(this.businessId);
        
        if (reviewsData && reviewsData.length > 0) {
          this.reviews = reviewsData;
        }
      } catch (error) {
        console.error('Error in fetchReviews:', error);
      } finally {
        this.loading = false;
      }
    }

    createWidget() {
      // Check if widget already exists
      if (this.widget) return;

      // Create widget container
      this.widget = document.createElement('div');
      this.widget.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        transition: all 0.5s ease-in-out;
        transform: translateY(100%);
        opacity: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;

      // Create widget content
      this.widget.innerHTML = `
        <div style="
          background: white;
          border-radius: 8px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid #e5e7eb;
          padding: 16px;
          max-width: 280px;
          min-width: 240px;
          position: relative;
        ">
          <button style="
            position: absolute;
            top: 8px;
            right: 8px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #f3f4f6;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.2s;
            cursor: pointer;
          " class="close-btn">
            <span style="width: 12px; height: 12px; color: #6b7280; font-size: 12px;">✕</span>
          </button>
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 2px;" class="stars-container">
              ${this.renderStars()}
            </div>
            <span style="font-size: 12px; color: #9ca3af; font-weight: 500;" class="platform-text">
              ${this.reviews[this.currentIndex]?.platform || 'Google'}
            </span>
          </div>
          
          <div style="margin-bottom: 12px;" class="review-text-container">
            <p style="
              font-size: 14px;
              color: #1f2937;
              line-height: 1.5;
              margin: 0;
              font-weight: 500;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            " class="review-text">
              "${this.reviews[this.currentIndex]?.review_text?.substring(0, 120) || ''}..."
            </p>
          </div>
          
          <div>
            <p style="
              font-size: 12px;
              color: #6b7280;
              margin: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            " class="customer-name">
              — ${this.reviews[this.currentIndex]?.customer_name || ''}
            </p>
          </div>
        </div>
      `;

      // Add event listeners
      const closeBtn = this.widget.querySelector('.close-btn');
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleDismiss();
      });

      this.widget.addEventListener('mouseenter', () => this.handleMouseEnter());
      this.widget.addEventListener('mouseleave', () => this.handleMouseLeave());

      // Show close button on hover
      this.widget.addEventListener('mouseenter', () => {
        closeBtn.style.opacity = '1';
      });
      this.widget.addEventListener('mouseleave', () => {
        closeBtn.style.opacity = '0';
      });

      // Append to body
      document.body.appendChild(this.widget);
    }

    renderStars() {
      return Array(5).fill(0).map(() => 
        '<span style="width: 12px; height: 12px; color: #fbbf24; font-size: 12px;">★</span>'
      ).join('');
    }

    updateWidgetContent() {
      if (!this.widget || this.reviews.length === 0) return;

      const currentReview = this.reviews[this.currentIndex];
      if (!currentReview) return;

      const platformText = this.widget.querySelector('.platform-text');
      const reviewText = this.widget.querySelector('.review-text');
      const customerName = this.widget.querySelector('.customer-name');

      if (platformText) platformText.textContent = currentReview.platform || 'Google';
      if (reviewText) reviewText.textContent = `"${(currentReview.review_text || '').substring(0, 120)}..."`;
      if (customerName) customerName.textContent = `— ${currentReview.customer_name || ''}`;
    }

    startCycle() {
      if (this.isHovered) return;

      // Clear existing timers
      if (this.intervalRef) clearInterval(this.intervalRef);
      if (this.visibilityTimeoutRef) clearTimeout(this.visibilityTimeoutRef);

      // Start the cycle
      this.intervalRef = setInterval(() => {
        if (this.isHovered) return;

        // Show widget
        this.setVisible(true);

        // Hide after 8 seconds
        this.visibilityTimeoutRef = setTimeout(() => {
          if (!this.isHovered) {
            this.setVisible(false);
            // Move to next review
            this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
            this.updateWidgetContent();
          }
        }, 8000); // 8 seconds visible

      }, 15000); // Every 15 seconds

      // Show first review immediately
      this.setVisible(true);
      this.visibilityTimeoutRef = setTimeout(() => {
        if (!this.isHovered) {
          this.setVisible(false);
          this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
          this.updateWidgetContent();
        }
      }, 8000);
    }

    setVisible(visible) {
      if (!this.widget) return;
      
      this.isVisible = visible;
      if (visible) {
        this.widget.style.transform = 'translateY(0)';
        this.widget.style.opacity = '1';
      } else {
        this.widget.style.transform = 'translateY(100%)';
        this.widget.style.opacity = '0';
      }
    }

    handleMouseEnter() {
      this.isHovered = true;
      this.setVisible(true);
      if (this.visibilityTimeoutRef) {
        clearTimeout(this.visibilityTimeoutRef);
      }
    }

    handleMouseLeave() {
      this.isHovered = false;
      // Resume normal cycle after leaving hover
      this.visibilityTimeoutRef = setTimeout(() => {
        this.setVisible(false);
        this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
        this.updateWidgetContent();
      }, 2000); // Brief delay before hiding
    }

    handleDismiss() {
      // Clear all timers
      if (this.intervalRef) clearInterval(this.intervalRef);
      if (this.visibilityTimeoutRef) clearTimeout(this.visibilityTimeoutRef);
      
      // Hide immediately and mark as dismissed
      this.setVisible(false);
      this.isDismissed = true;
      
      // Store in localStorage to persist dismissal
      localStorage.setItem(`reviewWidget_dismissed_${this.businessId}`, 'true');

      // Remove widget after animation
      setTimeout(() => {
        if (this.widget && this.widget.parentNode) {
          this.widget.parentNode.removeChild(this.widget);
        }
      }, 500);
    }

    destroy() {
      if (this.intervalRef) clearInterval(this.intervalRef);
      if (this.visibilityTimeoutRef) clearTimeout(this.visibilityTimeoutRef);
      if (this.widget && this.widget.parentNode) {
        this.widget.parentNode.removeChild(this.widget);
      }
    }
  }

  // Initialize widget when DOM is ready
  function initWidget() {
    const businessId = getBusinessId();
    if (!businessId) {
      console.warn('A+ Reviews Widget: No businessId provided in script URL');
      return;
    }

    // Create widget instance
    new FloatingReviewWidget(businessId);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }

})();