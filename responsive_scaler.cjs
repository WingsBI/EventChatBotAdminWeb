const fs = require('fs');

// 1. Update Dashboard minHeights and SVG radiuses
let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// Replace static minHeights with responsive safe sizes
dash = dash.replace(/minHeight: 200/g, 'minHeight: 300');
dash = dash.replace(/minHeight: 220/g, 'minHeight: 300');
dash = dash.replace(/minHeight: 240/g, 'minHeight: 300');
dash = dash.replace(/minHeight: 260/g, 'minHeight: 300');

// Replace hardcoded Pie radiuses with fluid percentages layout
dash = dash.replace(/innerRadius=\{60\}[\s\n]*outerRadius=\{80\}/g, 'innerRadius="50%" outerRadius="75%"');
dash = dash.replace(/innerRadius=\{65\}[\s\n]*outerRadius=\{90\}/g, 'innerRadius="50%" outerRadius="75%"');
dash = dash.replace(/innerRadius=\{60\}[\s\n]*outerRadius=\{90\}/g, 'innerRadius="50%" outerRadius="75%"');
dash = dash.replace(/innerRadius=\{50\}[\s\n]*outerRadius=\{80\}/g, 'innerRadius="50%" outerRadius="75%"');

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);

// 2. Remove Static Notifications Bell
let appbar = fs.readFileSync('src/components/layout/AppBar.tsx', 'utf8');

// Find and remove the IconButton containing the Badge
const bellRegex = /<IconButton size="large" sx=\{\{\s*color: 'text\.secondary',\s*mr: 0\.5\s*\}\}>\s*<Badge badgeContent=\{3\}.*?>\s*<NotificationsOutlinedIcon.*?>\s*<\/Badge>\s*<\/IconButton>/gs;
appbar = appbar.replace(bellRegex, '');

fs.writeFileSync('src/components/layout/AppBar.tsx', appbar);

console.log('Successfully applied responsive SVG sizes and purged static notifications');
