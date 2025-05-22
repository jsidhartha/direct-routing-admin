$(document).ready(function () {
    $('.tabs').tabs();
    $('.dropdown-trigger').dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('input#first_name, input#last_name, input#email').characterCounter();

    // Pie Chart - DID Numbers
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'DID Number Status'],
            ['Active', 25],
            ['In-Active', 25],
            ['Reserved', 15],
            ['Not In Use', 15]
        ]);
        var options = { 'title': 'DID Numbers By Status', 'width': '100%' };
        var chart = new google.visualization.PieChart(document.getElementById('did-piechart'));
        chart.draw(data, options);
    }

    // Pie Chart - User Status
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(userChart);
    function userChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'User Status'],
            ['Active', 35],
            ['In-Active', 35],
            ['In Contact', 30]
        ]);
        var options = { 'title': 'Users Status', 'width': '100%' };
        var chart = new google.visualization.PieChart(document.getElementById('users-piechart'));
        chart.draw(data, options);
    }

    // Pie Chart - Plans
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(ordersChart);
    function ordersChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Plans Status'],
            ['Premium', 35],
            ['Standards', 30],
            ['Basic', 35]
        ]);
        var options = { 'title': 'Plans Details', 'width': '100%' };
        var chart = new google.visualization.PieChart(document.getElementById('plans-piechart'));
        chart.draw(data, options);
    }
});
