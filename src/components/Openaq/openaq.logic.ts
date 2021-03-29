
const config = {
    URL:'https://api.openaq.org/v2/',
    LATEST: 'latest',
    CITIES: 'cities',
    CITY: 'city=',
    MAX: 'limit=',
}
/**
 * Class component in charge of fetching data from API
 */

class Openaq {
    // methodes to fetch data 
    
    doCity = (city:string) => fetch( `${config.URL+config.LATEST}?${config.CITY}${city}&${config.MAX}1`);
    // TODO: create a methode to fetch mesurements data and linked it with D3.js Comp to render results
    // create a methode to fetch all cities and build autocomplete component for when entrering city names
    doHealth = () => fetch(config.URL+config.CITIES);
                        
}

export default Openaq;