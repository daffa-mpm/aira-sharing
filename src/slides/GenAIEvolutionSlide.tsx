import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'
import evolusiGenAiUrl from '../../assets/evolusi_genai.png'

export function GenAIEvolutionSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-full" style={{ justifyContent: 'flex-start', paddingTop: 44 }}>
        <Eyebrow>Evolusi Gen AI</Eyebrow>
        <SlideTitle style={{ fontSize: '1.7em' }}>
          Dari Chatbot ke <span className="accent-teal">Agentic AI</span>
        </SlideTitle>
        <Lead style={{ marginBottom: 20 }}>
          Bukan hanya jawaban makin pintar — tapi kemampuan AI bergerak dari sekadar menjawab, sampai menjalankan tugas multi-langkah secara mandiri.
        </Lead>

        <div style={{ display: 'flex', justifyContent:'center' }}>
                <img
                    src={evolusiGenAiUrl}
                    alt="Diagram evolusi AI dari chatbot biasa menuju agentic AI"
                    style={{ width: "60%", boxShadow: 'var(--shadow-lg)' }}
                  />
        </div>

        <div className="callout-row green" style={{ marginTop: 16 }}>
          <div className="callout-icon">🧩</div>
          <div className="callout-text">Bagaimana <strong>Agentic AI</strong> bisa melakukan semua hal itu ?</div>
        </div>
      </div>
    </section>
  )
}

