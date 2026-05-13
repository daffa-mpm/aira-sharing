import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'

export function HowItWorksSlide() {
  const steps = [
    { num: '1', title: 'Tanya', desc: 'Kita kirim pertanyaan ke AI', icon: '💬', color: 'var(--teal)' },
    { num: '2', title: 'Pecah', desc: 'Kalimat dipotong kecil-kecil agar mudah dibaca mesin', icon: '🧩', color: 'var(--primary)' },
    { num: '3', title: 'Cocokkan', desc: 'AI mencari pola kata berikutnya yang paling masuk akal', icon: '🔍', color: 'var(--green)' },
    { num: '4', title: 'Jawab', desc: 'Kata demi kata disusun menjadi kalimat utuh', icon: '✍️', color: 'var(--primary)' },
  ]

  return (
    <section>
      <Logo />
      <div className="slide-split">
        <div className="split-left" style={{ borderRightColor: 'var(--teal)' }}>
          <Eyebrow>Cara Kerja</Eyebrow>
          <SlideTitle>
            Bagaimana AI<br /><span className="accent-teal">Menghasilkan Jawaban?</span>
          </SlideTitle>
          <Lead>
            AI tidak &ldquo;tahu&rdquo; seperti manusia. AI membaca pertanyaan, mencari pola yang paling cocok, lalu menulis jawaban kata demi kata.
          </Lead>

          <div className="prompt-terminal" style={{ marginTop: 16 }}>
            <div className="prompt-terminal-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="title">contoh proses</span>
            </div>
            <div className="prompt-terminal-body" style={{ padding: '14px 18px' }}>
              <div className="prompt-line">Tolong jelaskan benefit rawat jalan</div>
              <div className="comment"># AI memecah: [&quot;benefit&quot;, &quot;rawat&quot;, &quot;jalan&quot;]</div>
              <div className="comment"># Cari pola paling cocok berikutnya</div>
              <div className="ai-line">Benefit rawat jalan meliputi biaya konsultasi dokter, obat-obatan, dan laboratorium...</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <div className="info-box gold" style={{ margin: 0, flex: 1 }}>
              <p style={{ margin: 0 }}><strong style={{ color: 'var(--primary)' }}>Analogi:</strong> seperti <span className="highlight">autocomplete super pintar</span></p>
            </div>
            <div className="info-box red" style={{ margin: 0, flex: 1 }}>
              <p style={{ margin: 0 }}>Gunakan sebagai <span className="highlight red">co-pilot</span>, bukan autopilot</p>
            </div>
          </div>
        </div>

        {/* Right: visual step flow */}
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 44px', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={step.num}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 20px', border: `1px solid color-mix(in oklch, ${step.color} 30%, transparent)`, borderRadius: 'var(--radius)', background: `color-mix(in oklch, ${step.color} 4%, transparent)` }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: `color-mix(in oklch, ${step.color} 12%, transparent)`, border: `2px solid ${step.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3em', flexShrink: 0 }}>{step.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9em', color: step.color }}>{step.num}. {step.title}</div>
                  <div style={{ fontSize: '0.72em', color: 'var(--muted-foreground)', lineHeight: 1.4, marginTop: 2 }}>{step.desc}</div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                  <div style={{ width: 2, height: 20, background: 'color-mix(in oklch, var(--foreground) 15%, transparent)' }} />
                </div>
              )}
            </div>
          ))}

          <div style={{ marginTop: 50, padding: '14px 16px', border: '1px solid color-mix(in oklch, var(--teal) 28%, transparent)', borderRadius: 'var(--radius)', background: 'color-mix(in oklch, var(--teal) 6%, transparent)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54em', color: 'var(--teal)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
              Lalu?
            </div>
            <div style={{ fontSize: '0.72em', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
              Sampai di sini kita baru melihat <strong style={{ color: 'var(--foreground)' }}>bagaimana AI menyusun jawaban</strong>. Pertanyaan berikutnya adalah: <strong style={{ color: 'var(--foreground)' }}>bagaimana supaya jawabannya akurat dan tidak mengarang?</strong> Di situlah <span className="highlight teal">RAG</span> dibutuhkan.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
