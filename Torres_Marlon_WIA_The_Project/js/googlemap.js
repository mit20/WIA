 google.load('visualization', '1', { 'packages': ['map'] });
    google.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Population'],
        ['Panama', 'Panama'],
        ['New York City', 'New York City'],
        ['Tampa', 'Tampa'],
        ['Los Angeles', 'Los Angeles'],
        ['Capetown', 'Capetown'],
        ['Santiago, Chile', 'Santiago, Chile'],
        ['Rome', 'Rome'],
        ['Toronto', 'Toronto'],
        ['Tokyo', 'Tokyo'],
        ['Barcelona', 'Barcelona']
      ]);

    var options = { showTip: true };

    var map = new google.visualization.Map(document.getElementById('chart_div'));

    map.draw(data, options);
  };