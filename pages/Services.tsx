
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, HelpCircle, ArrowRight } from 'lucide-react';
import { SERVICES, PRICING_TIERS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Header with Background */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/services-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-sm font-black text-blue-300 tracking-[0.4em] uppercase mb-6">Our Specialties</h1>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Full Pool & Spa Care</h2>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
            From luxury residential setups to high-usage commercial pools, we have the expertise and the gear to keep the water crystal clear.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-10 rounded-[3rem] bg-white border-2 border-slate-50 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-800 transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-10 h-10 text-blue-800 group-hover:text-white' })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-blue-800 font-bold hover:gap-4 transition-all">
                  Request Service <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers with Cool Hover */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Service Plans</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Reliable, affordable, and local. Choose a plan that fits your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`group relative flex flex-col p-12 rounded-[3.5rem] bg-white transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(30,58,138,0.3)] ${tier.isPopular ? 'ring-4 ring-blue-800 scale-105 z-10' : 'opacity-90'
                  }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    Most Popular
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                  </div>
                </div>

                <ul className="space-y-6 mb-12 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="bg-blue-100 p-1 rounded-full shrink-0 mt-1 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                        <Check className="w-4 h-4 text-blue-800 group-hover:text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-5 rounded-2xl font-black text-center text-lg transition-all ${tier.isPopular
                      ? 'bg-blue-800 text-white hover:bg-blue-900 shadow-xl shadow-blue-800/20'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 italic">
              * Final pricing may vary based on pool size and location. We provide no-obligation quotes after an initial site visit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with 2 columns */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-blue-800 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900">Pool Care FAQs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="space-y-8">
              {[
                {
                  q: "What areas do you service in the South Burnett?",
                  a: "We are based in Kingaroy and service Nanango, Wondai, Murgon, Kumbia, and surrounding rural properties."
                },
                {
                  q: "Do you supply the chemicals?",
                  a: "Yes, we carry a full range of high-quality chemicals in our service vehicles. We can either supply as needed or work with your existing stock."
                },
                {
                  q: "Can you fix my leaking pump?",
                  a: "Absolutely. We specialize in equipment troubleshooting and can often repair seals or bearings on-site, or provide competitive quotes for replacement units."
                },
                {
                  q: "How often should my pool be serviced?",
                  a: "In summer, we recommend fortnightly servicing to manage high UV levels and heavy bather loads. Monthly is usually sufficient during the winter months."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-black text-slate-900 mb-4">{item.q}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {[
                {
                  q: "What should I do if my pool is turning green?",
                  a: "Turn off your pump and contact us immediately. Early intervention prevents stains and reduces the chemical cost for recovery."
                },
                {
                  q: "Are your technicians insured?",
                  a: "Yes, all our staff are fully trained and we carry comprehensive public liability insurance for your peace of mind."
                },
                {
                  q: "Do you offer emergency call-outs?",
                  a: "Yes, we prioritize equipment failures like burst pipes or leaking filters for our regular maintenance clients."
                },
                {
                  q: "Can you help with solar heating?",
                  a: "We install and maintain heat pumps and solar blanket systems. We can help you find the best solution for the Kingaroy winter."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-black text-slate-900 mb-4">{item.q}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
