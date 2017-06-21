/**
 * Created by jcatania on 6/20/17.
 */
const gameIDnumbers = {
    "agricola": 31260,
    "mechs": 209010,
    "7-wonders": 68448,
    "diplomacy": 483
};

$("button").click(function(e) {

    let gameID = gameIDnumbers[this.id]

    $(".results > *").html();

    e.preventDefault();

    $.ajax({
        url: `https://bgg-json.azurewebsites.net/thing/${gameID}`,
        cache: true
    })
        .done(function(data) {
            const returnedData = JSON.parse(data);

            $("#game-title").html(`Title: ${returnedData.name}`);
            $("#release-year").html(`Year: ${returnedData.yearPublished}`);
            $("#average-rating").html(`Avg. Rating: ${returnedData.averageRating}`);
            $("#description").html(`${returnedData.description}`);
        });
});