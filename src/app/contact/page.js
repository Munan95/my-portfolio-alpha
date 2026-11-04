"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Plink from "@/data/links.json";

const contactInfo = [
  {
    label: "LinkedIn",
    value: "morshed-khan-munan",
    href: `${Plink.Linkedin}`,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Email me",
    value: `${Plink.Email}`,
    href: `mailto:${Plink.Email}`,
    icon: FaEnvelope,
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    icon: FaMapMarkerAlt,
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all focus:ring-2 focus:ring-teal-500";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Opens the visitor's email app with the message filled in.
    // Replace with a fetch() to your own API route / EmailJS / Formspree to send from the site.
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${Plink.Email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-black/30 px-6 py-20 text-white md:px-12 lg:px-20">
      {/* Background glows */}

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Let's{" "}
              <span className="bg-linear-to-l from-rose-400 to-amber-200 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/60">
              I specialize in Next.js, React.js, and MongoDB. Whether you have a project in
              mind or just want to say hi, my inbox is always open!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map(({ label, value, href, icon: Icon, external }) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-300/10 text-rose-500 transition-all duration-300 group-hover:bg-rose-500/70 group-hover:text-white">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                      {label}
                    </p>
                    <p className="font-medium text-white transition-colors group-hover:text-rose-400">
                      {value}
                    </p>
                  </div>
                </>
              );

              return href ? (
                <Link
                  key={label}
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex cursor-pointer items-center gap-4"
                >
                  {content}
                </Link>
              ) : (
                <div key={label} className="group flex cursor-default items-center gap-4">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: form */}
        <div className="group relative">
          <div className="absolute -inset-1 rounded-4xl bg-linear-to-r from-rose-400 to-amber-200 opacity-20 blur transition duration-1000 group-hover:opacity-40" />

          <form
            onSubmit={handleSubmit}
            className="relative space-y-5 rounded-4xl border border-white/10 bg-[#171616] p-8 shadow-2xl sm:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="px-1 text-sm font-semibold">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="px-1 text-sm font-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="px-1 text-sm font-semibold">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Project Collaboration"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="px-1 text-sm font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-rose-500/50 py-4 font-bold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-rose-500/40 active:scale-[0.98]"
            >
              <FaPaperPlane className="text-sm" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}