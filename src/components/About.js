import React, { useState } from "react";

/* ── Modal data ─────────────────────────────────────────────── */
const modalContent = {
  qualityEducation: {
    title: "Quality Education at Future Kids School",
    content: `
      <h3>Building Strong Foundations for Tomorrow's Leaders</h3>
      <p>At Future Kids School, we deliver exceptional primary education (Grades 1–5) following the CBSE curriculum, blending academic rigour with joyful learning.</p>
      <h4>Our Approach</h4>
      <ul>
        <li><strong>Concept-First Learning:</strong> We move beyond rote memorisation to deep understanding</li>
        <li><strong>Hands-On Activities:</strong> Science experiments, math manipulatives, and project work</li>
        <li><strong>Continuous Assessment:</strong> Regular feedback loops to celebrate progress</li>
        <li><strong>Small Class Sizes:</strong> Personalised attention for every child</li>
      </ul>
      <h4>Grade Structure</h4>
      <p><strong>Grades 1–2:</strong> Literacy, numeracy, social skills, and guided discovery.</p>
      <p><strong>Grades 3–5:</strong> Critical thinking, subject mastery, and independent projects.</p>
    `,
  },
  holisticDevelopment: {
    title: "Holistic Development",
    content: `
      <h3>Growing Minds, Hearts & Characters</h3>
      <p>Education at Future Kids School nurtures every dimension of your child — intellectual, creative, emotional, and social.</p>
      <h4>Creative Expression</h4>
      <ul>
        <li>Art, music, dance & drama workshops</li>
        <li>Annual talent showcases and exhibitions</li>
        <li>Story-writing and public-speaking clubs</li>
      </ul>
      <h4>Values & Character</h4>
      <ul>
        <li>Empathy circles and peer mentoring</li>
        <li>Community service projects</li>
        <li>Leadership roles and student council</li>
      </ul>
    `,
  },
  safeEnvironment: {
    title: "Safe & Nurturing Campus",
    content: `
      <h3>Where Every Child Feels at Home</h3>
      <p>Our campus is designed to be a joyful, secure space where children can explore, play, and learn with confidence.</p>
      <h4>Safety Measures</h4>
      <ul>
        <li>CCTV-monitored campus with trained security</li>
        <li>Regular fire and evacuation drills</li>
        <li>On-site first-aid and health checks</li>
        <li>Strict child protection policies</li>
      </ul>
      <h4>Modern Facilities</h4>
      <ul>
        <li>Smart classrooms with interactive boards</li>
        <li>Well-stocked library and reading corners</li>
        <li>Science and computer labs</li>
        <li>Spacious, cushioned play areas</li>
      </ul>
    `,
  },
  expertTeachers: {
    title: "Our Dedicated Teachers",
    content: `
      <h3>Passionate Educators Who Inspire</h3>
      <p>Our faculty are more than teachers — they are mentors, storytellers, and role models who ignite a lifelong love of learning.</p>
      <h4>What Sets Them Apart</h4>
      <ul>
        <li>Qualified with specialised primary-education training</li>
        <li>Ongoing professional development workshops</li>
        <li>Child-psychology and inclusive-education certified</li>
      </ul>
      <h4>Their Promise</h4>
      <ul>
        <li>Know every child by name, strength, and dream</li>
        <li>Celebrate effort as much as achievement</li>
        <li>Keep parents informed with regular updates</li>
      </ul>
    `,
  },
};

/* ── Card data ──────────────────────────────────────────────── */
const cards = [
  {
    key: "qualityEducation",
    title: "Quality Education",
    desc: "CBSE curriculum with modern, child-centered teaching that sparks curiosity and builds confidence.",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=85",
    icon: "📚",
    backClass: "flip-card-back-1",
  },
  {
    key: "holisticDevelopment",
    title: "Holistic Growth",
    desc: "Nurturing creativity, empathy, communication, and leadership alongside academics.",
    img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&q=85",
    icon: "🎨",
    backClass: "flip-card-back-2",
  },
  {
    key: "safeEnvironment",
    title: "Safe Campus",
    desc: "A secure, joyful environment with modern facilities where every child thrives.",
    img: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=600&q=85",
    icon: "🏫",
    backClass: "flip-card-back-3",
  },
  {
    key: "expertTeachers",
    title: "Expert Teachers",
    desc: "Passionate, qualified educators who know every child by name and nurture their potential.",
    /* ✅ Updated teacher image */
    img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&q=85",
    icon: "👩‍🏫",
    backClass: "flip-card-back-4",
  },
];

/* ── Component ──────────────────────────────────────────────── */
function About() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="about" className="section about-section">

      {/* Header */}
      <h1 className="school-title">FUTURE KIDS SCHOOL</h1>
      <h2 className="about-heading">About Our School</h2>

      {/* Description */}
      <p className="about-text">
        Founded in 2019, <strong>Future Kids School</strong> is a vibrant learning community
        dedicated to CBSE primary education (Grades 1–5). Our well-qualified teachers,
        thoughtfully designed curriculum, and caring environment ensure every child builds
        a strong foundation for lifelong success.
      </p>
      <p className="about-text">
        We believe the best learning happens when children feel safe, inspired, and valued.
        That's why we blend academic excellence with creativity, character-building, and play.
      </p>

      {/* ── Flip Cards ── */}
      <div className="flip-cards-container">
        {cards.map((card) => (
          <div className="flip-card-wrapper" key={card.key}>
            <div className="flip-card">
              <div className="flip-card-inner">

                {/* Front — kid image */}
                <div className="flip-card-front">
                  <img src={card.img} alt={card.title} />
                  <div className="flip-card-front-label">
                    <span className="flip-card-icon">{card.icon}</span>
                    <span className="flip-card-hint">Hover to explore ✨</span>
                  </div>
                </div>

                {/* Back — info */}
                <div className={`flip-card-back ${card.backClass}`}>
                  <div className="flip-card-back-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>

              </div>
            </div>

            <button
              className="know-more-btn"
              onClick={() => setActiveModal(card.key)}
            >
              Know More →
            </button>
          </div>
        ))}
      </div>

      {/* ── Modal ── */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>×</button>
            <h2>{modalContent[activeModal].title}</h2>
            <div dangerouslySetInnerHTML={{ __html: modalContent[activeModal].content }} />
          </div>
        </div>
      )}

    </section>
  );
}

export default About;