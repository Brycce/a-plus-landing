const benefits = [
  {
    title: "Save 10+ hours per week",
    description: "No more manually asking for reviews. Everything runs on autopilot after each job.",
  },
  {
    title: "3x more reviews",
    description: "Customers see an average 300% increase in Google reviews within the first month.",
  },
  {
    title: "98% SMS open rate",
    description: "SMS gets read. Email gets buried. Reach customers where they actually look.",
  },
  {
    title: "Outrank competitors",
    description: "More reviews boost your local search rankings and attract more customers organically.",
  },
];

export function RedesignedWhyChoose() {
  return (
    <section className="py-14 lg:py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[#3C83F6] font-semibold text-xs tracking-wide uppercase mb-3">Why A+ Reviews</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Built for businesses that run on reputation
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
