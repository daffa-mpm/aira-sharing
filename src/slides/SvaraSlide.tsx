import { Eyebrow, SlideTitle } from '../components/Typography'

const apps = [
  { name: 'Legal Talk', div: 'Corp. Secretary', desc: 'Chatbot untuk pertanyaan kebijakan internal MPM', icon: '⚖️', color: 'var(--primary)' },
  { name: 'HaloTSD', div: 'Technical Service', desc: 'Chatbot untuk pertanyaan seputar technical service', icon: '🔧', color: 'var(--teal)' },
  { name: 'ArsipLM', div: 'IT Division', desc: 'Riset, ringkasan sumber, dan penyusunan draft dokumen dengan AI', icon: '📂', color: 'var(--green)' },
  { name: 'Wicara', div: 'IT Division', desc: 'Latihan bahasa lewat percakapan AI dengan feedback instan', icon: '🗣️', color: 'var(--primary)' },
  { name: 'PriksaData', div: 'IT Division', desc: 'Verifikasi dokumen otomatis berdasarkan referensi yang diunggah', icon: '📋', color: 'var(--teal)' },
  { name: 'Rembugan AI', div: 'IT Division', desc: 'Ubah transkrip meeting menjadi notulen dan dokumen standar', icon: '📝', color: 'var(--green)' },
  { name: 'TuturAksara', div: 'IT Division', desc: 'Konversi file audio menjadi transkrip teks dengan timestamp', icon: '🎙️', color: 'var(--primary)' },
  { name: 'CitraData ID', div: 'IT Division', desc: 'Baca KTP, STNK, KK fisik/scan dan ubah menjadi data terstruktur', icon: '🪪', color: 'var(--teal)' },
  { name: 'RAG Knowledge Base', div: 'IT Division', desc: 'Bangun knowledge base perusahaan agar AI menjawab dari dokumen internal', icon: '📚', color: 'var(--green)' },
  { name: 'Agent Builder', div: 'IT Division', desc: 'Platform untuk membangun AI agent sendiri tanpa coding', icon: '🤖', color: 'var(--primary)' },
]

export function SvaraSlide() {
  return (
    <section>
      <div className="slide-full" style={{ justifyContent: 'flex-start', paddingTop: 44 }}>
        <Eyebrow color="var(--green)">AIRA Apps</Eyebrow>
        <SlideTitle style={{ fontSize: '1.7em' }}>
          <span style={{ color: 'var(--green)' }}>Aplikasi AI</span> yang Sudah Tersedia
        </SlideTitle>
        <p className="lead" style={{ maxWidth: 800, marginBottom: 20 }}>
          Setiap aplikasi dibangun berdasarkan kebutuhan nyata dari berbagai divisi dan tersedia langsung di Portal AIRA.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {apps.map((app) => (
            <div key={app.name} className="card" style={{ padding: '16px 14px', borderTopWidth: 3, borderTopColor: app.color }}>
              <div style={{ fontSize: '1.4em', marginBottom: 8 }}>{app.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.82em', color: 'var(--foreground)', marginBottom: 4 }}>{app.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5em', color: app.color, letterSpacing: '0.06em', marginBottom: 8 }}>{app.div}</div>
              <div style={{ fontSize: '0.64em', lineHeight: 1.45, color: 'var(--muted-foreground)' }}>{app.desc}</div>
            </div>
          ))}
        </div>

        <div className="callout-row green" style={{ marginTop: 16 }}>
          <div className="callout-icon">🚀</div>
          <div className="callout-text">Jumlah aplikasi terus bertambah seiring kebutuhan baru dari setiap divisi. Ajukan ide aplikasi AI Anda melalui Portal AIRA.</div>
        </div>
      </div>
    </section>
  )
}
