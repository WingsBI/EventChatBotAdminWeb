const fs = require('fs');

let dash = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');

// Language Usage Conversion
dash = dash.replace(
  /<ChartWrapper title="Language Usage" subtitle="Conversations by language" data=\{languageStats\}>\s*<Box sx=\{\{ display: 'flex', flexDirection: 'column', height: '100%' \}\}>/g,
  '<ChartWrapper title="Language Usage" subtitle="Conversations by language" data={languageStats}>\n                  {(isFull) => (\n                  <Box sx={{ display: \'flex\', flexDirection: \'column\', height: \'100%\' }}>'
);
dash = dash.replace(
  /innerRadius="50%" outerRadius="75%"\s*paddingAngle=\{2\} dataKey="percentage"/g,
  'innerRadius={isFull ? 150 : "50%"} outerRadius={isFull ? 250 : "75%"}\n                              paddingAngle={2} dataKey="percentage"'
);

// User Retention Conversion
dash = dash.replace(
  /<ChartWrapper title="New vs Repeat Users" subtitle="How many exhibitors came back for multiple sessions" data=\{userRetention\}>\s*<Box sx=\{\{ display: 'flex', flexDirection: 'column', height: '100%' \}\}>/g,
  '<ChartWrapper title="New vs Repeat Users" subtitle="How many exhibitors came back for multiple sessions" data={userRetention}>\n                  {(isFull) => (\n                  <Box sx={{ display: \'flex\', flexDirection: \'column\', height: \'100%\' }}>'
);
dash = dash.replace(
  /innerRadius="50%" outerRadius="75%"\s*paddingAngle=\{2\}\s*dataKey="count"/g,
  'innerRadius={isFull ? 150 : "50%"} outerRadius={isFull ? 250 : "75%"}\n                              paddingAngle={2}\n                              dataKey="count"'
);

// User Sentiment Conversion
dash = dash.replace(
  /<ChartWrapper title="User Sentiment" subtitle="Post-conversation feedback" data=\{feedbackSentiment\}>\s*<Box sx=\{\{ display: 'flex', flexDirection: 'column', height: '100%' \}\}>/g,
  '<ChartWrapper title="User Sentiment" subtitle="Post-conversation feedback" data={feedbackSentiment}>\n                  {(isFull) => (\n                  <Box sx={{ display: \'flex\', flexDirection: \'column\', height: \'100%\' }}>'
);
dash = dash.replace(
  /<Pie nameKey="sentiment" data=\{feedbackSentiment/g,
  '<Pie nameKey="sentiment"\n                              data={feedbackSentiment'
); // Safe break
dash = dash.replace(
  /innerRadius="50%" outerRadius="75%"\s*paddingAngle=\{2\}\s*dataKey="count"/g,
  'innerRadius={isFull ? 150 : "50%"} outerRadius={isFull ? 250 : "75%"}\n                              paddingAngle={2}\n                              dataKey="count"'
);

// Workload Impact Conversion
dash = dash.replace(
  /<ChartWrapper title="Workload Impact by Department" subtitle="Estimated support hours saved by team" data=\{opsImpact\}>\s*<ResponsiveContainer/g,
  '<ChartWrapper title="Workload Impact by Department" subtitle="Estimated support hours saved by team" data={opsImpact}>\n                  {(isFull) => (\n                  <ResponsiveContainer'
);
dash = dash.replace(
  /innerRadius="50%" outerRadius="75%"\s*paddingAngle=\{2\}\s*dataKey="impact"/g,
  'innerRadius={isFull ? 150 : "50%"} outerRadius={isFull ? 250 : "75%"}\n                        paddingAngle={2}\n                        dataKey="impact"'
);


// Now we must close the function brackets for each chart!
// 1. Language Usage (ends before `</ChartWrapper>` block closes for Language Usage Grid)
dash = dash.replace(
  /<\/Box>\n\s*<\/ChartWrapper>\n\s*<\/Box>\n\s*<\/Grid>\n\s*<\/Grid>/g,
  '</Box>\n                  )}\n                </ChartWrapper>\n              </Box>\n            </Grid>\n          </Grid>'
);

// 2. User Retention
dash = dash.replace(
  /<\/Box>\n\s*<\/ChartWrapper>\n\s*<\/Box>\n\s*<\/Grid>\n\s*\{\/\* Stand Type Adoption \*\/\}/g,
  '</Box>\n                  )}\n                </ChartWrapper>\n              </Box>\n            </Grid>\n\n            {/* Stand Type Adoption */}'
);

// 3. User Sentiment
dash = dash.replace(
  /<\/Box>\n\s*<\/ChartWrapper>\n\s*<\/Box>\n\s*<\/Grid>\n\s*\{\/\* Escalations \*\/\}/g,
  '</Box>\n                  )}\n                </ChartWrapper>\n              </Box>\n            </Grid>\n\n            {/* Escalations */}'
);

// 4. Workload Impact
dash = dash.replace(
  /<\/ResponsiveContainer>\n\s*<\/ChartWrapper>\n\s*<\/Box>\n\s*<\/Grid>\n\s*<\/Grid>\n\s*<\/Box>\n\s*\)}/g,
  '</ResponsiveContainer>\n                  )}\n                </ChartWrapper>\n              </Box>\n            </Grid>\n          </Grid>\n        </Box>\n      )}'
);

fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', dash);
console.log('Passed Render Props to Dashboard Pies successfully!');
