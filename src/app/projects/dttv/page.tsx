'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageLightbox from '@/components/ImageLightbox';
import BackToTop from '@/components/BackToTop';

export default function DTTVCaseStudy() {
  const router = useRouter();
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-sm font-roboto-mono text-gray-200 hover:bg-white/10 transition-colors"
          >
            <span aria-hidden>←</span>
            Back
          </button>
        </nav>
        <header className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-anton" style={{ color: '#DBDB99' }}>
            DTTV: Breaking Digital Addiction Through Self-Aware Design
          </h1>
          <p className="font-roboto-mono text-sm text-gray-400">A 3-day personal project that turned behavioral awareness into actionable change</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Problem I Couldn&#39;t Ignore</h2>
          <p className="font-roboto-mono text-gray-300">
            I was trapped in a mindless digital loop. Every few minutes, I&#39;d find myself checking social media &quot;just once more&quot; – refreshing email with no expectation of new messages, scrolling Peerlist for validation rather than networking, and constantly monitoring notifications. This wasn&#39;t productivity; it was digital addiction disguised as staying connected.
          </p>
          <p className="font-roboto-mono text-gray-300">
            The breaking point came when I realized I was checking email 100-200 times daily despite having no actual work to respond to. I was posting random, off-topic content on Peerlist just to see likes and followers grow, completely disconnected from my actual goals. My eyes were strained, my focus was shattered, and I was stressed from constantly seeking the next notification hit.
          </p>
          <div className="w-1/2 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/DTTV/PeerlistPost.png"
              alt="Typical day&#39;s browsing habits — before tracking"
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setPreviewSrc('/DTTV/PeerlistPost.png')}
            />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Why Build Instead of Buy?</h2>
          <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li><b>Full control</b> over what data I collected and how I used it</li>
            <li><b>Learning experience</b> - I wanted to understand the technical side of building browser extensions</li>
            <li><b>Minimal design</b> - existing tools felt overwhelming and became distractions themselves</li>
            <li><b>Personal validation</b> - I needed to prove I could solve my own problems through design</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The 3-Day Sprint: From Problem to Solution</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-anton" style={{ color: '#DBDB99' }}>Day 1: Rapid Prototyping with AI</h3>
            <p className="font-roboto-mono text-gray-300">With zero coding experience, I turned to Cursor AI and Claude to help translate my vision into reality.</p>
            <div className="w-1/2 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/DTTV/FirstPrompt.png"
                alt="Initial Cursor AI conversation explaining the concept"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/DTTV/FirstPrompt.png')}
              />
            </div>
            <p className="font-roboto-mono text-gray-300">My first prompt to the AI: <i>&quot;I want to track how much time I spend on different websites to understand my browsing addiction. Can you help me build a simple browser extension?&quot;</i></p>
            <p className="font-roboto-mono text-gray-300">The AI helped me understand: how browser extensions work, what permissions I&#39;d need, and how to track/store website visit data.</p>
            <div className="w-1/2 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/DTTV/Redesign.png"
                alt="Early code snippets from Cursor AI showing the basic tracking logic"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/DTTV/Redesign.png')}
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-anton" style={{ color: '#DBDB99' }}>Day 2: Building the MVP</h3>
            <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
              <li>Domain tracking with visit counts and total time</li>
              <li>Simple, clean interface showing the data I needed</li>
              <li>Export functionality (JSON/TXT) for deeper analysis</li>
            </ul>
            <div className="w-1/2 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/DTTV/1working.png"
                alt="First working version of DTTV interface"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/DTTV/1working.png')}
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-anton" style={{ color: '#DBDB99' }}>Day 3: Design Refinement</h3>
            <p className="font-roboto-mono text-gray-300">I added features quickly, then removed them just as fast:</p>
            <p className="font-roboto-mono text-gray-300"><b>Added then removed:</b> Charts, per-domain notes, complex analytics dashboard</p>
            <p className="font-roboto-mono text-gray-300"><b>Why I removed them:</b> The point was to reduce distraction, not create a new one. Minimalism won.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Data That Changed Everything</h2>
          <div className="w-1/2 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/DTTV/FirstData.png"
              alt="DTTV data screenshot showing actual usage patterns"
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setPreviewSrc('/DTTV/FirstData.png')}
            />
          </div>
          <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li><b>x.com (Twitter):</b> 5+ hours, 2132+ visits</li>
            <li><b>Email:</b> 200+ daily checks with no productive purpose</li>
            <li><b>Peerlist:</b> 848+ visits driven by validation-seeking</li>
            <li><b>YouTube:</b> 2+ hours of mindless scrolling</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Uncomfortable Truth</h2>
          <p className="font-roboto-mono text-gray-300">I built an &quot;Accountability Gate&quot; to block distracting sites with a pre-question, then realized it would become another checking habit. I killed it after one day. Sometimes the best design decision is to not build something.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Behavioral Change: The Real Results</h2>
          <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li>Email: From 200+ daily to 2-3 intentional checks</li>
            <li>Peerlist: Stopped posting for validation; now genuine networking</li>
            <li>Twitter: Upgraded to premium; focus on thoughtful posts</li>
            <li>Overall: From mindless checking to intentional usage</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>What I Learned</h2>
          <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li><b>Solve it, remove it, or kill it</b></li>
            <li><b>Data drives insight; insight drives change</b></li>
            <li><b>Minimal design serves a purpose</b></li>
            <li><b>AI as a design partner</b></li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Meta-Learning: Why This Matters</h2>
          <ol className="list-decimal pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li>Problem validation first</li>
            <li>Solution validation second</li>
            <li>Behavioral insight over feature complexity</li>
            <li>Know when to stop</li>
          </ol>
          <p className="font-roboto-mono text-gray-300">If I can identify, analyze, and solve my own behavioral problems through systematic design thinking, I can apply the same approach to solve problems for any user.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>What&#39;s Next?</h2>
          <p className="font-roboto-mono text-gray-300">DTTV served its purpose. I still use it occasionally to check in on my habits, but the real value was in the awareness it created. I don&#39;t need to track every minute anymore – I&#39;ve internalized the questioning: &quot;Why am I here? What do I want to accomplish?&quot;</p>
          <p className="font-roboto-mono text-gray-300">Sometimes the most successful design is the one that makes itself unnecessary.</p>
        </section>
      </article>
      <footer className="mx-auto w-full max-w-3xl px-4 pb-16">
        <p className="text-xs font-roboto-mono text-gray-500">
          This article was drafted and refined with AI assistance.
        </p>
      </footer>
      <ImageLightbox src={previewSrc} onClose={() => setPreviewSrc(null)} />
      <BackToTop />
    </main>
  );
}


