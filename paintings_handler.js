const all_paintings = (data_provider,app) => {
    app.get('/api/painting', (req,resp) => { resp.json(data_provider.get_paintings_data()) } );
}

const paintings_id = (data_provider,app) => {

    app.get('/api/painting/:id', (req,resp) => { 
        const data = data_provider.get_paintings_data();
        const response = data.filter((item) => item.paintingID == req.params.id)
        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
    } );

}

const paintings_gal_id = (data_provider,app) => {

    app.get('/api/painting/gallery/:id', (req,resp) => { 
        const data = data_provider.get_paintings_data();
        const response = data.filter((item) => item.gallery.galleryID == req.params.id) 
        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
    } );
}

const paintings_artists_id = (data_provider,app) => {

    app.get('/api/painting/artist/:id', (req,resp) => { 
        const data = data_provider.get_paintings_data();
        const response = data.filter((item) => item.artist.artistID == req.params.id);
        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
        
    } );
}

const paintings_year = (data_provider,app) => {

    app.get('/api/painting/year/:min/:max', (req,resp) => { 
        const data = data_provider.get_paintings_data();
        const response = data.filter((item) => item.yearOfWork >= req.params.min && item.yearOfWork <= req.params.max)

        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
    } );
    
}

const paintings_title = (data_provider,app) => {

    app.get('/api/painting/title/:text', (req,resp) => { 
        const data = data_provider.get_paintings_data();
        const response = data.filter((item) => item.title.toLowerCase().includes(req.params.text.toLowerCase()));

        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
        
    });
}

const paintings_color = (data_provider,app) => {

    app.get('/api/painting/color/:name', (req,resp) => { 
        const data = data_provider.get_paintings_data();
        const response = data.filter((item) => {
            for(let i = 0; i < 6; i++){
                if(item.details.annotation.dominantColors[i].name.toLowerCase() == req.params.name.toLowerCase()){
                    return true;
                }
            }
            return false;
        });

        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
       
    });
}



module.exports = {all_paintings, paintings_id, paintings_gal_id,paintings_artists_id,paintings_year,paintings_title, paintings_color};