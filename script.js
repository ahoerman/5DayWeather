$(document).ready(function () {

    $(".citySearch").on("click", function () {
        event.preventDefault();

        let city = $(".cityInput").val();
        let newCity = $("<li>").text(city);
        newCity.attr("class", "list-group-item");
        $(".cityList").prepend(newCity);

        let queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=${city},us&appid=edfc2e776c5a7d1ec7d7e8c274a8283b`

        $.get(queryURL).then(function (response) {
            console.log(response);
            console.log(response.list[0].main.temp);

            $(".currCity").text("Current Weather " + response.city.name);
            var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
            $(".temp").text("Temperature:       " + Math.floor(tempF) + "°F");
            $(".humid").text("Humidity:     " + response.list[0].main.humidity + "%");
            $(".wind").text("Wind Speed:        " + response.list[0].wind.speed + " mph");
        })

        $(".cityInput").val("");
    });

});