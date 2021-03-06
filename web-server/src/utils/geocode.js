const request = require("request");

const MAPBOX_API_KEY =
    "pk.eyJ1IjoidGVycmFjb3R0YTU1IiwiYSI6ImNrbHdzcXNzbTE1NnYydXM1c2l1bjlxMTEifQ.pB2jMDYb-Z73U9EMaRAl_w";

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?access_token=${MAPBOX_API_KEY}&limit=1`;

    request({ url: url, json: true }, (error, { body }) => {
        const longitude = body.features[0].center[0];
        const latitude = body.features[0].center[1];
        const location = body.features[0].place_name;
        if (error) {
            callback("geocode: unable to connect", undefined);
        } else if (body.features.length === 0) {
            callback(
                "geocode: unable to get longitude and latitude",
                undefined
            );
        } else {
            callback(undefined, {
                longitude,
                latitude,
                location,
            });
        }
    });
};
module.exports = geocode;
