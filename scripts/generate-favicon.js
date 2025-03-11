import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SVG for the Droplet icon with gradient to match your styling
const dropletSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
      <feOffset dx="0" dy="1" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.5" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#dropGradient)" stroke="url(#dropGradient)" filter="url(#dropShadow)" />
</svg>
`;

// Save the SVG to a temporary file
const tempSvgPath = path.join(__dirname, 'temp-droplet.svg');
fs.writeFileSync(tempSvgPath, dropletSvg);

// Function to create a favicon with a specific background
async function createFavicon() {
  try {
    // Create PNG versions for different devices
    await Promise.all([
      sharp(tempSvgPath)
        .resize(16, 16)
        .toFile(path.join(__dirname, '../public/favicon.ico')),
      sharp(tempSvgPath)
        .resize(192, 192)
        .png()
        .toFile(path.join(__dirname, '../public/favicon-192.png')),
      sharp(tempSvgPath)
        .resize(512, 512)
        .png()
        .toFile(path.join(__dirname, '../public/favicon-512.png'))
    ]);
    
    console.log('Favicons created successfully!');
    
    // Clean up the temporary SVG file
    fs.unlinkSync(tempSvgPath);
  } catch (err) {
    console.error('Error creating favicon:', err);
    
    // Clean up the temporary SVG file
    if (fs.existsSync(tempSvgPath)) {
      fs.unlinkSync(tempSvgPath);
    }
  }
}

createFavicon(); 