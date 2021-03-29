
const config = {
    URL:'https://api.openaq.org/v2/',
    LATEST: 'latest',
    CITIES: 'cities',
    CITY: 'city=',
    MAX: 'limit=',
    PING: 'ping',
}

class Openaq {
    // methodes to fetch data with 
    
    doHealth = () => fetch(config.URL+config.CITIES);
    doCity = (city:string) => fetch( `${config.URL+config.LATEST}?${config.CITY}${city}&${config.MAX}1`);
                        
}

export default Openaq;