"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";
export default function Home() { 
  
  const tours = [
  {
    title: "Gili Snorkeling",
    price: "$49",
    image: "/tours/snorkling.jpg",
    rating: "4.9",
    description:
      "Explore underwater paradise and swim with turtles around the Gili Islands.",
    category: "1 Day Trip",
    color: "bg-cyan-500/20 text-cyan-300",
  },

  {
    title: "Mount Rinjani Trek",
    price: "$120",
    image: "/tours/hiking.jpg",
    rating: "5.0",
    description:
      "Experience breathtaking sunrise views from Lombok’s iconic volcano.",
    category: "2D1N Hiking",
    color: "bg-orange-500/20 text-orange-300",
  },

  {
    title: "Hidden Waterfalls",
    price: "$35",
    image: "/tours/waterfall.jpg",
    rating: "4.8",
    description:
      "Discover beautiful hidden waterfalls deep inside Lombok’s jungle.",
    category: "Nature Tour",
    color: "bg-emerald-500/20 text-emerald-300",

    
  },
  {
  title: "Sembalun Adventure",
  price: "$100",
  image: "/tours/sembalun.jpg",
  rating: "4.9",
  description:
    "Explore Sembalun village, beautiful hills, hiking spots, and enjoy local food experiences.",
  category: "Eat & Hiking",
  color: "bg-sky-500/20 text-sky-300",
},

{
  title: "Merese Sunset Trip",
  price: "$35",
  image: "/tours/meresesunset.jpg",
  rating: "4.8",
  description:
    "Enjoy a magical sunset experience at Merese Hill with a local guide.",
  category: "Sunset Tour",
  color: "bg-orange-500/20 text-orange-300",
},

{
  title: "Sade Village Tour",
  price: "$100",
  image: "/tours/sade.jpg",
  rating: "5.0",
  description:
    "Explore the oldest Sasak traditional village in Lombok with local food included.",
  category: "Cultural Tour",
  color: "bg-yellow-500/20 text-yellow-300",
},

{
  title: "Kuta Beach Escape",
  price: "$50",
  image: "/tours/kutaa.jpg",
  rating: "4.9",
  description:
    "Relax and enjoy the beauty of Kuta Beach with food and beach activities included.",
  category: "Beach Tour",
  color: "bg-cyan-500/20 text-cyan-300",
},

{
  title: "Selong Belanak Experience",
  price: "$45",
  image: "/tours/selongbelanak.jpg",
  rating: "4.9",
  description:
    "Enjoy Selong Belanak Beach, sunset views, and complete beach facilities.",
  category: "Beach Sunset",
  color: "bg-pink-500/20 text-pink-300",
},

{
  title: "Lombok Sunset Tour",
  price: "$35",
  image: "/tours/sunset.jpg",
  rating: "4.7",
  description:
    "Experience a relaxing sunset tour at Lombok’s beautiful beaches with local guides.",
  category: "Sunset Trip",
  color: "bg-red-500/20 text-red-300",
},
];
const testimonials = [
  {
    name: "Sarah Johnson",
    country: "Australia",
    review:
      "One of the best travel experiences I’ve ever had. The guides were super friendly and professional.",
    avatar: "S",
    color: "bg-cyan-500",
  },

  {
    name: "Michael Lee",
    country: "Singapore",
    review:
      "Lombok was absolutely stunning. Everything was organized perfectly from start to finish.",
    avatar: "M",
    color: "bg-orange-500",
  },

  {
    name: "Emma Wilson",
    country: "United Kingdom",
    review:
      "The snorkeling trip around Gili Islands was unforgettable. Highly recommended!",
    avatar: "E",
    color: "bg-pink-500",
  },
];
const destinations = [
  {
    title: "Kuta Lombok",
    image: "/destinations/kuta.jpg",
    description: "Stunning beaches and surfing paradise.",
  },

  {
    title: "Gili Islands",
    image: "/destinations/gili.jpg",
    description: "Crystal clear water and tropical vibes.",
  },

  {
    title: "Mount Rinjani",
    image: "/destinations/rinjani.jpg",
    description: "Epic mountain adventure experience.",
  },

  {
    title: "Pink Beach",
    image: "/destinations/pinkbeach.jpg",
    description: "Unique pink sand and breathtaking ocean.",
  },
];
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
const [bookingOpen, setBookingOpen] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  whatsapp: "",
  date: "",
  people: "",
});
  const [activeSection, setActiveSection] = useState("home");
