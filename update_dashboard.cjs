const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// Replace all Recharts Legend instances strictly
content = content.replace(/<Legend [^>]*\/>/g, '<Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: \\"0.9rem\\", fontWeight: 500, paddingTop: \\"10px\\" }} />');

// Merge Header and Tabs into utilized space
const targetHeaderBlockRegEx = /{[\s\S]*?Topbar Header[\s\S]*?<Box sx=\{\{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 0\.75 \}\}>[\s\S]*?AI Chatbot Reporting Dashboard[\s\S]*?<\/Typography>\s*<Box sx=\{\{ display: 'flex', gap: 0\.75, alignItems: 'center', flexWrap: 'wrap' \}\}>/g;

content = content.replace(targetHeaderBlockRegEx, 
`      {/* Combined Header & Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2, borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto"
          sx={{ mb: '-1px', '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, fontSize: '0.9rem', color: 'text.secondary', minWidth: 120 }, '& .Mui-selected': { color: '#6366f1' }, '& .MuiTabs-indicator': { backgroundColor: '#6366f1', height: 3, borderRadius: '3px 3px 0 0' } }}
        >
          <Tab label="Overview" />
          <Tab label="Adoption" />
          <Tab label="Conversations" />
          <Tab label="Response Quality" />
          <Tab label="Knowledge Base" />
          <Tab label="Operational Insights" />
        </Tabs>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', pb: 1 }}>`
);

// Delete the old separate 'Tabs Menu' wrapper block 
const oldTabsBlock = /\s*\{\/\* Tabs Menu \*\/\}[\s\S]*?<Box sx=\{\{ borderBottom: 1, borderColor: 'divider', mb: 1 \}\}>[\s\S]*?<\/Tabs>[\s\S]*?<\/Box>/g;
content = content.replace(oldTabsBlock, '');

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', content);
console.log('Successfully updated Dashboard header layout and unified 0.9rem bottom-aligned chart Legends!');
