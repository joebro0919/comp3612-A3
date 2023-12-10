const fs = require('fs');
const path = require("path");

const artistPath = path.join(__dirname, "data", "artists.json" );
const galleryPath = path.join(__dirname, "data", "galleries.json" );
const paintingsPath = path.join(__dirname, "data", "paintings-nested.json" );
// get data using conventional Node callback approach
let artists;
let gallery;
let paintings;

fs.readFile(artistPath, (err,data) => {
    if (err)
    console.log('Unable to read json data file');
    else
    artists = JSON.parse(data);
});

fs.readFile(galleryPath, (err,data) => {
    if (err)
    console.log('Unable to read json data file');
    else
    gallery = JSON.parse(data);
});


fs.readFile(paintingsPath, (err,data) => {
    if (err)
    console.log('Unable to read json data file');
    else
    paintings = JSON.parse(data);
});

function get_artist_data(){
    return artists;
}

function get_gallery_data(){
    return gallery;
}

function get_paintings_data(){
    return paintings;
}

module.exports = {get_artist_data,get_gallery_data,get_paintings_data};