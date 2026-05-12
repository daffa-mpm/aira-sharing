import { Eyebrow, SlideTitle, Lead } from '../components/Typography'

export function RAGSlide() {
  return (
    <section>
      <div className="slide-split">
        {/* Left: explanation */}
        <div className="split-left" style={{ borderRightColor: 'var(--green)' }}>
          <Eyebrow color="var(--green)">Knowledge MPM</Eyebrow>
          <SlideTitle>
            Apa itu<br /><span style={{ color: 'var(--green)' }}>RAG?</span>
          </SlideTitle>
          <Lead>
            Jika slide sebelumnya menjelaskan bagaimana AI menyusun jawaban, maka RAG menjelaskan bagaimana jawaban itu dibuat lebih akurat: AI mengambil referensi dari dokumen terpercaya lebih dulu.
          </Lead>
          {/* R-A-G breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { letter: 'R', word: 'Retrieval', desc: 'Cari potongan dokumen yang paling relevan dengan pertanyaan', color: 'var(--green)' },
              { letter: 'A', word: 'Augmented', desc: 'Tempelkan referensi tersebut ke dalam prompt AI', color: 'var(--primary)' },
              { letter: 'G', word: 'Generation', desc: 'AI menyusun jawaban berdasarkan referensi, bukan menebak', color: 'var(--teal)' },
            ].map((item) => (
              <div key={item.letter} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', border: `1px solid ${item.color}`, borderRadius: 'var(--radius)', background: `color-mix(in oklch, ${item.color} 5%, transparent)` }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: `color-mix(in oklch, ${item.color} 14%, transparent)`, border: `2px solid ${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1em', color: item.color, flexShrink: 0 }}>{item.letter}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.82em', color: item.color }}>{item.word}</div>
                  <div style={{ fontSize: '0.68em', color: 'var(--muted-foreground)', lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="callout-row green" style={{ marginTop: 14 }}>
            <div className="callout-icon">📖</div>
            <div className="callout-text"><strong>Analogi:</strong> AI seperti staf baru yang pintar. RAG memberinya buku SOP MPM sebelum menjawab.</div>
          </div>
        </div>
        {/* Right: visual comparison */}
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 44px' }}>
          {/* Without RAG */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--red)', marginBottom: 10 }}>❌ Tanpa RAG</div>
            <div className="prompt-terminal" style={{ fontSize: '0.9em' }}>
              <div className="prompt-terminal-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
              <div className="prompt-terminal-body" style={{ padding: '14px 18px' }}>
                <div className="prompt-line">Apa benefit rawat jalan di MPM?</div>
                <div className="ai-line">Benefit rawat jalan meliputi kamar, obat, dan biaya dokter.</div>
                <div className="comment">⚠ Jawaban generik, bisa salah</div>
              </div>
            </div>
          </div>

          {/* With RAG */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--green)', marginBottom: 10 }}>✅ Dengan RAG</div>
            <div className="prompt-terminal" style={{ fontSize: '0.9em', border: '1px solid var(--green)' }}>
              <div className="prompt-terminal-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="title">+ dokumen HR MPM</span>
              </div>
              <div className="prompt-terminal-body" style={{ padding: '14px 18px' }}>
                <div className="prompt-line">Apa benefit rawat jalan di MPM?</div>
                <div className="ai-line">Sesuai HR Policy Pasal 12, benefit rawat jalan meliputi biaya obat, injeksi, fisioterapi, dan biaya dokter.</div>
                <div className="comment">✓ Akurat, bisa ditelusuri sumbernya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
