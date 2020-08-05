$.getJSON('https://api.unsplash.com/users/joaccord/?client_id=wStDWhGUBB9M3984KWuu0YW00n4eJ33zYidRsQmUGpE', function(data){
console.log(data);

$.each(data, function(index, value) {
    console.log(value);

    var name = value.user.name;
    var bio =  value.user.bio;
    var imageURL = value.urls.regular;
    
    // $('.name').text(name);
    // $('.bio').text(bio);
    // $('.image img').attr('src', imageURL);

    $('.image').append('<div class="image"><img src="' + imageURL + '" alt=""></div>');

});

});
