"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131c27] flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-[#192233] shadow-sm sticky top-0 z-50 border-b border-[#232f41]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-['Pacifico'] text-[#7f9cf5]">logo</span>
          </div>
          <div className="hidden md:flex relative w-full max-w-xl mx-4">
            <input type="search" className="w-full pl-10 pr-4 py-2 border-none bg-[#232f41] text-[#e5e7eb] rounded-full focus:outline-none focus:ring-2 focus:ring-[#7f9cf5] focus:bg-[#192233] text-sm placeholder-[#6b7280]" placeholder="Search for courses, topics, or skills..." />
          </div>
          <div className="flex items-center space-x-4">
            <UserButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#192233] py-12 overflow-hidden">
        {/* Enhanced background image with lighter effect and gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/online-education.png" alt="Background" fill className="w-full h-full object-cover object-center opacity-70 blur-[2px] scale-105" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-br from-[#192233]/60 via-[#131c27]/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Form & Stats */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#e5e7eb] leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7f9cf5] to-[#a5b4fc]">Create Your Perfect</span><br />Course with AI
            </h1>
            <p className="text-[#a1a1aa] text-lg">Tell us your learning goals and requirements. Our AI will generate a personalized course tailored just for you.</p>
            <form className="bg-[#232f41] rounded-lg shadow-sm p-6 space-y-4 border border-[#222c38]">
              <div>
                <label className="block text-sm font-medium text-[#d1d5db] mb-2">What do you want to learn?</label>
                <input type="text" className="w-full px-4 py-2 border-none bg-[#192233] text-[#e5e7eb] rounded focus:outline-none focus:ring-2 focus:ring-[#7f9cf5] text-sm placeholder-[#6b7280]" placeholder="e.g. Web Development, Data Science, Digital Marketing..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#d1d5db] mb-2">Your current skill level</label>
                <div className="flex space-x-4">
                  <label className="flex items-center"><input type="radio" name="skill-level" defaultChecked className="mr-2" /><span className="text-[#d1d5db]">Beginner</span></label>
                  <label className="flex items-center"><input type="radio" name="skill-level" className="mr-2" /><span className="text-[#d1d5db]">Intermediate</span></label>
                  <label className="flex items-center"><input type="radio" name="skill-level" className="mr-2" /><span className="text-[#d1d5db]">Advanced</span></label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#d1d5db] mb-2">Specific requirements or focus areas</label>
                <textarea className="w-full px-4 py-2 border-none bg-[#192233] text-[#e5e7eb] rounded focus:outline-none focus:ring-2 focus:ring-[#7f9cf5] text-sm h-24 placeholder-[#6b7280]" placeholder="Describe any specific topics, skills, or areas you want to focus on..." />
              </div>
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-[#d1d5db]">Include practical exercises and projects</span>
              </div>
              <button type="submit" className="w-full bg-[#7f9cf5] text-[#192233] px-6 py-3 rounded font-medium hover:bg-[#a5b4fc] transition flex items-center justify-center">
                <span className="mr-2">✨</span> Generate My Course
              </button>
            </form>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
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
          </div>
          {/* Right: How It Works */}
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-[#232f41] rounded-lg shadow-sm p-6 border border-[#222c38]">
              <h3 className="text-lg font-semibold text-[#e5e7eb] mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex items-start"><span className="w-8 h-8 flex items-center justify-center bg-[#7f9cf5]/20 text-[#7f9cf5] rounded-full mr-4">1</span><div><b>Share Your Goals</b><br /><span className="text-sm text-[#a1a1aa]">Tell us what you want to learn and your current skill level</span></div></li>
                <li className="flex items-start"><span className="w-8 h-8 flex items-center justify-center bg-green-900/40 text-green-400 rounded-full mr-4">2</span><div><b>AI Generation</b><br /><span className="text-sm text-[#a1a1aa]">Our AI creates a personalized curriculum and learning path</span></div></li>
                <li className="flex items-start"><span className="w-8 h-8 flex items-center justify-center bg-yellow-900/40 text-yellow-400 rounded-full mr-4">3</span><div><b>Customize & Refine</b><br /><span className="text-sm text-[#a1a1aa]">Fine-tune the generated course to match your preferences</span></div></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 space-y-6">
          <div className="bg-[#232f41] rounded-lg shadow-sm p-4 border border-[#222c38]">
            <h4 className="font-semibold mb-2 text-[#e5e7eb]">Filters</h4>
            {/* Add filter controls here */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-[#d1d5db]">Category</label>
              <select className="w-full mt-1 rounded border-[#192233] bg-[#192233] text-[#e5e7eb]">
                <option>All</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Design</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-[#d1d5db]">Difficulty</label>
              <select className="w-full mt-1 rounded border-[#192233] bg-[#192233] text-[#e5e7eb]">
                <option>All</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-[#d1d5db]">Duration</label>
              <input type="range" min="1" max="12" className="w-full accent-[#7f9cf5]" />
            </div>
            <button className="w-full mt-2 bg-[#7f9cf5] text-[#192233] rounded py-2">Reset Filters</button>
          </div>
        </aside>
        {/* Course Grid */}
        <section className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example course cards, replace with dynamic data */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-[#232f41] rounded-lg shadow-sm p-4 flex flex-col border border-[#222c38]">
                <div className="h-32 w-full bg-[#192233] rounded mb-3 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h5 className="font-semibold mb-1 text-[#e5e7eb]">Course Title {i + 1}</h5>
                <p className="text-sm text-[#a1a1aa] mb-2">Short course description goes here.</p>
                <button className="bg-[#7f9cf5] text-[#192233] rounded py-2 mt-auto">Continue Learning</button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-[#7f9cf5] text-[#192233] rounded px-6 py-2">Load More Courses</button>
          </div>
        </section>
      </main>

      {/* Analytics Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#e5e7eb]">Your Learning Analytics</h2>
        <div className="bg-[#232f41] rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-8 border border-[#222c38]">
          <div className="flex-1">
            {/* Placeholder for chart */}
            <div className="h-48 bg-[#192233] rounded mb-4 flex items-center justify-center text-[#a1a1aa]">Performance Trends Chart</div>
            <div className="h-48 bg-[#192233] rounded flex items-center justify-center text-[#a1a1aa]">Skills Radar Chart</div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="bg-[#192233] rounded p-4 text-[#d1d5db]">Learning Streak (placeholder)</div>
            <div className="bg-[#192233] rounded p-4 text-[#d1d5db]">Improvement Suggestions (placeholder)</div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#e5e7eb]">Personalize Your Learning Experience</h2>
        <div className="bg-[#232f41] rounded-lg shadow-sm p-6 grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 border border-[#222c38]">
          <div className="space-y-2"><b className="text-[#e5e7eb]">Custom Learning Path</b><br /><button className="bg-[#7f9cf5] text-[#192233] rounded px-4 py-2">Configure Path</button></div>
          <div className="space-y-2"><b className="text-[#e5e7eb]">Adaptive Difficulty</b><br /><button className="bg-[#7f9cf5] text-[#192233] rounded px-4 py-2">Auto Adjust</button></div>
          <div className="space-y-2"><b className="text-[#e5e7eb]">Learning Goals</b><br /><button className="bg-[#7f9cf5] text-[#192233] rounded px-4 py-2">Set Goals</button></div>
          <div className="space-y-2"><b className="text-[#e5e7eb]">Study Schedule</b><br /><button className="bg-[#7f9cf5] text-[#192233] rounded px-4 py-2">Build Schedule</button></div>
        </div>
        <div className="bg-[#232f41] rounded-lg shadow-sm p-6 border border-[#222c38]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-[#e5e7eb]">Learning Style Preferences</h4>
              <div className="flex flex-wrap gap-2">
                <label className="text-[#d1d5db]"><input type="radio" name="style" className="mr-2" />Video First</label>
                <label className="text-[#d1d5db]"><input type="radio" name="style" className="mr-2" />Micro-Learning</label>
                <label className="text-[#d1d5db]"><input type="radio" name="style" className="mr-2" />Text First</label>
                <label className="text-[#d1d5db]"><input type="radio" name="style" className="mr-2" />Thematic</label>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-[#e5e7eb]">Other Preferences</h4>
              <div className="flex flex-wrap gap-2">
                <label className="text-[#d1d5db]"><input type="checkbox" className="mr-2" />Practice Frequency</label>
                <label className="text-[#d1d5db]"><input type="checkbox" className="mr-2" />Assessment Style</label>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-[#7f9cf5] text-[#192233] rounded px-6 py-2">Save Preferences</button>
          </div>
        </div>
      </section>

      {/* Engagement & Gamification Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#e5e7eb]">Stay Motivated & Engaged</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#232f41] rounded-lg shadow-sm p-6 text-[#d1d5db] border border-[#222c38]">Your Achievements (placeholder)</div>
          <div className="bg-[#232f41] rounded-lg shadow-sm p-6 text-[#d1d5db] border border-[#222c38]">Active Challenges (placeholder)</div>
          <div className="bg-[#232f41] rounded-lg shadow-sm p-6 text-[#d1d5db] border border-[#222c38]">Leaderboard (placeholder)</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#192233] border-t border-[#232f41] mt-8">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-['Pacifico'] text-[#7f9cf5]">logo</span>
            <p className="text-[#6b7280] text-sm mt-2">© 2025 LearnSphere. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a href="#" className="text-[#a1a1aa] hover:text-[#7f9cf5]">About</a>
            <a href="#" className="text-[#a1a1aa] hover:text-[#7f9cf5]">Contact</a>
            <a href="#" className="text-[#a1a1aa] hover:text-[#7f9cf5]">Terms</a>
            <a href="#" className="text-[#a1a1aa] hover:text-[#7f9cf5]">Privacy</a>
          </div>
          <div className="mt-4 md:mt-0">
            <input type="email" placeholder="Subscribe" className="rounded px-3 py-2 border border-[#232f41] bg-[#232f41] text-[#e5e7eb] placeholder-[#6b7280]" />
            <button className="ml-2 bg-[#7f9cf5] text-[#192233] rounded px-4 py-2">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
