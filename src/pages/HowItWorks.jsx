import React from 'react';

const Step = ({ num, title, children }) => (
  <div className="p-4 border rounded-lg text-center">
    <div className="w-12 h-12 mx-auto rounded-full bg-blue-400 text-white flex items-center justify-center text-lg font-bold">{num}</div>
    <h3 className="font-semibold mt-3">{title}</h3>
    <p className="text-sm text-muted mt-2">{children}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="rounded-lg p-6 shadow-sm bg-base-100">
      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Step num="1" title="Browse Skills">
          Explore categories and provider profiles to find the right skill.
        </Step>
        <Step num="2" title="Book a Session">
          Select available slots, book and pay (or request swap) with your provider.
        </Step>
        <Step num="3" title="Learn & Review">
          Attend the session, rate the provider and leave feedback to help others.
        </Step>
      </div>
    </section>
  );
};

export default HowItWorks;