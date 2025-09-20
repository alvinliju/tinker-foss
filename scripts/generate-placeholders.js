const fs = require('fs');
const path = require('path');

// Create 5 different colored placeholder avatars
const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#EF4444', '#F59E0B'];

for (let i = 1; i <= 5; i++) {
  const svgContent = `
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="${colors[i-1]}" rx="20"/>
    <text x="20" y="20" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dy=".3em">
      ${String.fromCharCode(64 + i)}
    </text>
  </svg>
  `;
  
  const filename = `avatar-${i}.svg`;
  const filepath = path.join(__dirname, '..', 'public', 'placeholders', filename);
  fs.writeFileSync(filepath, svgContent.trim());
  console.log(`Created ${filename}`);
}