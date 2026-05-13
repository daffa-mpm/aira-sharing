import { Eyebrow, SlideTitle, Lead } from '../components/Typography'
import { Logo } from '../components/Logo'
import { Card, CardGrid3, CardIcon, CardTitle } from '../components/Card'
import { StatRow, StatBox } from '../components/StatBox'

export function AIRAFrameworkSlide() {
  return (
    <section>
      <Logo />
      <div className="slide-full">
        <Eyebrow>Ekosistem AIRA</Eyebrow>
        <SlideTitle>
          <span className="accent">AIRA</span> — Ekosistem AI di MPM
        </SlideTitle>
        <Lead>Tiga pilar utama yang membentuk ekosistem AI terintegrasi untuk seluruh operasional MPM</Lead>
        <CardGrid3>
          <Card variant="teal" style={{ borderTopWidth: 4 }}>
            <CardIcon>&#x1F5A5;&#xFE0F;</CardIcon>
            <CardTitle color="var(--teal)">On-prem LLM</CardTitle>
            <p style={{ fontSize: '0.9em', fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>Keamanan Data Terjamin</p>
            <p>Model AI yang dijalankan di server internal MPM, memberikan fleksibilitas pendekatan hybrid serta privasi penuh untuk data sensitif.</p>
          </Card>
          <Card style={{ borderTopWidth: 4 }}>
            <CardIcon>&#x1F310;</CardIcon>
            <CardTitle>Portal AIRA</CardTitle>
            <p style={{ fontSize: '0.9em', fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>Satu Pintu Akses</p>
            <p>Portal terpusat untuk mengakses semua aplikasi AI yang dikembangkan, memudahkan eksplorasi dan penggunaan sehari-hari.</p>
          </Card>
          <Card variant="green" style={{ borderTopWidth: 4 }}>
            <CardIcon>&#x1F4F1;</CardIcon>
            <CardTitle color="var(--green)">AIRA Apps</CardTitle>
            <p style={{ fontSize: '0.9em', fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>Use Case AI</p>
            <p>Kumpulan aplikasi AI yang dibangun untuk menjawab tantangan operasional secara spesifik dari berbagai divisi di MPM.</p>
          </Card>
        </CardGrid3>
        <StatRow style={{ marginTop: 20 }}>
          <StatBox num="3" label="Pilar Ekosistem" />
          <StatBox num="AI" label="Powered by Gen AI + RAG" numStyle={{ fontSize: '1.8em' }} />
          <StatBox num="MPM" label="Terintegrasi Seluruh Divisi" numStyle={{ fontSize: '1.8em' }} />
        </StatRow>
      </div>
    </section>
  )
}
