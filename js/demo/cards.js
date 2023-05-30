// cards.js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

fetch('/reports-today')
.then((response) => response.json())
.then((data) => {
    const reportsCount = document.getElementById('reportsCount');
    reportsCount.textContent = data.count;
})
.catch((error) => {
    console.error('Error fetching reports count:', error);
});


// Fetch count of reported issues for the whole month from the server
fetch('/reported-issues-month')
.then((response) => response.json())
.then((data) => {
    const reportedIssuesCount = document.getElementById('reportedIssuesCount');
    reportedIssuesCount.textContent = data.count;
})
.catch((error) => {
    console.error('Error fetching reported issues count:', error);
});
