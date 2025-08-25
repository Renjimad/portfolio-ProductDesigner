'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BackToTop from '@/components/BackToTop';

export default function WanderlyCaseStudy() {
  const router = useRouter();
  return (
    <main className="w-full min-h-screen bg-black text-gray-200">
      <article className="mx-auto w-full max-w-3xl px-4 py-16 space-y-8">
        <nav className="mb-2">
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && window.history.length > 1) {
                router.back();
              } else {
                window.location.href = '/#projects';
              }
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg.white/5 text-sm font-roboto-mono text-gray-200 hover:bg-white/10 transition-colors"
          >
            <span aria-hidden>←</span>
            Back
          </button>
        </nav>

        <header className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-anton" style={{ color: '#DBDB99' }}>
            Wanderly: AI-Powered Solo Travel Companion
          </h1>
          <p className="font-roboto-mono text-sm text-gray-400">Project Overview</p>
        </header>

        <section className="space-y-2">
          <div className="w-3/5 mx-auto overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/Wanderly/AIGenLogO.jpg"
              alt="AI generated logo for Wanderly"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-xs font-roboto-mono text-gray-400">AI generated LOGO</p>
        </section>

        <section className="space-y-4">
          <p className="font-roboto-mono text-gray-300">
            I spent 3 days designing Wanderly, an AI travel companion for solo travelers. What started as an unfocused hackathon project became an exploration of something most travel apps miss—solo travelers don&#39;t just need logistics, they need emotional support. Instead of overwhelming users with menus and options, I designed the entire experience around a single AI conversation that understands both your practical needs and your fears about traveling alone.
          </p>
          <div className="text-sm font-roboto-mono text-gray-300">
            <div><b>Role:</b> Solo Product Designer</div>
            <div><b>Timeline:</b> 2-3 days</div>
            <div><b>Tools:</b> Figma, Bolt, Lovable, Perplexity</div>
            <div><b>Status:</b> Design phase (paused due to technical constraints)</div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Problem</h2>
          <p className="font-roboto-mono text-gray-300">
            Through quick research using Perplexity, Reddit insights, and conversations with friends, I discovered that existing solutions leave solo travelers piecing together fragmented information while managing anxiety on their own.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li><b>Google Maps / TripAdvisor</b> → Good for directions and reviews, but generic and overwhelming, not personal</li>
            <li><b>Reddit / Blogs / YouTube</b> → Authentic stories, but fragmented and time-consuming to piece together</li>
            <li><b>Travel Apps (Airbnb, Booking, Hostelworld)</b> → Solve booking, but not guidance or emotional safety</li>
            <li><b>Solo Travel Communities (Facebook, Couchsurfing, Meetup)</b> → Great for connection, but trust and safety issues</li>
          </ul>
          <p className="font-roboto-mono text-gray-300">
            <b>The gap I identified:</b> No single product combines personalized, AI-guided discovery + emotional reassurance + practical safety for solo travelers.
          </p>
          
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Initial Approach vs. Reality Check</h2>
          <p className="font-roboto-mono text-gray-300">
            I started designing what felt familiar—a traditional app with 5-10 pages of follow-up questions, structured flows, and organized menus. But as I worked through the wireframes, I realized I was building exactly what already existed: another overwhelming travel app.
          </p>
          
          <p className="font-roboto-mono text-gray-300">
            The breakthrough came when I asked myself: <i>&quot;What if the conversation itself IS the app?&quot;</i>
          </p>
          <p className="font-roboto-mono text-gray-300">
            I threw out my entire initial flow. Instead of asking users to navigate through multiple screens to express their needs, what if they could just... talk? What if the AI became their travel buddy, not just another tool?
          </p>
          <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
              <div className="rounded-lg overflow-hidden bg-black/20">
                <Image
                  src="/Wanderly/OldWay.png"
                  alt="Before – old multi-screen flow"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-black/20">
                <Image
                  src="/Wanderly/Final.png"
                  alt="After – simplified conversational experience"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <p className="font-roboto-mono text-gray-300">
            This pivot from complex UI to conversational simplicity became the core of Wanderly. Sometimes the best solution is NOT to build more features—it&#39;s to remove everything that gets in the way of the real need.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Design Process & Constraints</h2>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>Working within constraints:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Time:</b> 2-3 day sprint meant focusing on core value only</li>
              <li><b>Skills:</b> Solo designer with no development background, especially Python/AI implementation</li>
              <li><b>Resources:</b> Personal project with no budget or team</li>
            </ul>
            <div><b>My approach:</b> I centered the entire design around empathy and trust. Instead of traditional UI patterns with predictable button-to-screen flows, I had to design for open-ended conversations where user intent is messy and context shifts quickly.</div>
          </div>
          <div className="w-3/5 mx-auto overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/Wanderly/Chat.png"
              alt="Process working with AI tools"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <p className="font-roboto-mono text-gray-300">The challenge was balancing trust, clarity, and control while letting AI feel natural but not overwhelming. I prototyped conversational flows using Bolt and Lovable, then refined the core interactions in Figma.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Key Design Decisions</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-anton" style={{ color: '#DBDB99' }}>Decision 1: AI-First Interface</h3>
            <p className="font-roboto-mono text-gray-300"><b>Challenge:</b> How do you design for conversations instead of clicks?</p>
            <p className="font-roboto-mono text-gray-300"><b>Solution:</b> Users land directly in chat after login—no dashboards, no friction, no overwhelming options. The AI conversation becomes the entire experience.</p>
            
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-anton" style={{ color: '#DBDB99' }}>Decision 2: Emotion-First Design</h3>
            <p className="font-roboto-mono text-gray-300"><b>Challenge:</b> Travel apps focus on logistics but ignore the emotional journey of solo travel.</p>
            <p className="font-roboto-mono text-gray-300"><b>Solution:</b> I designed flows where users feel "heard" first, then gradually guided. The AI acknowledges fears, excitement, or loneliness before providing recommendations.</p>
            <div className="font-roboto-mono text-gray-300">
              <b>Core Journey:</b>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Login → Direct AI Chat (no menus to navigate)</li>
                <li>Discover (AI suggests based on interests: hidden gems, safe neighborhoods, budget hacks)</li>
                <li>Feel-Safe (personalized reassurance: safety ratings, trusted routes, mental health nudges)</li>
                <li>Save & Build (lightweight trip structure adapts to user needs)</li>
              </ol>
            </div>
            <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <div className="flex-1 rounded-lg bg-black/20 p-3">
                  <h4 className="font-anton text-base" style={{ color: '#DBDB99' }}>Login → Direct AI Chat</h4>
                </div>
                <div className="text-center text-gray-500 hidden md:block">→</div>
                <div className="flex-1 rounded-lg bg-black/20 p-3">
                  <h4 className="font-anton text-base" style={{ color: '#DBDB99' }}>Discover</h4>
                </div>
                <div className="text-center text-gray-500 hidden md:block">→</div>
                <div className="flex-1 rounded-lg bg-black/20 p-3">
                  <h4 className="font-anton text-base" style={{ color: '#DBDB99' }}>Feel‑Safe</h4>
                </div>
                <div className="text-center text-gray-500 hidden md:block">→</div>
                <div className="flex-1 rounded-lg bg-black/20 p-3">
                  <h4 className="font-anton text-base" style={{ color: '#DBDB99' }}>Save & Build</h4>
                </div>
              </div>
              <div className="md:hidden mt-2 text-center text-gray-500">↓</div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-anton" style={{ color: '#DBDB99' }}>Decision 3: Dynamic, Personal Flow</h3>
            <p className="font-roboto-mono text-gray-300">Instead of static recommendations, each interaction adapts to the user's current emotional and practical state. The AI doesn't just give information—it makes travelers feel safe, understood, and guided.</p>
            <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src="/Wanderly/IterationFirstLook.png"
                alt="Adaptive conversation examples"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Prototype & Testing</h2>
          <p className="font-roboto-mono text-gray-300">I used AI tools to create a working prototype that demonstrated the core conversational experience. This helped validate the concept and showed how the emotion-first approach could work in practice.</p>
          
          <a
            href="https://wanderly-solo-travel-teax.bolt.host"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors grid place-items-center text-xs font-roboto-mono text-gray-200"
          >
            Bolt AI Prototype
          </a>
          <p className="font-roboto-mono text-gray-300">The prototype allowed me to test key interactions and refine the conversational tone, proving that users responded well to the empathetic, guidance-focused approach.</p>
          <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/Wanderly/UserFeedback.png"
              alt="User testing insights"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Final Design</h2>
          <p className="font-roboto-mono text-gray-300">The final Figma designs focused on minimal, clean interfaces that supported rather than competed with the AI conversation.</p>
          
          <a
            href="https://www.figma.com/design/0ne1YxIsW64MlvIfFusXNZ/Work?node-id=4-2&t=LCthTdu3R1cFK9D1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors grid place-items-center text-xs font-roboto-mono text-gray-200"
          >
            Figma Design
          </a>
          <ul className="list-disc pl-6 space-y-1 font-roboto-mono text-gray-300">
            <li><b>Minimal UI</b> that keeps focus on conversation</li>
            <li><b>Emotion-aware messaging</b> that adapts to user state</li>
            <li><b>Clear visual hierarchy</b> for AI suggestions and user actions</li>
            <li><b>Trust-building elements</b> like safety indicators and source transparency</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>What I Learned</h2>
          <p className="font-roboto-mono text-gray-300"><b>The biggest surprise:</b> Emotional safety matters more than logistics. Through my research, I discovered that users often value reassurance, validation, and a &quot;feeling of being looked after&quot; above the actual travel recommendations.</p>
          <ul className="list-disc pl-6 space-y-1 font-roboto-mono text-gray-300">
            <li><b>Simplicity beats complexity:</b> Users needed fewer steps, not more options.</li>
            <li><b>AI-first requires different thinking:</b> Designing for open conversations meant abandoning traditional UI patterns and thinking about trust, context, and natural flow.</li>
            <li><b>Constraints can lead to better solutions:</b> Focusing on the core emotional need led to a stronger direction.</li>
            <li><b>Prototyping with AI</b> accelerated validation without heavy engineering.</li>
          </ul>
          <p className="font-roboto-mono text-gray-300"><b>Technical reality check:</b> Great design needs feasible implementation. I paused the project when I realized the technical complexity of building conversational AI exceeded my current skills.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Reflection & Next Steps</h2>
          <p className="font-roboto-mono text-gray-300">This project taught me that sometimes the most innovative solution is also the simplest one. By stripping away everything except the essential conversation, Wanderly could address the real gap in solo travel support—emotional safety and personalized guidance.</p>
          <div className="font-roboto-mono text-gray-300">
            <b>If I continued this project, I would:</b>
            <ul className="list-disc pl-6 space-y-1">
              <li>Partner with developers experienced in conversational AI</li>
              <li>Test the working prototype with real solo travelers</li>
              <li>Focus on building trust and emotional safety before adding practical features</li>
              <li>Research technical feasibility earlier in the design process</li>
            </ul>
          </div>
          <div className="font-roboto-mono text-gray-300">
            <b>What I'd do differently:</b> Start with technical research alongside user research.
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Project Links & Resources</h2>
          <a
            href="https://www.figma.com/design/0ne1YxIsW64MlvIfFusXNZ/Work?node-id=4-2&t=LCthTdu3R1cFK9D1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors grid place-items-center text-xs font-roboto-mono text-gray-200"
          >
            Figma Design
          </a>
          <a
            href="https://wanderly-solo-travel-teax.bolt.host"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors grid place-items-center text-xs font-roboto-mono text-gray-200"
          >
            Bolt AI Prototype
          </a>
          <a
            href="https://chat.fellou.ai/report/c3e0cf62-0228-471a-908c-a663fa576c62"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors grid place-items-center text-xs font-roboto-mono text-gray-200"
          >
            Research Report (Fellou)
          </a>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Project Note</h2>
          <p className="font-roboto-mono text-gray-300">This case study was developed with AI assistance for research and writing structure, reflecting the collaborative approach between human insight and AI capability that Wanderly itself was designed around.</p>
        </section>
      </article>
      <footer className="mx-auto w-full max-w-3xl px-4 pb-16">
        <p className="text-xs font-roboto-mono text-gray-500">
          This article was drafted and refined with AI assistance.
        </p>
      </footer>
      <BackToTop />
    </main>
  );
}


