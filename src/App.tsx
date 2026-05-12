import { useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import type RevealType from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import './styles/theme.css'

import { DividerSlide } from './components/SlideLayout'
import { NavBar } from './components/NavBar'
import { HeroSlide } from './slides/HeroSlide'
import { ObjectiveSlide, AgendaSlide } from './slides/ObjectiveSlide'
import { GenAISlide } from './slides/GenAISlide'
import { GenAIEvolutionSlide } from './slides/GenAIEvolutionSlide'
import { PromptingSlide } from './slides/PromptingSlide'
import { PromptingFrameworkSlide } from './slides/PromptingFrameworkSlide'
import { PromptingExamplesSlide } from './slides/PromptingExamplesSlide'
import { HowItWorksSlide } from './slides/HowItWorksSlide'
import { RAGSlide } from './slides/RAGSlide'
import { AIRAFrameworkSlide } from './slides/AIRAFrameworkSlide'
import { WhyOnPremSlide } from './slides/WhyOnPremSlide'
import { HybridArchitectureSlide } from './slides/HybridArchitectureSlide'
import { AksaraSlide } from './slides/AksaraSlide'
import { OnPremModelsSlide } from './slides/OnPremModelsSlide'
import { HybridDecisionSlide } from './slides/HybridDecisionSlide'
import { TaraSlide } from './slides/TaraSlide'
import { SvaraSlide } from './slides/SvaraSlide'
import { TakeawaysSlide } from './slides/TakeawaysSlide'
import { ClosingSlide } from './slides/ClosingSlide'

const navItems = [
  { label: 'Beranda', slideIndex: 0 },
  { label: 'Objective', slideIndex: 1 },
  { label: 'Agenda', slideIndex: 2 },
  { label: 'Gen AI', slideIndex: 4 },
  { label: 'Prompting', slideIndex: 6 },
  { label: 'Cara Kerja', slideIndex: 10 },
  { label: 'RAG', slideIndex: 11 },
  { label: 'Ekosistem', slideIndex: 13 },
  { label: 'Hybrid', slideIndex: 14 },
  { label: 'Arsitektur', slideIndex: 15 },
  { label: 'On-prem', slideIndex: 16 },
  { label: 'Model', slideIndex: 17 },
  { label: 'Keputusan', slideIndex: 18 },
  { label: 'Portal', slideIndex: 19 },
  { label: 'Apps', slideIndex: 20 },
  { label: 'Takeaways', slideIndex: 21 },
  { label: 'Penutup', slideIndex: 22 },
]

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<RevealType.Api | null>(null)

  useEffect(() => {
    if (!deckRef.current || revealRef.current) return

    const deck = new Reveal(deckRef.current, {
      hash: true,
      transition: 'slide',
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      progress: true,
      slideNumber: false,
      controls: true,
      controlsTutorial: false,
      keyboard: true,
      overview: true,
      margin: 0,
      width: "100%",
      height: "100%",
      minScale: 0.5,
      maxScale: 1,
      viewDistance: 2,
    })

    revealRef.current = deck
    let cancelled = false

    deck.initialize().then(() => {
      if (cancelled) return
      // Expose for NavBar
      ;(window as unknown as { Reveal: RevealType.Api }).Reveal = deck

      deck.on('slidechanged', (event: object) => {
        const e = event as { indexh: number }
        window.dispatchEvent(new CustomEvent('reveal:slidechanged', { detail: { indexh: e.indexh } }))
      })
    })

    return () => {
      cancelled = true
      try {
        deck.destroy()
      } catch {
        // ignore
      }
      revealRef.current = null
    }
  }, [])

  return (
    <>
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {/* 0 */}
          <HeroSlide />
          {/* 1 */}
          <ObjectiveSlide />
          {/* 2 */}
          <AgendaSlide />
          {/* 3 */}
          <DividerSlide num="01" title="Generative AI" subtitle="Fokus pada AI yang membantu bekerja, membuat, dan menjawab" />
          {/* 4 */}
          <GenAISlide />
          {/* 5 */}
          <GenAIEvolutionSlide />
          {/* 6 */}
          <PromptingSlide />
          {/* 7 */}
          <PromptingFrameworkSlide />
          {/* 8 */}
          <PromptingExamplesSlide />
          {/* 9 */}
          <DividerSlide num="02" title="Cara Kerja Gen AI" subtitle="Dari pertanyaan user sampai jawaban yang terasa natural" />
          {/* 10 */}
          <HowItWorksSlide />
          {/* 11 */}
          <RAGSlide />
          {/* 12 */}
          <DividerSlide num="03" title="Ekosistem AIRA" subtitle="On-prem LLM, Portal AIRA, AIRA Apps dalam satu alur yang utuh" />
          {/* 13 */}
          <AIRAFrameworkSlide />
          {/* 14 — Hybrid intro / kenapa on-prem */}
          <WhyOnPremSlide />
          {/* 15 — Arsitektur hybrid */}
          <HybridArchitectureSlide />
          {/* 16 — Cloud vs On-Prem perbandingan */}
          <AksaraSlide />
          {/* 17 — Model & infra on-prem */}
          <OnPremModelsSlide />
          {/* 18 — Decision framework */}
          <HybridDecisionSlide />
          {/* 19 */}
          <TaraSlide />
          {/* 20 */}
          <SvaraSlide />
          {/* 21 */}
          <TakeawaysSlide />
          {/* 22 */}
          <ClosingSlide />
        </div>
      </div>
      <NavBar items={navItems} />
    </>
  )
}
