import { Eyebrow, SlideTitle } from '../components/Typography'
import { SlideTable } from '../components/Table'

export function MLvsGenAISlide() {
  return (
    <section>
      <div className="slide-full">
        <Eyebrow>Perbandingan</Eyebrow>
        <SlideTitle>Machine Learning vs Generative AI</SlideTitle>
        <div style={{ overflowX: 'auto' }}>
          <SlideTable headers={['Aspek', 'Machine Learning (ML)', 'Generative AI (Gen AI)']}>
            <tr>
              <td><strong>Fungsi Utama</strong></td>
              <td>Memprediksi atau mengklasifikasi dari data historis</td>
              <td>Menciptakan sesuatu yang baru (teks, gambar, suara)</td>
            </tr>
            <tr>
              <td><strong>Cara Kerja</strong></td>
              <td>Belajar pola dari data lama &rarr; membuat prediksi</td>
              <td>Belajar pola bahasa &rarr; menyusun konten baru</td>
            </tr>
            <tr>
              <td><strong>Output</strong></td>
              <td>Angka, label, prediksi</td>
              <td>Jawaban teks, gambar, suara, kode</td>
            </tr>
            <tr>
              <td><strong>Contoh di MPM</strong></td>
              <td>
                Prediksi umur motor jika suara brebet tidak diperbaiki<br />
                Prediksi repeat order konsumen
              </td>
              <td>
                Jawaban troubleshooting "Kenapa motor brebet?"<br />
                Buat draft email ke dealer<br />
                Chat HR untuk tanya benefit
              </td>
            </tr>
            <tr>
              <td><strong>Kelebihan</strong></td>
              <td>Akurat untuk analisis &amp; prediksi berbasis data</td>
              <td>Fleksibel, bisa ngobrol &amp; bikin konten alami</td>
            </tr>
            <tr>
              <td><strong>Keterbatasan</strong></td>
              <td>Tidak bisa bikin konten baru, hanya prediksi dari pola lama</td>
              <td>Bisa ngawur (hallucinate) kalau tanpa RAG/data khusus</td>
            </tr>
          </SlideTable>
        </div>
        <div className="info-box gold" style={{ marginTop: 16 }}>
          <p>
            <strong style={{ color: 'var(--primary)' }}>Kesimpulan:</strong> ML dan Gen AI saling melengkapi.
            ML untuk prediksi data historis, Gen AI untuk interaksi natural dan pembuatan konten baru.
          </p>
        </div>
      </div>
    </section>
  )
}