const [scrolled, setScrolled] = useState(false);
const menuRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    const sections = ["home", "destinations", "tours", "guides"];

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
       const scrollPos = window.scrollY + 150;

if (
  element.offsetTop <= scrollPos &&
  element.offsetTop + element.offsetHeight > scrollPos
) {
  setActiveSection(section);
}
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav
  className={`fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-md transition-all duration-300 ${
    scrolled
      ? "bg-black/90 shadow-lg"
      : "bg-black/20"
  }`}
>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">
            LombokGuide
          </h1>

          {/* Menu */}
          <div className="hidden gap-8 md:flex">
           <a
  href="#home"
  className={`transition ${
    activeSection === "home"
      ? "text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  Home
</a>

          <a
  href="#tours"
  className={`transition ${
    activeSection === "tours"
      ? "text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  Tours
</a>

          <a
  href="#destinations"
  className={`transition ${
    activeSection === "destinations"
      ? "text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  Destinations
</a>

          <a
  href="#guides"
  className={`transition ${
    activeSection === "guides"
      ? "text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  Guides
</a>
          </div>

          {/* Button */}
          <div className="flex items-center gap-4">
  

  {/* Desktop Button */}
  <button
  onClick={() =>
    window.open(
      "https://wa.me/6281234567890?text=Hi%20saya%20mau%20book%20tour%20Lombok",
      "_blank"
    )
  }
  className="hidden rounded-full bg-white px-5 py-2 text-black transition hover:bg-gray-200 md:block"
>
  Book Now
</button>

  {/* Mobile Menu Button */}
  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="relative flex h-6 w-6 flex-col justify-center md:hidden"
>
  {/* line 1 */}
  <span
    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
      menuOpen ? "rotate-45" : "-translate-y-2"
    }`}
  />

  {/* line 2 */}
  <span
    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
      menuOpen ? "opacity-0" : "opacity-100"
    }`}
  />

  {/* line 3 */}
  <span
    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
      menuOpen ? "-rotate-45" : "translate-y-2"
    }`}
  />
</button>

</div> 
        </div>
         {/* Mobile Menu */}
<div
  ref={menuRef}
  className={`fixed top-0 right-0 z-50 h-screen w-64 border-l border-white/10 bg-black/20 backdrop-blur-xl p-6 transition-transform duration-300 md:hidden ${
    menuOpen
      ? "translate-x-0"
      : "translate-x-full"
  }`}
>
  <div className="mt-24 flex flex-col gap-8 text-right text-xl text-white">

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#tours" onClick={() => setMenuOpen(false)}>
      Tours
    </a>

    <a href="#destinations" onClick={() => setMenuOpen(false)}>
      Destinations
    </a>

    <a href="#guides" onClick={() => setMenuOpen(false)}>
      Guides
    </a>

  </div>
</div>
  
</nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">

          <div className="max-w-4xl text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
              Welcome to Lombok Paradise
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Discover The Beauty <br /> Of Lombok
            </h1>

            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Explore beaches, mountains, waterfalls, and unforgettable local experiences with trusted guides.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <button
  onClick={() =>
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" })
  }
  className="rounded-full bg-white px-8 py-4 text-black transition hover:scale-105 hover:bg-gray-200"
>
  Explore Tours
</button>

             <button
  onClick={() =>
    document
      .getElementById("testimonials")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
>
  Watch Experience
</button>

            </div>

          </div>

        </div>

      </section>
      {/* Popular Destinations */}
<section id="destinations" className="bg-black px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
        Top Destinations
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Explore Beautiful Places
      </h2>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  {destinations.map((destination, index) => (
    <div
      key={index}
      className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md transition hover:-translate-y-2"
    >

      <div className="overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold">
          {destination.title}
        </h3>

        <p className="mt-3 text-gray-400">
          {destination.description}
        </p>

      </div>

    </div>
  ))}



    </div>

  </div>

</section>
{/* Popular Tours */}
<section id="tours" className="bg-zinc-950 px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
          Best Experiences
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Popular Tours
        </h2>
      </div>

      <button
  onClick={() => {
    const section = document.getElementById("tours");

    if (section) {
      window.scrollTo({
        top: section.offsetTop + 250,
        behavior: "smooth",
      });
    }
  }}
  className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
>
  View All Tours
</button>
    </div>

    {/* Tour Cards */}
    
<div className="grid gap-8 lg:grid-cols-3">

  {tours.map((tour, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md"
    >

      <div className="overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-80 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">

        <div className="mb-4 flex items-center justify-between">

          <span className={`rounded-full px-4 py-1 text-sm ${tour.color}`}>
            {tour.category}
          </span>

          <span className="text-yellow-400">
            ★ {tour.rating}
          </span>

        </div>

        <h3 className="text-3xl font-bold">
          {tour.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {tour.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <h4 className="text-2xl font-bold">
              {tour.price}
            </h4>
          </div>

        <button
  onClick={() => {
    setSelectedTour(tour.title);
    setBookingOpen(true);
  }}
  className="rounded-full bg-white px-5 py-3 text-black transition hover:scale-105"
>
  Book Now
</button>

        </div>

      </div>

    </div>
  ))}

</div>

</div>

</section>
{/* Why Choose Us */}
<section id="guides" className="bg-black px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="mb-16 text-center">

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
        Why Choose Us
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Travel With Confidence
      </h2>

    </div>

    {/* Features */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {/* Feature 1 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-400/40">

        <div className="mb-6 text-5xl">
          
        </div>

        <h3 className="text-2xl font-semibold">
          Local Experts
        </h3>

        <p className="mt-4 text-gray-400">
          Explore Lombok with experienced local guides who know hidden gems.
        </p>

      </div>

      {/* Feature 2 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-orange-400/40">

        <div className="mb-6 text-5xl">
          
        </div>

        <h3 className="text-2xl font-semibold">
          Best Price
        </h3>

        <p className="mt-4 text-gray-400">
          Affordable travel packages with premium experiences included.
        </p>

      </div>

      {/* Feature 3 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-emerald-400/40">

        <div className="mb-6 text-5xl">
          
        </div>

        <h3 className="text-2xl font-semibold">
          Safe Journey
        </h3>

        <p className="mt-4 text-gray-400">
          Your safety and comfort are always our top priority during trips.
        </p>

      </div>

      {/* Feature 4 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-pink-400/40">

        <div className="mb-6 text-5xl">
          
        </div>

        <h3 className="text-2xl font-semibold">
          24/7 Support
        </h3>

        <p className="mt-4 text-gray-400">
          Friendly customer support ready to help anytime you need assistance.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Testimonials */}
<section
  id="testimonials"
  className="bg-zinc-950 px-6 py-24 text-white"
>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="mb-16 text-center">

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
        Testimonials
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        What Travelers Say
      </h2>

    </div>

    {/* Testimonial Cards */}
<div className="grid gap-8 lg:grid-cols-3">

  {testimonials.map((item, index) => (
    <div
      key={index}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2"
    >

      <div className="mb-6 flex items-center gap-4">

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${item.color}`}
        >
          {item.avatar}
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-400">
            {item.country}
          </p>
        </div>

      </div>

      <div className="mb-4 text-yellow-400">
        ★★★★★
      </div>

      <p className="text-gray-300">
        "{item.review}"
      </p>

    </div>
  ))}


    </div>

  </div>

