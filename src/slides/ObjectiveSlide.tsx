import { Eyebrow, SlideTitle } from '../components/Typography'
import { Card, CardGrid3, CardIcon, CardTitle } from '../components/Card'

export function ObjectiveSlide() {
  return (
    <section>
      <div className="slide-split">
        <div className="split-left">
          <Eyebrow>Objective</Eyebrow>
          <SlideTitle>Mengapa <span className="accent">AIRA</span>?</SlideTitle>
          <p style={{ fontSize: '0.88em', lineHeight: 1.7, color: 'var(--muted-foreground)' }}>
            AIRA hadir untuk menjembatani gap antara potensi AI dan implementasi nyata di lingkungan kerja MPM.
          </p>
         <div className="info-box teal" style={{ marginTop: 18 }}>
            <p>
              <strong style={{ color: 'var(--teal)' }}>Tujuan utama:</strong>{' '}
              Membantu setiap divisi memahami kapan AI bisa membantu pekerjaan,
              bagaimana cara menggunakannya dengan benar,
              dan seperti apa implementasi yang realistis di lingkungan MPM.
            </p>
          </div>
        </div>
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32, padding: '40px 36px' }}>
          <div className="feature-row">
            <div className="icon-circle gold">🎯</div>
            <div className="feature-content">
              <h4>Fokus ke Gen AI</h4>
              <p>Pemahaman praktis tentang Generative AI dan bagaimana teknologi ini membantu pekerjaan sehari-hari di MPM.</p>
            </div>
          </div>
          <div className="feature-row">
            <div className="icon-circle teal">💡</div>
            <div className="feature-content">
              <h4>Arah Implementasi</h4>
              <p>Membantu tiap divisi melihat kapan Gen AI layak dipakai, kapan perlu on-prem, dan seperti apa use case yang realistis.</p>
            </div>
          </div>
          <div className="feature-row">
            <div className="icon-circle green">🔗</div>
            <div className="feature-content">
              <h4>Ekosistem AI Terpadu</h4>
              <p>
                AIRA menghubungkan LLM, portal internal, dan aplikasi AI
                dalam satu fondasi yang bisa berkembang bertahap di MPM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AgendaSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow>Agenda</Eyebrow>

        <SlideTitle>
          Yang Akan Kita <span className="accent">Bahas</span>
        </SlideTitle>

        <CardGrid3>
          <Card>
            <CardIcon>✨</CardIcon>

            <CardTitle>
              01 · Mengenal Gen AI
            </CardTitle>

            <p style={{ fontSize: '0.72em', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
              Apa itu Generative AI, kenapa sedang berkembang pesat,
              dan bagaimana dampaknya untuk dunia kerja.
            </p>
          </Card>

          <Card variant="teal">
            <CardIcon>🧠</CardIcon>

            <CardTitle color="var(--teal)">
              02 · Cara AI Bekerja
            </CardTitle>

            <p style={{ fontSize: '0.72em', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
              Memahami bagaimana AI menerima instruksi,
              membaca konteks, lalu menghasilkan jawaban yang natural.
            </p>
          </Card>

          <Card>
            <CardIcon>✍️</CardIcon>

            <CardTitle>
              03 · Teknik Prompting
            </CardTitle>

            <p style={{ fontSize: '0.72em', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
              Cara memberi instruksi yang jelas agar hasil AI lebih akurat,
              relevan, dan siap digunakan.
            </p>
          </Card>

          <Card variant="green">
            <CardIcon>🧩</CardIcon>

            <CardTitle color="var(--green)">
              04 · Ekosistem AIRA
            </CardTitle>

            <p style={{ fontSize: '0.72em', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
              Mengenal Portal AIRA, On-prem LLM,
              dan AIRA Apps sebagai fondasi AI internal MPM.
            </p>
          </Card>

          <Card variant="teal">
            <CardIcon>🖥️</CardIcon>

            <CardTitle color="var(--teal)">
              05 · Hybrid AI Approach
            </CardTitle>

            <p style={{ fontSize: '0.72em', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
              Kapan memakai AI cloud, kapan memakai on-prem,
              dan bagaimana memilih pendekatan yang aman dan efisien.
            </p>
          </Card>
        </CardGrid3>
      </div>
    </section>
  )
}