// Generates PWA icons, favicon.ico and the Open Graph image from SVG sources.
// Run with: npm run assets   (outputs are committed, so this is only needed
// after changing the logo or the OG artwork).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const root = new URL("../public/", import.meta.url);
const logo = await readFile(new URL("favicon.svg", root));
const BG = "#070b14";

await mkdir(new URL("icons/", root), { recursive: true });

const png = (input, size) =>
  sharp(input, { density: 600 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

// Plain icons
for (const size of [192, 512]) {
  await writeFile(new URL(`icons/icon-${size}.png`, root), await png(logo, size));
}

// Maskable icon: logo inside the 80% safe zone on a full-bleed background.
const maskable = async (size) => {
  const inner = await png(logo, Math.round(size * 0.62));
  return sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: inner, gravity: "center" }])
    .png()
    .toBuffer();
};
await writeFile(new URL("icons/maskable-512.png", root), await maskable(512));
await writeFile(new URL("icons/apple-touch-icon.png", root), await maskable(180));

// favicon.ico with a single embedded 32×32 PNG (valid ICO since Windows Vista).
const ico32 = await png(logo, 32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(ico32.length, 14);
header.writeUInt32LE(22, 18);
await writeFile(new URL("favicon.ico", root), Buffer.concat([header, ico32]));

// Open Graph image (1200×630)
const logoInline = logo.toString().replace("<svg ", '<svg x="96" y="96" width="112" height="112" ');
const chips = ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes", "Azure"];
let x = 96;
const chipSvg = chips
  .map((label) => {
    const w = label.length * 13 + 40;
    const out = `<rect x="${x}" y="468" width="${w}" height="44" rx="22" fill="#ffffff" fill-opacity=".04" stroke="#ffffff" stroke-opacity=".12"/>
      <text x="${x + w / 2}" y="497" text-anchor="middle" font-size="20" fill="#cbd5e1">${label}</text>`;
    x += w + 12;
    return out;
  })
  .join("");

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#94a3b8" stroke-opacity=".07"/>
    </pattern>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0" stop-color="#16b3b5" stop-opacity=".35"/>
      <stop offset="1" stop-color="#16b3b5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="text" x1="0" x2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#67e8f9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${logoInline}
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="96" y="300" font-size="76" font-weight="700" fill="url(#text)" letter-spacing="-2">Łukasz Pelikan</text>
    <text x="96" y="364" font-size="34" fill="#e2e8f0">Junior DevOps Engineer · Java Backend</text>
    <text x="96" y="414" font-size="24" fill="#71e5e2">Software Engineering · Cloud · Machine Learning</text>
    ${chipSvg}
    <text x="1104" y="566" text-anchor="end" font-size="20" fill="#64748b">Łódź, Poland</text>
  </g>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(new URL("og-image.png", root).pathname);

console.log("Assets generated in public/");
