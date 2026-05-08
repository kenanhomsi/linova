"use client";
// DentalHoliday.jsx

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Helper component for scroll-triggered animations
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const DentalHoliday = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What languages are spoken at the clinic?",
      a: "English, Arabic, Turkish, Russian — our coordinators ensure clear communication at every step.",
    },
    {
      q: "Do I need a visa for Turkey?",
      a: "Many nationalities can obtain e‑Visa online. We provide guidance based on your passport.",
    },
    {
      q: "What’s included in the all‑inclusive package?",
      a: "Treatment, luxury hotel, VIP airport transfers, clinic‑hotel shuttles, coordinator, and post‑care. Flight is separate.",
    },
    {
      q: "Is Istanbul safe for medical tourists?",
      a: "Absolutely. Millions of tourists visit Istanbul safely each year. Our team assists with everything 24/7.",
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend 4–6 weeks ahead for ideal hotel availability and treatment planning.",
    },
  ];

  // const steps = [
  //     { number: "01", title: "Free online consultation", desc: "Send your photos & X‑rays. Our specialists build your personalized treatment plan, timeline, and all‑inclusive quote.", list: ["Digital smile preview", "Cost & duration estimate", "Personal coordinator assigned"], img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop" },
  //     { number: "02", title: "Flight & hotel coordination", desc: "We arrange VIP airport transfers, 5‑star hotel stays in Nişantaşı or Beşiktaş, and all transportation between your hotel and clinic.", list: ["Luxury accommodation", "Private driver meet & greet", "24/7 patient support"], img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop" },
  //     { number: "03", title: "Diagnosis & digital smile design", desc: "In‑clinic CBCT scan, intraoral photos, and DSD technology. You’ll see your future smile before any procedure starts.", list: ["3D treatment simulation", "Material selection (zirconia, E-max)", "Final blueprint approval"], img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop" },
  //     { number: "04", title: "Treatment sessions with precision", desc: "Your custom plan unfolds: preparation, temporaries, final restorations. Advanced technology and experienced specialists ensure comfort.", list: ["Pain‑managed protocols", "Same‑day mock‑ups", "Provisional smile try‑on"],    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop" },
  //     { number: "05", title: "Discover Istanbul between sessions", desc: "We schedule tourist-friendly activities around your appointments. Bosphorus cruise, Hagia Sophia, Grand Bazaar, Turkish bath.", list: ["Private Bosphorus yacht tours", "Historical peninsula walks", "Authentic Hammam experience"], img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500&h=300&fit=crop" },
  //     { number: "06", title: "Final bonding & aftercare", desc: "Placement of your permanent smile. We provide aftercare kit, video follow‑ups, and lifetime warranty on materials.", list: ["24/7 post‑treatment support", "Remote check‑ups", "Discounts on future maintenance"], img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&h=300&fit=crop" }
  // ];

  //     const steps = [
  //   {
  //     number: "01",
  //     title: "Virtual smile preview & treatment blueprint",
  //     desc: "Share your photos and concerns online. Our specialists create a 3D simulation of your future smile and a detailed timeline — all before you pack your bags.",
  //     list: [
  //       "Free video consultation with a dentist",
  //       "Digital smile design preview",
  //       "Transparent quote & treatment roadmap"
  //     ],
  //     img: "https://images.pexels.com/photos/3845752/pexels-photo-3845752.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
  //   },
  //   {
  //     number: "02",
  //     title: "Private transfer & stay in Istanbul's finest districts",
  //     desc: "Forget taxi stress. Our VIP driver welcomes you at the airport and whisks you to a handpicked hotel in Nişantaşı, Beşiktaş, or Sultanahmet — where comfort meets culture.",
  //     list: [
  //       "Meet & greet at the arrivals gate",
  //       "Luxury or boutique hotel options",
  //       "Daily shuttles to the clinic"
  //     ],
  //     img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
  //   },
  //   {
  //     number: "03",
  //     title: "Advanced diagnostics & smile architect session",
  //     desc: "In-clinic CBCT scan, intraoral photography, and a face‑to‑face session with your lead dentist. We finalise every detail of your new smile using CAD/CAM technology.",
  //     list: [
  //       "Painless digital impressions",
  //       "Provisional mock‑up try‑on",
  //       "Material selection (zirconia, lithium disilicate)"
  //     ],
  //     img: "https://images.pexels.com/photos/3845913/pexels-photo-3845913.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
  //   },
  //   {
  //     number: "04",
  //     title: "Between appointments: explore Istanbul like a local",
  //     desc: "Your treatment schedule leaves room for discovery. We suggest gentle activities: a Bosphorus ferry ride, the Spice Bazaar, or a traditional Turkish bath — all vetted for hygiene and comfort.",
  //     list: [
  //       "Bosphorus cruise with audio guide",
  //       "Hagia Sophia & Blue Mosque (short walk)",
  //       "Optional private hamam experience"
  //     ],
  //     img: "https://images.pexels.com/photos/2795408/pexels-photo-2795408.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
  //   },
  //   {
  //     number: "05",
  //     title: "Precision placement & final smile reveal",
  //     desc: "Your permanent restorations are bonded with meticulous care. We check bite, aesthetics, and comfort. You'll leave the clinic with your dream smile — and a mirror selfie.",
  //     list: [
  //       "Final adjustments under magnification",
  //       "High‑quality ceramic or zirconia",
  //       "Same‑day aftercare instructions"
  //     ],
  //     img: "https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
  //   },
  //   {
  //     number: "06",
  //     title: "Remote aftercare & lifetime smile support",
  //     desc: "Your journey doesn't end at the airport. We schedule video check‑ups, send a custom care kit, and offer a warranty on all work. You're never alone with your new smile.",
  //     list: [
  //       "24/7 WhatsApp support line",
  //       "Free follow‑up consultation within 1 year",
  //       "Discount on future visits or maintenance"
  //     ],
  //     img: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
  //   }
  // ];
  const steps = [
    {
      number: "01",
      title: "Virtual smile preview & treatment blueprint",
      desc: "Share your photos and concerns online. Our specialists create a 3D simulation of your future smile and a detailed timeline — all before you pack your bags.",
      list: [
        "Free video consultation with a dentist",
        "Digital smile design preview",
        "Transparent quote & treatment roadmap",
      ],
      img: "https://images.pexels.com/photos/3845752/pexels-photo-3845752.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      number: "02",
      title: "Private transfer & stay in Istanbul's finest districts",
      desc: "Forget taxi stress. Our VIP driver welcomes you at the airport and whisks you to a handpicked hotel in Nişantaşı, Beşiktaş, or Sultanahmet — where comfort meets culture.",
      list: [
        "Meet & greet at the arrivals gate",
        "Luxury or boutique hotel options",
        "Daily shuttles to the clinic",
      ],
      img: "https://images.pexels.com/photos/2101828/pexels-photo-2101828.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      number: "03",
      title: "Advanced diagnostics & smile architect session",
      desc: "In-clinic CBCT scan, intraoral photography, and a face‑to‑face session with your lead dentist. We finalise every detail of your new smile using CAD/CAM technology.",
      list: [
        "Painless digital impressions",
        "Provisional mock‑up try‑on",
        "Material selection (zirconia, lithium disilicate)",
      ],
      img: "https://images.pexels.com/photos/3845913/pexels-photo-3845913.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      number: "04",
      title: "Between appointments: explore Istanbul like a local",
      desc: "Your treatment schedule leaves room for discovery. We suggest gentle activities: a Bosphorus ferry ride, the Spice Bazaar, or a traditional Turkish bath — all vetted for hygiene and comfort.",
      list: [
        "Bosphorus cruise with audio guide",
        "Hagia Sophia & Blue Mosque (short walk)",
        "Optional private hamam experience",
      ],
      img: "https://images.pexels.com/photos/2795408/pexels-photo-2795408.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      number: "05",
      title: "Precision placement & final smile reveal",
      desc: "Your permanent restorations are bonded with meticulous care. We check bite, aesthetics, and comfort. You'll leave the clinic with your dream smile — and a mirror selfie.",
      list: [
        "Final adjustments under magnification",
        "High‑quality ceramic or zirconia",
        "Same‑day aftercare instructions",
      ],
      img: "https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      number: "06",
      title: "Remote aftercare & lifetime smile support",
      desc: "Your journey doesn't end at the airport. We schedule video check‑ups, send a custom care kit, and offer a warranty on all work. You're never alone with your new smile.",
      list: [
        "24/7 WhatsApp support line",
        "Free follow‑up consultation within 1 year",
        "Discount on future visits or maintenance",
      ],
      img: "https://images.pexels.com/photos/4065881/pexels-photo-4065881.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
  ];
  const packages = [
    {
      name: "3‑Day Quick Veneer",
      desc: "Porcelain veneers or composite bonding. Perfect for minor corrections.",
      price: "from €1,490",
      icon: "fas fa-calendar-week",
      badge: "popular",
    },
    {
      name: "5‑Day Hollywood Smile",
      desc: "Full smile makeover: 20+ zirconia crowns / veneers. Complete transformation.",
      price: "from €2,990",
      icon: "fas fa-star",
      badge: "best value",
    },
    {
      name: "7‑Day Treatment + Tourism",
      desc: "Comprehensive dental work + guided tours, Bosphorus dinner, and premium stay.",
      price: "from €3,790",
      icon: "fas fa-umbrella-beach",
      badge: "luxury",
    },
  ];

  return (
    <div className="font-sans bg-white text-[#1a2c3a]">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#fefcf7] to-white">
        <div className="container mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block bg-[#e9f4ef] px-4 py-1 rounded-full text-sm font-semibold text-[#1b8c5e] mb-5">
              ✧ 5‑star dental holiday | Istanbul
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] leading-tight text-[#0a2f28]">
              Your smile journey, wrapped in Bosphorus magic
            </h1>
            <p className="text-lg text-[#3c5a6b] my-6 max-w-xl">
              World-class dental care combined with 5‑star hotels, VIP
              transfers, and curated Istanbul experiences — all tailored around
              your treatment plan.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="bg-[#1b8c5e] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#0f6b48] transition shadow"
              >
                Start free consultation →
              </a>
              <a
                href="#"
                className="border border-[#1b8c5e] text-[#1b8c5e] px-6 py-3 rounded-full font-semibold hover:bg-[#1b8c5e08] transition"
              >
                View packages
              </a>
            </div>
            <div className="flex gap-8 mt-8">
              <div>
                <span className="text-2xl font-bold text-[#1b8c5e]">
                  1,200+
                </span>
                <p className="text-xs text-[#5f7f8c]">Happy patients</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#1b8c5e]">98%</span>
                <p className="text-xs text-[#5f7f8c]">Success rate</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#1b8c5e]">5⭐</span>
                <p className="text-xs text-[#5f7f8c]">Google reviews</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 bg-gradient-to-br from-[#eef7f2] to-[#e2f0ea] rounded-3xl p-6 text-center shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-tooth text-5xl text-[#1b8c5e] mb-4"></i>
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=350&fit=crop"
              alt="Dental care"
              className="rounded-2xl w-full shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Steps section */}
      {/* <div className="container mx-auto px-5 md:px-10 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#133b30]">Your dental holiday · step by step</h2>
                    <p className="text-[#558395] max-w-xl mx-auto mt-3">A seamless journey from consultation to your new smile — and unforgettable memories.</p>
                </div>
                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-3xl p-6 md:p-8 border border-[#eef3ef] shadow-sm hover:shadow-md transition items-center">
                                <div className="text-4xl font-bold font-['Playfair_Display'] text-transparent bg-clip-text bg-gradient-to-r from-[#0f6043] to-[#1b8c5e] min-w-[80px]">{step.number}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1c4035] mb-2">{step.title}</h3>
                                    <p className="text-[#2f5668] mb-3">{step.desc}</p>
                                    <ul className="list-disc pl-5 text-[#2f5668] space-y-1">
                                        {step.list.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="w-full md:w-64 rounded-2xl overflow-hidden shadow-md">
                                    <img src={step.img} alt={step.title} className="w-full h-48 object-cover hover:scale-105 transition duration-500" />
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div> */}
      {/* Steps section - Alternating Layout */}
      {/* <div className="container mx-auto px-5 md:px-10 py-16">
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="inline-block bg-[#e9f4ef] text-[#1b8c5e] text-sm font-semibold px-4 py-1 rounded-full mb-4">
        Your Journey
      </span>
      <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#133b30]">
        Dental holiday · step by step
      </h2>
      <p className="text-[#558395] max-w-xl mx-auto mt-3">
        A seamless journey from consultation to your new smile — and unforgettable memories.
      </p>
    </motion.div>
  </div>

  <div className="space-y-16">
    {steps.map((step, idx) => (
      <FadeInWhenVisible key={idx} delay={idx * 0.1}>
        <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 rounded-2xl"></div>
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#1b8c5e]">
                Step {step.number}
              </div>
            </div>
          </div>


          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-5xl font-bold font-['Playfair_Display'] text-transparent bg-clip-text bg-gradient-to-r from-[#0f6043] to-[#1b8c5e]">
                {step.number}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-[#1b8c5e]/30 to-transparent"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1c4035] leading-tight">
              {step.title}
            </h3>
            <p className="text-[#2f5668] text-lg leading-relaxed">
              {step.desc}
            </p>
            <ul className="space-y-2 pt-2">
              {step.list.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#1b8c5e] text-sm mt-1"></i>
                  <span className="text-[#2f5668]">{item}</span>
                </li>
              ))}
            </ul>
           
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-[#1b8c5e] font-semibold hover:gap-3 transition-all">
                Learn more <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    ))}
  </div>
</div > */}

      {/* Steps section - Premium Alternating Layout with Timeline Connector */}
      <div className="container mx-auto px-5 md:px-10 py-20 relative">
        {/* Background decorative element */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-[#1b8c5e]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0f6043]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-[#e9f4ef] text-[#1b8c5e] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
              <i className="fas fa-smile text-xs"></i> Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-['Playfair_Display'] text-[#133b30] leading-tight">
              Dental holiday · step by step
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1b8c5e] to-[#0f6043] mx-auto mt-4 rounded-full"></div>
            <p className="text-[#558395] max-w-xl mx-auto mt-5 text-lg">
              A seamless journey from consultation to your new smile — and
              unforgettable memories.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical timeline line (hidden on mobile, visible md+) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1b8c5e]/20 via-[#1b8c5e]/40 to-[#1b8c5e]/20 hidden md:block"></div>

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <div className="relative">
                  {/* Timeline dot on the line (hidden on mobile) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-white border-2 border-[#1b8c5e] rounded-full shadow-md hidden md:block z-10"></div>

                  <div
                    className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
                  >
                    {/* Image Column with floating effect */}
                    <motion.div
                      className="w-full md:w-1/2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 rounded-2xl"></div>
                        <img
                          src={step.img}
                          alt={step.title}
                          className="w-full h-72 md:h-96 object-cover group-hover:scale-110 transition duration-700 ease-out"
                        />
                        <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                          <span className="w-2 h-2 bg-[#1b8c5e] rounded-full animate-pulse"></span>
                          <span className="text-sm font-bold text-[#1b8c5e]">
                            Step {step.number}
                          </span>
                        </div>
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b8c5e]/10 rounded-bl-3xl z-20"></div>
                      </div>
                    </motion.div>

                    {/* Content Column with card style */}
                    <motion.div
                      className="w-full md:w-1/2 space-y-5 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg border border-[#eef3ef] hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-6xl font-bold font-['Playfair_Display'] text-transparent bg-clip-text bg-gradient-to-r from-[#0f6043] to-[#1b8c5e] leading-none">
                          {step.number}
                        </div>
                        <div className="h-12 w-px bg-gradient-to-b from-[#1b8c5e]/40 to-transparent"></div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-[#e9f4ef] text-[#1b8c5e] text-xs px-3 py-1 rounded-full">
                            Medical
                          </span>
                          <span className="bg-[#e9f4ef] text-[#1b8c5e] text-xs px-3 py-1 rounded-full">
                            Luxury
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-[#1c4035] leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-[#2f5668] text-base md:text-lg leading-relaxed">
                        {step.desc}
                      </p>

                      <ul className="space-y-3 pt-2">
                        {step.list.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#1b8c5e]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#1b8c5e]/20 transition">
                              <i className="fas fa-check text-[#1b8c5e] text-xs"></i>
                            </div>
                            <span className="text-[#2f5668] group-hover:text-[#1c4035] transition">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-[#1b8c5e] font-semibold group hover:gap-3 transition-all duration-300"
                        >
                          <span>Learn more about this step</span>
                          <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white shadow-md px-6 py-3 rounded-full border border-[#eef3ef]"
          >
            <i className="fas fa-calendar-check text-[#1b8c5e]"></i>
            <span className="text-sm font-medium text-[#2f5668]">
              Start your journey today —
            </span>
            <a
              href="#"
              className="text-[#1b8c5e] font-semibold hover:underline"
            >
              free consultation →
            </a>
          </motion.div>
        </div>
      </div>
      {/* Packages */}
      <section className="bg-[#fafcf9] py-16">
        <div className="container mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#133b30]">
              All‑inclusive dental holiday packages
            </h2>
            <p className="text-[#558395] max-w-xl mx-auto mt-2">
              Transparent pricing, luxury accommodation, VIP transfers —
              everything included.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 text-center border border-[#eef3ef] shadow-sm"
              >
                <i className={`${pkg.icon} text-4xl text-[#1b8c5e] mb-4`}></i>
                <div className="inline-block bg-[#e5f2ec] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {pkg.badge}
                </div>
                <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                <p className="text-sm text-[#5f7f8c] mb-4">{pkg.desc}</p>
                <p className="text-2xl font-bold text-[#1b8c5e] mb-5">
                  {pkg.price}
                </p>
                <a
                  href="#"
                  className="border border-[#1b8c5e] text-[#1b8c5e] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#1b8c5e08] transition inline-block"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            *Packages include: dental treatment, 5‑star hotel, airport
            transfers, coordinator support. Flight extra.
          </p>
        </div>
      </section>

      {/* Why choose & Istanbul */}
      <div className="container mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <FadeInWhenVisible>
            <div className="bg-white p-8 rounded-3xl border border-[#eef3ef]">
              <i className="fas fa-chart-line text-3xl text-[#1b8c5e]"></i>
              <h3 className="text-2xl font-bold mt-4 mb-2">
                Trusted expertise
              </h3>
              <ul className="space-y-3 text-[#2f5668]">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-[#1b8c5e]"></i> ISO &
                  CE certified clinic
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-language text-[#1b8c5e]"></i> English,
                  Arabic, Turkish, Russian support
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-clock text-[#1b8c5e]"></i> No waiting
                  lists — immediate planning
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-hand-holding-heart text-[#1b8c5e]"></i>{" "}
                  98% patient satisfaction rate
                </li>
              </ul>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-[#eef3ef]">
              <i className="fas fa-map-marked-alt text-3xl text-[#1b8c5e]"></i>
              <h3 className="text-2xl font-bold mt-4 mb-2">
                Istanbul like a local
              </h3>
              <ul className="space-y-3 text-[#2f5668]">
                <li className="flex items-center gap-3">
                  <i className="fas fa-ship text-[#1b8c5e]"></i> Bosphorus
                  cruise (2‑3 hrs)
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-landmark text-[#1b8c5e]"></i> Hagia
                  Sophia & Blue Mosque
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-store text-[#1b8c5e]"></i> Grand Bazaar /
                  Spice Bazaar
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-hot-tub text-[#1b8c5e]"></i> Traditional
                  Turkish hamam
                </li>
              </ul>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      {/* CTA with floating animation */}
      {/* <div className="container mx-auto px-5 md:px-10 pb-16">
                <motion.div className="bg-gradient-to-r from-[#ebf6f0] to-white rounded-3xl p-10 text-center" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display']">Ready to combine your smile with an unforgettable Istanbul holiday?</h2>
                    <p className="text-[#558395] max-w-md mx-auto my-5">Start with a free online consultation — we’ll create your custom dental holiday package.</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="#" className="bg-[#0f6b48] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#0a523a] transition shadow">Book my free consultation →</a>
                        <a href="#" className="border border-[#1b8c5e] text-[#1b8c5e] px-6 py-3 rounded-full font-semibold hover:bg-[#1b8c5e08] transition">View packages</a>
                    </div>
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} className="mt-8 inline-block">
                        <i className="fas fa-arrow-down text-[#1b8c5e] text-2xl"></i>
                    </motion.div>
                </motion.div>
            </div> */}
    </div>
  );
};

export default DentalHoliday;
