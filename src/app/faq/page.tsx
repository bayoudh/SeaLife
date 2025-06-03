'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'You can return any item within 30 days of purchase for a full refund.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3–7 business days depending on your location.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, our support team is available 24/7 via email or live chat.',
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center hover:bg-gray-50"
            >
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
