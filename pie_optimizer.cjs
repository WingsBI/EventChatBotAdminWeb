const fs = require('fs');
let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// 1. Expand Legend bounding height explicitly to 72px allowing 2-line wraps to display without truncation
dash = dash.replace(/height=\{36\}/g, 'height={72}');

// 2. Hide micro-labels in Pie charts when the slice value is < 5% to prevent complete tentacle illegibility! 
// Language Usage
dash = dash.replace(
  /label=\{\(\{ payload \}\) => `\$\{payload\.language\}: \$\{payload\.percentage\}%`\}/g,
  'label={({ payload }) => payload.percentage > 4 ? `${payload.language}: ${payload.percentage}%` : \'\'}'
);

// Workload Impact
dash = dash.replace(
  /label=\{\(\{ payload \}\) => `\$\{payload\.dept\}: \$\{payload\.impact\}%`\}/g,
  'label={({ payload }) => payload.impact > 4 ? `${payload.dept}: ${payload.impact}%` : \'\'}'
);

// Sentiment (3 wedges, rarely overlap, but we can secure it anyway to prevent bug reports if 0%)
dash = dash.replace(
  /label=\{\(\{ name, value \}\) => `\$\{name\}: \$\{value\}`\}/g,
  'label={({ name, percent }) => (percent || 0) > 0.04 ? `${name}` : \'\'}'
);

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);
console.log('Fixed Pie micro-labels and legend clippings');
