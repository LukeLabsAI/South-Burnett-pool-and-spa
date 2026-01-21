
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Shield, Clock, Waves, Calendar, Droplets } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Trusted Local Service in Kingaroy</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
              South Burnett's<br />
              <span className="text-blue-400">Pool Experts.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              We provide professional maintenance, repairs, and chemical supply for pools and spas. Keeping Kingaroy swimming since day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-800 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 text-center"
              >
                Book a Clean
              </Link>
              <a 
                href="tel:0413551523" 
                className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 text-center"
              >
                Call 0413 551 523
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-70">
            <div className="flex items-center gap-3 font-bold text-slate-600">
              <Shield className="w-8 h-8 text-blue-800" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-600">
              <Users className="w-8 h-8 text-blue-800" />
              <span>Family Owned</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-600">
              <CheckCircle className="w-8 h-8 text-blue-800" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="/pool-feature.jpg" 
                alt="Beautiful pool background" 
                className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-10 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-4xl font-black mb-1">6+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Days a week</p>
                <p className="mt-4 text-blue-100 text-xs italic">"Always there when you need us"</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-sm font-black text-blue-800 tracking-[0.3em] uppercase">Why Choose Us</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Clear Water,<br />No Hassle.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                South Burnett Pool & Spa is Kingaroy's dedicated partner for everything pool-related. We don't just clean, we care for the longevity of your equipment and the health of your family.
              </p>
              
              <div className="grid grid-cols-1 gap-6 pt-6">
                {[
                  { title: "Prompt Reliability", desc: "We show up when we say we will. Mon to Sat 7am to 5pm." },
                  { title: "Local Knowledge", desc: "We understand the specific challenges of South Burnett's water chemistry." },
                  { title: "Full Equipment Sales", desc: "We supply and install only the best pumps and chlorinators." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="bg-blue-50 p-3 rounded-xl h-fit">
                      <CheckCircle className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our Core Services</h2>
            <div className="w-24 h-2 bg-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Regular Cleaning", icon: <Waves className="w-10 h-10" />, desc: "Weekly, fortnightly or monthly visits tailored to your needs." },
              { title: "Water Testing", icon: <Droplets className="w-10 h-10" />, desc: "Professional balancing using the latest digital equipment." },
              { title: "Repairs", icon: <Calendar className="w-10 h-10" />, desc: "On-site pump, filter, and chlorinator troubleshooting." }
            ].map((s, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-blue-800 transition-all duration-500 hover:-translate-y-4">
                <div className="text-blue-800 mb-8 group-hover:text-white transition-colors">{s.icon}</div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed group-hover:text-blue-50 transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-4">What Our Clients Say</h3>
            <p className="text-slate-400">Honest feedback from Kingaroy and Nanango locals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all">
                <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center font-bold text-white uppercase">{review.name[0]}</div>
                  <div>
                    <h5 className="font-bold text-white">{review.name}</h5>
                    <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-800 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Ready to swim?</h2>
              <p className="text-xl md:text-2xl mb-12 text-blue-50">Join our maintenance route today and never worry about your pool again.</p>
              <Link 
                to="/contact" 
                className="bg-white text-blue-800 px-16 py-6 rounded-full font-black text-2xl hover:bg-slate-100 transition-all shadow-xl inline-block"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
