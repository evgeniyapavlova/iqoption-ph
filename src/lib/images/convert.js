import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "./content1";  
const OUTPUT_DIR = "./content";  

const QUALITY = {
  webp: 100,
  avif: 100,
};

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function convert(filePath) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);

  console.log(`⚙️ Обработка: ${baseName}${ext}`);

  const file2xBase = path.join(OUTPUT_DIR, `${baseName}`);
//   const file1xBase = path.join(OUTPUT_DIR, `${baseName}@1x`);

  // Получаем размеры оригинала
//   const metadata = await sharp(filePath).metadata();
//   const width1x = Math.floor(metadata.width / 2);
//   const height1x = Math.floor(metadata.height / 2);

  // -------------------
  // PNG 2x (копия оригинала)
  await sharp(filePath).toFile(`${file2xBase}.png`);

  // PNG 1x
//   await sharp(filePath)
//     .resize(width1x, height1x)
//     .toFile(`${file1xBase}.png`);

  // -------------------
  // WebP 2x
  await sharp(filePath)
    .toFormat("webp", { quality: QUALITY.webp })
    .toFile(`${file2xBase}.webp`);

  // WebP 1x
//   await sharp(filePath)
//     .resize(width1x, height1x)
//     .toFormat("webp", { quality: QUALITY.webp })
//     .toFile(`${file1xBase}.webp`);

  // -------------------
  // AVIF 2x
  await sharp(filePath)
    .toFormat("avif", { quality: QUALITY.avif })
    .toFile(`${file2xBase}.avif`);

  // AVIF 1x
//   await sharp(filePath)
//     .resize(width1x, height1x)
//     .toFormat("avif", { quality: QUALITY.avif })
//     .toFile(`${file1xBase}.avif`);
}

async function run() {
  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith(".png"));

  if (files.length === 0) {
    console.log("❌ PNG файлы не найдены");
    return;
  }

  for (const file of files) {
    try {
      await convert(path.join(INPUT_DIR, file));
    } catch (e) {
      console.error("Ошибка при обработке", file, e);
    }
  }

  console.log("✅ Конвертация завершена");
}

run();
