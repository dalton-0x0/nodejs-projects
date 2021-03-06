const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
const chalk = require("chalk");

if (!address) {
    console.log(chalk.bgYellow("please provide an address"));
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(chalk.bgGreen(location));
            console.log(chalk.bgGreen(forecastData));
        });
    });
}
