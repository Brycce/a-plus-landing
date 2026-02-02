import { QrCode, MessageSquare } from "lucide-react";

export function RedesignedWhyInPerson() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Make it stupid easy to leave a review
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            8 out of 10 customers who say "yeah, I'll leave you a review" never do. It's not that they're lying — they just forget. The trick is to get the review while they're still standing there, happy with the work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <QrCode className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">In-person QR code</h3>
              <p className="text-gray-600">
                Your tech shows a code right after the job. Customer scans, leaves a review, done. No follow-up needed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Automatic text backup</h3>
              <p className="text-gray-600">
                Didn't scan? We text them so you don't have to. Together, you miss almost nobody.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
