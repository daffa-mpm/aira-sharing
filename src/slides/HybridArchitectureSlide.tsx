import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'

export function HybridArchitectureSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        {/* Left: explanation */}
        <div className="split-left" style={{ borderRightColor: 'var(--teal)' }}>
          <Eyebrow color="var(--teal)">Arsitektur Hybrid</Eyebrow>
          <SlideTitle>
            Bagaimana <span style={{ color: 'var(--teal)' }}>Hybrid</span><br />Bekerja di MPM?
          </SlideTitle>
          <Lead>
            Data rahasia diproses di server internal (on-prem). Kebutuhan eksplorasi non-confidential bisa memakai cloud. Semua dalam governance IT.
          </Lead>

          {/* Decision flow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
            <div style={{ padding: '14px 18px', border: '1.5px solid var(--primary)', borderRadius: 'var(--radius)', background: 'color-mix(in oklch, var(--primary) 5%, transparent)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.82em', color: 'var(--primary)' }}>1. Request Bisnis</div>
              <div style={{ fontSize: '0.68em', color: 'var(--muted-foreground)', lineHeight: 1.5, marginTop: 4 }}>User menjelaskan kebutuhan &rarr; IT menilai risiko data &rarr; jalur disepakati</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 2, height: 16, background: 'color-mix(in oklch, var(--foreground) 15%, transparent)' }} />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, padding: '12px 14px', border: '1.5px solid var(--teal)', borderRadius: 'var(--radius)', background: 'color-mix(in oklch, var(--teal) 5%, transparent)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.78em', color: 'var(--teal)' }}>2A. On-Prem</div>
                <div style={{ fontSize: '0.64em', color: 'var(--muted-foreground)', lineHeight: 1.5, marginTop: 4 }}>Data sensitif tetap internal</div>
              </div>
              <div style={{ flex: 1, padding: '12px 14px', border: '1.5px solid var(--primary)', borderRadius: 'var(--radius)', background: 'color-mix(in oklch, var(--primary) 5%, transparent)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.78em', color: 'var(--primary)' }}>2B. Cloud</div>
                <div style={{ fontSize: '0.64em', color: 'var(--muted-foreground)', lineHeight: 1.5, marginTop: 4 }}>Non-confidential, reasoning cepat</div>
              </div>
            </div>
          </div>

          <div className="callout-row" style={{ marginTop: 14 }}>
            <div className="callout-icon">&#x1F6E1;&#xFE0F;</div>
            <div className="callout-text"><strong>Rule:</strong> data confidential &rarr; <span className="highlight teal">on-prem</span>; eksplorasi &rarr; <span className="highlight">cloud</span>; semua dalam governance IT.</div>
          </div>
        </div>

        {/* Right: detailed panels */}
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 40px', gap: 20 }}>
          {/* On-Prem detail */}
          <div style={{ border: '1.5px solid var(--teal)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ padding: '10px 18px', background: 'color-mix(in oklch, var(--teal) 10%, transparent)', fontWeight: 700, fontSize: '0.82em', color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>🏢</span> Jalur On-Prem
            </div>
            <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['AIRA Portal — user akses AI internal', 'RAG + Vector DB — dokumen MPM jadi referensi', 'On-Prem LLM — data tetap di lingkungan internal'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.72em', color: 'var(--muted-foreground)' }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 700 }}>&#10004;</span> {item}
                </div>
              ))}
              <div style={{ fontSize: '0.64em', color: 'var(--teal)', fontWeight: 600, marginTop: 4, padding: '6px 10px', background: 'color-mix(in oklch, var(--teal) 6%, transparent)', borderRadius: 'var(--radius)' }}>
                Use case: HR, Finance, Audit, Policy, Legal
              </div>
            </div>
          </div>

          {/* Cloud detail */}
          <div style={{ border: '1.5px solid var(--primary)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ padding: '10px 18px', background: 'color-mix(in oklch, var(--primary) 10%, transparent)', fontWeight: 700, fontSize: '0.82em', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>☁️</span> Jalur Cloud
            </div>
            <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Sanitized Prompt — tanpa data rahasia', 'Frontier Model — reasoning, coding, ide cepat', 'Human Review — output dicek sebelum dipakai'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.72em', color: 'var(--muted-foreground)' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>&#10004;</span> {item}
                </div>
              ))}
              <div style={{ fontSize: '0.64em', color: 'var(--primary)', fontWeight: 600, marginTop: 4, padding: '6px 10px', background: 'color-mix(in oklch, var(--primary) 6%, transparent)', borderRadius: 'var(--radius)' }}>
                Use case: Brainstorm, Draft, Summarize, Ideasi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
