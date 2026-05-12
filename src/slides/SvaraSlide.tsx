import { Eyebrow, SlideTitle } from '../components/Typography'
import { Card, CardGrid3, CardTitle } from '../components/Card'

export function SvaraSlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow color="var(--green)">AIRA APPS</Eyebrow>
        <SlideTitle>
          Solusi AI yang<br /><span style={{ color: 'var(--green)' }}>Spesifik &amp; Relevan</span>
        </SlideTitle>
        <p className="lead" style={{ maxWidth: 800 }}>
          Sekumpulan aplikasi Gen AI yang dibangun satu per satu berdasarkan ide dan kebutuhan nyata dari berbagai divisi, dirangkum di dalam Portal AIRA.
        </p>

        <CardGrid3 style={{ marginTop: 24 }}>
          <Card variant="green">
            <div style={{ fontSize: '2em', marginBottom: 12 }}>&#x1F4DA;</div>
            <CardTitle color="var(--green)">Domain Specific</CardTitle>
            <p>Setiap aplikasi dilatih / diberikan konteks yang sangat spesifik (melalui RAG) dengan dokumen divisi masing-masing.</p>
          </Card>
          <Card>
            <div style={{ fontSize: '2em', marginBottom: 12 }}>&#x1F680;</div>
            <CardTitle>Terus Bertambah</CardTitle>
            <p>Seiring waktu dan bertambahnya ide dari pengguna, jumlah aplikasi ini akan terus berkembang menutupi berbagai use case baru.</p>
          </Card>
          <Card variant="teal">
            <div style={{ fontSize: '2em', marginBottom: 12 }}>&#x1F91D;&#xFE0F;</div>
            <CardTitle color="var(--teal)">Assistant Sehari-hari</CardTitle>
            <p>Berupa Chatbot, Summarizer, atau alat ekstraksi dokumen yang fungsinya mendampingi pekerjaan berulang agar menjadi lebih cepat.</p>
          </Card>
        </CardGrid3>
        
      </div>
    </section>
  )
}
