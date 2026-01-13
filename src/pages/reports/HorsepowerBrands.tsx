import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function HorsepowerBrands() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ display: 'flex' }}>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 200,
          background: 'white',
          border: '1px solid #e8e8e8',
          borderRadius: '4px',
          padding: '12px',
          cursor: 'pointer',
          display: 'none'
        }}
        className="mobile-menu-btn"
      >
        <div style={{ width: '20px', height: '2px', background: '#000', marginBottom: '4px' }}></div>
        <div style={{ width: '20px', height: '2px', background: '#000', marginBottom: '4px' }}></div>
        <div style={{ width: '20px', height: '2px', background: '#000' }}></div>
      </button>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 99,
            display: 'none'
          }}
          className="mobile-overlay"
        />
      )}

      {/* Side Navigation */}
      <nav style={{
        position: 'fixed',
        left: mobileMenuOpen ? 0 : '-240px',
        top: 0,
        width: '240px',
        height: '100vh',
        borderRight: '1px solid #e8e8e8',
        padding: '40px 20px',
        overflowY: 'auto',
        background: 'white',
        zIndex: 100,
        transition: 'left 0.3s ease'
      }}
      className="side-nav">
        <div style={{ fontSize: '0.8em', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '20px' }}>Contents</div>

        <a href="#tldr" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>TL;DR</a>
        <a href="#why-reviews" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Why Reviews Matter</a>
        <a href="#benchmark" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Average Doesn't Win</a>
        <a href="#revenue-impact" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Revenue Impact</a>
        <a href="#brand-performance" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Brand Performance</a>
        <a href="#top-opportunities" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Top 15 Opportunities</a>
        <a href="#market-examples" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Market Examples</a>
        <a href="#compounding-problem" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Compounding Problem</a>
        <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>How This Works</a>
        <a href="#franchise-dev" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Franchise Development</a>
        <a href="#cta" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.9em', color: '#666', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: '12px', transition: 'all 0.2s' }}>Next Steps</a>

        <style>{`
          nav a:hover {
            color: #000 !important;
            border-left-color: #000 !important;
          }

          /* Desktop - show sidebar, hide mobile button */
          @media (min-width: 769px) {
            .side-nav {
              left: 0 !important;
            }
          }

          /* Mobile - hide sidebar by default, show mobile button */
          @media (max-width: 768px) {
            .mobile-menu-btn {
              display: block !important;
            }
            .mobile-overlay {
              display: block !important;
            }
            .main-content {
              margin-left: 0 !important;
            }
          }
        `}</style>
      </nav>

      {/* Main Content */}
      <div className="main-content" style={{ marginLeft: '240px', flex: 1 }}>
      <Helmet>
        <title>Horsepower Brands - Competitive Intelligence Report | A+ Reviews</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Comprehensive competitive analysis of 176 Horsepower franchise locations across 10 brands. 66% not in top 3, 19 quick win opportunities identified." />

        <meta property="og:title" content="Horsepower Brands Competitive Intelligence Report" />
        <meta property="og:description" content="176 franchise locations analyzed across 10 brands. 66% not in top 3. 19 locations could win in under 2 months with systematic review collection." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://aplusreviews.io/reports/horsepower-og-image.png" />
        <meta property="og:url" content="https://aplusreviews.io/reports/horsepower-brands" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horsepower Brands Competitive Intelligence Report" />
        <meta name="twitter:description" content="176 franchise locations analyzed across 10 brands. 66% not in top 3. 19 locations could win in under 2 months." />
        <meta name="twitter:image" content="https://aplusreviews.io/reports/horsepower-og-image.png" />
      </Helmet>
      <style>{`
        .report-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.8;
          color: #1a1a1a;
          padding: 60px 40px;
          max-width: 900px;
          margin: 0 auto;
          font-size: 18px;
          -webkit-font-smoothing: antialiased;
        }
        .report-container p {
          margin-top: 20px;
        }
        .report-container p:first-child {
          margin-top: 0;
        }
        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 30px;
          border-bottom: 1px solid #e8e8e8;
        }
        .report-header img {
          height: 50px;
        }
        .report-container h1 {
          font-size: 3em;
          color: #000;
          margin-bottom: 8px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .report-container h2 {
          font-size: 2em;
          color: #000;
          margin: 70px 0 24px 0;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .report-container h3 {
          font-size: 1.3em;
          color: #000;
          margin: 30px 0 16px 0;
          font-weight: 600;
        }
        .exec-summary {
          margin: 50px 0;
          padding: 0;
        }
        .stat-highlight {
          font-size: 4em;
          font-weight: 300;
          color: #000;
          display: block;
          margin: 0;
          letter-spacing: -0.03em;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin: 60px 0;
        }
        .stat-item {
          text-align: left;
        }
        .stat-label {
          font-size: 0.9em;
          color: #666;
          margin-top: 8px;
          font-weight: 400;
        }
        .brand-card {
          margin: 32px 0;
          padding: 28px 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .brand-card:last-child {
          border-bottom: none;
        }
        .brand-logo {
          height: 45px;
          width: 120px;
          object-fit: contain;
          object-position: left center;
          flex-shrink: 0;
        }
        .brand-content {
          flex: 1;
        }
        .brand-name {
          font-size: 1.3em;
          font-weight: 600;
          color: #000;
          margin-bottom: 12px;
        }
        .brand-metrics {
          color: #666;
          font-size: 0.95em;
          line-height: 1.7;
        }
        .opportunity-table {
          width: 100%;
          border-collapse: collapse;
          margin: 40px 0;
        }
        .opportunity-table th {
          text-align: left;
          font-weight: 500;
          font-size: 0.85em;
          color: #666;
          padding: 12px 16px 12px 0;
          border-bottom: 1px solid #e8e8e8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .opportunity-table td {
          padding: 16px 16px 16px 0;
          border-bottom: 1px solid #f5f5f5;
          color: #1a1a1a;
        }
        .opportunity-table tr:last-child td {
          border-bottom: none;
        }
        .highlight-orange {
          color: #f37920;
          font-weight: 600;
        }
        .action-label {
          color: #999;
          font-size: 0.85em;
          font-weight: 500;
        }
        .note {
          color: #999;
          font-size: 0.9em;
          font-style: italic;
          margin: 30px 0;
        }
        .solution-section {
          margin: 70px 0;
          padding: 50px 0;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
        }
        .cta-box {
          background: #000;
          color: white;
          padding: 50px;
          margin: 70px 0;
          text-align: center;
        }
        .cta-box h3 {
          color: white;
          font-size: 1.8em;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .cta-button {
          display: inline-block;
          background: #f37920;
          color: white;
          padding: 16px 36px;
          margin-top: 30px;
          font-weight: 500;
          font-size: 1em;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .cta-button:hover {
          opacity: 0.9;
        }
        .report-footer {
          margin-top: 70px;
          padding-top: 30px;
          border-top: 1px solid #e8e8e8;
          text-align: center;
          color: #999;
          font-size: 0.85em;
        }
        .callout-box {
          margin: 40px 0;
          padding: 30px;
          background: #fafafa;
          border-left: 3px solid #f37920;
        }
        .how-it-works-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 50px;
          margin: 50px 0;
        }

        @media (max-width: 768px) {
          .report-container {
            padding: 24px 16px !important;
            font-size: 16px !important;
            max-width: 100% !important;
          }
          .report-container h1 { font-size: 1.75em !important; line-height: 1.2 !important; }
          .report-container h2 { font-size: 1.5em !important; margin: 40px 0 16px 0 !important; line-height: 1.3 !important; }
          .report-container h3 { font-size: 1.25em !important; line-height: 1.3 !important; }
          .report-container p { font-size: 16px !important; line-height: 1.6 !important; }
          .report-header { flex-direction: column; text-align: center; gap: 16px; margin-bottom: 40px !important; }
          .report-header img { height: 40px !important; }
          .stat-grid { grid-template-columns: 1fr; gap: 24px; }
          .stat-highlight { font-size: 2.5em !important; }
          .stat-label { font-size: 0.9em !important; }
          .brand-card { flex-direction: column; gap: 12px; align-items: flex-start; padding: 20px 0 !important; }
          .brand-logo { height: 32px; width: 90px; }
          .brand-name { font-size: 1.2em !important; }
          .opportunity-table { font-size: 0.85em !important; display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .opportunity-table th, .opportunity-table td { padding: 10px 8px !important; font-size: 14px !important; }
          .how-it-works-grid { grid-template-columns: 1fr; gap: 20px; }
          .cta-box { padding: 24px 20px !important; }
          .cta-button { padding: 14px 28px !important; font-size: 16px !important; }
        }
      `}</style>

      <div className="report-container">
        {/* Header */}
        <div className="report-header">
          <div>
            <h1 style={{ fontSize: '2.5em' }}>Competitive Intelligence Report</h1>
            <div style={{ fontSize: '1.15em', color: '#666' }}>176 Locations Analyzed Across 10 Brands</div>
          </div>
          <img src="/reports/horsepower_logo.png" alt="Horsepower Brands" />
        </div>

        {/* TL;DR Summary */}
        <div id="tldr" style={{ margin: '50px 0', padding: '30px', background: '#f5f5f5', borderRadius: '8px', scrollMarginTop: '20px' }}>
          <h2 id="tldr" style={{ marginTop: 0, fontSize: '1.5em', scrollMarginTop: '20px' }}>TL;DR - What You Need to Know</h2>

          <p style={{ marginTop: '20px' }}><strong>The Problem:</strong></p>
          <p style={{ marginTop: '8px', paddingLeft: '20px' }}>• 66% of your franchisees aren't in top 3 local search positions<br />
          • This costs approximately $103M/year in lost revenue opportunity across the network<br />
          • Competitors are pulling further ahead every month you wait</p>

          <p style={{ marginTop: '20px' }}><strong>Your Current Position:</strong></p>
          <p style={{ marginTop: '8px', paddingLeft: '20px' }}>• Network average: 56 reviews per location (78th percentile - better than 78% of home services)<br />
          • Average rating: 4.9/5.0 (18% above industry average of 4.15)<br />
          • The quality is there - the problem is purely volume and visibility</p>

          <p style={{ marginTop: '20px' }}><strong>The Opportunity:</strong></p>
          <p style={{ marginTop: '8px', paddingLeft: '20px' }}>• 19 locations could reach top 3 in under 2 months with systematic approach<br />
          • 49 locations need less than 100 reviews to compete<br />
          • Industry median is just 12 reviews - the bar is remarkably low</p>

          <p style={{ marginTop: '20px' }}><strong>The Solution:</strong></p>
          <p style={{ marginTop: '8px', paddingLeft: '20px' }}>• At-the-door QR codes (5x better conversion than follow-up texts)<br />
          • Employee incentive systems (what gets rewarded gets done)<br />
          • CRM review boosts (reactivate past customers for reviews)<br />
          • Real-time tracking and leaderboards</p>

          <p style={{ marginTop: '20px' }}><strong>The Ask:</strong></p>
          <p style={{ marginTop: '8px', paddingLeft: '20px' }}>15-minute call to review full competitive intelligence, specific market action plans, and implementation roadmap for your highest-priority locations.</p>
        </div>

        {/* Executive Summary */}
        <div className="exec-summary">
          <h2>Executive Summary</h2>
          <p style={{ marginBottom: '40px' }}>We analyzed 176 Horsepower franchise locations (with complete GMB data) across 10 brands to understand their competitive position in local search, plus conducted deep competitive analysis on 133 locations.</p>

          <div className="stat-grid">
            <div className="stat-item">
              <span className="stat-highlight">66%</span>
              <div className="stat-label">Not in Top 3</div>
            </div>
            <div className="stat-item">
              <span className="stat-highlight">49</span>
              <div className="stat-label">Need &lt;100 Reviews</div>
            </div>
            <div className="stat-item">
              <span className="stat-highlight">19</span>
              <div className="stat-label">Could Win in &lt;2 Months</div>
            </div>
          </div>

          <p>Your franchisees are losing thousands of leads per year to competitors with more reviews. But the gap is closeable—and some locations are just weeks away from dominating their markets.</p>
        </div>

        {/* Why Reviews Matter */}
        <h2 id="why-reviews" style={{ scrollMarginTop: '20px' }}>Why Google Reviews Matter</h2>
        <p>Google reviews directly impact revenue in three ways:</p>
        <p><strong>1. Search visibility:</strong> Google's local pack (top 3 results) gets 44% of clicks. Businesses with more reviews rank higher. Most of your franchisees aren't in the top 3.</p>
        <p><strong>2. Conversion rates:</strong> 87% of consumers read reviews before choosing a local business. A business with 40 reviews converts 3-5x better than one with 5 reviews.</p>
        <p><strong>3. Customer acquisition cost:</strong> Every review is free marketing that works 24/7. Franchisees with strong review profiles spend less on ads because organic search does the work.</p>

        <div style={{ margin: '40px 0' }}>
          <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '40px' }}>Where Do The Clicks Go?</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
              <div style={{ background: 'white', padding: '24px', borderLeft: '4px solid #000' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.1em', fontWeight: 600 }}>Top 3 Positions</div>
                  <div style={{ fontSize: '2.5em', fontWeight: 700, color: '#000' }}>44%</div>
                </div>
                <div style={{ marginTop: '8px', color: '#666', fontSize: '0.95em' }}>Nearly half of all clicks go here</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderLeft: '4px solid #e8e8e8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.1em', fontWeight: 600 }}>Position 4-10</div>
                  <div style={{ fontSize: '2.5em', fontWeight: 700, color: '#666' }}>8%</div>
                </div>
                <div style={{ marginTop: '8px', color: '#666', fontSize: '0.95em' }}>Being "close" doesn't matter</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderLeft: '4px solid #e8e8e8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.1em', fontWeight: 600 }}>Below Position 10</div>
                  <div style={{ fontSize: '2.5em', fontWeight: 700, color: '#999' }}>48%</div>
                </div>
                <div style={{ marginTop: '8px', color: '#666', fontSize: '0.95em' }}>Invisible to most searchers</div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>The top 3 positions capture 44% of all clicks. Position 4-10 gets just 8%. Being "close" to top 3 means losing 82% of potential traffic.</p>
        </div>

        <p>The franchisees who dominate their markets aren't necessarily better operators—they're just more visible online.</p>

        {/* Industry Benchmark Comparison */}
        <h2 id="benchmark" style={{ scrollMarginTop: '20px' }}>Average Doesn't Win in Local Search</h2>
        <p>Across 176 locations with complete data, Horsepower Brands averages <strong>56 reviews per location</strong>—placing your network at the <strong>78th percentile</strong> of the home services industry. That means you're outperforming 78% of the 48,000+ businesses we analyzed.</p>
        <p style={{ marginTop: '20px' }}>So you're winning, right?</p>
        <p style={{ marginTop: '20px' }}>Not exactly. Here's the problem: <strong>Google doesn't rank by percentiles</strong>. It ranks you against the specific competitors in your local market.</p>

        <div className="callout-box">
          <p style={{ margin: 0, fontSize: '1.1em', color: '#000' }}>
            <strong>Real Example: Charlotte Roofing Market</strong>
          </p>
          <p style={{ margin: '12px 0 0 0', color: '#666', lineHeight: 1.8 }}>
            Your location: 95 reviews (85th percentile performance)<br />
            Top 3 local competitors: 289, 347, and 412 reviews<br />
            Your position: #7 (outside the money zone)<br /><br />
            Being "above average" means nothing when you're competing against businesses with 3-4x your review count. The gap between 78th percentile and top 3 is where revenue disappears.
          </p>
        </div>

        <div style={{ margin: '40px 0' }}>
          <h3>How Horsepower Stacks Up</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e8e8e8' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px 12px 0', fontWeight: 600 }}>Metric</th>
                <th style={{ textAlign: 'left', padding: '12px 16px 12px 0', fontWeight: 600 }}>Industry Average</th>
                <th style={{ textAlign: 'left', padding: '12px 16px 12px 0', fontWeight: 600 }}>Horsepower</th>
                <th style={{ textAlign: 'left', padding: '12px 16px 12px 0', fontWeight: 600 }}>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '12px 16px 12px 0' }}>Average Reviews</td>
                <td style={{ padding: '12px 16px 12px 0' }}>54 reviews</td>
                <td style={{ padding: '12px 16px 12px 0' }}><strong>56 reviews</strong></td>
                <td style={{ padding: '12px 16px 12px 0', color: '#16a34a' }}>+4% above industry</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '12px 16px 12px 0' }}>Average Rating</td>
                <td style={{ padding: '12px 16px 12px 0' }}>4.15 stars</td>
                <td style={{ padding: '12px 16px 12px 0' }}><strong>4.9 stars</strong></td>
                <td style={{ padding: '12px 16px 12px 0', color: '#16a34a' }}>+18% above industry</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '12px 16px 12px 0' }}>Percentile Ranking</td>
                <td style={{ padding: '12px 16px 12px 0' }}>50th (by definition)</td>
                <td style={{ padding: '12px 16px 12px 0' }}><strong>78th percentile</strong></td>
                <td style={{ padding: '12px 16px 12px 0', color: '#16a34a' }}>Better than 78% of market</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0' }}>Top Quartile Locations</td>
                <td style={{ padding: '12px 16px 12px 0' }}>25% (by definition)</td>
                <td style={{ padding: '12px 16px 12px 0' }}><strong>41% of network</strong></td>
                <td style={{ padding: '12px 16px 12px 0', color: '#16a34a' }}>64% more in top quartile</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ margin: '40px 0' }}>
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '10px' }}>Where Horsepower Ranks Nationally</h3>
            <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9em', marginTop: 0, marginBottom: '30px' }}>vs 48,000+ home service businesses</p>

            <div style={{ position: 'relative', padding: '20px 0' }}>
              {/* Gauge background */}
              <div style={{ height: '60px', background: '#e8e8e8', borderRadius: '30px', position: 'relative' }}>
                {/* Percentile markers */}
                <div style={{ position: 'absolute', top: '-25px', left: '0%', textAlign: 'center', width: '50px', marginLeft: '-25px' }}>
                  <div style={{ fontSize: '0.85em', color: '#666' }}>0th</div>
                </div>
                <div style={{ position: 'absolute', top: '-25px', left: '25%', textAlign: 'center', width: '50px', marginLeft: '-25px' }}>
                  <div style={{ fontSize: '0.85em', color: '#666' }}>25th</div>
                </div>
                <div style={{ position: 'absolute', top: '-25px', left: '50%', textAlign: 'center', width: '50px', marginLeft: '-25px' }}>
                  <div style={{ fontSize: '0.85em', color: '#666' }}>50th</div>
                </div>
                <div style={{ position: 'absolute', top: '-25px', left: '75%', textAlign: 'center', width: '50px', marginLeft: '-25px' }}>
                  <div style={{ fontSize: '0.85em', color: '#666' }}>75th</div>
                </div>
                <div style={{ position: 'absolute', top: '-25px', left: '100%', textAlign: 'center', width: '50px', marginLeft: '-25px' }}>
                  <div style={{ fontSize: '0.85em', color: '#666' }}>100th</div>
                </div>

                {/* Arrow pointing to 78th percentile */}
                <div style={{ position: 'absolute', top: '-10px', left: '78%', marginLeft: '-30px' }}>
                  <div style={{ fontSize: '2em' }}>⬇</div>
                  <div style={{ position: 'absolute', top: '75px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                    <div style={{ background: '#000', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '1.1em', fontWeight: 600 }}>
                      YOU: 78th Percentile
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.95em', color: '#666', fontWeight: 600 }}>
                      56 reviews avg | 4.9★
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.05em', color: '#666', lineHeight: 1.7 }}>
                  <strong>Better than 78% of the industry...</strong><br />
                  <span style={{ fontSize: '0.95em' }}>But still losing to the 3 competitors in each local market that matter.</span>
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>78th percentile sounds impressive—until you realize Google ranks against local competitors, not national percentiles.</p>
        </div>

        <div className="callout-box" style={{ borderLeft: '3px solid #f37920' }}>
          <p style={{ margin: 0, fontSize: '1.05em', fontWeight: 600, color: '#000' }}>
            The Key Insight:
          </p>
          <p style={{ margin: '12px 0 0 0', color: '#666', lineHeight: 1.8 }}>
            Your quality is exceptional—4.9★ rating proves it. 77% of your locations maintain near-perfect ratings.<br /><br />
            The problem isn't quality. It's <strong>volume</strong>—and volume is solvable. You're averaging 56 reviews when you need 129 more to break into top 3. That gap can close in 6-12 months with a systematic approach.
          </p>
        </div>

        {/* Position Histogram */}
        <div style={{ margin: '60px 0' }}>
          <img src="/reports/position_histogram.png" alt="Distribution of Horsepower Positions" style={{ width: '100%', maxWidth: '100%', border: '1px solid #e8e8e8' }} />
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em' }}>Only 34% of your locations are in the top 3 positions. The remaining 66% are losing significant traffic to competitors—but most of those gaps are closeable with systematic review collection.</p>
        </div>

        {/* Revenue Impact Calculator */}
        <h2 id="revenue-impact" style={{ scrollMarginTop: '20px' }}>What This Is Costing You</h2>
        <p>Let's calculate the lost opportunity for a typical location outside the top 3. We'll show every assumption so you can adjust based on your actual data.</p>

        <div style={{ background: '#fafafa', padding: '30px', margin: '30px 0', borderLeft: '3px solid #e8e8e8' }}>
          <h3 style={{ marginTop: 0 }}>Example: Roofing Market (Mighty Dog Locations)</h3>

          <p style={{ marginTop: '20px', fontWeight: 600 }}>ASSUMPTIONS (Sources Listed):</p>
          <table style={{ width: '100%', marginTop: '12px', fontSize: '0.95em' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top', width: '40%' }}>Market size:</td>
                <td style={{ padding: '8px 0' }}>Mid-size metro (500K-1M population)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>Monthly search volume:</td>
                <td style={{ padding: '8px 0' }}>2,400 searches for "roofing near me" + variants<br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>[Source: SEMrush average for 50+ mid-market cities, Oct 2024]</span></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>Click distribution:</td>
                <td style={{ padding: '8px 0' }}>Top 3 positions: 44% of clicks (1,056 clicks/month)<br />
                Position 4-10: 8% of clicks (192 clicks/month)<br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>[Source: BrightLocal 2024 Local Consumer Review Survey]</span></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>Your current position:</td>
                <td style={{ padding: '8px 0' }}>#7 average (based on 66% of network outside top 3)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>Lead-to-quote rate:</td>
                <td style={{ padding: '8px 0' }}>15%<br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>[Source: HomeAdvisor 2024 home services data]</span></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>Quote-to-job close rate:</td>
                <td style={{ padding: '8px 0' }}>33%<br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>[Source: Industry standard for qualified inbound leads]</span></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', verticalAlign: 'top' }}>Average roofing job:</td>
                <td style={{ padding: '8px 0' }}>$8,500<br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>[Source: Angi 2024 roofing cost data, national average]</span></td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '30px', padding: '20px', background: '#fff', border: '2px solid #f37920' }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1em' }}>CALCULATION:</p>
            <p style={{ margin: '12px 0 0 0', lineHeight: 2 }}>
              Lost clicks per year: 160/month × 12 = <strong>1,920 clicks</strong><br />
              × 15% lead-to-quote rate = <strong>288 quotes</strong><br />
              × 33% close rate = <strong>95 jobs</strong><br />
              × $8,500 average job = <strong className="highlight-orange">$807,500 per location per year</strong>
            </p>
            <p style={{ marginTop: '16px', fontSize: '0.95em', color: '#666' }}>
              This is the opportunity cost of being position #7 instead of top 3.
            </p>
          </div>

          <p style={{ marginTop: '20px', fontSize: '1.05em', fontWeight: 600 }}>
            Network Impact:
          </p>
          <p style={{ marginTop: '8px' }}>
            128 locations not in top 3 (66% of network) × $807,500 = <strong className="highlight-orange" style={{ fontSize: '1.2em' }}>$103 million</strong> in addressable revenue going to competitors.
          </p>
        </div>

        <h3>Other Verticals (Conservative Estimates):</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '20px 0' }}>
          <div style={{ padding: '20px', background: '#fafafa', border: '1px solid #e8e8e8' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Lawn Care (Heroes)</p>
            <p style={{ marginTop: '12px', fontSize: '0.95em', lineHeight: 1.8 }}>
              Monthly service model vs one-time jobs<br />
              Average contract: $150/month<br />
              Customer lifetime: 24 months average<br />
              Lost opportunity: ~$240,000/location/year
            </p>
          </div>
          <div style={{ padding: '20px', background: '#fafafa', border: '1px solid #e8e8e8' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>HVAC (Varsity Zone)</p>
            <p style={{ marginTop: '12px', fontSize: '0.95em', lineHeight: 1.8 }}>
              Average install: $6,500<br />
              Higher competition (1,053 avg reviews needed)<br />
              Longer sales cycle<br />
              Lost opportunity: ~$580,000/location/year
            </p>
          </div>
        </div>

        <div style={{ margin: '50px 0' }}>
          <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', background: '#000', padding: '60px 40px', borderRadius: '8px', textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px', opacity: 0.7 }}>
              Network Opportunity Cost
            </div>
            <div style={{ fontSize: '6em', fontWeight: '700', lineHeight: 1, marginBottom: '30px' }}>
              $103M
            </div>
            <div style={{ fontSize: '1.3em', opacity: 0.9, marginBottom: '40px', lineHeight: 1.5 }}>
              in lost annual revenue going to competitors<br />
              because franchisees aren't in top 3 positions
            </div>
            <div style={{ borderTop: '1px solid #333', paddingTop: '30px', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2.5em', fontWeight: '700' }}>128</div>
                <div style={{ fontSize: '0.95em', opacity: 0.7, marginTop: '5px' }}>locations not in top 3</div>
              </div>
              <div style={{ fontSize: '2em', opacity: 0.3, alignSelf: 'center' }}>×</div>
              <div>
                <div style={{ fontSize: '2.5em', fontWeight: '700' }}>$807K</div>
                <div style={{ fontSize: '0.95em', opacity: 0.7, marginTop: '5px' }}>avg lost per location/year</div>
              </div>
            </div>
          </div>
        </div>

        <div className="callout-box" style={{ marginTop: '30px' }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#000' }}>Important Notes:</p>
          <p style={{ margin: '12px 0 0 0', color: '#666', lineHeight: 1.8 }}>
            • These are <strong>conservative</strong> estimates. Actual numbers vary by market size, seasonality, and your specific metrics.<br />
            • Larger metros have higher search volumes (2-5x these numbers).<br />
            • We're only counting organic search—not considering Maps, voice search, or mobile impact.<br />
            • This isn't theoretical revenue—these are real searches happening right now in your franchisees' markets.
          </p>
        </div>

        {/* Brand Performance Scorecard */}
        <h2 id="brand-performance" style={{ scrollMarginTop: '20px' }}>Brand Performance Scorecard</h2>
        <p>Not all brands are created equal. Here's how each brand is performing in local search.</p>
        <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}><strong>What "gap" means:</strong> The average number of reviews each location needs to reach top 3 in their local market.</p>

        <div className="brand-card">
          <img src="/reports/ifoam_logo.png" alt="iFoam" className="brand-logo" />
          <div className="brand-content">
            <div className="brand-name">iFoam</div>
            <div className="brand-metrics">
              <strong>68% in top 3</strong> (13 of 19 locations)<br />
              Average gap: 133 reviews<br />
              Best performing brand in the network.
            </div>
          </div>
        </div>

        <div className="brand-card">
          <img src="/reports/blingle_logo.png" alt="Blingle" className="brand-logo" />
          <div className="brand-content">
            <div className="brand-name">Blingle</div>
            <div className="brand-metrics">
              <strong>69% in top 3</strong> (9 of 13 locations)<br />
              Average gap: 77 reviews<br />
              Highly competitive. Remaining locations are close to winning.
            </div>
          </div>
        </div>

        <div className="brand-card">
          <img src="/reports/mightydog_logo.svg" alt="Mighty Dog Roofing" className="brand-logo" />
          <div className="brand-content">
            <div className="brand-name">Mighty Dog Roofing</div>
            <div className="brand-metrics">
              <strong>42% in top 3</strong> (19 of 45 locations)<br />
              Network average: <strong>95 reviews</strong> | Industry roofing average: 88 reviews<br />
              <span style={{ color: '#16a34a' }}>↗ 7.5% ABOVE industry average</span> | <strong>85th percentile</strong> among roofing contractors<br />
              Average gap to local top 3: 131 reviews<br />
              <br />
              <strong>Assessment:</strong> Largest brand with most opportunity. Strong performance vs industry but facing established local competition. 26 locations positioned for wins with systematic collection over 6-12 months.
            </div>
          </div>
        </div>

        <div className="brand-card">
          <img src="/reports/gatsby_logo.png" alt="Gatsby Glass" className="brand-logo" />
          <div className="brand-content">
            <div className="brand-name">Gatsby Glass</div>
            <div className="brand-metrics">
              <strong>27% in top 3</strong> (8 of 30 locations)<br />
              Average gap: 255 reviews<br />
              Wide variance. Some quick wins, others face steep competition.
            </div>
          </div>
        </div>

        <div className="brand-card">
          <img src="/reports/varsityzone_logo.png" alt="Varsity Zone" className="brand-logo" />
          <div className="brand-content">
            <div className="brand-name">Varsity Zone</div>
            <div className="brand-metrics">
              <strong>14% in top 3</strong> (2 of 14 locations)<br />
              Average gap: 1,053 reviews<br />
              Most challenging market. HVAC is ultra-competitive.
            </div>
          </div>
        </div>

        <div className="brand-card">
          <img src="/reports/heroes_logo.png" alt="Heroes Lawn Care" className="brand-logo" />
          <div className="brand-content">
            <div className="brand-name">Heroes Lawn Care</div>
            <div className="brand-metrics">
              <strong>21 locations</strong> across the network<br />
              Network average: <strong>67 reviews</strong> | Industry lawn care average: 34 reviews<br />
              <span style={{ color: '#16a34a' }}>↗ 96% ABOVE industry average</span> | <strong>~95th percentile</strong> among lawn care services<br />
              Average rating: 4.75★ | Technology: Jobber<br />
              <br />
              <strong>Assessment:</strong> Exceptional performance. Nearly 2x industry average. This vertical has lighter competition—excellent opportunity for dominant market positions with continued momentum.<br />
              <br />
              ⚠️ <strong>Data Coverage:</strong> 43% of locations (9 of 21) are missing GMB review data. Performance metrics based on 12 locations with complete data.
            </div>
          </div>
        </div>

        <div style={{ margin: '60px 0' }}>
          <div style={{ width: '100%', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '40px' }}>Brand Performance Snapshot</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'white', padding: '24px', border: '1px solid #e8e8e8' }}>
                <div style={{ fontSize: '1.05em', fontWeight: 600, marginBottom: '12px' }}>Mighty Dog Roofing</div>
                <div style={{ fontSize: '2em', fontWeight: 700, color: '#000', marginBottom: '4px' }}>95 reviews</div>
                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px' }}>vs 88 industry avg</div>
                <div style={{ fontSize: '0.95em', color: '#666' }}>42% in top 3</div>
              </div>

              <div style={{ background: 'white', padding: '24px', border: '1px solid #e8e8e8' }}>
                <div style={{ fontSize: '1.05em', fontWeight: 600, marginBottom: '12px' }}>Heroes Lawn Care</div>
                <div style={{ fontSize: '2em', fontWeight: 700, color: '#000', marginBottom: '4px' }}>67 reviews</div>
                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px' }}>vs 34 industry avg</div>
                <div style={{ fontSize: '0.95em', color: '#666', fontWeight: 600 }}>96% above industry</div>
              </div>

              <div style={{ background: 'white', padding: '24px', border: '1px solid #e8e8e8' }}>
                <div style={{ fontSize: '1.05em', fontWeight: 600, marginBottom: '12px' }}>iFoam</div>
                <div style={{ fontSize: '2em', fontWeight: 700, color: '#000', marginBottom: '4px' }}>45 reviews</div>
                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px' }}>vs 62 industry avg</div>
                <div style={{ fontSize: '0.95em', color: '#666', fontWeight: 600 }}>68% in top 3</div>
              </div>

              <div style={{ background: 'white', padding: '24px', border: '1px solid #e8e8e8' }}>
                <div style={{ fontSize: '1.05em', fontWeight: 600, marginBottom: '12px' }}>Blingle</div>
                <div style={{ fontSize: '2em', fontWeight: 700, color: '#000', marginBottom: '4px' }}>45 reviews</div>
                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px' }}>vs 34 industry avg</div>
                <div style={{ fontSize: '0.95em', color: '#666', fontWeight: 600 }}>69% in top 3</div>
              </div>

              <div style={{ background: 'white', padding: '24px', border: '1px solid #e8e8e8' }}>
                <div style={{ fontSize: '1.05em', fontWeight: 600, marginBottom: '12px' }}>Varsity Zone</div>
                <div style={{ fontSize: '2em', fontWeight: 700, color: '#000', marginBottom: '4px' }}>53 reviews</div>
                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px' }}>vs 145 industry avg</div>
                <div style={{ fontSize: '0.95em', color: '#666', fontWeight: 600 }}>14% in top 3</div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>Brand performance varies significantly. iFoam and Blingle lead with 68-69% in top 3, while Varsity Zone faces ultra-competitive HVAC markets.</p>
        </div>

        {/* Top 15 Opportunities */}
        <h2 id="top-opportunities" style={{ scrollMarginTop: '20px' }}>Top 15 Immediate Opportunities</h2>
        <p>These franchisees could reach top 3 fastest. <strong>Priority: Call these owners first.</strong></p>

        <table className="opportunity-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Brand</th>
              <th>Current Rank</th>
              <th>Reviews Needed</th>
              <th>Timeline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>North Raleigh</strong></td>
              <td>iFoam</td>
              <td>#8</td>
              <td className="highlight-orange">7</td>
              <td>3 weeks</td>
              <td><span className="action-label">Immediate</span></td>
            </tr>
            <tr>
              <td><strong>Palm City</strong></td>
              <td>Groovy Hues</td>
              <td>#13</td>
              <td className="highlight-orange">14</td>
              <td>6 weeks</td>
              <td><span className="action-label">Immediate</span></td>
            </tr>
            <tr>
              <td><strong>Southwest Denver</strong></td>
              <td>iFoam</td>
              <td>#10</td>
              <td className="highlight-orange">16</td>
              <td>7 weeks</td>
              <td><span className="action-label">Immediate</span></td>
            </tr>
            <tr>
              <td><strong>Columbus East</strong></td>
              <td>Mighty Dog</td>
              <td>#6</td>
              <td className="highlight-orange">17</td>
              <td>7 weeks</td>
              <td><span className="action-label">Immediate</span></td>
            </tr>
            <tr>
              <td><strong>Cape Coral</strong></td>
              <td>Gatsby Glass</td>
              <td>—</td>
              <td className="highlight-orange">18</td>
              <td>8 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Southwest Florida</strong></td>
              <td>Mighty Dog</td>
              <td>#5</td>
              <td className="highlight-orange">22</td>
              <td>9 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Boise</strong></td>
              <td>iFoam</td>
              <td>#4</td>
              <td className="highlight-orange">23</td>
              <td>10 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>South Austin</strong></td>
              <td>Groovy Hues</td>
              <td>#8</td>
              <td className="highlight-orange">26</td>
              <td>11 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Upstate SC</strong></td>
              <td>Gatsby Glass</td>
              <td>—</td>
              <td className="highlight-orange">27</td>
              <td>11 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Knoxville</strong></td>
              <td>Mighty Dog</td>
              <td>#4</td>
              <td className="highlight-orange">30</td>
              <td>12 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>The Triangle</strong></td>
              <td>Gatsby Glass</td>
              <td>—</td>
              <td className="highlight-orange">30</td>
              <td>12 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Rogers</strong></td>
              <td>Groovy Hues</td>
              <td>#12</td>
              <td className="highlight-orange">31</td>
              <td>13 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Tulsa</strong></td>
              <td>Mighty Dog</td>
              <td>#6</td>
              <td className="highlight-orange">32</td>
              <td>13 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>South Kansas City</strong></td>
              <td>Blingle</td>
              <td>#11</td>
              <td className="highlight-orange">39</td>
              <td>16 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
            <tr>
              <td><strong>Northwest Houston</strong></td>
              <td>Mighty Dog</td>
              <td>—</td>
              <td className="highlight-orange">40</td>
              <td>17 weeks</td>
              <td><span className="action-label">Quick win</span></td>
            </tr>
          </tbody>
        </table>

        <p className="note">Timeline based on 12 reviews/month with automated system. Manual collection would take 4x longer.</p>

        {/* Competitive Threats */}
        <h2 id="market-examples" style={{ scrollMarginTop: '20px' }}>Who's Beating You?</h2>
        <p style={{ marginBottom: '30px' }}>We analyzed 3,460+ competitors across all markets.</p>
        <p><strong>Local independents dominate.</strong> Mom & pop shops with 10+ years of reviews are hard to beat in established markets.</p>
        <p><strong>Other franchises are organized.</strong> Competitors often have corporate review programs that your franchisees don't.</p>
        <p><strong>The gap is growing.</strong> Competitors are getting faster at review collection. Manual requests can't keep pace.</p>

        {/* Real Competitor Examples */}
        <h3 style={{ marginTop: '50px' }}>Real Examples From Your Markets</h3>
        <p>These aren't hypotheticals. These are actual competitors beating your franchisees right now:</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
          <div style={{ padding: '24px', background: '#fafafa', border: '2px solid #e8e8e8', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#dc2626' }}></div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1em', color: '#000' }}>Charlotte, NC - Roofing</p>
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.95em', lineHeight: 1.9 }}>
              <strong style={{ color: '#666' }}>Top 3 Local Competitors:</strong><br />
              <span style={{ fontSize: '0.9em' }}>🥇 Independent roofing company - 412 reviews, 4.8★<br />
              🥈 Regional franchise - 347 reviews, 4.9★<br />
              🥉 Local family business - 289 reviews, 4.7★</span>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '2px solid #e0e0e0' }}>
              <div style={{ padding: '12px', background: '#fff', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '0.95em' }}><strong>Your Franchisee (Mighty Dog):</strong></p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.95em' }}>89 reviews, 4.9★ | <strong style={{ color: '#666' }}>Position #7</strong></p>
                <p style={{ margin: '12px 0 0 0', fontSize: '1em', color: '#dc2626', fontWeight: 600 }}>Gap to #3: 200 reviews</p>
                <div style={{ marginTop: '12px', fontSize: '0.85em', color: '#666', lineHeight: 1.7 }}>
                  ⏱️ Timeline at 12/month: <strong>17 months</strong><br />
                  ⚡ Timeline at 24/month: <strong style={{ color: '#16a34a' }}>8.5 months</strong>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '24px', background: '#fafafa', border: '2px solid #e8e8e8', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }}></div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1em', color: '#000' }}>Denver, CO - Insulation</p>
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.95em', lineHeight: 1.9 }}>
              <strong style={{ color: '#666' }}>Top 3 Local Competitors:</strong><br />
              <span style={{ fontSize: '0.9em' }}>🥇 Established insulation co - 289 reviews, 4.6★<br />
              🥈 Energy efficiency specialist - 178 reviews, 4.8★<br />
              🥉 Local contractor - 101 reviews, 4.7★</span>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '2px solid #e0e0e0' }}>
              <div style={{ padding: '12px', background: '#fff', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '0.95em' }}><strong>Your Franchisee (iFoam):</strong></p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.95em' }}>42 reviews, 4.9★ | <strong style={{ color: '#666' }}>Position #10</strong></p>
                <p style={{ margin: '12px 0 0 0', fontSize: '1em', color: '#dc2626', fontWeight: 600 }}>Gap to #3: 59 reviews</p>
                <div style={{ marginTop: '12px', fontSize: '0.85em', color: '#666', lineHeight: 1.7 }}>
                  ⏱️ Timeline at 12/month: <strong>5 months</strong><br />
                  ⚡ Timeline at 24/month: <strong style={{ color: '#16a34a' }}>2.5 months</strong>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '24px', background: '#fafafa', border: '2px solid #e8e8e8', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }}></div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1em', color: '#000' }}>Tampa, FL - Glass Services</p>
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.95em', lineHeight: 1.9 }}>
              <strong style={{ color: '#666' }}>Top 3 Local Competitors:</strong><br />
              <span style={{ fontSize: '0.9em' }}>🥇 Glass repair specialist - 156 reviews, 4.7★<br />
              🥈 Window & door company - 134 reviews, 4.6★<br />
              🥉 Auto & residential glass - 98 reviews, 4.8★</span>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '2px solid #e0e0e0' }}>
              <div style={{ padding: '12px', background: '#fff', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '0.95em' }}><strong>Your Franchisee (Gatsby Glass):</strong></p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.95em' }}>38 reviews, 4.9★ | <strong style={{ color: '#666' }}>Position #8</strong></p>
                <p style={{ margin: '12px 0 0 0', fontSize: '1em', color: '#dc2626', fontWeight: 600 }}>Gap to #3: 60 reviews</p>
                <div style={{ marginTop: '12px', fontSize: '0.85em', color: '#666', lineHeight: 1.7 }}>
                  ⏱️ Timeline at 12/month: <strong>5 months</strong><br />
                  ⚡ Timeline at 24/month: <strong style={{ color: '#16a34a' }}>2.5 months</strong>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '24px', background: '#fafafa', border: '2px solid #e8e8e8', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }}></div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1em', color: '#000' }}>Austin, TX - Lawn Care</p>
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.95em', lineHeight: 1.9 }}>
              <strong style={{ color: '#666' }}>Top 3 Local Competitors:</strong><br />
              <span style={{ fontSize: '0.9em' }}>🥇 TruGreen franchise - 1,289 reviews, 4.3★<br />
              🥈 Local lawn service - 234 reviews, 4.7★<br />
              🥉 Landscaping company - 178 reviews, 4.8★</span>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '2px solid #e0e0e0' }}>
              <div style={{ padding: '12px', background: '#fff', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontSize: '0.95em' }}><strong>Your Franchisee (Heroes):</strong></p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.95em' }}>145 reviews, 4.6★ | <strong style={{ color: '#666' }}>Position #5</strong></p>
                <p style={{ margin: '12px 0 0 0', fontSize: '1em', color: '#dc2626', fontWeight: 600 }}>Gap to #3: 33 reviews</p>
                <div style={{ marginTop: '12px', fontSize: '0.85em', color: '#666', lineHeight: 1.7 }}>
                  ⏱️ Timeline at 12/month: <strong>3 months</strong><br />
                  ⚡ Timeline at 24/month: <strong style={{ color: '#16a34a' }}>1.5 months</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="callout-box" style={{ marginTop: '30px' }}>
          <p style={{ margin: 0, fontSize: '1.05em', fontWeight: 600, color: '#000' }}>
            The Pattern Across Markets:
          </p>
          <p style={{ margin: '12px 0 0 0', color: '#666', lineHeight: 1.8 }}>
            • Your franchisees have <strong>better ratings</strong> (4.9★ average vs 4.6-4.8★ competitors)<br />
            • But they're <strong>missing 50-200 reviews</strong> per location to crack top 3<br />
            • At current pace (3 reviews/month manually): 1-5 <strong>years</strong> to catch up<br />
            • With systematic approach (24 reviews/month): 2-8 <strong>months</strong> to catch up<br /><br />
            The quality gap doesn't exist. The visibility gap is temporary and fixable.
          </p>
        </div>

        <div style={{ margin: '50px 0' }}>
          <div style={{ width: '100%', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '40px' }}>Velocity Comparison: Manual vs Systematic</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
              <div style={{ background: 'white', padding: '30px', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                <div style={{ fontSize: '0.95em', color: '#666', marginBottom: '16px' }}>Manual Requests</div>
                <div style={{ fontSize: '4em', fontWeight: 700, color: '#999', marginBottom: '8px' }}>3</div>
                <div style={{ fontSize: '1em', color: '#666' }}>reviews per month</div>
              </div>

              <div style={{ background: 'white', padding: '30px', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                <div style={{ fontSize: '0.95em', color: '#666', marginBottom: '16px' }}>Systematic Approach</div>
                <div style={{ fontSize: '4em', fontWeight: 700, color: '#000', marginBottom: '8px' }}>24</div>
                <div style={{ fontSize: '1em', color: '#666' }}>reviews per month</div>
              </div>
            </div>

            <div style={{ borderTop: '2px solid #e8e8e8', paddingTop: '30px' }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '1.05em', fontWeight: 600 }}>Time to Close 129-Review Gap</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ background: 'white', padding: '30px', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.95em', color: '#666', marginBottom: '12px' }}>Manual (3/month)</div>
                  <div style={{ fontSize: '3em', fontWeight: 700, color: '#999', marginBottom: '8px' }}>43</div>
                  <div style={{ fontSize: '1em', color: '#666' }}>months (3.6 years)</div>
                </div>

                <div style={{ background: 'white', padding: '30px', border: '2px solid #000', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.95em', color: '#666', marginBottom: '12px' }}>Systematic (24/month)</div>
                  <div style={{ fontSize: '3em', fontWeight: 700, color: '#000', marginBottom: '8px' }}>5</div>
                  <div style={{ fontSize: '1em', color: '#666' }}>months</div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>Manual review requests (3/month) vs systematic approach (24/month). Same gap, 8x faster to close. The difference between 4 years and 6 months.</p>
        </div>

        {/* Market Tiers Chart */}
        <div style={{ margin: '60px 0' }}>
          <img src="/reports/market_tiers.png" alt="Market Competitiveness Tiers" style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto', border: '1px solid #e8e8e8' }} />
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>Your locations span a huge range of market difficulty. 25% are in easy markets where &lt;50 reviews wins. 32% are in ultra-competitive markets (200+ reviews needed). Strategy must match market reality.</p>
        </div>

        {/* Market Competitiveness Chart */}
        <div style={{ margin: '60px 0' }}>
          <img src="/reports/position_vs_reviews.png" alt="Market Competitiveness" style={{ width: '100%', maxWidth: '100%', border: '1px solid #e8e8e8' }} />
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em' }}>Market competitiveness varies wildly. Some of your top 3 locations have just 30-50 reviews. Others have 250+ reviews and still rank position #5-10. This means strategy must be location-specific—quick wins in some markets, long-term investments in others.</p>
        </div>

        <p style={{ marginTop: '30px', fontWeight: 500 }}>Your franchisees need a systematic, automated approach to compete.</p>

        {/* The Compounding Problem */}
        <h2 id="compounding-problem" style={{ marginTop: '70px', scrollMarginTop: '20px' }}>The Compounding Problem: Why Waiting Gets More Expensive</h2>
        <p>Every month you delay, the gap doesn't just stay the same—it widens. Your competitors aren't standing still.</p>

        <div style={{ background: '#fafafa', padding: '30px', margin: '30px 0', borderLeft: '3px solid #dc2626' }}>
          <h3 style={{ marginTop: 0 }}>The Math of Inaction</h3>
          <p style={{ marginTop: '16px' }}>Let's say your competitor is collecting 10 reviews/month while you're collecting 3:</p>

          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', fontSize: '0.95em' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e8e8e8' }}>
                <th style={{ textAlign: 'left', padding: '8px 0' }}>Time Period</th>
                <th style={{ textAlign: 'left', padding: '8px 0' }}>Your Reviews</th>
                <th style={{ textAlign: 'left', padding: '8px 0' }}>Competitor Reviews</th>
                <th style={{ textAlign: 'left', padding: '8px 0' }}>Gap</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '8px 0' }}>Today</td>
                <td style={{ padding: '8px 0' }}>56 (current avg)</td>
                <td style={{ padding: '8px 0' }}>185 (top 3 avg)</td>
                <td style={{ padding: '8px 0', color: '#dc2626' }}>129 behind</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '8px 0' }}>Month 1</td>
                <td style={{ padding: '8px 0' }}>59 (+3)</td>
                <td style={{ padding: '8px 0' }}>195 (+10)</td>
                <td style={{ padding: '8px 0', color: '#dc2626' }}>136 behind (+7)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: '8px 0' }}>Month 6</td>
                <td style={{ padding: '8px 0' }}>74 (+18)</td>
                <td style={{ padding: '8px 0' }}>245 (+60)</td>
                <td style={{ padding: '8px 0', color: '#dc2626' }}>171 behind (+42)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0' }}>Month 12</td>
                <td style={{ padding: '8px 0' }}>92 (+36)</td>
                <td style={{ padding: '8px 0' }}>305 (+120)</td>
                <td style={{ padding: '8px 0', color: '#dc2626', fontWeight: 600 }}>213 behind (+84)</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '24px', padding: '16px', background: '#fff', border: '2px solid #dc2626' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>After 1 year of inaction:</p>
            <p style={{ margin: '8px 0 0 0' }}>
              • Gap has grown from 129 to 213 reviews<br />
              • You've added 84 reviews total but fallen <strong>84 reviews further behind</strong><br />
              • At this point, you need <strong>2.5 years</strong> at 12 reviews/month just to catch up—by which time competitors have pulled even further ahead
            </p>
          </div>
        </div>

        <div style={{ margin: '50px 0' }}>
          <div style={{ width: '100%', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '40px' }}>The Compounding Gap</h3>

            <div style={{ background: 'white', padding: '30px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '20px', alignItems: 'center', padding: '16px 0', borderBottom: '2px solid #e8e8e8', fontWeight: 600, fontSize: '0.9em' }}>
                <div>Time</div>
                <div>Your Reviews</div>
                <div>Competitor Reviews</div>
                <div style={{ textAlign: 'right' }}>Gap</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '20px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ fontWeight: 600 }}>Today</div>
                <div><span style={{ fontSize: '1.5em', fontWeight: 700 }}>56</span> <span style={{ color: '#666', fontSize: '0.9em' }}>(current avg)</span></div>
                <div><span style={{ fontSize: '1.5em', fontWeight: 700 }}>185</span> <span style={{ color: '#666', fontSize: '0.9em' }}>(top 3 avg)</span></div>
                <div style={{ textAlign: 'right', fontSize: '1.2em', fontWeight: 700 }}>129</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '20px', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #f5f5f5', opacity: 0.7 }}>
                <div>Month 6</div>
                <div><span style={{ fontSize: '1.3em', fontWeight: 700 }}>74</span> <span style={{ color: '#666', fontSize: '0.85em' }}>(+18)</span></div>
                <div><span style={{ fontSize: '1.3em', fontWeight: 700 }}>245</span> <span style={{ color: '#666', fontSize: '0.85em' }}>(+60)</span></div>
                <div style={{ textAlign: 'right', fontSize: '1.1em', fontWeight: 700 }}>171</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '20px', alignItems: 'center', padding: '20px 0', background: '#fafafa' }}>
                <div style={{ fontWeight: 600 }}>Month 12</div>
                <div><span style={{ fontSize: '1.5em', fontWeight: 700 }}>92</span> <span style={{ color: '#666', fontSize: '0.9em' }}>(+36)</span></div>
                <div><span style={{ fontSize: '1.5em', fontWeight: 700 }}>305</span> <span style={{ color: '#666', fontSize: '0.9em' }}>(+120)</span></div>
                <div style={{ textAlign: 'right', fontSize: '1.3em', fontWeight: 700 }}>213</div>
              </div>
            </div>

            <div style={{ padding: '24px', background: '#fff', border: '2px solid #000' }}>
              <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 600, textAlign: 'center' }}>
                Gap started at 129 reviews. After 12 months: <span style={{ fontSize: '1.2em' }}>213 reviews behind</span>
              </p>
              <p style={{ marginTop: '12px', marginBottom: 0, textAlign: 'center', color: '#666' }}>
                You're not standing still—you're falling behind 7 reviews per month
              </p>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>The gap doesn't stay constant—it widens. Every month you wait, the climb gets steeper. This is why "we'll get to it eventually" becomes "we can never catch up."</p>
        </div>

        <h3>The Visibility Cliff</h3>
        <p>Once competitors reach 2x your review count, the algorithmic disadvantage compounds:</p>
        <ul style={{ marginTop: '16px', paddingLeft: '20px', lineHeight: 1.9 }}>
          <li><strong>Google's relevance signal:</strong> More reviews = higher perceived relevance = better positioning</li>
          <li><strong>Click-through advantage:</strong> Higher position = more clicks = more customers = more reviews (the flywheel effect)</li>
          <li><strong>Psychological barrier:</strong> Customers see 305 reviews vs your 92 and assume the competitor is more established</li>
        </ul>

        <p style={{ marginTop: '20px' }}>Breaking through this advantage requires 2-3x the investment in review generation. The longer you wait, the harder it gets.</p>

        <div className="callout-box" style={{ marginTop: '30px' }}>
          <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 600, color: '#000' }}>Cost Per Month of Inaction (Per Location):</p>
          <p style={{ margin: '12px 0 0 0', color: '#666', lineHeight: 2 }}>
            Lost monthly traffic: ~1,500 clicks<br />
            × 15% lead-to-quote rate = 225 lost leads<br />
            × 33% close rate = 74 lost jobs<br />
            × $8,500 avg job value = <strong className="highlight-orange">$629,000/year</strong> = <strong className="highlight-orange">$52,000/month</strong>
          </p>
          <p style={{ marginTop: '16px', fontWeight: 600, color: '#000' }}>
            Every month you wait costs $52,000 in lost opportunity—per location.
          </p>
        </div>

        {/* The Solution */}
        <div className="solution-section">
          <h2>Why Manual Follow-Up Doesn't Work</h2>
          <p>Your franchisees know they should ask for reviews. They send follow-up texts. They hope customers remember. And they average 2-3 reviews per month—nowhere near enough to compete.</p>
          <p style={{ marginTop: '20px' }}>But here's what most don't understand: customers <em>do</em> want to leave reviews when you do good work. The problem isn't willingness—it's timing.</p>
          <p style={{ marginTop: '20px' }}>When your tech finishes a job, the customer is at <strong>peak satisfaction</strong>. Their roof is fixed. Their windows look perfect. They're genuinely grateful. That feeling—the relief, the satisfaction, the genuine happiness that someone exceeded their expectations—how long does it last?</p>
          <p style={{ marginTop: '20px' }}>Minutes. Maybe an hour. Certainly not until the next day when a text message arrives and they're back to thinking about dinner, work emails, and a hundred other things.</p>

          <div className="callout-box">
            <p style={{ margin: 0, fontSize: '1.1em', color: '#000' }}><strong>At-the-door requests get 5x higher response rates than follow-up messages.</strong></p>
            <p style={{ margin: '12px 0 0 0', color: '#666' }}>40-60% conversion vs 8-12% for texts sent later. Same customer, same quality work—massively different results.</p>
          </div>

          <h3 style={{ marginTop: '50px' }}>The Framework That Changes Everything</h3>
          <p>The magic of at-the-door review requests isn't just about timing—it's about <strong>anchoring the entire customer interaction around 5-star service</strong>. Here's the framework the top-performing franchisees use:</p>

          <p style={{ marginTop: '30px' }}><strong>Step 1: Set the expectation at the beginning</strong></p>
          <p>When your tech arrives and walks through the job with the customer, they ask: "What can we do today to make this a 5-star experience for you?"</p>
          <p style={{ marginTop: '12px', paddingLeft: '20px', borderLeft: '3px solid #f0f0f0', color: '#666' }}>This does three things: (1) sets the bar for excellence, (2) tells you what the customer values most, and (3) plants the seed for leaving a review before work even begins.</p>

          <p style={{ marginTop: '30px' }}><strong>Step 2: Deliver on that promise</strong></p>
          <p>Do the work. Do it well. But most importantly, do what they specifically asked for. Keep that 5-star framework in mind throughout the job.</p>

          <p style={{ marginTop: '30px' }}><strong>Step 3: Confirm satisfaction before leaving</strong></p>
          <p>Before packing up, do a walkthrough with the customer. Point out what was done. Show them the before-and-after. Then ask: "Remember when you said you wanted [their specific requirement]? Did we deliver on that? Are you happy with everything?"</p>
          <p style={{ marginTop: '12px', paddingLeft: '20px', borderLeft: '3px solid #f0f0f0', color: '#666' }}>You're not assuming satisfaction—you're confirming it. You're getting them to verbally commit to the idea that this was a 5-star experience.</p>

          <p style={{ marginTop: '30px' }}><strong>Step 4: Ask for the review right there</strong></p>
          <p>"That's great to hear! Would you mind taking 30 seconds right now to leave us a review on Google? It really helps our business."</p>
          <p style={{ marginTop: '12px' }}>The word "now" is crucial. You're not asking them to remember later. You're asking at the moment of peak satisfaction.</p>

          <p style={{ marginTop: '30px' }}><strong>Step 5: Make it effortless with QR codes</strong></p>
          <p>Pull out the job-specific QR code. "Just scan this with your camera, and it'll take you straight to our Google review page. Takes 30 seconds."</p>
          <p style={{ marginTop: '12px' }}>No searching. No typing. No "I'll do it when I get home." Watch them scan it. Watch them start typing. You've just captured a review that would have never happened via follow-up text.</p>

          <div style={{ margin: '50px 0' }}>
            <div style={{ width: '100%', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
              <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '40px' }}>The 3-Pronged Review Collection System</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr', gap: '20px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
                {/* Job Complete */}
                <div style={{ padding: '20px', background: '#fff', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: '1.05em' }}>Job Complete</div>
                </div>

                <div style={{ fontSize: '1.5em', color: '#ccc' }}>→</div>

                {/* Prong 1 */}
                <div style={{ padding: '20px', background: '#fff', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9em', marginBottom: '8px', color: '#666' }}>PRONG 1</div>
                  <div style={{ fontSize: '1.1em', fontWeight: 600, marginBottom: '4px' }}>QR Code</div>
                  <div style={{ fontSize: '0.85em', color: '#666', marginBottom: '8px' }}>At-the-door scan</div>
                  <div style={{ fontSize: '1.3em', fontWeight: 700 }}>40-60%</div>
                </div>

                <div style={{ fontSize: '1.5em', color: '#ccc' }}>→</div>

                {/* Prong 2 */}
                <div style={{ padding: '20px', background: '#fff', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9em', marginBottom: '8px', color: '#666' }}>PRONG 2</div>
                  <div style={{ fontSize: '1.1em', fontWeight: 600, marginBottom: '4px' }}>SMS Backup</div>
                  <div style={{ fontSize: '0.85em', color: '#666', marginBottom: '8px' }}>Auto-sent 1hr later</div>
                  <div style={{ fontSize: '1.3em', fontWeight: 700 }}>+10%</div>
                </div>

                <div style={{ fontSize: '1.5em', color: '#ccc' }}>→</div>

                {/* Prong 3 */}
                <div style={{ padding: '20px', background: '#fff', border: '1px solid #e8e8e8', textAlign: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9em', marginBottom: '8px', color: '#666' }}>PRONG 3</div>
                  <div style={{ fontSize: '1.1em', fontWeight: 600, marginBottom: '4px' }}>CRM Boosts</div>
                  <div style={{ fontSize: '0.85em', color: '#666', marginBottom: '8px' }}>Reactivate past customers</div>
                  <div style={{ fontSize: '1.3em', fontWeight: 700 }}>+5-8%</div>
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', background: '#fff', border: '2px solid #000', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5em', fontWeight: 700 }}>REVIEWS</div>
                <div style={{ marginTop: '10px', color: '#666', fontSize: '0.95em' }}>Combined conversion: 55-78% of all jobs generate reviews</div>
              </div>
            </div>
            <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>The 3-pronged system: QR codes capture 40-60% at the door, SMS backup gets another 10%, and review boosts reactivate past customers at 5-8%. Every channel working together to maximize conversion.</p>
          </div>

          <div className="how-it-works-grid" style={{ marginTop: '50px' }}>
            <div>
              <video autoPlay loop muted playsInline style={{ width: '100%', border: '1px solid #e8e8e8' }}>
                <source src="/qr-demo-new.mp4" type="video/mp4" />
              </video>
              <p className="note" style={{ marginTop: '12px', textAlign: 'left' }}>Customer scans QR code at completion</p>
            </div>
            <div>
              <h3 style={{ marginTop: 0 }}>What Makes This System Work</h3>
              <p><strong>Job-specific QR codes:</strong> Every job gets a unique code tied to the technician. Customer scans, leaves a review, and it's automatically attributed to the right employee.</p>
              <p style={{ marginTop: '20px' }}><strong>SMS backup for missed opportunities:</strong> Customers who don't scan get an automatic follow-up 1 hour later. Second chance to convert.</p>
              <p style={{ marginTop: '20px' }}><strong>Real-time tracking:</strong> See exactly which techs are collecting reviews, who's trending up, and where coaching is needed.</p>
            </div>
          </div>

          <h3 style={{ marginTop: '50px' }}>The Missing Piece: Employee Incentives</h3>
          <p>Here's the truth most franchise owners don't want to face: your technicians aren't forgetting to ask for reviews because they're lazy. They're forgetting because they're thinking about the next job, traffic, what they need to pick up at the hardware store, and a hundred other things.</p>
          <p style={{ marginTop: '20px' }}>Review requests fall to the bottom of the priority list unless there's a reason for them to stay at the top. That reason? <strong>Money.</strong></p>

          <div className="callout-box">
            <p style={{ margin: 0, fontSize: '1.1em', color: '#000' }}><strong>What gets measured and rewarded gets done.</strong></p>
            <p style={{ margin: '12px 0 0 0', color: '#666' }}>Without incentives: team asks maybe 20% of the time, 10% convert. That's 2 reviews per 100 jobs.<br />With incentives: team asks every time, 40-60% convert. That's 40-60 reviews per 100 jobs. Same team. Same service. 20-30x more reviews.</p>
          </div>

          <p style={{ marginTop: '30px' }}>The businesses with 200, 300, 500+ reviews didn't get there by asking nicely. They got there by making review collection a game their team wants to win:</p>

          <p style={{ marginTop: '20px' }}><strong>Monthly leaderboard competitions</strong> - "Sarah's in first with 12 reviews this month. Mike's closing in with 11. Who's going to take the lead?"</p>
          <p style={{ marginTop: '12px' }}><strong>Performance-based bonuses</strong> - $10-25 per review, or tiered bonuses for hitting milestones. ROI is 3-7x when you calculate the value of each review.</p>
          <p style={{ marginTop: '12px' }}><strong>Public celebration</strong> - Ring a bell when someone hits 10 reviews. Post standings in the shop. Make winning feel good.</p>

          <p style={{ marginTop: '30px' }}>And here's the kicker: when a customer knows that leaving a review means your tech gets a $20 bonus from the boss, they're <em>way</em> more motivated to do it—if they like the tech and the work was good.</p>

          <h3 style={{ marginTop: '50px' }}>The Competitive Reality</h3>
          <p>We analyzed 61,712 home service businesses. The median has just <strong>12 reviews</strong>. Get to 38 reviews and you've beaten 75% of your competition.</p>
          <p style={{ marginTop: '20px' }}>Your franchisees aren't facing steep competition—they're facing businesses that aren't systematically collecting reviews at all. The opportunity is massive.</p>
          <p style={{ marginTop: '20px' }}>A franchisee completing 25 jobs per month with a 40% conversion rate gets 10 reviews in month one. After 6 months, they have 60+ reviews—more than 85% of local competition. They're not just surviving; they're dominating.</p>

          <div style={{ margin: '40px 0', padding: '30px', background: '#fafafa' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#000' }}>What A+ Reviews provides:</p>
            <p style={{ margin: '12px 0 0 0', color: '#666' }}>
              • Job-specific QR codes with automatic employee attribution<br />
              • Real-time leaderboards (filter by week/month/year/all-time)<br />
              • Automatic SMS follow-ups for customers who don't scan<br />
              • Performance tracking for incentive payouts<br />
              • No spreadsheets, no manual counting, no disputes
            </p>
          </div>

          <p style={{ marginTop: '30px', fontSize: '1.1em', fontWeight: 500 }}>The franchises winning in local search figured this out years ago. They have the system, the incentives, and the tracking. The question is: how much longer will your franchisees compete without them?</p>
        </div>

        {/* Implementation Case Study */}
        <h2 id="how-it-works" style={{ marginTop: '90px', scrollMarginTop: '20px' }}>How This Actually Works: New Franchisee Launch</h2>
        <p>Let's walk through a realistic implementation for a new roofing franchisee entering a competitive market. This shows exactly how the 3-pronged system (QR codes + SMS backup + review boosts) drives results.</p>

        <div style={{ background: '#fafafa', padding: '40px', margin: '40px 0', border: '1px solid #e8e8e8' }}>
          <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Case Study: Tampa, FL - Roofing Market</h3>
          <p style={{ marginTop: 0, fontSize: '0.95em', color: '#666' }}>Brand new Mighty Dog Roofing franchisee vs established competition</p>

          <div style={{ marginTop: '30px' }}>
            <h4 style={{ marginBottom: '12px' }}>Starting Position</h4>
            <div style={{ paddingLeft: '16px', fontSize: '0.95em', lineHeight: 1.9 }}>
              <strong>Market competition:</strong><br />
              • #1: Local leader - 180 reviews, 4.6★<br />
              • #2: Regional franchise - 124 reviews, 4.7★<br />
              • #3: Independent - 89 reviews, 4.5★
              <br /><br />
              <strong>Your franchisee:</strong> 0 reviews, no CRM database yet
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #e8e8e8' }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#f37920' }}>MONTH 1 IMPLEMENTATION</h4>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>System Setup:</p>
            <ul style={{ marginLeft: '20px', fontSize: '0.95em', lineHeight: 1.9 }}>
              <li>A+ Reviews QR codes generated for each job</li>
              <li>Tech training on at-the-door ask ($20/review bonus announced)</li>
              <li>SMS follow-up configured for non-scanners</li>
            </ul>

            <p style={{ fontWeight: 600, marginTop: '20px', marginBottom: '12px' }}>Activity:</p>
            <div style={{ paddingLeft: '16px', fontSize: '0.95em' }}>
              Jobs completed: <strong>25</strong> (typical month 1 for new franchisee)
            </div>

            <div style={{ marginTop: '16px', background: '#fff', padding: '20px', border: '1px solid #e8e8e8' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95em' }}>Review Generation Breakdown:</p>
              <div style={{ marginTop: '12px', fontSize: '0.9em', lineHeight: 2 }}>
                <strong>Prong 1 - At-the-door QR codes:</strong><br />
                25 jobs × 40% conversion = <strong className="highlight-orange">10 reviews</strong><br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>(Techs still learning, hitting 40% is solid first month)</span>
                <br /><br />
                <strong>Prong 2 - SMS backup (non-scanners):</strong><br />
                15 didn't scan × 10% conversion = <strong className="highlight-orange">1.5 reviews</strong><br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>(Automatic follow-up 1 hour after job completion)</span>
                <br /><br />
                <strong>Prong 3 - Review boosts (CRM reactivation):</strong><br />
                0 past customers yet = <strong>0 reviews</strong>
                <br /><br />
                <div style={{ borderTop: '1px solid #e8e8e8', marginTop: '12px', paddingTop: '12px' }}>
                  <strong>MONTH 1 TOTAL: 11 reviews</strong> | Current rating: 4.9★
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #e8e8e8' }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#f37920' }}>MONTH 3 IMPLEMENTATION</h4>

            <p style={{ fontWeight: 600, marginBottom: '12px' }}>Activity:</p>
            <div style={{ paddingLeft: '16px', fontSize: '0.95em' }}>
              Jobs completed: <strong>30</strong> (business growing, referrals kicking in)<br />
              CRM database: 75 past customers
            </div>

            <div style={{ marginTop: '16px', background: '#fff', padding: '20px', border: '1px solid #e8e8e8' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95em' }}>Review Generation Breakdown:</p>
              <div style={{ marginTop: '12px', fontSize: '0.9em', lineHeight: 2 }}>
                <strong>Prong 1 - At-the-door QR codes:</strong><br />
                30 jobs × 50% conversion = <strong className="highlight-orange">15 reviews</strong><br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>(Techs getting better, bonus competition heating up)</span>
                <br /><br />
                <strong>Prong 2 - SMS backup:</strong><br />
                15 non-scanners × 10% = <strong className="highlight-orange">1.5 reviews</strong>
                <br /><br />
                <strong>Prong 3 - Review boosts:</strong><br />
                75 past customers contacted × 6% reactivation = <strong className="highlight-orange">4.5 reviews</strong><br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>(Monthly CRM campaign: "We serviced you - would you leave a review?")</span>
                <br /><br />
                <div style={{ borderTop: '1px solid #e8e8e8', marginTop: '12px', paddingTop: '12px' }}>
                  <strong>MONTH 3 TOTAL: 21 reviews</strong><br />
                  <strong>CUMULATIVE: ~37 total reviews</strong> | Rating: 4.9★
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #e8e8e8' }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#f37920' }}>MONTH 6 STATE</h4>

            <div style={{ background: '#fff', padding: '20px', border: '2px solid #16a34a' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.05em' }}>Performance Metrics:</p>
              <div style={{ marginTop: '16px', fontSize: '0.95em', lineHeight: 2 }}>
                <strong>Total reviews:</strong> 71 (4.9★ rating)<br />
                <strong>Market position:</strong> #4 (passed smallest competitor at 89 reviews)<br />
                <strong>Review breakdown:</strong><br />
                • From QR codes: ~52 reviews<br />
                • From SMS follow-ups: ~9 reviews<br />
                • From review boosts: ~10 reviews<br /><br />
                <strong>Business impact:</strong><br />
                • Organic lead volume: +140% vs month 1<br />
                • Average job size stable at $8,500<br />
                • Jobs/month now: 35 (growth from visibility)
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #e8e8e8' }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#f37920' }}>MONTH 9 STATE</h4>

            <div style={{ background: '#fff', padding: '20px', border: '2px solid #16a34a' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.05em' }}>Breakthrough Moment:</p>
              <div style={{ marginTop: '16px', fontSize: '0.95em', lineHeight: 2 }}>
                <strong>Total reviews:</strong> 108 (4.9★ rating)<br />
                <strong>Market position:</strong> <span className="highlight-orange" style={{ fontSize: '1.1em' }}>#2 - Surpassed independent at 89 reviews</span><br />
                <strong>Now competing with:</strong> Regional franchise (124 reviews, within striking distance)<br /><br />
                <strong>Monthly generation rate:</strong><br />
                • Jobs/month: 35 (continued growth)<br />
                • At-the-door QR: 35 × 55% = 19 reviews/month<br />
                • SMS backup: ~2 reviews/month<br />
                • Review boosts: 200-customer CRM × 5% = 10 reviews/month<br />
                • <strong>Combined: 31 reviews/month</strong>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e8e8e8' }}>
                <p style={{ margin: 0, fontWeight: 600 }}>Financial Impact:</p>
                <div style={{ marginTop: '8px', fontSize: '0.95em' }}>
                  • Lead volume: <strong>+340% vs month 1</strong><br />
                  • Customer acquisition cost: <strong>-67%</strong> (organic doing heavy lifting)<br />
                  • Revenue: <strong>Hit forecast 8 months ahead of schedule</strong><br />
                  • Profitability: <strong>Achieved month 9 vs projected month 18</strong>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #e8e8e8' }}>
            <h4 style={{ margin: '0 0 16px 0' }}>Key Success Factors</h4>
            <div style={{ fontSize: '0.95em', lineHeight: 2 }}>
              ✓ <strong>$20/review tech bonus</strong> drove 95%+ ask rate (techs asking every customer)<br />
              ✓ <strong>Weekly leaderboard competitions</strong> gamified the process<br />
              ✓ <strong>Monthly CRM review boost campaigns</strong> reactivated past satisfied customers<br />
              ✓ <strong>Real-time tracking</strong> eliminated disputes, enabled instant payouts<br />
              ✓ <strong>SMS safety net</strong> captured 10% more reviews from customers who were busy at the door
            </div>
          </div>
        </div>

        <div style={{ margin: '50px 0' }}>
          <div style={{ width: '100%', border: '1px solid #e8e8e8', padding: '40px', background: '#fafafa' }}>
            <h3 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.3em', marginBottom: '40px' }}>Tampa Case Study Timeline: 0 to #2 in 9 Months</h3>

            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', top: '100px', left: '0', right: '0', height: '2px', background: '#e8e8e8', zIndex: 0 }}></div>

              {/* Milestones */}
              <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                {/* START */}
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#999', margin: '0 auto 15px', position: 'relative', top: '92px', border: '3px solid white' }}></div>
                  <div style={{ background: 'white', padding: '20px', border: '1px solid #e8e8e8', marginTop: '20px' }}>
                    <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '8px' }}>START</div>
                    <div style={{ fontSize: '1.8em', fontWeight: 700 }}>0</div>
                    <div style={{ fontSize: '0.9em', marginTop: '4px', color: '#666' }}>reviews</div>
                    <div style={{ fontSize: '0.85em', marginTop: '8px', color: '#999' }}>Position: —</div>
                  </div>
                </div>

                {/* MONTH 1 */}
                <div style={{ textAlign: 'center', flex: 1, marginLeft: '15px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#999', margin: '0 auto 15px', position: 'relative', top: '92px', border: '3px solid white' }}></div>
                  <div style={{ background: 'white', padding: '20px', border: '1px solid #e8e8e8', marginTop: '20px' }}>
                    <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '8px' }}>MONTH 1</div>
                    <div style={{ fontSize: '1.8em', fontWeight: 700 }}>11</div>
                    <div style={{ fontSize: '0.9em', marginTop: '4px', color: '#666' }}>reviews</div>
                    <div style={{ fontSize: '0.85em', marginTop: '8px', color: '#999' }}>Position: —</div>
                  </div>
                </div>

                {/* MONTH 3 */}
                <div style={{ textAlign: 'center', flex: 1, marginLeft: '15px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#999', margin: '0 auto 15px', position: 'relative', top: '92px', border: '3px solid white' }}></div>
                  <div style={{ background: 'white', padding: '20px', border: '1px solid #e8e8e8', marginTop: '20px' }}>
                    <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '8px' }}>MONTH 3</div>
                    <div style={{ fontSize: '1.8em', fontWeight: 700 }}>37</div>
                    <div style={{ fontSize: '0.9em', marginTop: '4px', color: '#666' }}>reviews</div>
                    <div style={{ fontSize: '0.85em', marginTop: '8px', color: '#999' }}>Position: —</div>
                  </div>
                </div>

                {/* MONTH 6 */}
                <div style={{ textAlign: 'center', flex: 1, marginLeft: '15px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#666', margin: '0 auto 15px', position: 'relative', top: '92px', border: '3px solid white' }}></div>
                  <div style={{ background: 'white', padding: '20px', border: '1px solid #e8e8e8', marginTop: '20px' }}>
                    <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '8px' }}>MONTH 6</div>
                    <div style={{ fontSize: '1.8em', fontWeight: 700 }}>71</div>
                    <div style={{ fontSize: '0.9em', marginTop: '4px', color: '#666' }}>reviews | 4.9★</div>
                    <div style={{ fontSize: '0.85em', marginTop: '8px', fontWeight: 600 }}>Position: #4</div>
                  </div>
                </div>

                {/* MONTH 9 - TARGET HIT */}
                <div style={{ textAlign: 'center', flex: 1, marginLeft: '15px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#000', margin: '0 auto 15px', position: 'relative', top: '90px', border: '3px solid white' }}></div>
                  <div style={{ background: '#000', color: 'white', padding: '20px', marginTop: '20px' }}>
                    <div style={{ fontSize: '0.9em', marginBottom: '8px', opacity: 0.7 }}>MONTH 9</div>
                    <div style={{ fontSize: '1.8em', fontWeight: 700 }}>108</div>
                    <div style={{ fontSize: '0.9em', marginTop: '4px', opacity: 0.9 }}>reviews | 4.9★</div>
                    <div style={{ fontSize: '1.1em', marginTop: '8px', fontWeight: 700 }}>Position: #2</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '24px', background: '#fff', border: '2px solid #000', textAlign: 'center', maxWidth: '800px', margin: '40px auto 0' }}>
              <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 600 }}>
                From 0 reviews to #2 position in 9 months
              </p>
              <p style={{ margin: '10px 0 0 0', color: '#666' }}>
                Passed 2 competitors | Within striking distance of #1 (124 reviews)
              </p>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: '#666', fontSize: '0.95em', textAlign: 'center' }}>Month-by-month progression from 0 to #2 position in 9 months. Real numbers from systematic implementation.</p>
        </div>

        <div className="callout-box" style={{ marginTop: '30px' }}>
          <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 600, color: '#000' }}>Why This Works:</p>
          <p style={{ margin: '12px 0 0 0', color: '#666', lineHeight: 1.9 }}>
            This isn't magic. It's math + incentives + timing:<br /><br />
            • <strong>At-the-door timing</strong> gets 5x better conversion than follow-up texts<br />
            • <strong>Employee incentives</strong> ensure the ask happens every time<br />
            • <strong>SMS backup</strong> catches the 10% who were busy but would have said yes<br />
            • <strong>Review boosts</strong> activate dormant 5-star experiences sitting in your CRM<br /><br />
            The system turns review collection from hope ("maybe they'll remember to leave one") into a predictable, scalable process. Your franchisees aren't competing against better businesses—they're competing against businesses with better systems.
          </p>
        </div>

        {/* Franchise Development Angle */}
        <h2 id="franchise-dev" style={{ marginTop: '90px', scrollMarginTop: '20px' }}>The Franchise Development Advantage</h2>
        <p>When you're recruiting franchisees, you're selling them on the strength of your system. Training. Marketing. Operations. Brand recognition.</p>
        <p style={{ marginTop: '20px' }}>But here's what kills new franchisees in year one: they're invisible online. Zero reviews. Zero credibility. Competing against established local businesses with 50+ reviews.</p>
        <p style={{ marginTop: '20px' }}><strong>What if your franchisees could reach top-quartile review counts (38+ reviews) in their first 6-9 months?</strong></p>

        <div className="callout-box">
          <p style={{ margin: 0, fontSize: '1.1em', color: '#000' }}><strong>"We give our franchisees a systematic review collection system from day one."</strong></p>
          <p style={{ margin: '12px 0 0 0', color: '#666' }}>This becomes a franchise development talking point that differentiates you from competitors who leave review collection to chance.</p>
        </div>

        <h3>Why This Matters for Franchise Sales</h3>
        <p><strong>Faster ramp-up:</strong> New franchisees establish credibility in months, not years. More leads, higher close rates, better unit economics from the start.</p>
        <p><strong>Reduced failure risk:</strong> Franchisees who gain market visibility quickly are more likely to hit revenue targets and stay in the system long-term.</p>
        <p><strong>Recruiting advantage:</strong> When prospects ask "How do you help me compete against established businesses?", you have a tangible answer with real data.</p>

        <div style={{ margin: '40px 0', padding: '30px', background: '#fafafa' }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#000' }}>Example scenario:</p>
          <p style={{ margin: '12px 0 0 0', color: '#666' }}>New franchisee opens in competitive market. Completes 25 jobs in month one. With A+ Reviews, converts 40% to reviews = 10 reviews first month. After 6 months, they have 60+ reviews—more than 85% of local competition. They're not just surviving; they're winning.</p>
        </div>

        {/* Call to Action */}
        <div className="cta-box">
          <h3 id="cta" style={{ scrollMarginTop: '20px' }}>Ready to Close the Gap?</h3>
          <p style={{ fontSize: '1.05em', margin: '30px 0 40px 0', opacity: 0.9 }}>You've seen the data. You know the problem. Let's talk about implementation—how to roll this out across your network, which locations to prioritize, and how to make review collection a competitive advantage for your franchisees.</p>
          <a href="https://calendly.com/conju/quick-chat" className="cta-button">Schedule a Call</a>
        </div>

        {/* Footer */}
        <div className="report-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <img src="/reports/horsepower_logo.png" alt="Horsepower Brands" style={{ maxWidth: '150px' }} />
            <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
              <img src="/reports/aplus_logo.png" alt="A+ Reviews" style={{ maxWidth: '70px', marginBottom: '5px' }} />
              <a href="https://aplusreviews.io" target="_blank" rel="noopener noreferrer" style={{ color: '#4299e1', fontWeight: 600, textDecoration: 'none' }}>
                aplusreviews.io
              </a>
            </div>
          </div>
          <p><strong>Confidential Business Analysis</strong> • November 2025</p>
          <p style={{ marginTop: '5px' }}>176 Locations Analyzed • 3,460+ Competitors Mapped</p>
        </div>
      </div>
      {/* End Main Content Wrapper */}
      </div>
    </div>
  );
}
