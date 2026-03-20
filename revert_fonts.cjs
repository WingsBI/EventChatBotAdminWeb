const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// Reverse fluid scaler clamp injections
content = content.replace(/fontSize: 'clamp\(1\.25rem, 2vw, 2\.5rem\)'/g, "fontSize: '1.25rem'");
content = content.replace(/fontSize: 'clamp\(0\.65rem, 0\.8vw, 1rem\)'/g, "fontSize: '0.65rem'");
content = content.replace(/fontSize: 'clamp\(1\.1rem, 1\.5vw, 1\.75rem\)'/g, "fontSize: '1.1rem'");

content = content.replace(/fontSize: 'clamp\(10px, 0\.8vw, 14px\)'/g, "fontSize: 10");
content = content.replace(/fontSize: 'clamp\(11px, 0\.9vw, 16px\)'/g, "fontSize: 11");

content = content.replace(/fontSize: 'clamp\(0\.75rem, 0\.8vw, 1\.1rem\)'/g, "fontSize: '0.75rem'");
content = content.replace(/fontSize: 'clamp\(0\.8rem, 0\.9vw, 1\.15rem\)'/g, "fontSize: '0.8rem'");
content = content.replace(/fontSize: 'clamp\(0\.85rem, 1vw, 1\.2rem\)'/g, "fontSize: '0.85rem'");
content = content.replace(/fontSize: 'clamp\(0\.85rem, 1vw, 1\.25rem\)'/g, "fontSize: '0.85rem'");

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', content);
console.log('Restored all native font sizes.');
