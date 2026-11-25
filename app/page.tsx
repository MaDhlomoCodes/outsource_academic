"use client";

import Image from "next/image";

import { FormEvent, useState } from "react";

const services = [
  "Assignment support",
  "Research & information sourcing",
  "Test preparation",
  "Tutoring",
  "Interpreting and implementing feedback",
  "Sentence and chapter structure",
  "Argument development",
  "Thesis review, proofreading & editing",
  "Something else",
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span>o</span><span>a</span></span>;
}

export default function Home() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please try again, or reach out on WhatsApp.");
      setStatus("Thanks for reaching out. Your message is on its way — we'll be in touch soon.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong. Please try WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Outsource Academic home"><BrandMark /><span>Outsource<br />Academic</span></a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          <a href="#about" className="nav-link">About</a><a href="#services" className="nav-link">What we do</a><a href="#contact" className="nav-link">Get in touch</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowIcon /></a>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> A little room to breathe</div>
          <h1>Reach out,<br /><em>let&apos;s figure it out</em><br />together.</h1>
          <p className="hero-subtitle">Academic support, one conversation at a time.</p>
          <div className="hero-bottom">
            <p className="hero-copy">As a tutor, I&apos;ve watched students struggle with writing formats, exam preparation, and simply finding the right information. Workloads grow, timelines shrink, and something has to give. As a peer, I&apos;ve seen colleagues stall under poor time management, unclear feedback, thin guidance, and plain fatigue. Outsource Academic exists so fewer students fall into that slump.</p>
            <a href="#contact" className="round-link" aria-label="Start a conversation"><ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-circle art-circle-one" /><div className="art-circle art-circle-two" />
          <div className="art-note"><span className="note-star">✳</span><span>Progress<br />starts with<br /><em>a conversation.</em></span></div>
          <div className="art-caption">A more human way through.</div>
          <svg className="art-line" viewBox="0 0 260 300" fill="none"><path d="M30 267c16-61 41-96 70-111 23-12 43 1 57-22 17-27-3-44 16-72 15-22 39-25 61-43" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 7"/><circle cx="30" cy="267" r="5" fill="currentColor"/><circle cx="234" cy="19" r="5" fill="currentColor"/></svg>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>03</span></div>
      </section>

      <section id="about" className="about-section section-wrap">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /> The person behind the support</div>
        <div className="about-grid">
          <div className="portrait-card">
            <div className="portrait-frame">
              <div className="portrait-sun" />
              <div className="portrait-placeholder"><Image src="/sibusiso-ngonyama.jpeg" alt="Portrait of Sibusiso Ngonyama" width={900} height={1200} className="portrait-photo" priority /></div>
              <span className="portrait-tag">The founder</span>
            </div>
            <div className="portrait-caption"><span>01 / 01</span><span>Rhodes University · Makhanda</span></div>
          </div>
          <div className="about-copy">
            <span className="small-label">A steady hand, from one student to another</span>
            <h2>Hi, I&apos;m <em>Sibusiso.</em></h2>
            <p className="about-intro">I know what it takes to keep going when the work gets heavy. I also know how much a thoughtful conversation can change the way forward.</p>
            <div className="credentials">
              <div className="credential-row"><span className="credential-number">01</span><div><h3>Grounded in research</h3><p>Master&apos;s in Industrial and Economic Sociology, with a 76% coursework average. BSocSc in Psychology &amp; Sociology, and BSocSc Honours in Sociology.</p></div></div>
              <div className="credential-row"><span className="credential-number">02</span><div><h3>Recognised along the way</h3><p>A six-time scholarship recipient, including the DVC, JB Marks, and Neill Aggett Labour scholarships.</p></div></div>
              <div className="credential-row"><span className="credential-number">03</span><div><h3>In the work with you</h3><p>Experience as a Tutor, Teaching Assistant, and Research Assistant — supporting students from the inside out.</p></div></div>
            </div>
            <a href="#contact" className="text-link">Tell me where you&apos;re at <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-wrap">
          <div className="section-kicker light-kicker"><span>02</span><span className="kicker-rule" /> Thoughtful support, at every step</div>
          <div className="services-heading"><div><h2>Find the support<br />that <em>fits.</em></h2></div><p>Every student&apos;s needs look a little different. We&apos;ll meet you where you are, and work out what helps from there.</p></div>
          <div className="service-cards">
            <article className="service-card undergraduate-card">
              <div className="service-top"><span className="service-index">01 — Undergraduate</span><span className="service-icon book-icon">✳</span></div>
              <h3>Build your<br /><em>foundations.</em></h3>
              <p>Practical guidance to help you find your footing and feel more confident in your work.</p>
              <ul><li>Assignment support</li><li>Research &amp; information sourcing</li><li>Test preparation</li><li>Tutoring</li></ul>
              <a href="#contact" className="service-link">Explore undergraduate support <ArrowIcon /></a>
            </article>
            <article className="service-card postgraduate-card">
              <div className="service-top"><span className="service-index">02 — Postgraduate</span><span className="service-icon">✳</span></div>
              <div className="flagship-pill"><span /> A little more focus, where it counts</div>
              <h3>Make your<br /><em>thinking clear.</em></h3>
              <p>Dedicated, one-to-one support to shape your research into work you&apos;re proud to put your name to.</p>
              <ul><li>Interpreting and implementing feedback</li><li>Refining sentence and chapter structure</li><li>Clarifying, tracking, and strengthening arguments</li><li>Finding supporting evidence, where needed</li></ul>
              <div className="flagship-service"><span className="flagship-star">✳</span><div><strong>Thesis review, proofreading<br />&amp; editing</strong><span>Careful eyes. Considered feedback. Your voice, made clearer.</span></div><ArrowIcon diagonal /></div>
              <a href="#contact" className="service-link">Talk about your thesis <ArrowIcon /></a>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <div className="section-kicker"><span>03</span><span className="kicker-rule" /> Start wherever you are
        </div>
        <div className="contact-grid">
          <div className="contact-copy"><span className="small-label">No pressure, just a conversation</span><h2>What&apos;s on<br />your <em>mind?</em></h2><p>Tell me a little about what you&apos;re working through. We&apos;ll take it from there, together.</p>
            <div className="contact-aside"><span className="aside-asterisk">✳</span><span>You don&apos;t need to have it all figured out before you reach out.</span></div>
            <a className="whatsapp-link" href="https://wa.me/27670799166?text=Hi%20Sibusiso%2C%20I%27d%20like%20to%20talk%20about%20academic%20support." target="_blank" rel="noreferrer"><span className="whatsapp-icon">↗</span> Prefer WhatsApp? Message me directly <ArrowIcon diagonal /></a>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>THE DIALOGUE BOX</span><span>Let&apos;s begin here <span className="form-star">✳</span></span></div>
            <div className="form-row"><label>Full name<input name="name" type="text" placeholder="What should I call you?" required autoComplete="name" /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required autoComplete="email" /></label></div>
            <div className="form-row"><label>Phone / WhatsApp number<input name="phone" type="tel" placeholder="+27 ..." autoComplete="tel" /></label><label>What would you like help with?<span className="select-wrap"><select name="service" defaultValue="" required><option value="" disabled>Choose a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></span></label></div>
            <label className="message-label">Tell me a little more<textarea name="message" rows={4} placeholder="Briefly describe exactly what it is that you want assistance with..." required /></label>
            <div className="form-submit-row"><p>Your details stay between us.<br />I&apos;ll get back to you personally.</p><button type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}<ArrowIcon /></button></div>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a href="#home" className="brand footer-brand"><BrandMark /><span>Outsource<br />Academic</span></a><p>There is no problem<br /><em>too small to talk through.</em></p><a className="back-top" href="#home">Back to the top <span>↑</span></a></div>
        <div className="footer-divider" />
        <div className="footer-bottom"><div className="footer-detail"><span className="footer-label">A good time to reach out</span><strong>Monday – Saturday<br />08:30 – 22:30</strong></div><div className="footer-detail"><span className="footer-label">Send a note</span><a href="mailto:sibusisongonyama@outsourceacademic.co.za">sibusisongonyama@outsourceacademic.co.za</a></div><div className="footer-detail"><span className="footer-label">Call or WhatsApp</span><a href="https://wa.me/27670799166">+27 67 079 9166</a></div><div className="footer-assurance">Something else on your mind? Ask — it can be arranged upon consultation. Reach out. There is no problem too small to talk through.</div></div>
        <div className="footer-legal"><span>© {new Date().getFullYear()} Outsource Academic</span><a href="#contact">Start a conversation <ArrowIcon /></a></div>
      </footer>
    </main>
  );
}
