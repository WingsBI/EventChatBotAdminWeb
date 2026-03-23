const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// 1. Upgrade hardcoded minHeight strings in Dashboard's inner chart boxes to fluid MUI system arrays
// The syntax from `minHeight: 300` -> `minHeight: { xs: 300, lg: 400, xl: 500 }` ensures Projector/TV displays get massively taller baseline charts instead of narrow slits
content = content.replace(/minHeight: 300/g, "minHeight: { xs: 300, sm: 320, md: 350, lg: 400, xl: 550 }");

// 2. Upgrade the Legend font sizes to CSS clamp to scale smoothly across screens
// "0.9rem" -> 'clamp(0.85rem, 1vw, 1.25rem)'
content = content.replace(/fontSize: '0\.9rem'/g, "fontSize: 'clamp(0.85rem, 1vw, 1.25rem)'");

// 3. Make KPI card numbers and labels fluid font sizes for massive TVs
// variant="h5" sx={{ ... fontSize: '1.25rem' }} -> clamp(1.25rem, 2vw, 2.5rem)
content = content.replace(/fontSize: '1\.25rem'/g, "fontSize: 'clamp(1.25rem, 2vw, 2.5rem)'");
// kpi label variant="caption" sx={{ ... fontSize: '0.65rem' }} -> clamp(0.65rem, 0.8vw, 1rem)
content = content.replace(/fontSize: '0\.65rem'/g, "fontSize: 'clamp(0.65rem, 0.8vw, 1rem)'");
// kpi chip label ... fontSize: '0.65rem' (already handled above)
// Top Navigation title sizing
content = content.replace(/fontSize: '1\.1rem'/g, "fontSize: 'clamp(1.1rem, 1.5vw, 1.75rem)'");

// 4. Update Recharts axes font sizes (number format) to visually represent larger text on large screens?
// Recharts Tick fontSize only accepts Numbers for pixels natively easily, so we might leave it as 11/12, or we can use strings if it supports it: 'clamp(10px, 1vw, 16px)'.
// Yes, SVG text elements support absolute standard text properties like string CSS.
content = content.replace(/fontSize: 10/g, "fontSize: 'clamp(10px, 0.8vw, 14px)'");
content = content.replace(/fontSize: 11/g, "fontSize: 'clamp(11px, 0.9vw, 16px)'");
content = content.replace(/fontSize: '0\.75rem'/g, "fontSize: 'clamp(0.75rem, 0.8vw, 1.1rem)'");
content = content.replace(/fontSize: '0\.8rem'/g, "fontSize: 'clamp(0.8rem, 0.9vw, 1.15rem)'");
content = content.replace(/fontSize: '0\.85rem'/g, "fontSize: 'clamp(0.85rem, 1vw, 1.2rem)'");

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', content);

// Also modify ChartWrapper default height to be fluid if no height provided
let chartWrapper = fs.readFileSync('src/components/common/ChartWrapper.tsx', 'utf8');
chartWrapper = chartWrapper.replace(/height = 280/g, "height = \"100%\"");
chartWrapper = chartWrapper.replace(/minHeight: isFull \? 0 : height/g, "minHeight: isFull ? 0 : { xs: 300, sm: 320, md: 350, lg: 400, xl: 550 }");

fs.writeFileSync('src/components/common/ChartWrapper.tsx', chartWrapper);

console.log('Scalability limits updated successfully');
