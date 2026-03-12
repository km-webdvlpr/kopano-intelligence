"use client";

import { FormEvent, useState } from "react";

const enquiryTypes = [
  "Internal business system",
  "Dashboard or reporting tool",
  "Client or admin portal",
  "Learning or programme platform",
  "Workflow redesign and build",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-form" className="panel p-8 lg:p-10">
      <div className="max-w-2xl">
        <p className="eyebrow">Build Enquiry</p>
        <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
          Describe the workflow, admin pain, or system gap.
        </h2>
        <p className="mt-4 text-dusk">
          This form is wired for local demo use. For production, connect it to
          your preferred email or form backend.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-dusk">
            Name
            <input
              required
              className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-dusk">
            Email
            <input
              required
              type="email"
              className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive"
              placeholder="name@organisation.com"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-dusk">
          Organisation
          <input
            className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive"
            placeholder="Organisation name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-dusk">
          Project type
          <select className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive">
            {enquiryTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-dusk">
          What needs to work better?
          <textarea
            required
            rows={6}
            className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive"
            placeholder="Describe the workflow, admin problem, reporting gap, or system you need."
          />
        </label>
        <button type="submit" className="primary-button w-fit justify-center">
          Send enquiry
        </button>
      </form>
      {submitted ? (
        <div className="mt-5 rounded-2xl border border-olive/15 bg-[#eef5e7] px-4 py-3 text-sm text-dusk">
          Demo submission captured. For production, connect this form to email,
          Resend, Formspree, or a Next.js route handler.
        </div>
      ) : null}
    </div>
  );
}
