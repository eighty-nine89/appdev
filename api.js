import sanityClient from './sanity';
let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getFeaturedRestaurants = ()=>{
    return sanityQuery(`
        *[_type=='featured']{
            ...,
            resturants[]->{
            ...,
            dishes[]->{
                ...
            },
            type->{
                name
            }
            }
        }
    `)
}

export const getCategories = ()=>{
    return sanityQuery(`
        *[_type == 'category']
    `);
}

export const getFeaturedResturantById = id=>{
    return sanityQuery(`
        *[_type == 'featured' && _id == $id] {
            ...,
            resturants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `, {id})
}