var token = '75DOKIZPPPE2S4YVZEMV';

https://www.eventbriteapi.com/v3/events/search/?q=food&token=75DOKIZPPPE2S4YVZEMV

var eventsDictionary = {};

function fetchData() {
  var templateText = $('#my-template').html();
  // console.log(templateText);

  $.get('https://www.eventbriteapi.com/v3/events/search/?q=food&token='+token, function(response) {
    console.log(response.events);
    for (var i = 0; i < response.events.length; i++) {
      var currentEvent = (response.events[i]);

      // var inputDate = new Date(currentEvent.start.local);
      // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      // var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      // var formattedDate = dayNames[inputDate.getDay()] + ', ' + monthNames[inputDate.getMonth()] + ' ' + inputDate.getDate();
      
      var stampedTemplate = Mustache.render(templateText, currentEvent);
      // console.log(stampedTemplate);
      $('#cards-container').append(stampedTemplate);
    };
    
    buildDictionary(response.events);
    bindEventListeners();
  });
}



// listen for clicks on the cards
function bindEventListeners() {
  $('.card').click(function(e) {
    var targetId = e.target.id;
    var info = eventsDictionary[targetId];
        
    var templateLightbox = $('#lightbox-template').html();
    console.log(templateLightbox);
      
    var stampedLightbox = Mustache.render(templateLightbox, info);
    console.log(stampedLightbox);
    $('#lightbox-container').html(stampedLightbox);
    $('#lightbox-container').fadeIn();
    $('#mask').fadeIn();   
  });

  $('#mask').click(function() {
    $('#lightbox-container').fadeOut();
    $('#mask').fadeOut();
  });
};

function buildDictionary(events) {
  for (var i = 0; i < events.length; i++) {
    var currentEvent = events[i];
    eventsDictionary[currentEvent.id] = currentEvent;
  }
  console.log(eventsDictionary);
}

fetchData();
