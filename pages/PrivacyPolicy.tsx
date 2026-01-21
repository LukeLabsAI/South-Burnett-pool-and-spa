
import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-800 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[4rem] shadow-xl p-10 md:p-20 border border-slate-100">
          <div className="flex items-center gap-6 mb-12">
            <div className="bg-blue-100 p-5 rounded-3xl text-blue-800 shadow-inner">
              <Shield className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Privacy Policy</h1>
              <p className="text-xl text-slate-500 font-bold">South Burnett Pool & Spa</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-10 text-slate-600 text-lg leading-relaxed">
            <section>
              <p>
                South Burnett Pool & Spa is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
              </p>
              <p className="mt-4">
                We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
              </p>
            </section>

            <hr className="border-slate-100" />

            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6">What is Personal Information?</h2>
              <p>
                Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses, and phone numbers.
              </p>
              <p className="mt-4">
                This Personal Information is obtained in many ways including interviews, correspondence, by telephone and email, via our website, and from third parties. We collect your Personal Information for the primary purpose of providing our services to you and providing information to our clients.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Security & Storage</h2>
              <p>
                Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.
              </p>
              <p className="mt-4">
                When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information.
              </p>
            </section>

            <section className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 mt-12">
              <h2 className="text-3xl font-black text-slate-900 mb-6">Contact Us</h2>
              <p className="mb-6">
                If you have any queries or complaints about our Privacy Policy, please contact us at:
              </p>
              <div className="space-y-2 font-bold text-slate-900">
                <p>South Burnett Pool & Spa</p>
                <p>6 Casuarina St, Kingaroy QLD 4610</p>
                <p className="text-blue-800">office@sbpoolspa.com.au</p>
                <p>0413 551 523</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
