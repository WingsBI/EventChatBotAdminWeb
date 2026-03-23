const fs = require('fs');

let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// 1. Extreme Gap Compression
dash = dash.replace(/gap: 2/g, 'gap: 1.5');
dash = dash.replace(/spacing=\{2\}/g, 'spacing={1.5}');

// 2. Shrink KPI Card structural footprint 
dash = dash.replace(/p: 2/g, 'p: 1.5');
dash = dash.replace(/pb: 2/g, 'pb: 1.5');
dash = dash.replace(/width: 40, height: 40, borderRadius: 1\.5/g, 'width: 32, height: 32, borderRadius: 1');
dash = dash.replace(/mb: 1\.5/g, 'mb: 0.5');

// 3. Shrink Grid minimum limits further
dash = dash.replace(/minHeight: 200/g, 'minHeight: 180');

// 4. Compress Legend boxes
dash = dash.replace(/height=\{72\}/g, 'height={48}');
dash = dash.replace(/paddingTop: '10px'/g, "paddingTop: '2px'");
dash = dash.replace(/paddingAngle=\{2\}/g, "paddingAngle={1}"); // Unrelated pie tweak for thin legends

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);

let wrapper = fs.readFileSync('src/components/common/ChartWrapper.tsx', 'utf8');

// 5. Shrink ChartWrapper paddings and margins for un-maximized state
wrapper = wrapper.replace(/p: isFull \? 3 : 1\.5/g, 'p: isFull ? 3 : 1');
wrapper = wrapper.replace(/mb: isFull \? 3 : 1/g, 'mb: isFull ? 3 : 0.5');
wrapper = wrapper.replace(/minHeight: isFull \? 0 : 200/g, 'minHeight: isFull ? 0 : 180');

fs.writeFileSync('src/components/common/ChartWrapper.tsx', wrapper);

console.log('Successfully completed extreme vertical layout compression.');
