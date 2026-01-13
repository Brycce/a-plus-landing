import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
const PrivacyPolicy = () => {
  return <div className="min-h-screen bg-gradient-to-b from-[#FFF8E4] to-[#FFFFFF]">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/aplusblue.png" 
              alt="A+ Reviews Logo" 
              className="w-8 h-8 rounded"
            />
            <span className="text-xl font-bold">A+ Reviews</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: July 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our service, or contact us for support.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (business name, address, industry)</li>
              <li>Account credentials and preferences</li>
              <li>Payment information (processed securely through Stripe)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and promotional offers</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except as described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With service providers who assist us in operating our platform</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2">Email: bryce@aplusreviews.io</p>
            <p className="mb-2">Address: 3542 Blanshard St #206, Victoria, BC V8X 1W3</p>
          </section>
        </div>
      </div>
    </div>;
};
export default PrivacyPolicy;