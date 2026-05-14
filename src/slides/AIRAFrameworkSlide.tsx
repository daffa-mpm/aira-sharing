import { Eyebrow, SlideTitle } from '../components/Typography'
import { Logo } from '../components/Logo'
import arsitekturAiraUrl from '../../assets/arsitektur_aira.png'

export function AIRAFrameworkSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-full">
        <Eyebrow>Ekosistem AIRA</Eyebrow>
        <SlideTitle>
          <span className="accent">AIRA</span> — Ekosistem AI
        </SlideTitle>
        <div style={{ display: 'flex', justifyContent:'center' }}>
                <img
                    src={arsitekturAiraUrl}
                    alt="Diagram arsitektur ekosistem AIRA yang menunjukkan AIRA Apps, Portal AIRA, dan On-prem LLM"
                    style={{ width: "80%", boxShadow: 'var(--shadow-lg)' }}
                  />
        </div>
      </div>
    </section>
  )
}
