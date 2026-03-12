import Head from "next/head";

const photos = [
  "/static/img/20250311_193628.jpg",
  "/static/img/20241221_113313.jpg",
  "/static/img/20241207_072107.jpg",
  "/static/img/20241207_072044.jpg",
  "/static/img/20251231_222603.jpg",
  "/static/img/20250903_191826.jpg",
  "/static/img/20250720_135555.jpg",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Feliz Aniversario, Meu Amor</title>
        <meta
          name="description"
          content="Uma mensagem de feliz aniversario em formato de pagina especial."
        />
      </Head>

      <main className="page">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">Para a mulher da minha vida</p>
            <h1>Feliz aniversario, meu amor.</h1>
            <p className="lead">
              Hoje a pagina e toda sua. Um pequeno espaco para lembrar o quanto
              voce deixa tudo mais bonito, leve e inesquecivel.
            </p>
            <div className="messageCard">
              <p>
                Obrigado por cada sorriso, cada abraco e cada momento que faz
                meu coracao se sentir em casa. Que seu novo ciclo venha cheio de
                paz, saude, sonhos realizados e muito amor.
              </p>
              <p>Eu te admiro, te escolho e celebro sua vida hoje e sempre.</p>
            </div>
          </div>

          <div className="heroPhoto">
            <img src={photos[0]} alt="Foto especial do casal" />
          </div>
        </section>

        <section className="gallerySection">
          <div className="sectionHeader">
            <p className="eyebrow">Nossas lembrancas</p>
            <h2>Momentos que merecem ficar para sempre.</h2>
          </div>

          <div className="gallery">
            {photos.map((photo, index) => (
              <figure
                key={photo}
                className={`photoCard photoCard${(index % 4) + 1}`}
              >
                <img src={photo} alt={`Memoria ${index + 1}`} />
              </figure>
            ))}
          </div>
        </section>

        <section className="footerNote">
          <p>Com amor, para lembrar voce do quanto e amada em cada detalhe.</p>
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background:
            radial-gradient(
              circle at top,
              rgba(168, 85, 247, 0.14),
              transparent 32%
            ),
            linear-gradient(180deg, #09090b 0%, #111217 45%, #09090b 100%);
          color: #f4f4f5;
          font-family: Georgia, "Times New Roman", serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 48px 20px 72px;
          overflow: hidden;
        }

        .hero,
        .gallerySection,
        .footerNote {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 32px;
          align-items: center;
          padding: 32px 0 56px;
        }

        .heroCopy {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #c4b5fd;
          font-size: 0.78rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin: 0;
        }

        h1 {
          max-width: 10ch;
          font-size: clamp(3rem, 9vw, 5.8rem);
          line-height: 0.93;
          letter-spacing: -0.05em;
        }

        .lead {
          max-width: 560px;
          margin-top: 22px;
          color: #d4d4d8;
          font-family: "Segoe UI", sans-serif;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .messageCard {
          margin-top: 28px;
          max-width: 560px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
        }

        .messageCard p {
          color: #e4e4e7;
          font-family: "Segoe UI", sans-serif;
          font-size: 1rem;
          line-height: 1.8;
        }

        .messageCard p + p {
          margin-top: 14px;
        }

        .heroPhoto {
          position: relative;
          min-height: 540px;
        }

        .heroPhoto::before {
          content: "";
          position: absolute;
          inset: 24px -12px -24px 24px;
          border-radius: 36px;
          background: linear-gradient(
            145deg,
            rgba(168, 85, 247, 0.32),
            rgba(34, 197, 94, 0.12)
          );
          filter: blur(28px);
        }

        .heroPhoto img {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 540px;
          object-fit: cover;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }

        .gallerySection {
          padding: 20px 0 0;
        }

        .sectionHeader {
          max-width: 680px;
          margin-bottom: 28px;
        }

        h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
          grid-auto-rows: 88px;
        }

        .photoCard {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
        }

        .photoCard img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .photoCard:hover img {
          transform: scale(1.04);
        }

        .photoCard1 {
          grid-column: span 7;
          grid-row: span 4;
        }

        .photoCard2 {
          grid-column: span 5;
          grid-row: span 3;
        }

        .photoCard3 {
          grid-column: span 5;
          grid-row: span 4;
        }

        .photoCard4 {
          grid-column: span 7;
          grid-row: span 3;
        }

        .footerNote {
          padding-top: 44px;
          text-align: center;
        }

        .footerNote p {
          color: #a1a1aa;
          font-family: "Segoe UI", sans-serif;
          font-size: 0.98rem;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .page {
            padding: 28px 16px 56px;
          }

          .hero {
            grid-template-columns: 1fr;
            padding-top: 12px;
          }

          .heroPhoto {
            order: -1;
            min-height: auto;
          }

          .heroPhoto img {
            min-height: 420px;
          }

          h1 {
            max-width: none;
          }

          .gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 160px;
          }

          .photoCard1,
          .photoCard2,
          .photoCard3,
          .photoCard4 {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        @media (max-width: 560px) {
          .heroPhoto img {
            min-height: 340px;
          }

          .messageCard {
            padding: 20px;
            border-radius: 20px;
          }

          .gallery {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
        }
      `}</style>
    </>
  );
}
