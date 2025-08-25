'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageLightbox from '@/components/ImageLightbox';
import BackToTop from '@/components/BackToTop';

export default function ProfileNotesTrackerCaseStudy() {
  const router = useRouter();
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const bugImages = [
    '/profile%20Reminder/Problem-Bugs/1.png',
    '/profile%20Reminder/Problem-Bugs/2.png',
    '/profile%20Reminder/Problem-Bugs/3.png',
    '/profile%20Reminder/Problem-Bugs/4.png',
    '/profile%20Reminder/Problem-Bugs/5.png',
  ];
  const [bugIndex, setBugIndex] = useState(0);
  const goPrevBug = () => setBugIndex((i) => (i + bugImages.length - 1) % bugImages.length);
  const goNextBug = () => setBugIndex((i) => (i + 1) % bugImages.length);
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
          <h1 className="text-3xl md:text-5xl font-anton" style={{ color: '#DBDB99' }}>Profile Notes Tracker</h1>
          <p className="font-roboto-mono text-base text-gray-300">A Personal Memory Bank for Social Media Profiles</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Problem: Premium Success, Memory Failure</h2>
          <p className="font-roboto-mono text-gray-300">
            After getting X Premium, my follower notifications exploded: 10+ new people daily. I developed a system — check their posts, follow genuine creators with real work, ignore bot accounts. But within days, I&#39;d forget my own judgments about people.
          </p>
          <div className="w-3/4 mx-auto grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/Follower.png"
                alt="X notification showing 10+ new followers daily"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/Follower.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/follower2.png"
                alt="Another notification showing 10+ new followers"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/follower2.png')}
              />
            </div>
          </div>
          <p className="font-roboto-mono text-gray-300">
            Was this person a potential client? Did they share good resources? Was I avoiding them for a reason? Stress and lack of sleep were erasing the very context that made connections valuable.
          </p>
          <p className="font-roboto-mono text-gray-300"><b>The core frustration:</b> I was being selective about follows, but losing track of why I made those decisions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>The Solution: Simple Context, Zero Friction</h2>
          <p className="font-roboto-mono text-gray-300">I built a lightweight browser extension that lets me attach private notes to any social media profile:</p>
          <div className="w-3/4 mx-auto grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/PopUpHide.png"
                alt="Extension popup on Twitter profile — hidden state"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/PopUpHide.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/PopUpOpen.png"
                alt="Extension popup on Twitter profile — open note interface"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/PopUpOpen.png')}
              />
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 font-roboto-mono text-gray-300">
            <li><b>Auto-popup</b> when visiting profiles asks if I want to add/view notes</li>
            <li><b>Local storage</b> keeps everything private (no servers, no privacy risks)</li>
            <li><b>Dashboard</b> shows all saved profiles as cards with snippets</li>
            <li><b>Quick edit</b> for updating or deleting notes anytime</li>
          </ul>
          <div className="w-1/2 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/profile%20Reminder/Dashboard%20showing%20saved%20profile%20cards%20with%20notes.png"
              alt="Dashboard showing saved profile cards with notes"
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setPreviewSrc('/profile%20Reminder/Dashboard%20showing%20saved%20profile%20cards%20with%20notes.png')}
            />
          </div>
          <p className="font-roboto-mono text-gray-300"><b>One-liner:</b> A personal memory bank for social profiles so I never lose context.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Design Process: AI-Assisted, User-Tested (By Me)</h2>
          <div className="w-3/4 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/profile%20Reminder/WorkingWithAI.png"
              alt="Development environment / coding session with AI assistance"
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setPreviewSrc('/profile%20Reminder/WorkingWithAI.png')}
            />
          </div>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>My Approach:</b></div>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Explained the problem to Claude AI</li>
              <li>Generated development prompts</li>
              <li>Used Cursor AI to build with iterations</li>
              <li>Tested extensively on myself (primary user)</li>
              <li>Refined from complex to minimal design</li>
            </ol>
          </div>
          <div className="w-3/4 mx-auto grid grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/Screenshot%20Beforeafter%20showing/1.png"
                alt="Before/after example 1"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/Screenshot%20Beforeafter%20showing/1.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/Screenshot%20Beforeafter%20showing/2.png"
                alt="Before/after example 2"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/Screenshot%20Beforeafter%20showing/2.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/Screenshot%20Beforeafter%20showing/3.png"
                alt="Before/after example 3"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/Screenshot%20Beforeafter%20showing/3.png')}
              />
            </div>
          </div>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>Key Design Decisions:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Popup timing:</b> Appears on profile pages, not intrusive</li>
              <li><b>Note categories:</b> Simple tags like &quot;Client,&quot; &quot;Friend,&quot; &quot;Resource&quot;</li>
              <li><b>Visual design:</b> Dark, minimal interface that doesn&#39;t distract</li>
              <li><b>Storage choice:</b> Local-only for privacy and simplicity</li>
            </ul>
          </div>
          <div className="font-roboto-mono text-gray-300 space-y-1">
            <div><b>What I Iterated:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fixed broken layouts and overlapping elements</li>
              <li>Simplified complex features down to essentials</li>
              <li>Refined color schemes and spacing</li>
              <li>Debugged cursor/interaction issues</li>
            </ul>
          </div>
          <div className="w-3/4 mx-auto relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="w-full h-96 md:h-[28rem] lg:h-[32rem] grid place-items-center bg-black/20">
              <img
                src={bugImages[bugIndex]}
                alt="Bug fixing/debugging process"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <button
              onClick={goPrevBug}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-black/60 text-gray-200 hover:bg-black/80"
            >
              ‹
            </button>
            <button
              onClick={goNextBug}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-black/60 text-gray-200 hover:bg-black/80"
            >
              ›
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Technical Constraints & Solutions</h2>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>Why Local Storage:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Privacy-first approach (notes never leave my browser)</li>
              <li>No backend complexity or costs</li>
              <li>Instant access without server delays</li>
            </ul>
          </div>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>Development Challenges:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser compatibility issues with popup positioning</li>
              <li>Layout breaking on different screen sizes</li>
              <li>CSS conflicts with existing site styles</li>
            </ul>
            <p className="font-roboto-mono text-gray-300">Solutions: Used AI assistance to debug systematically, tested across multiple platforms.</p>
          </div>
          <div className="w-3/4 mx-auto grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/twitterUse.png"
                alt="Extension working on Twitter"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/twitterUse.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/PeerlistUse.png"
                alt="Extension working on Peerlist"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/PeerlistUse.png')}
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Current Impact & Learnings</h2>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>How I Use It:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tag genuine profiles vs. promotional accounts</li>
              <li>Remember client conversations and context</li>
              <li>Track why I followed someone months later</li>
              <li>Quick reference before DMing people</li>
            </ul>
          </div>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>Key Insights:</b></div>
            <ol className="list-decimal pl-6 space-y-1">
              <li><b>Solve for yourself first</b> — Real personal pain creates better products</li>
              <li><b>AI democratizes development</b> — Complex ideas become buildable quickly</li>
              <li><b>Minimal beats complex</b> — Simple solutions stick better</li>
              <li><b>Privacy matters</b> — Local storage was the right choice for trust</li>
            </ol>
            <div><b>What I&#39;d Do Differently:</b> Get user feedback earlier, test with a small group, document iterations better.</div>
          </div>
          <div className="w-3/4 mx-auto grid grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/UseCase1.png"
                alt="Real usage example 1 (anonymized)"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/UseCase1.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/UseCase2.png"
                alt="Real usage example 2 (anonymized)"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/UseCase2.png')}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/profile%20Reminder/UseCase3.png"
                alt="Real usage example 3 (anonymized)"
                className="w-full h-auto block cursor-zoom-in"
                onClick={() => setPreviewSrc('/profile%20Reminder/UseCase3.png')}
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Future Vision</h2>
          <div className="font-roboto-mono text-gray-300 space-y-2">
            <div><b>Planned Features:</b></div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Search and filter saved profiles</li>
              <li>Reminder notifications for follow-ups</li>
              <li>Export/import for backup</li>
              <li>Custom themes (game-card collectible style)</li>
              <li>Redesign the whole UI for accessibility</li>
            </ul>
          </div>
          <div className="font-roboto-mono text-gray-300">
            <b>The Bigger Picture:</b> Personal productivity tools don&#39;t need to be complex CRMs; the best solutions fit seamlessly into existing workflows.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-anton" style={{ color: '#DBDB99' }}>Process Documentation</h2>
          <div className="w-3/4 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/profile%20Reminder/Flow.png"
              alt="User flow diagram: Profile visit → Popup → Add note → Save → Dashboard view"
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setPreviewSrc('/profile%20Reminder/Flow.png')}
            />
          </div>
          <div className="w-3/4 mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/profile%20Reminder/FileStructure.png"
              alt="Technical architecture or file structure"
              className="w-full h-auto block cursor-zoom-in"
              onClick={() => setPreviewSrc('/profile%20Reminder/FileStructure.png')}
            />
          </div>
          <p className="font-roboto-mono text-gray-300">This project demonstrates end-to-end product thinking: from identifying a personal problem to shipping a working solution that I use daily.</p>
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


