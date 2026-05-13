import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'

const components = [
  { label: 'Goal', desc: 'Menerima instruksi tingkat tinggi dari user', icon: '🎯', color: 'var(--green)' },
  { label: 'Planner', desc: 'Memecah goal menjadi langkah-langkah terurut', icon: '📋', color: 'var(--primary)' },
  { label: 'Memory', desc: 'Menyimpan konteks dan hasil langkah sebelumnya', icon: '🧠', color: 'var(--teal)' },
  { label: 'Tools / API', desc: 'Mengakses database, browser, file, atau API eksternal', icon: '🔧', color: 'var(--green)' },
  { label: 'Executor', desc: 'Menjalankan setiap langkah sesuai rencana', icon: '⚡', color: 'var(--primary)' },
  { label: 'Evaluator', desc: 'Mengecek hasil dan memutuskan apakah perlu perbaikan', icon: '✅', color: 'var(--teal)' },
  { label: 'Human Approval', desc: 'Meminta persetujuan manusia di titik kritis', icon: '🛡️', color: 'var(--red)' },
]

export function AgenticAISlide() {
  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--green)' }}>
          <Eyebrow color="var(--green)">Deep Dive</Eyebrow>
          <SlideTitle>
            Bagaimana<br /><span style={{ color: 'var(--green)' }}>Agentic AI</span> Bekerja?
          </SlideTitle>
          <Lead>
            Agentic AI bukan sekadar menjawab pertanyaan — ia menerima tujuan, membuat rencana, menjalankan langkah-langkah, dan mengevaluasi hasilnya sendiri.
          </Lead>

          {/* Concrete example */}
          <div className="prompt-terminal" style={{ marginTop: 16 }}>
            <div className="prompt-terminal-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="title">contoh skenario</span>
            </div>
            <div className="prompt-terminal-body" style={{ padding: '14px 18px' }}>
              <div className="prompt-line">Buat laporan penjualan bulan ini vs bulan lalu</div>
              <div className="comment"># 1. Planner: pecah jadi 4 sub-task</div>
              <div className="comment"># 2. Tools: query database penjualan</div>
              <div className="comment"># 3. Executor: hitung perbandingan &amp; buat chart</div>
              <div className="comment"># 4. Evaluator: cek apakah angka konsisten</div>
              <div className="ai-line">Draft laporan siap — menunggu approval Anda.</div>
            </div>
          </div>

          <div className="callout-row green" style={{ marginTop: 14 }}>
            <div className="callout-icon">💡</div>
            <div className="callout-text"><strong>Kunci:</strong> manusia tetap memberi approval di titik kritis. AI bekerja, manusia memutuskan.</div>
          </div>
        </div>

        {/* Right: component chain */}
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 40px', gap: 0 }}>
          {components.map((comp, i) => (
            <div key={comp.label}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px', border: `1px solid color-mix(in oklch, ${comp.color} 30%, transparent)`, borderRadius: 'var(--radius)', background: `color-mix(in oklch, ${comp.color} 4%, transparent)` }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: `color-mix(in oklch, ${comp.color} 12%, transparent)`, border: `2px solid ${comp.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1em', flexShrink: 0 }}>{comp.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85em', color: comp.color }}>{comp.label}</div>
                  <div style={{ fontSize: '0.68em', color: 'var(--muted-foreground)', lineHeight: 1.4, marginTop: 2 }}>{comp.desc}</div>
                </div>
              </div>
              {i < components.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                  <div style={{ width: 2, height: 14, background: 'color-mix(in oklch, var(--foreground) 15%, transparent)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
