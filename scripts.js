function showAllMovies(){
    $(".tableBody").empty(),
        $.ajax({
            method: "GET",
            url: "https://localhost:44372/api/Movies/",
            type: "json",
            success: function (data) {
                $(data).each(function (index, item) {
                    if ($("#search")[0].value == "") {
                        $(".tableBody").append(
                            "<tr>" + "<td>" + item.Title + "</td>" +
                            "<td>" + item.Genre + "</td>" +
                            "<td>" + item.DirectorName + "</td>" +
                            "</tr>"                    
                    )}
                    if ($("#search")[0].value == item.Title || $("#search")[0].value == item.Genre || $("#search")[0].value == item.DirectorName) {
                        $(".tableBody").append(
                            "<tr>" + "<td>" + item.Title + "</td>" +
                            "<td>" + item.Genre + "</td>" +
                            "<td>" + item.DirectorName + "</td>" +
                            "</tr>"                    
                        )
                    }
                    
                }
                
            )}
        })
    }

    

//$('#input-movie-details').submit( processForm );


// function postMovie(){
//     var newMovieTitle = $("#title")[0].value;
//     var newGenre = $("#genre")[0].value;
//     var newDirectorName = $("#director-name")[0].value;
//     var data = { Title: newMovieTitle, Genre: newGenre, DirectorName: newDirectorName, Image: null};
//     $.post("http://localhost:44372/api/movies", data, function(response) {
//         console.log(response);
//     }, "json");
// }

function postMovie() {
    //get the movie data from the html input boxes
    var data = buildObject();
    $(document).ready(function() {
        $.ajax({
          type: 'POST',
          url: "https://localhost:44372/api/Movies",
          dataType: 'json',
          data:data
        }).then(function(){         
            showAllMovies();
        });     
    });
}

function buildObject(){
    var movieData = { 
        title: document.getElementById("title").value,
        genre: document.getElementById("genre").value,
        directorname: document.getElementById("directorname").value  //how to connect to html
    };
    return movieData;
}

function putMovie() {

}


// function searchMovie() {
//     var searchData = buildObject();
//     $(".tableBody").empty(),
//     $(document).ready(function() {
//     $.ajax({
//         type: 'GET',
//         url: "https://localhost:44372/api/Movies",
//         dataType: 'json',
//         data: searchData,
//         success: function (data) {
//             $(data).function (data, item);
//                 if (("#search")[0].value = "") {
//                     $(".tableBody").append(
//                         "<tr>" + "<td>" + item.Title + "</td>" +
//                         "<td>" + item.Genre + "</td>" +
//                         "<td>" + item.DirectorName + "</td>" +
//                         "</tr>"                    
//                 )}
//                 if (("#search")[0].value == item.Title || ("#search").value == item.Genre || ("#search").value == item.DirectorName) {
//                     $(".tableBody").append(
//                         "<tr>" + "<td>" + item.Title + "</td>" +
//                         "<td>" + item.Genre + "</td>" +
//                         "<td>" + item.DirectorName + "</td>" +
//                         "</tr>"                    
//                     )}
//                 }
              
//         })
//     })
// }
    






































// (function($) {
//     function localApiPost( e ) {
//         $.ajax({
//             url: "http://localhost:44372/Api/Movies/",
//             datatype: "json",
//             type: "post",
//             contentType: "application/x-www-form-urlencloded",
//             data: $(this).serialize(),
//             success: function( data, textStatus, jQxhr ){
//                 $("#response pre").html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });

//         e.preventDefault();
//     }
//     $("#root").submit( processForm );
// })(jQuery);

//(function get($)


//document.

//document.create element
//element.append
