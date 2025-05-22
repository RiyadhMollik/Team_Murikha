"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
import FullscreenCard from "./FullscreenCard";
import Link from "next/link";
export default function Home() {

  return (
    <div className="min-h-screen bg-[#131c27] flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-[#192233] shadow-sm sticky top-0 z-50 border-b border-[#232f41]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex w-full items-center">
            <Image
              src="/20250522_211445.png"
              alt="Logo"
              width={130}
              height={80}
              className="mr-2"
            />
          </div>
          <div className="hidden md:flex relative w-full max-w-xl mx-4">
            <input
              type="search"
              className="w-full pl-10 pr-4 py-2 border-none bg-[#232f41] text-[#e5e7eb] rounded-full focus:outline-none focus:ring-2 focus:ring-[#7f9cf5] focus:bg-[#192233] text-sm placeholder-[#6b7280]"
              placeholder="Search for courses, topics, or skills..."
            />
          </div>
          <div className="flex items-center space-x-4">
            <UserButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#192233] py-12 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/online-education.png"
            alt="Background"
            fill
            className="w-full h-full object-cover object-center opacity-70 blur-[2px] scale-105"
            unoptimized
          /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#192233]/60 via-[#131c27]/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#e5e7eb] leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7f9cf5] to-[#a5b4fc]">
                Create Your Perfect
              </span>
              <br />
              Course with AI
            </h1>
            <p className="text-[#a1a1aa] text-lg">
              Tell us your learning goals and requirements. Our AI will generate
              a personalized course tailored just for you.
            </p>
            <Link href="/workspace">
              <button
                type="submit"
                className="w-full bg-[#7f9cf5] text-[#192233] px-6 py-3 rounded font-medium hover:bg-[#a5b4fc] transition flex items-center justify-center"
              >
                <span className="mr-2">✨</span> Generate My Course
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-[#232f41] rounded-lg shadow-sm p-6 border border-[#222c38]">
              <h3 className="text-lg font-semibold text-[#e5e7eb] mb-4">
                How It Works
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="w-8 h-8 flex items-center justify-center bg-[#7f9cf5]/20 text-[#7f9cf5] rounded-full mr-4">
                    1
                  </span>
                  <div>
                    <b>Share Your Goals</b>
                    <br />
                    <span className="text-sm text-[#a1a1aa]">
                      Tell us what you want to learn and your current skill
                      level
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 flex items-center justify-center bg-green-900/40 text-green-400 rounded-full mr-4">
                    2
                  </span>
                  <div>
                    <b>AI Generation</b>
                    <br />
                    <span className="text-sm text-[#a1a1aa]">
                      Our AI creates a personalized curriculum and learning path
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-900/40 text-yellow-400 rounded-full mr-4">
                    3
                  </span>
                  <div>
                    <b>Customize & Refine</b>
                    <br />
                    <span className="text-sm text-[#a1a1aa]">
                      Fine-tune the generated course to match your preferences
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4  mt-20">
          <div className="bg-[#232f41] p-4 rounded-lg shadow-sm text-center border border-[#222c38]">
            <p className="text-sm text-[#a1a1aa] mb-1">Courses Generated</p>
            <div className="text-xl font-bold text-[#e5e7eb]">24</div>
          </div>
          <div className="bg-[#232f41] p-4 rounded-lg shadow-sm text-center border border-[#222c38]">
            <p className="text-sm text-[#a1a1aa] mb-1">Topics Available</p>
            <div className="text-xl font-bold text-[#e5e7eb]">150+</div>
          </div>
          <div className="bg-[#232f41] p-4 rounded-lg shadow-sm text-center border border-[#222c38]">
            <p className="text-sm text-[#a1a1aa] mb-1">Success Rate</p>
            <div className="text-xl font-bold text-[#e5e7eb]">98%</div>
          </div>
        </div>
      </section>

      {/* Space Simulations Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-[#e5e7eb] text-center">
          Space Simulations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <FullscreenCard title="Solar System 2017">
            <SolarSystemEmbed />
          </FullscreenCard>
          <FullscreenCard title="Milky Way">
            <MilkyWayEmbed />
          </FullscreenCard>
          <FullscreenCard title="Earth">
            <EarthEmbed />
          </FullscreenCard>
          <FullscreenCard title="Mars Exploration">
            <MarsEmbed />
          </FullscreenCard>
        </div>
      </section>

      {/* Biology Simulations Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-[#e5e7eb] text-center">
          Biology Simulations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FullscreenCard title="Eukaryotic Plant Cell">
            <EukaryoticPlantCellEmbed />
          </FullscreenCard>
          <FullscreenCard title="Bacterial Cell Structure">
            <BacterialCellEmbed />
          </FullscreenCard>
          <FullscreenCard title="Exploding Skull">
            <ExplodingSkullEmbed />
          </FullscreenCard>
          <FullscreenCard title="Full Human Body Anatomy">
            <HumanBodyEmbed />
          </FullscreenCard>
          <FullscreenCard title=" Colourcoded Head Muscle Chart">
            <HeadMuscleEmbed />
          </FullscreenCard>
          <FullscreenCard title=" Lung Animation">
            <LungAnimationEmbed />
          </FullscreenCard>
        </div>
      </section>

      {/* Science and Technology Simulations Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-[#e5e7eb] text-center">
          Science and Technology Simulations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FullscreenCard title=" Permanent Magnet">
            <PermanentMagnetEmbed />
          </FullscreenCard>
          <FullscreenCard title="Animated Atom">
            <AnimatedAtomEmbed />
          </FullscreenCard>
          <FullscreenCard title="SHARC 660">
            <Sharc660Embed />
          </FullscreenCard>
          <FullscreenCard title=" Oscilloscope">
            <OscilloscopeEmbed />
          </FullscreenCard>
          <FullscreenCard title="RF Signal Generator">
            <RfSignalGeneratorEmbed />
          </FullscreenCard>
          <FullscreenCard title="Arduino UNO">
            <ArduinoUnoEmbed />
          </FullscreenCard>
        </div>
      </section>

      <section className="bg-[#192233] text-[#e5e7eb] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#7f9cf5] mb-6">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded border border-[#232f41] bg-[#232f41] placeholder-[#6b7280] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded border border-[#232f41] bg-[#232f41] placeholder-[#6b7280] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 rounded border border-[#232f41] bg-[#232f41] placeholder-[#6b7280] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message"
                className="w-full px-4 py-2 rounded border border-[#232f41] bg-[#232f41] placeholder-[#6b7280] focus:outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#7f9cf5] w-full text-[#192233] px-6 py-2 rounded hover:bg-[#a5b4fc] transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#192233] border-t border-[#232f41] mt-8 text-[#a1a1aa]">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <Image
              src="/20250522_211445.png"
              alt="Logo"
              width={130}
              height={80}
              className="mr-2"
            />
            <p className="text-[#6b7280] text-sm mt-3">
              © 2025 Biddhanir. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 md:items-center md:justify-center">
            <a href="#" className="hover:text-[#7f9cf5] transition-colors duration-200">
              About
            </a>
            <a href="#" className="hover:text-[#7f9cf5] transition-colors duration-200">
              Contact
            </a>
            <a href="#" className="hover:text-[#7f9cf5] transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="hover:text-[#7f9cf5] transition-colors duration-200">
              Privacy
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center md:justify-end gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto rounded px-3 py-2 border border-[#232f41] bg-[#232f41] text-[#e5e7eb] placeholder-[#6b7280] focus:outline-none"
            />
            <button className="bg-[#7f9cf5] text-[#192233] rounded px-4 py-2 hover:bg-[#a5b4fc] transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

function SolarSystemEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Solar System 2017"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/06db9b431616402499cb2c379d55d148/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function MilkyWayEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">

      <iframe
        title="Milky Way"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/eb0087b800414744b4cee3440888088c/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function EarthEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Earth"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/5ce4b1465c83432d9bb7e3c30232c02b/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function MarsEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Mars Exploration"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/d6f820e21312490d9de0c8575eb96484/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function EukaryoticPlantCellEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Eukaryotic Plant Cell"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/f258c65762e5435c9d58c1aa136b557a/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function BacterialCellEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Bacterial Cell Structure"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/42439edc90cd4d87b8ae322a4dcee8de/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function ExplodingSkullEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Exploding Skull"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/252887e2e755427c90d9e3d0c6d3025f/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function HumanBodyEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Full Human Body Anatomy"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/9b0b079953b840bc9a13f524b60041e4/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function HeadMuscleEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Colourcoded Head Muscle Chart"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/8c1bcc3685cd40b3bd6b42e0445522a5/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function LungAnimationEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Lung Animation"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/acbb5f0e16a14179ae4f63c5b6b83ad7/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function PermanentMagnetEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Püsimagneti lähendamisel juhtmekeerus tekki..."
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/a990e2d849ae4013802d11fab02b8f3d/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function AnimatedAtomEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Animated Atom blender cycles"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/e1fe282c45664713bf5f7e000b6e90d4/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function Sharc660Embed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="SHARC 660 (Desktop sized)"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/9aabbde3ad324604bd7e4842580d52b2/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function OscilloscopeEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Oscilloscope"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/4d2e1b3c8e784566a0b0b97089c53c1e/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function RfSignalGeneratorEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="RF Signal Generator"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/87400f4b01674ace8abc57858a17a370/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}

function ArduinoUnoEmbed() {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Arduino UNO"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/943bae9bb86842408fc718b6e4c92ddb/embed?ui_watermark=0&ui_watermark_link=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_help=0&ui_vr=0"
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}