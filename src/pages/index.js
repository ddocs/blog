import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import "@fontsource/montserrat/700.css";

export default function Home() {
  return (
    <Layout title="Anita Diamond">
      <main className={styles.hero}>
        
        {/* Top artistic HTML */}
        <div className={styles.codeTop}>
{`<section class="creative">
  <canvas id="art"></canvas>
</section>`}
        </div>

        {/* Animated SVG Sine Wave */}
        <svg className={styles.svgWave} viewBox="0 0 1440 320">
          <path
            fill="none"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="4"
            d="M0,160 C360,0 1080,320 1440,160"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,160 C360,0 1080,320 1440,160;
              M0,160 C360,320 1080,0 1440,160;
              M0,160 C360,0 1080,320 1440,160"
            />
          </path>
        </svg>
        <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Welcome to the thoughts and writings of</h2>
        </div>
        
        <h1 className={styles.title}>
  {"Anita Diamond".split("").map((letter, index) => (
    <span
      key={index}
      className={styles.letter}
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h1>

        {/* Bottom artistic HTML */}
        <div className={styles.codeBottom}>
{`<div class="wave">
  <span>design</span>
</div>`}
        </div>

      </main>
    </Layout>
  );
}