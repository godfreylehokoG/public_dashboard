// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hover: [],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding:15,
      displayColors: true,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

async function fetchData() {
  const response = await fetch('http://localhost:3000/pie-data');
  const data = await response.json();

  // Manually generate background colors
  const backgroundColors = [
    '#4e73df',
    '#1cc88a',
    '#36b9cc',
    '#f6c23e',
    '#e74a3b',
    '#858796',
    '#a5a5a5',
    '#f8f9fc',
    '#5a5c69',
    '#e74a3b'
  ];

  // Update chart data
  myPieChart.data.labels = data.labels;
  myPieChart.data.datasets[0].data = data.values;
  myPieChart.data.datasets[0].backgroundColor = backgroundColors;
  myPieChart.data.datasets[0].hoverBackgroundColor = backgroundColors;
  myPieChart.update();
}

fetchData();
