$(document).ready(function () {
    $('.tabs').tabs();
    $('.dropdown-trigger').dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('select').formSelect();
    $('.tooltipped').tooltip(); 
    $('.collapsible').collapsible();
    $('input#first_name, input#last_name, input#email').characterCounter(); // Character Counter


    // Pie Chart - DID Numbers
   
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'DID Number Status'],
            ['Active', 25],
            ['In-Active', 25],
            ['Reserved', 15],
            ['Not In Use', 15]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 'title': 'DID Numbers By Status', 'width': '100%' };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('did-piechart'));
        chart.draw(data, options);
    }

    // Pie Chart - User Status
   
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(userChart);

    // Draw the chart and set the chart values
    function userChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'User Status'],
            ['Active', 35],
            ['In-Active', 35],
            ['In Contact', 30]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 'title': 'Users Status', 'width': "100%" };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('users-piechart'));
        chart.draw(data, options);
    }

    // Pie Chart - User Status
   
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(ordersChart);

    // Draw the chart and set the chart values
    function ordersChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Plans Status'],
            ['Premium', 35],
            ['Standards', 30],
            ['Basic', 35]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 'title': 'Plans Details', 'width': "100%" };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('plans-piechart'));
        chart.draw(data, options);
    }
});