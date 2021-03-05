const request = require("request");
const chalk = require("chalk");

const WEATHERSTACK_API_KEY = "c0f95c43b26edd8f79e7629575c7aec0";
const MAPBOX_API_KEY =
    "pk.eyJ1IjoidGVycmFjb3R0YTU1IiwiYSI6ImNrbHdzcXNzbTE1NnYydXM1c2l1bjlxMTEifQ.pB2jMDYb-Z73U9EMaRAl_w";

const weatherUrl = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=37.8267,-122.4233`;

request({ url: weatherUrl, json: true }, (error, { body }) => {
    if (error) {
        console.log(chalk.bgRed("unable to connect"));
    } else if (body.error) {
        console.log(chalk.bgRed("please specify valid location"));
    } else {
        console.log(
            chalk.yellow.inverse(
                `${body.location.name}, ${body.location.region} temp is: ${body.current.temperature}ºC`
            )
        );
    }
});


const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${MAPBOX_API_KEY}&limit=1`;

request({ url: geocodeUrl, json: true }, (error, { body }) => {
    const longitude = body.features[0].center[0];
    const latitude = body.features[0].center[1];
    if (error) {
        console.log(chalk.bgRed("unable to connect"));
    } else if (body.features.length === 0) {
        console.log(chalk.yellow.inverse("unable to find location"));
    } else {
        console.log(chalk.bgGreen("logitude: "), chalk.bgGreen(longitude));
        console.log(chalk.bgGreen("latitude: "), chalk.bgGreen(latitude));
    }
});
