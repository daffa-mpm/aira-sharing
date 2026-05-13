import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Card, CardTitle } from '../components/Card'
import { StatRow, StatBox } from '../components/StatBox'
import { Logo } from '../components/Logo'

const models = [
  {
    name: 'Qwen 3VL (Fine-tuned)',
    maker: 'Alibaba Cloud',
    badge: '8 B',
    color: 'var(--primary)',
    strengths: ['Vision Language', 'Multilingual termasuk Bahasa Indonesia', 'Thinking mode on/off'],
  },
  {
    name: 'Gemma 4',
    maker: 'Google DeepMind',
    badge: '31 B',
    color: 'var(--teal)',
    strengths: ['Multimodal — teks, gambar, video', 'Efisien di single GPU', 'Compact tapi powerful'],
  },
]

export function OnPremModelsSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--teal)' }}>
          <Eyebrow color="var(--teal)">MODEL ON-PREM</Eyebrow>
          <SlideTitle>
            <span style={{ color: 'var(--teal)' }}>Qwen &amp; Gemma</span><br />di Server MPM
          </SlideTitle>
          <Lead>
            Dua model open-source terbaik yang berjalan 24/7 di GPU internal — tanpa biaya lisensi, tanpa data keluar.
          </Lead>

          {/* Capabilities row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 18 }}>
            <Card>
              <CardTitle>🔄 RAG-Ready</CardTitle>
              <p>Terintegrasi dengan dokumen perusahaan untuk jawaban yang kontekstual dan akurat.</p>
            </Card>
            <Card>
              <CardTitle>🛡️ Guardrails</CardTitle>
              <p>Evaluasi otomatis memastikan output sesuai kebijakan dan standar perusahaan.</p>
            </Card>
          </div>

          <StatRow style={{ marginTop: 16 }}>
            <StatBox num="24/7" label="Availability" numStyle={{ fontSize: '1.2em' }} />
            <StatBox num="0" label="Data ke Luar" numStyle={{ fontSize: '1.2em' }} />
            <StatBox num="∞" label="Request" numStyle={{ fontSize: '1.6em' }} />
          </StatRow>
        </div>

        {/* Right: model cards */}
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: '36px 40px' }}>
          {models.map((m) => (
            <div key={m.name} style={{ border: `1.5px solid color-mix(in oklch, ${m.color} 30%, transparent)`, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: `color-mix(in oklch, ${m.color} 6%, transparent)`, borderBottom: `1px solid color-mix(in oklch, ${m.color} 15%, transparent)` }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1em', color: m.color }}>{m.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58em', color: 'var(--muted-foreground)', marginTop: 2 }}>{m.maker}</div>
                </div>
                <div style={{ padding: '5px 14px', background: `color-mix(in oklch, ${m.color} 14%, transparent)`, border: `1.5px solid ${m.color}`, borderRadius: 20, fontWeight: 700, fontSize: '0.78em', color: m.color }}>{m.badge}</div>
              </div>
              {/* Strengths */}
              <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {m.strengths.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.76em', color: 'var(--foreground)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ padding: '12px 16px', background: 'color-mix(in oklch, var(--teal) 4%, transparent)', border: '1px solid color-mix(in oklch, var(--teal) 20%, transparent)', borderRadius: 'var(--radius)', fontSize: '0.68em', color: 'var(--muted-foreground)', lineHeight: 1.5, textAlign: 'center' }}>
            <strong style={{ color: 'var(--teal)' }}>Stack:</strong> vLLM · NVIDIA GPU · Docker · 24/7 Monitoring
          </div>
        </div>
      </div>
    </section>
  )
}
