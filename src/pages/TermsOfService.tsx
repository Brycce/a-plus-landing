import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
const TermsOfService = () => {
  return <div className="min-h-screen bg-gradient-to-b from-[#FFF8E4] to-[#FFFFFF]">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/aplusblue.png" 
              alt="A+ Reviews Logo" 
              className="w-8 h-8 rounded"
            />
            <span className="text-xl font-bold">A+ Reviews</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using A plus Reviews, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="mb-4">A Plus Reviews provides automated review request services for businesses. Our platform helps businesses collect customer reviews through SMS messaging and integrates with various business management tools.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use the service only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect customer privacy and consent requirements</li>
              <li>Not use the service to send spam or unsolicited messages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <p className="mb-4">
              Service fees are billed monthly or annually as selected. Payment is due 
              immediately upon subscription. We reserve the right to suspend service 
              for non-payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="mb-4">
              We strive to maintain service availability but do not guarantee uninterrupted 
              service. We may suspend service for maintenance or updates with reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">A Plus Reviews shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="mb-4">
              Either party may terminate this agreement at any time. Upon termination, 
              your access to the service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued use 
              of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="mb-2">Email: bryce@aplusreviews.io</p>
            <p className="mb-2">Address: 3542 Blanshard St #206, Victoria, BC V8X 1W3</p>
          </section>
        </div>
      </div>
    </div>;
};
export default TermsOfService;