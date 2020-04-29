const apiKey ='7OkHwf9KoIZvVK_Sk9GRl5alOMENSnTYTmTYsimPrfxTKWHTihnTb3KbnAQ_fnIDIsUmhgZ6cl_6DhFx-ZWzKoY5-puRbo7faszFhqHn8DKO0NLZvqECMVRq2P6nXnYx';

const Yelp ={

    searchYelp(term,location, sortBy) {

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{

            headers:{

                Authorization : `Bearer ${apiKey}`,
            },
      }).then((response)  => {

         return response.json();


      }).then((jsonResponse) => {

        if (jsonResponse.businesses){

                return jsonResponse.businesses.map(business => ({

               

                            id: business.id,
                            imageSrc: business.image_url,
                            name:business.name,
                            address:business.location.address,
                            city:business.location.city,
                            state:business.location.state,
                            zipCode:business.location.zipCode,
                            category:business.categories[0].title,
                            rating:business.rating,
                            reviewCount:business.review_count

                    
        }));
        }
      });

    }


};

export default Yelp;