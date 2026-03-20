const fs = require('fs');

let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// 1. Shrink global gaps and grid spacing to condense vertical layout space
dash = dash.replace(/gap: 3/g, 'gap: 2');
dash = dash.replace(/gap: 2\.5/g, 'gap: 1.5');
dash = dash.replace(/spacing=\{3\}/g, 'spacing={2}');

// 2. Shrink Chart minimum bounding heights so they don't force a scrollbar on 13" laptop screens
dash = dash.replace(/minHeight: 300/g, 'minHeight: 200');

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);

let wrapper = fs.readFileSync('src/components/common/ChartWrapper.tsx', 'utf8');

// Shrink inner chart layout wrappers to eliminate scroll dependencies
wrapper = wrapper.replace(/minHeight: isFull \? 0 : 300/g, 'minHeight: isFull ? 0 : 200');
wrapper = wrapper.replace(/p: isFull \? 3 : 2/g, 'p: isFull ? 3 : 1.5');
wrapper = wrapper.replace(/mb: isFull \? 4 : 2/g, 'mb: isFull ? 3 : 1');

fs.writeFileSync('src/components/common/ChartWrapper.tsx', wrapper);
console.log('Condensed dashboard vertical footprint to fit without forced scrolling.');
