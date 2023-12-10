const express = require("express");
const app = express();
const data_provider = require('./data_provider');
const artist_handler = require('./artist_handler');
const gallery_handler = require('./gallery_handler');
const paintings_handler = require('./paintings_handler');

artist_handler.all_artists(data_provider,app);
artist_handler.artist_country(data_provider,app);
gallery_handler.all_galleries(data_provider,app);
gallery_handler.gallery_country(data_provider,app);
paintings_handler.all_paintings(data_provider,app);
paintings_handler.paintings_id(data_provider,app);
paintings_handler.paintings_gal_id(data_provider,app);
paintings_handler.paintings_artists_id(data_provider,app);
paintings_handler.paintings_year(data_provider,app);
paintings_handler.paintings_title(data_provider,app);
paintings_handler.paintings_color(data_provider,app);

let port = 3000;
app.listen(port, () => {
 console.log("Server running at port= " + port);
});

