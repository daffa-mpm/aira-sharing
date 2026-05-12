import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Card, CardGrid2, CardTitle } from '../components/Card'
import { StatRow, StatBox } from '../components/StatBox'

export function OnPremModelsSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow color="var(--teal)">MODEL &amp; INFRASTRUKTUR</Eyebrow>
        <SlideTitle>
          Apa yang Berjalan di<br /><span style={{ color: 'var(--teal)' }}>Server Internal MPM?</span>
        </SlideTitle>
        <Lead style={{ maxWidth: 700 }}>
          Model <span className="highlight teal">open-source</span> di GPU server MPM — bisa dipilih, diganti, dan di-customize tanpa biaya lisensi.
        </Lead>

        <CardGrid2 style={{ marginTop: 16 }}>
          <Card variant="teal">
            <CardTitle color="var(--teal)">&#x1F9E0; Model Open-Source</CardTitle>
            <p>Model berkualitas tinggi yang bisa langsung di-deploy tanpa biaya lisensi.</p>
            <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="badge badge-aksara">LLaMA 3</span>
              <span className="badge badge-aksara">Qwen 3.6</span>
              <span className="badge badge-aksara">Gemma</span>
            </div>
          </Card>
          <Card variant="teal">
            <CardTitle color="var(--teal)">&#x1F5A5;&#xFE0F; GPU Server</CardTitle>
            <p>Dedicated GPU 24/7 dengan monitoring.</p>
            <div style={{ marginTop: 10, padding: '8px 12px', background: 'color-mix(in oklch, var(--teal) 6%, transparent)', borderRadius: 'var(--radius)', fontSize: '0.72em', color: 'var(--muted-foreground)' }}>
              <strong style={{ color: 'var(--foreground)' }}>Stack:</strong> vLLM + NVIDIA GPU + Docker
            </div>
          </Card>
        </CardGrid2>

        <CardGrid2 style={{ marginTop: 12 }}>
          <Card>
            <CardTitle>&#x1F504; RAG</CardTitle>
            <p>Model di-tune dengan data RAG untuk jawaban spesifik sesuai dokumen perusahaan.</p>
          </Card>
          <Card>
            <CardTitle>&#x1F6E1;&#xFE0F; Guardrails</CardTitle>
            <p>Evaluasi kualitas output + guardrails memastikan respons sesuai policy.</p>
          </Card>
        </CardGrid2>

        <StatRow style={{ marginTop: 16 }}>
          <StatBox num="24/7" label="Availability" numStyle={{ fontSize: '1.6em' }} />
          <StatBox num="0" label="Data ke Pihak Ketiga" />
          <StatBox num="∞" label="Request tanpa Extra Cost" numStyle={{ fontSize: '1.6em' }} />
        </StatRow>
      </div>
    </section>
  )
}