</section>
{/* Statistics */}
<section className="bg-black px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">

      {/* Stat 1 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

        <h2 className="text-5xl font-bold text-cyan-400">
          10K+
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Happy Travelers
        </p>

      </div>

      {/* Stat 2 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

        <h2 className="text-5xl font-bold text-orange-400">
          50+
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Destinations
        </p>

      </div>

      {/* Stat 3 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

        <h2 className="text-5xl font-bold text-emerald-400">
          4.9
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Average Rating
        </p>

      </div>

      {/* Stat 4 */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

        <h2 className="text-5xl font-bold text-pink-400">
          8+
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Years Experience
        </p>

      </div>

    </div>

  </div>

</section>
{/* Footer */}
<footer className="border-t border-white/10 bg-zinc-950 px-6 py-16 text-white">

  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

    {/* Brand */}
    <div>

      <h2 className="text-3xl font-bold">
        LombokGuide
      </h2>

      <p className="mt-6 text-gray-400">
        Premium travel experiences in Lombok with trusted local guides and unforgettable adventures.
      </p>

    </div>

    {/* Quick Links */}
    <div>

      <h3 className="mb-6 text-xl font-semibold">
        Quick Links
      </h3>

      <ul className="space-y-4 text-gray-400">

       <li>
  <a href="#home" className="transition hover:text-white">
    Home
  </a>
</li>

<li>
  <a href="#tours" className="transition hover:text-white">
    Tours
  </a>
</li>

<li>
  <a href="#destinations" className="transition hover:text-white">
    Destinations
  </a>
</li>

<li>
  <a href="#guides" className="transition hover:text-white">
    Guides
  </a>
</li>
      </ul>

    </div>

    {/* Contact */}
    <div>

      <h3 className="mb-6 text-xl font-semibold">
        Contact
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>
          📍 Lombok, Indonesia
        </li>

        <li>
          📞 +62 812 3456 7890
        </li>

        <li>
          ✉️ hello@lombokguide.com
        </li>

      </ul>

    </div>

    {/* Social Media */}
    <div>

      <h3 className="mb-6 text-xl font-semibold">
        Follow Us
      </h3>

      <div className="flex gap-4">

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-black"
        >
          Instagram
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-black"
        >
          TikTok
        </a>

      </div>

    </div>

  </div>

  {/* Bottom */}
  <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">

    © 2026 LombokGuide. All rights reserved.

  </div>

</footer>
{/* Booking Modal */}
{bookingOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6">

    <div className="w-full max-w-lg rounded-3xl bg-zinc-950 p-8 text-white">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-400">
            Booking Tour
          </p>

          <h2 className="text-3xl font-bold">
            {selectedTour}
          </h2>
        </div>

        <button
          onClick={() => setBookingOpen(false)}
          className="text-2xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

      </div>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
        />

        <input
          type="text"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={(e) =>
            setFormData({ ...formData, whatsapp: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
        />

        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
        />

        <input
          type="number"
          placeholder="Total People"
          value={formData.people}
          onChange={(e) =>
            setFormData({ ...formData, people: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
        />

        <button
          onClick={async () => {
            if (
    !formData.name ||
    !formData.whatsapp ||
    !formData.date ||
    !formData.people
  ) {
    alert("Please complete all booking information.");
    return;
  }
            const message = encodeURIComponent(
  `Hi, I want to book a tour:

Tour: ${selectedTour}
Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Date: ${formData.date}
Total People: ${formData.people}`
);
await supabase.from("bookings").insert([
  {
    name: formData.name,
    whatsapp: formData.whatsapp,
    tour: selectedTour,
    date: formData.date,
    people: Number(formData.people),
  },
]);

          window.open(
  `https://wa.me/6287860139009?text=${message}`,
  "_blank"
);
            setBookingOpen(false);

setFormData({
  name: "",
  whatsapp: "",
  date: "",
  people: "",
});
          }}
          className="w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02]"
        >
          Continue to WhatsApp
        </button>

      </div>

    </div>

  </div>
)}
    </main>
  );
}