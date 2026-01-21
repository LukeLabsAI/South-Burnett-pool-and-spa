
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    poolType: 'Residential',
    planChosen: 'Standard Clean',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form data sent:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                Let's get to <span className="text-blue-800">work.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                Contact your local Kingaroy pool experts for a free quote or equipment advice.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="bg-blue-800 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call Today</p>
                  <p className="text-2xl font-black text-slate-900">0413 551 523</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-slate-900 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Visit/Service Area</p>
                  <p className="text-lg font-bold text-slate-900 leading-tight">6 Casuarina St,<br />Kingaroy QLD 4610</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-blue-100 p-4 rounded-2xl text-blue-800 shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Operating Hours</p>
                  <p className="text-lg font-bold text-slate-900">Mon to Sat 7am to 5pm</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Service Area</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We are proud to serve the entire South Burnett region including Kingaroy, Nanango, Wondai, Murgon, and surrounding townships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Kingaroy', 'Nanango', 'Wondai', 'Murgon', 'Kumbia', 'Crawford'].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {isSubmitted ? (
              <div className="bg-white rounded-[4rem] shadow-2xl p-16 text-center h-full flex flex-col items-center justify-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6">Quote Request Sent</h2>
                <p className="text-xl text-slate-600 mb-10">We'll be in touch within 24 hours (usually much faster!).</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-slate-800 transition-all"
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-[4rem] shadow-2xl p-10 md:p-16 border-t-8 border-blue-800">
                <h2 className="text-3xl font-black text-slate-900 mb-10">Request a Site Visit</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="e.g. Robert Smith" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Phone</label>
                      <input 
                        required
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="04XX XXX XXX" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Email</label>
                      <input 
                        required
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="your@email.com" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Plan Chosen</label>
                      <select 
                        name="planChosen" 
                        value={formData.planChosen} 
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>Standard Clean</option>
                        <option>Premium Care</option>
                        <option>Total Managed</option>
                        <option>Repair / One-off Only</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Pool Type</label>
                      <select 
                        name="poolType" 
                        value={formData.poolType} 
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Real Estate / Rental</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Service Address</label>
                    <input 
                      required
                      type="text" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange}
                      placeholder="Address in Kingaroy or South Burnett" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">How can we help?</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      placeholder="Briefly describe your pool or equipment issue..." 
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-800/10 focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-blue-800 text-white py-6 rounded-2xl font-black text-2xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-800/30 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "Sending..." : "Submit Quote Request"}
                    <Send className="w-6 h-6" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
