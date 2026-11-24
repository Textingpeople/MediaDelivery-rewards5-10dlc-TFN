'use client';

import { useState } from 'react';

const inputClass =
  'block w-full px-4 py-3 border border-border rounded-lg bg-white text-primary placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none';
const labelClass = 'block text-sm font-medium text-primary mb-2';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-primary mb-3">Message Sent!</h2>
        <p className="text-text-muted mb-6">Thanks for reaching out. We&apos;ll get back to you soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-accent text-accent-ink font-semibold rounded-lg hover:bg-accent-hover transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
            className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
            className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>Message *</label>
          <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}
            className={inputClass} placeholder="How can we help you?" />
        </div>
        <button type="submit"
          className="w-full py-4 px-6 rounded-lg text-lg font-semibold bg-accent hover:bg-accent-hover text-accent-ink shadow-lg transition-colors">
          Send Message
        </button>
      </form>
    </>
  );
}
