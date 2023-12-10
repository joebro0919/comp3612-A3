const all_artists = (data_provider,app) => {
    app.get('/api/artists', (req,resp) => { resp.json(data_provider.get_artist_data()) } );
}

const artist_country =  (data_provider,app) => {
    app.get('/api/artists/:country', (req,resp) => { 
        const data = data_provider.get_artist_data();
        const response = data.filter((item) => item.Nationality.toLowerCase() == req.params.country.toLowerCase());

        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
        
    });
}

module.exports = {all_artists, artist_country};