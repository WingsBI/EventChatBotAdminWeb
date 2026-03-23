const fs = require('fs');
let c = fs.readFileSync('src/pages/Dashboard/Dashboard.tsx', 'utf8');
c = c.split('\\"').join("'");
fs.writeFileSync('src/pages/Dashboard/Dashboard.tsx', c);
