import { Eyebrow, SlideTitle, Lead } from "../components/Typography";

export function GenAISlide() {
  return (
    <section>
      <div className="slide-split">
        <div className="split-left">
          <Eyebrow>Generative AI</Eyebrow>
          <SlideTitle>
            Kecerdasan Buatan yang <span className="accent">Menciptakan</span>
          </SlideTitle>
          <Lead>
            Gen AI bukan sekadar mesin pencari. Ini adalah AI yang mampu{" "}
            <span className="highlight">membuat konten baru</span> — teks,
            gambar, kode — dari nol.
          </Lead>
          {/* <div className="info-box gold" style={{ marginTop: 16 }}>
            <p>
              Transisi dari <em>"mesin yang menghitung"</em> menjadi{" "}
              <strong style={{ color: "var(--primary)" }}>
                "mesin yang membantu berkreasi"
              </strong>
            </p>
          </div> */}

          <div
            style={{
              marginTop: 14,
              padding: "16px 18px",
              border:
                "1px solid color-mix(in oklch, var(--primary) 22%, transparent)",
              borderRadius: "var(--radius)",
              background: "color-mix(in oklch, var(--primary) 5%, transparent)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.56em",
                color: "var(--primary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Trivia GenAI & LLM
            </div>

            <div
              style={{
                fontSize: "0.72em",
                lineHeight: 1.6,
                color: "var(--muted-foreground)",
              }}
            >
              Bayangin kamu lagi ngobrol dengan AI seperti chat biasa. AI bisa
              bantu bikin tulisan, jawab pertanyaan, merangkum, bahkan bikin
              gambar. Nah, kemampuan itulah yang disebut{" "}
              <strong style={{ color: "var(--foreground)" }}>GenAI</strong>.
            </div>

            <div
              style={{
                fontSize: "0.72em",
                lineHeight: 1.6,
                color: "var(--muted-foreground)",
                marginTop: 8,
              }}
            >
              Di baliknya ada{" "}
              <strong style={{ color: "var(--foreground)" }}>LLM</strong>, yaitu
              model yang memahami bahasa manusia lalu menyusun jawaban secara
              natural, hampir seperti sedang ngobrol dengan orang sungguhan.
            </div>

            <div
              style={{
                fontSize: "0.72em",
                lineHeight: 1.6,
                color: "var(--muted-foreground)",
                marginTop: 8,
              }}
            >
              Jadi gampangnya:
              <br />✨{" "}
              <strong style={{ color: "var(--foreground)" }}>GenAI</strong> =
              kemampuan AI untuk membuat sesuatu
              <br />
              🧠 <strong style={{ color: "var(--foreground)" }}>LLM</strong> =
              “otak bahasa” yang membuat AI bisa memahami dan menjawab chat kamu
            </div>
          </div>
        </div>
        <div
          className="split-right"
          style={{
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0,
          }}
        >
          <div className="float-label">Kapabilitas</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              marginTop: 12,
            }}
          >
            <div className="feature-row">
              <div className="icon-circle gold">📝</div>
              <div className="feature-content">
                <h4>Teks & Dokumen</h4>
                <p>
                  Membuat draft email, laporan, ringkasan, terjemahan, bahkan
                  menyesuaikan tone dan gaya bahasa secara otomatis.
                </p>
              </div>
            </div>
            {/* <div className="feature-row">
              <div className="icon-circle teal">💻</div>
              <div className="feature-content">
                <h4>Kode & Logika</h4>
                <p>
                  Membantu menulis script, debugging, memberi solusi teknis.
                  Contoh nyata: Github Copilot, Cursor, Windsurf.
                </p>
              </div>
            </div> */}
            <div className="feature-row">
              <div className="icon-circle green">🖼️</div>
              <div className="feature-content">
                <h4>Gambar & Media</h4>
                <p>
                  Menghasilkan ilustrasi, desain, audio, video dari deskripsi
                  teks (Midjourney, DALL-E, Sora).
                </p>
              </div>
            </div>
            <div className="feature-row">
              <div className="icon-circle gold">🧠</div>
              <div className="feature-content">
                <h4>Reasoning & Analisis</h4>
                <p>
                  Memecah masalah kompleks, reasoning multi-langkah, dan
                  memberikan rekomendasi berbasis data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
