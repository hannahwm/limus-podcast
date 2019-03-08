$.ajax({
  url: 'https://api.simplecast.com/v1/podcasts.json?api_key=eyJhcGlfa2V5IjoiNjQ1NThiYmE1ODZhY2RkNzY4ZjAxMjM5NjE5OTE4M2EifQ==',
  type: 'GET',
  data: '/podcasts.json',
  dataType: 'json',
  'success': function(data) {
    alert('Data:' + data);
  },
  'error': function(request, error) {
    console.log("error");
  },
  headers: {
    'X-API-KEY': 'eyJhcGlfa2V5IjoiNjQ1NThiYmE1ODZhY2RkNzY4ZjAxMjM5NjE5OTE4M2EifQ=='
  },
});
