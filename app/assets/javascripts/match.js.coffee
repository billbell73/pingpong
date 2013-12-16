$ ->

  id = $('.match').data('id')

  p1_id = $('#p1-name').data('id')
  p2_id = $('#p2-name').data('id')

  $("#p1-points, #p2-points, #p1-back, #p2-back").on 'click', (e) ->
    e.preventDefault()
    $.ajax "/api/matches/#{id}",
    data: {
      player_id: $(this).closest('section').find('h2').data('id'),
      decrement: $(this).data('decrement')
    }
    success: (data,status) ->
      $("#p1-points").text(data.p1points)
      $("#p1-games").text(data.p1games)
      $("#p2-points").text(data.p2points)
      $("#p2-games").text(data.p2games)
    type: 'PUT'

  connection = new WebSocketRails('localhost:3000/websocket')
  channel = connection.subscribe("table#{id}")

  channel.bind 'edit', (match) ->
   
    $('.p1g1').text(match['p1g1'])
    $('.p2g1').text(match['p2g1'])
    $('.p1g2').text(match['p1g2'])
    $('.p2g2').text(match['p2g2'])
    $('.p1g3').text(match['p1g3'])
    $('.p2g3').text(match['p2g3'])

    appElement = document.querySelector('[ng-controller=LineChartController]')

    if(appElement)
      $scope = angular.element(appElement).scope()
      $scope.$apply ->
        $scope.addRally(match['rally_winner_index'])
