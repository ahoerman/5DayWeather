$(document).ready(function () {

    $(".citySearch").on("click", function () {
        event.preventDefault();

        let city = $(".cityInput").val();
        let newCity = $("<li>").text(city);
        newCity.attr("class", "list-group-item");
        newCity.attr("data-value", city);
        $(".cityList").prepend(newCity);

        let queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=${city},us&appid=edfc2e776c5a7d1ec7d7e8c274a8283b`

        $.get(queryURL).then(function (response) {
            $(".currCity").text("Current Weather " + response.city.name);
            var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
            $(".temp").text("Temperature:       " + Math.floor(tempF) + "°F");
            $(".humid").text("Humidity:     " + response.list[0].main.humidity + "%");
            $(".wind").text("Wind Speed:        " + response.list[0].wind.speed + " mph");

            let day = 1
            for (i=7; i < 40;) {
                console.log(day);
                console.log(i);
                console.log("Temperature:       " + Math.floor((response.list[i].main.temp - 273.15) * 1.80 + 32) + "°F");
                // let dayDiv = $(".day").attr("data-value", day);
                // let dayTemp = $("p.dayTemp").attr("data-value", day);
                // dayTemp.text("Temperature:       " + Math.floor((response.list[i].main.temp - 273.15) * 1.80 + 32) + "°F");
                // let dayHumid = $("p.dayHumid").attr("data-value", day);
                // dayHumid.text(("Humidity:     " + response.list[i].main.humidity + "%"));
                // dayDiv.append(dayTemp, dayHumid);
                day++;
                i = i + 8;
            }
        })

        $(".cityInput").val("");
});

    $(document).on("click", ".list-group-item", function(){
        console.log(`${$(this).text()}`);
    })


});