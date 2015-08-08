function renderNewCard(image, cast, teaser) {
	
	//Reach out and grab your raw template.
	var templateText = $('#my-template').html();
	console.log(templateText);

	//Define your dynamic values.
	var daValues = {
		'image': image,
		'cast': cast,
		'teaser': teaser
	}

	var renderedText = Mustache.render(templateText, daValues);
	//$('body').append(renderedText);
	$('#restaurant-container').append(renderedText)
}

function renderHoppitAPI() {
  $.get('https://hoppit.p.mashape.com/getPlace', function(data) {
    console.log(data);
  });
}


// These code snippets use an open-source library.
HttpResponse<JsonNode> response = Unirest.post("https://hoppit.p.mashape.com/getPlaces")
.header("X-Mashape-Key", "xkNarNcTeBmshTsPNQZNwmT4Jpxmp1odUP3jsnoQSV7IiL0Yt2")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.field("lat", 41.878221)
.field("limit", 15)
.field("lng", -87.629786)
.field("location", "Chicago,IL")
.field("noise", 1)
.field("pageNumber", 0)
.field("price", 2)
.field("radius", 5)
.field("searchTerms", "pizza")
.field("selectedVibes", "1,5")
.field("Verbose", 1)
.asJson();
console.log
