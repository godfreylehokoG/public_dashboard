// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Replace the following with your RDS instance credentials
// const db = mysql.createConnection({
// host: 'internteam2admin.ctgb19tevqci.eu-west-1.rds.amazonaws.com',
// user: 'admin',
// password: 'mypassword',
// database: 'internteam2admin'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   const query = 'SELECT * FROM admin_users WHERE email = ? AND password = ?';
//   db.query(query, [email, password], (err, result) => {
//     if (err) throw err;

//     if (result.length > 0) {
//       res.status(200).json({ success: true, message: 'Login successful' });
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const connection = mysql.createConnection({
  host: 'internteam2chatbot.ctgb19tevqci.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'mypassword',
  database: 'internteam2chatbot'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

app.get('/reports', (req, res) => {
  const query = `
    SELECT MONTH(date) as month, COUNT(*) as count
    FROM water_issues
    WHERE YEAR(date) = 2004
    GROUP BY MONTH(date)
    ORDER BY MONTH(date);
  `;

  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(res);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/pie-data', (req, res) => {
  const query = `
    SELECT fault_type, COUNT(*) as count
    FROM water_issues
    WHERE YEAR(date) = 2004
    GROUP BY fault_type;
  `;

  connection.query(query, (err, results) => {
    if (err) throw err;

    const data = {
      labels: [],
      values: []
    };

    results.forEach((item) => {
      data.labels.push(item.fault_type);
      data.values.push(item.count);
    });

    res.json(data);
  });
});

app.get('/bar-data', (req, res) => {
  const query = `
    SELECT issue_status.status, COUNT(*) AS count
    FROM water_issues
    JOIN issue_status ON water_issues.phone = issue_status.phone
    WHERE YEAR(water_issues.date) = 2004
    GROUP BY issue_status.status;
  `;

  connection.query(query, (err, results) => {
    if (err) throw err;

    const data = {
      labels: [],
      values: []
    };

    results.forEach((item) => {
      data.labels.push(item.status);
      data.values.push(item.count);
    });

    res.json(data);
  });
});

app.get('/table-data', (req, res) => {
  const query = `
    SELECT name, phone, date, address, fault_type
    FROM water_issues
    ORDER BY date DESC
    LIMIT 5;
  `;

  connection.query(query, (err, results) => {
    if (err) throw err;

    const tableData = results.map((item) => ({
      name: item.name,
      phone: item.phone,
      date: item.date,
      address: item.address,
      fault_type: item.fault_type
    }));

    res.json(tableData);
  });
});
