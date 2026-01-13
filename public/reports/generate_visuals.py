#!/usr/bin/env python3
"""
Generate all visualization images for Horsepower Brands report
"""
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch, Wedge
import numpy as np

# Set consistent style
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['Arial', 'Helvetica', 'DejaVu Sans']

def create_revenue_impact_hero():
    """1. $103M Revenue Impact Hero Graphic"""
    fig, ax = plt.subplots(figsize=(12, 6), facecolor='white')
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.axis('off')

    # Main giant number
    ax.text(5, 6.5, '$103M',
            ha='center', va='center',
            fontsize=120, fontweight='bold',
            color='#dc2626')

    # Subtitle
    ax.text(5, 4.5, 'in addressable revenue',
            ha='center', va='center',
            fontsize=28, color='#1a1a1a')

    ax.text(5, 3.8, 'going to competitors',
            ha='center', va='center',
            fontsize=28, color='#1a1a1a')

    # Breakdown box
    box = FancyBboxPatch((1.5, 1.5), 7, 1.5,
                         boxstyle="round,pad=0.1",
                         linewidth=2,
                         edgecolor='#e8e8e8',
                         facecolor='#fafafa')
    ax.add_patch(box)

    ax.text(5, 2.25, '$807K per location × 128 locations not in top 3',
            ha='center', va='center',
            fontsize=16, color='#666666',
            style='italic')

    plt.tight_layout()
    plt.savefig('revenue_impact_hero.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: revenue_impact_hero.png")
    plt.close()


def create_compounding_gap_chart():
    """2. The Compounding Gap Line Chart"""
    fig, ax = plt.subplots(figsize=(12, 7), facecolor='white')

    months = np.arange(0, 13)
    horsepower = 56 + (months * 3)  # 3 reviews/month
    competitor = 185 + (months * 10)  # 10 reviews/month

    # Fill between to show widening gap
    ax.fill_between(months, horsepower, competitor,
                    alpha=0.2, color='#dc2626',
                    label='The Widening Gap')

    # Lines
    ax.plot(months, competitor, 'o-', linewidth=3,
            color='#dc2626', markersize=8,
            label='Competitor (10 reviews/month)')
    ax.plot(months, horsepower, 'o-', linewidth=3,
            color='#2563eb', markersize=8,
            label='You (3 reviews/month - manual)')

    # Annotations
    ax.annotate('Gap: 129 reviews',
                xy=(0, (competitor[0] + horsepower[0])/2),
                xytext=(2, 140), fontsize=12,
                bbox=dict(boxstyle='round', facecolor='#fff3cd', alpha=0.8),
                arrowprops=dict(arrowstyle='->', color='#666'))

    ax.annotate('Gap: 213 reviews\n(84 reviews wider!)',
                xy=(12, (competitor[12] + horsepower[12])/2),
                xytext=(9, 250), fontsize=12, fontweight='bold',
                bbox=dict(boxstyle='round', facecolor='#fee2e2', alpha=0.9),
                arrowprops=dict(arrowstyle='->', color='#dc2626', lw=2))

    ax.set_xlabel('Months', fontsize=14, fontweight='bold')
    ax.set_ylabel('Total Reviews', fontsize=14, fontweight='bold')
    ax.set_title('The Compounding Problem: Every Month of Inaction Widens the Gap',
                fontsize=16, fontweight='bold', pad=20)
    ax.legend(loc='upper left', fontsize=12, framealpha=0.9)
    ax.grid(True, alpha=0.3, linestyle='--')
    ax.set_xlim(-0.5, 12.5)

    plt.tight_layout()
    plt.savefig('compounding_gap_chart.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: compounding_gap_chart.png")
    plt.close()


def create_system_diagram():
    """3. 3-Pronged System Flow Diagram"""
    fig, ax = plt.subplots(figsize=(12, 8), facecolor='white')
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.axis('off')

    # Title
    ax.text(5, 9.5, 'The 3-Pronged Review Collection System',
            ha='center', va='top',
            fontsize=18, fontweight='bold')

    # Starting point
    start_box = FancyBboxPatch((3.5, 8), 3, 0.6,
                               boxstyle="round,pad=0.1",
                               linewidth=2, edgecolor='#666',
                               facecolor='#e8e8e8')
    ax.add_patch(start_box)
    ax.text(5, 8.3, 'Job Complete', ha='center', va='center',
            fontsize=12, fontweight='bold')

    # Arrow down
    ax.annotate('', xy=(5, 7.3), xytext=(5, 8),
                arrowprops=dict(arrowstyle='->', lw=2, color='#333'))

    # Prong 1: QR Code
    qr_box = FancyBboxPatch((0.5, 5.5), 3, 1.5,
                            boxstyle="round,pad=0.1",
                            linewidth=3, edgecolor='#16a34a',
                            facecolor='#f0fdf4')
    ax.add_patch(qr_box)
    ax.text(2, 6.8, 'PRONG 1', ha='center', fontsize=10,
            fontweight='bold', color='#16a34a')
    ax.text(2, 6.4, 'At-the-Door', ha='center', fontsize=11, fontweight='bold')
    ax.text(2, 6.1, 'QR Code', ha='center', fontsize=11, fontweight='bold')
    ax.text(2, 5.7, '40-60% convert', ha='center', fontsize=9,
            style='italic', color='#666')

    # Arrow from start to prong 1
    ax.annotate('', xy=(2, 7), xytext=(4.2, 7.3),
                arrowprops=dict(arrowstyle='->', lw=2, color='#16a34a'))

    # Arrow from prong 1 to reviews
    ax.annotate('', xy=(2, 4.5), xytext=(2, 5.5),
                arrowprops=dict(arrowstyle='->', lw=2, color='#16a34a'))

    # Prong 2: SMS
    sms_box = FancyBboxPatch((3.5, 3.8), 3, 1.5,
                             boxstyle="round,pad=0.1",
                             linewidth=3, edgecolor='#2563eb',
                             facecolor='#eff6ff')
    ax.add_patch(sms_box)
    ax.text(5, 5.1, 'PRONG 2', ha='center', fontsize=10,
            fontweight='bold', color='#2563eb')
    ax.text(5, 4.7, 'SMS Backup', ha='center', fontsize=11, fontweight='bold')
    ax.text(5, 4.4, '(1 hour later)', ha='center', fontsize=9, color='#666')
    ax.text(5, 4.0, '10% convert', ha='center', fontsize=9,
            style='italic', color='#666')

    # Arrow: didn't scan
    ax.text(3.5, 6.8, "didn't scan", fontsize=9, color='#666', style='italic')
    ax.annotate('', xy=(4.5, 5.3), xytext=(3.8, 7),
                arrowprops=dict(arrowstyle='->', lw=2, color='#2563eb', linestyle='--'))

    # Arrow from prong 2 to reviews
    ax.annotate('', xy=(5, 2.8), xytext=(5, 3.8),
                arrowprops=dict(arrowstyle='->', lw=2, color='#2563eb'))

    # Prong 3: Review Boosts
    boost_box = FancyBboxPatch((6.5, 5.5), 3, 1.5,
                               boxstyle="round,pad=0.1",
                               linewidth=3, edgecolor='#f59e0b',
                               facecolor='#fffbeb')
    ax.add_patch(boost_box)
    ax.text(8, 6.8, 'PRONG 3', ha='center', fontsize=10,
            fontweight='bold', color='#f59e0b')
    ax.text(8, 6.4, 'CRM Review', ha='center', fontsize=11, fontweight='bold')
    ax.text(8, 6.1, 'Boosts', ha='center', fontsize=11, fontweight='bold')
    ax.text(8, 5.7, '5-8% reactivation', ha='center', fontsize=9,
            style='italic', color='#666')

    # Arrow from start to prong 3
    ax.text(6.2, 7.5, "past customers", fontsize=9, color='#666', style='italic')
    ax.annotate('', xy=(7.5, 7), xytext=(5.8, 7.3),
                arrowprops=dict(arrowstyle='->', lw=2, color='#f59e0b', linestyle='--'))

    # Arrow from prong 3 to reviews
    ax.annotate('', xy=(8, 4.5), xytext=(8, 5.5),
                arrowprops=dict(arrowstyle='->', lw=2, color='#f59e0b'))

    # Final destination: REVIEWS
    reviews_box = FancyBboxPatch((2, 0.5), 6, 1.5,
                                 boxstyle="round,pad=0.15",
                                 linewidth=4, edgecolor='#f37920',
                                 facecolor='#fff7ed')
    ax.add_patch(reviews_box)
    ax.text(5, 1.5, 'REVIEWS', ha='center', fontsize=24,
            fontweight='bold', color='#f37920')
    ax.text(5, 0.9, 'Combined: 24+ reviews/month', ha='center',
            fontsize=12, style='italic', color='#666')

    # Arrows converging on REVIEWS
    ax.annotate('', xy=(3.5, 1.5), xytext=(2, 2.5),
                arrowprops=dict(arrowstyle='->', lw=3, color='#16a34a'))
    ax.annotate('', xy=(5, 2), xytext=(5, 2.8),
                arrowprops=dict(arrowstyle='->', lw=3, color='#2563eb'))
    ax.annotate('', xy=(6.5, 1.5), xytext=(8, 2.5),
                arrowprops=dict(arrowstyle='->', lw=3, color='#f59e0b'))

    plt.tight_layout()
    plt.savefig('system_flow_diagram.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: system_flow_diagram.png")
    plt.close()


def create_timeline_infographic():
    """4. Case Study Timeline Infographic"""
    fig, ax = plt.subplots(figsize=(14, 5), facecolor='white')
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.axis('off')

    # Title
    ax.text(5, 9.2, 'Tampa Franchisee: From Zero to #2 in 9 Months',
            ha='center', va='top',
            fontsize=18, fontweight='bold')

    # Timeline line
    ax.plot([1, 9], [5, 5], 'k-', linewidth=3, alpha=0.3)

    # Milestones
    milestones = [
        {'x': 1, 'month': 'START', 'reviews': '0', 'position': '-', 'color': '#dc2626'},
        {'x': 3, 'month': 'MONTH 1', 'reviews': '11', 'position': '#-', 'color': '#f59e0b'},
        {'x': 5, 'month': 'MONTH 3', 'reviews': '37', 'position': '#-', 'color': '#f59e0b'},
        {'x': 7, 'month': 'MONTH 6', 'reviews': '71', 'position': '#4', 'color': '#3b82f6'},
        {'x': 9, 'month': 'MONTH 9', 'reviews': '108', 'position': '#2', 'color': '#16a34a'},
    ]

    for m in milestones:
        # Circle marker
        circle = Circle((m['x'], 5), 0.2, color=m['color'], zorder=3)
        ax.add_patch(circle)

        # Month label (above)
        ax.text(m['x'], 6.5, m['month'], ha='center', va='center',
                fontsize=12, fontweight='bold')

        # Reviews (middle)
        ax.text(m['x'], 5.8, f"{m['reviews']} reviews", ha='center', va='center',
                fontsize=14, fontweight='bold', color=m['color'])

        # Position (below)
        ax.text(m['x'], 4.2, f"Position: {m['position']}", ha='center', va='center',
                fontsize=11, color='#666')

        # Achievement badges for key milestones
        if m['month'] == 'MONTH 6':
            ax.text(m['x'], 3.2, '✓ Passed #5 competitor', ha='center',
                    fontsize=9, style='italic', color='#16a34a')
        elif m['month'] == 'MONTH 9':
            ax.text(m['x'], 3.2, '🎯 Surpassed #3!', ha='center',
                    fontsize=10, fontweight='bold', color='#16a34a')
            ax.text(m['x'], 2.7, '+340% lead volume', ha='center',
                    fontsize=9, style='italic', color='#666')
            ax.text(m['x'], 2.3, '-67% CAC', ha='center',
                    fontsize=9, style='italic', color='#666')

    # Bottom summary
    ax.text(5, 1.2, 'From invisible to market leader in under a year',
            ha='center', fontsize=14, style='italic', color='#666')

    plt.tight_layout()
    plt.savefig('timeline_infographic.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: timeline_infographic.png")
    plt.close()


def create_percentile_gauge():
    """5. Horsepower vs Industry Percentile Gauge"""
    fig, ax = plt.subplots(figsize=(12, 6), facecolor='white')
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.axis('off')

    # Title
    ax.text(5, 9, "Where Horsepower Stands vs 48,000+ Home Service Businesses",
            ha='center', va='center',
            fontsize=16, fontweight='bold')

    # Horizontal bar/gauge background
    gauge_y = 5
    ax.barh(gauge_y, 100, height=1.5, left=0,
            color='#f5f5f5', edgecolor='#333', linewidth=2)

    # Filled portion up to Horsepower
    ax.barh(gauge_y, 78, height=1.5, left=0,
            color='#3b82f6', alpha=0.3)

    # Percentile markers
    markers = [
        (25, '25th', '#dc2626'),
        (50, '50th\n(Median)', '#f59e0b'),
        (75, '75th', '#16a34a'),
        (90, '90th', '#16a34a'),
    ]

    for pct, label, color in markers:
        ax.plot([pct/10, pct/10], [gauge_y - 0.75, gauge_y + 0.75],
                'k-', linewidth=1.5, alpha=0.5)
        ax.text(pct/10, gauge_y - 1.5, label, ha='center', va='top',
                fontsize=10, color=color, fontweight='bold')

    # Horsepower marker (big arrow)
    hp_x = 78/10
    ax.annotate('', xy=(hp_x, gauge_y + 0.75), xytext=(hp_x, gauge_y + 2),
                arrowprops=dict(arrowstyle='->', lw=4, color='#2563eb'))

    # Horsepower label
    box = FancyBboxPatch((hp_x - 0.8, gauge_y + 2), 1.6, 0.8,
                         boxstyle="round,pad=0.1",
                         linewidth=3, edgecolor='#2563eb',
                         facecolor='#eff6ff')
    ax.add_patch(box)
    ax.text(hp_x, gauge_y + 2.4, 'YOU', ha='center', va='center',
            fontsize=14, fontweight='bold', color='#2563eb')
    ax.text(hp_x, gauge_y + 3.2, '78th Percentile', ha='center', va='bottom',
            fontsize=12, fontweight='bold', color='#2563eb')
    ax.text(hp_x, gauge_y + 3.5, '(56 reviews avg)', ha='center', va='bottom',
            fontsize=10, color='#666')

    # Bottom explanation
    ax.text(5, 2, 'Better than 78% of home service businesses...',
            ha='center', fontsize=14, color='#666')
    ax.text(5, 1.4, 'But still losing to your top 3 local competitors (who average 185 reviews)',
            ha='center', fontsize=13, color='#dc2626', fontweight='bold',
            style='italic')

    plt.tight_layout()
    plt.savefig('percentile_gauge.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: percentile_gauge.png")
    plt.close()


def create_click_distribution():
    """6. Top 3 Click Distribution Pie Chart"""
    fig, ax = plt.subplots(figsize=(10, 8), facecolor='white')

    sizes = [44, 8, 48]
    labels = ['Top 3 Positions\n(44% of clicks)',
              'Position 4-10\n(8% of clicks)',
              'Below Position 10\n(48% of clicks\nspread across many)']
    colors = ['#16a34a', '#f59e0b', '#dc2626']
    explode = (0.1, 0.05, 0)

    wedges, texts, autotexts = ax.pie(sizes, labels=labels, autopct='%1.0f%%',
                                        colors=colors, explode=explode,
                                        startangle=90, textprops={'fontsize': 13},
                                        wedgeprops={'linewidth': 2, 'edgecolor': 'white'})

    for autotext in autotexts:
        autotext.set_color('white')
        autotext.set_fontweight('bold')
        autotext.set_fontsize(16)

    ax.set_title('Why Local Search Position Matters:\nClick Distribution in Google Local Pack',
                 fontsize=16, fontweight='bold', pad=20)

    # Add annotation
    ax.text(0, -1.5, 'Your average position: #6-7 (getting ~5-8% of clicks)',
            ha='center', fontsize=13, style='italic',
            bbox=dict(boxstyle='round', facecolor='#fff3cd', alpha=0.8))

    plt.tight_layout()
    plt.savefig('click_distribution.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: click_distribution.png")
    plt.close()


def create_velocity_comparison():
    """7. Review Velocity Comparison Bars"""
    fig, ax = plt.subplots(figsize=(12, 6), facecolor='white')

    approaches = ['Manual\n(techs remember to text)',
                  'Systematic\n(QR + SMS + Boosts)']
    reviews_per_month = [3, 24]
    time_to_catch_up = [4*12, 6]  # months
    colors = ['#dc2626', '#16a34a']

    # Create subplot with 2 charts
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6), facecolor='white')

    # Chart 1: Reviews per month
    bars1 = ax1.barh(approaches, reviews_per_month, color=colors,
                     edgecolor='black', linewidth=2, alpha=0.8)
    ax1.set_xlabel('Reviews Per Month', fontsize=12, fontweight='bold')
    ax1.set_title('Review Generation Rate', fontsize=14, fontweight='bold', pad=15)
    ax1.grid(axis='x', alpha=0.3)

    # Add values on bars
    for i, (bar, val) in enumerate(zip(bars1, reviews_per_month)):
        ax1.text(val + 1, i, f'{val}/month',
                va='center', fontsize=14, fontweight='bold')

    # Chart 2: Time to catch up
    bars2 = ax2.barh(approaches, time_to_catch_up, color=colors,
                     edgecolor='black', linewidth=2, alpha=0.8)
    ax2.set_xlabel('Months to Close 129-Review Gap', fontsize=12, fontweight='bold')
    ax2.set_title('Time to Reach Competitive Parity', fontsize=14, fontweight='bold', pad=15)
    ax2.grid(axis='x', alpha=0.3)

    # Add values on bars
    for i, (bar, val) in enumerate(zip(bars2, time_to_catch_up)):
        label = f'{val//12} YEARS' if val >= 12 else f'{val} MONTHS'
        ax2.text(val + 2, i, label,
                va='center', fontsize=14, fontweight='bold')

    plt.tight_layout()
    plt.savefig('velocity_comparison.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: velocity_comparison.png")
    plt.close()


def create_brand_comparison():
    """8. Brand Performance Comparison Chart"""
    fig, ax = plt.subplots(figsize=(14, 8), facecolor='white')

    brands = ['Mighty Dog\nRoofing', 'Heroes\nLawn Care', 'Varsity\nZone',
              'iFoam', 'Blingle']
    avg_reviews = [95, 67, 53, 45, 45]
    pct_top_3 = [42, None, 14, 68, 69]  # Heroes doesn't have position data
    industry_avg = [88, 34, 121, None, None]

    x = np.arange(len(brands))
    width = 0.25

    # Bar 1: Horsepower reviews
    bars1 = ax.bar(x - width, avg_reviews, width, label='Horsepower Avg Reviews',
                   color='#2563eb', edgecolor='black', linewidth=1.5)

    # Bar 2: Industry averages (where available)
    industry_with_none = [val if val is not None else 0 for val in industry_avg]
    bars2 = ax.bar(x, industry_with_none, width, label='Industry Avg (vertical)',
                   color='#f59e0b', edgecolor='black', linewidth=1.5, alpha=0.7)

    # Bar 3: % in top 3 (scaled)
    pct_with_none = [val if val is not None else 0 for val in pct_top_3]
    bars3 = ax.bar(x + width, pct_with_none, width, label='% in Top 3 (scaled)',
                   color='#16a34a', edgecolor='black', linewidth=1.5, alpha=0.7)

    ax.set_ylabel('Reviews / Percentage', fontsize=12, fontweight='bold')
    ax.set_title('Brand Performance Comparison', fontsize=16, fontweight='bold', pad=20)
    ax.set_xticks(x)
    ax.set_xticklabels(brands, fontsize=11)
    ax.legend(fontsize=11, loc='upper left')
    ax.grid(axis='y', alpha=0.3)

    # Add value labels on bars
    for bars in [bars1, bars2, bars3]:
        for bar in bars:
            height = bar.get_height()
            if height > 0:
                ax.text(bar.get_x() + bar.get_width()/2., height,
                       f'{int(height)}',
                       ha='center', va='bottom', fontsize=9, fontweight='bold')

    plt.tight_layout()
    plt.savefig('brand_comparison.png', dpi=150, bbox_inches='tight',
                facecolor='white', edgecolor='none')
    print("✓ Created: brand_comparison.png")
    plt.close()


if __name__ == "__main__":
    print("=" * 60)
    print("Generating Horsepower Brands Report Visuals")
    print("=" * 60)
    print()

    create_revenue_impact_hero()
    create_compounding_gap_chart()
    create_system_diagram()
    create_timeline_infographic()
    create_percentile_gauge()
    create_click_distribution()
    create_velocity_comparison()
    create_brand_comparison()

    print()
    print("=" * 60)
    print("✓ All visuals generated successfully!")
    print("=" * 60)
