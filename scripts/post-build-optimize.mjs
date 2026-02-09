import fs from 'fs';
import path from 'path';
import Beasties from 'beasties';

const beasties = new Beasties({
  path: 'out',
  publicPath: 'out',
  compress: true,
  reduceInlineStyles: false,
  pruneSource: true,
  logLevel: 'info',
});

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      console.log(`Optimizing: ${filePath}`);
      const content = fs.readFileSync(filePath, 'utf8');
      try {
        const optimized = await beasties.process(content);
        fs.writeFileSync(filePath, optimized);
      } catch (e) {
        console.error(`Failed to optimize ${filePath}:`, e);
      }
    }
  }
}

async function main() {
  const outDir = path.join(process.cwd(), 'out');
  if (!fs.existsSync(outDir)) {
    console.error('out directory not found. Run next build first.');
    process.exit(1);
  }

  console.log('Starting post-build CSS optimization with Beasties...');
  await processDirectory(outDir);
  console.log('CSS optimization complete.');
}

main();
