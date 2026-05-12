import { Eyebrow, SlideTitle, Lead } from '../components/Typography'

const stages = [
  {
    num: '01', label: 'Chatbot', year: '2020–22', color: 'var(--muted-foreground)',
    capabilities: ['Menjawab pertanyaan sederhana', 'Menjelaskan istilah', 'Terjemahan dasar'],
    example: 'Contoh: bot yang menjawab “Apa ibu kota Indonesia?”',
    limit: 'Reaktif — hanya menjawab jika ditanya, tanpa memori.',
  },
  {
    num: '02', label: 'AI Assistant', year: '2023', color: 'var(--primary)',
    capabilities: ['Merangkum dokumen panjang', 'Membuat draft email/laporan', 'Mengubah tone & gaya bahasa'],
    example: 'Contoh: merangkum policy 20 halaman menjadi 5 poin utama.',
    limit: 'Masih butuh instruksi detail setiap kali.',
  },
  {
    num: '03', label: 'Copilot', year: '2024', color: 'var(--teal)',
    capabilities: ['Bekerja di dalam aplikasi (Office, IDE)', 'Saran kontekstual real-time', 'Memahami file/layar yang dibuka'],
    example: 'Contoh: memberi saran isi email langsung saat user sedang menulis di Outlook.',
    limit: 'Terbatas pada satu konteks aplikasi.',
  },
  {
    num: '04', label: 'Agentic AI', year: '2025+', color: 'var(--green)', active: true,
    capabilities: ['Menerima goal → buat rencana sendiri', 'Memakai tools (API, database, browser)', 'Mengecek & mengoreksi hasilnya'],
    example: 'Contoh: menerima tugas “buat laporan penjualan bulan ini dibandingkan dengan bulan sebelumnya”, lalu mencari data, menyusun draft, dan meminta approval.',
    limit: 'Perlu approval manusia di titik kritis.',
  },
]

export function GenAIEvolutionSlide() {
  return (
    <section>
      <div className="slide-full" style={{ justifyContent: 'flex-start', paddingTop: 44 }}>
        <Eyebrow>Evolusi Gen AI</Eyebrow>
        <SlideTitle style={{ fontSize: '1.7em' }}>
          Dari Chatbot ke <span className="accent-teal">Agentic AI</span>
        </SlideTitle>
        <Lead style={{ maxWidth: 700, marginBottom: 20 }}>
          Bukan hanya jawaban makin pintar — tapi kemampuan AI bergerak dari sekadar menjawab, sampai menjalankan tugas multi-langkah secara mandiri.
        </Lead>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {stages.map((s) => (
            <div key={s.num} className={s.active ? 'card green' : 'card'} style={{
              borderTopWidth: 4,
              padding: '20px 18px',
              ...(s.active ? { boxShadow: 'var(--shadow-lg), 0 0 0 1px color-mix(in oklch, var(--green) 25%, transparent)' } : {}),
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', letterSpacing: '0.1em', color: s.color }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48em', color: 'var(--muted-foreground)' }}>{s.year}</div>
              </div>
              <div style={{ fontWeight: 700, fontSize: '1em', color: s.color, marginBottom: 14 }}>{s.label}</div>

              <div style={{ fontSize: '0.72em', lineHeight: 1.55, color: 'var(--muted-foreground)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82em', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--foreground)', marginBottom: 6, fontWeight: 600 }}>Bisa apa?</div>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {s.capabilities.map((c, i) => <li key={i} style={{ marginBottom: 4 }}>{c}</li>)}
                </ul>
              </div>

              <div style={{ marginTop: 12, padding: '8px 12px', borderRadius: 'calc(var(--radius) - 2px)', background: 'color-mix(in oklch, var(--primary) 5%, transparent)', fontSize: '0.66em', lineHeight: 1.45, color: 'var(--muted-foreground)' }}>
                <strong style={{ color: 'var(--foreground)' }}>Contoh:</strong> {s.example.replace(/^Contoh: /, '')}
              </div>

              <div style={{ marginTop: 14, padding: '8px 12px', borderRadius: 'calc(var(--radius) - 2px)', background: 'color-mix(in oklch, var(--foreground) 4%, transparent)', fontSize: '0.66em', lineHeight: 1.45, color: 'var(--muted-foreground)' }}>
                <strong style={{ color: 'var(--foreground)' }}>Batasan:</strong> {s.limit}
              </div>
            </div>
          ))}
        </div>

        {/* Agentic AI component breakdown */}
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', border: '1px solid var(--green)', borderRadius: 'var(--radius)', background: 'color-mix(in oklch, var(--green) 4%, transparent)' }}>
          <div style={{ fontSize: '1.1em', flexShrink: 0 }}>🧩</div>
          <div style={{ fontSize: '0.76em', lineHeight: 1.55, color: 'var(--muted-foreground)' }}>
            <strong style={{ color: 'var(--green)' }}>Komponen Agentic AI:</strong>{' '}
            <span className="highlight green">Goal</span>{' → '}
            <span className="highlight">Planner</span>{' → '}
            <span className="highlight teal">Memory</span>{' → '}
            <span className="highlight green">Tools / API</span>{' → '}
            <span className="highlight">Executor</span>{' → '}
            <span className="highlight teal">Evaluator</span>{' → '}
            <span className="highlight red">Human Approval</span>
          </div>
        </div>
      </div>
    </section>
  )
}

