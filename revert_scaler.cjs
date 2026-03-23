const fs = require('fs');

const re = /minHeight: \{ xs: 300, sm: 320, md: 350, lg: 400, xl: 550 \}/g;

let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');
dash = dash.replace(re, 'minHeight: 300');
fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);

let wrapper = fs.readFileSync('src/components/common/ChartWrapper.tsx', 'utf8');
wrapper = wrapper.replace(re, 'minHeight: 300');
fs.writeFileSync('src/components/common/ChartWrapper.tsx', wrapper);

console.log('Reverted normal view minHeights to 300px');
