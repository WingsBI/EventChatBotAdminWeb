const fs = require('fs');

let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// 1. Fix User Sentiment Pie chart name binding!
// It was defaulting to 'count' because nameKey was missing for sentiment!
dash = dash.replace(
  /<Pie\s+data=\{feedbackSentiment/g,
  '<Pie nameKey="sentiment" data={feedbackSentiment'
);

// 2. Fix User Retention Pie chart name binding!
dash = dash.replace(
  /<Pie\s+data=\{userRetention/g,
  '<Pie nameKey="type" data={userRetention'
);

// 3. Fix ALL Legend font sizes to match the explicit 0.75rem description subtitles!
dash = dash.replace(/wrapperStyle=\{\{ fontSize: '[^']+',/g, "wrapperStyle={{ fontSize: '0.75rem',");

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);
console.log('Fixed Pie keys and Legend sizes!');
