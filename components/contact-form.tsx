"use client";

import { FormEvent, useState } from "react";

const enquiryTypes = [
  "Role opportunity",
  "Contract opportunity",
  "Reporting or dashboard project",
  "KPI review",
  "Learning or programme visibility",
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
        <p className="eyebrow">Conversation Starter</p>
        <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
          Share the role, problem, or opportunity.
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
          Enquiry type
          <select className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive">
            {enquiryTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-dusk">
          What should I know?
          <textarea
            required
            rows={6}
            className="rounded-2xl border border-olive/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-olive"
            placeholder="Describe the role, reporting issue, project need, or contract context."
          />
        </label>
        <button type="submit" className="primary-button w-fit justify-center">
          Send enquiry
        </button>
      </form>
      {submitted ? (
        <div className="mt-5 rounded-2xl border border-olive/15 bg-[#eef6ea] px-4 py-3 text-sm text-dusk">
          Demo submission captured. For production, connect this form to email,
          Resend, Formspree, or a Next.js route handler.
        </div>
      ) : null}
    </div>
  );
}
