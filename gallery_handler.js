const all_galleries = (data_provider,app) => {
    app.get('/api/galleries', (req,resp) => { resp.json(data_provider.get_gallery_data()) } );
}

const gallery_country =  (data_provider,app) => {
    app.get('/api/galleries/:country', (req,resp) => { 
        const data = data_provider.get_gallery_data()
        const response = data.filter((item) => item.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());

        if(response.length == 0){
            resp.json("Request did not return any data.")
        }
        else{
            resp.json(response) ;
        }
        
    });
        
}

module.exports = {all_galleries, gallery_country};