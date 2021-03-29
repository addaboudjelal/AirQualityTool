import React, {useState, useEffect} from 'react'
import AddForm from './AddForm';
import ListItem from './ListItem';
import {Row,Col} from 'react-bootstrap';

// TODO: create a persistan state
/**
 * WE store our state in the localstorage, in order to keep the user lastest info (cities selected)
 * @param initianState 
 * @returns [value,setValue]
 */
const usePersistentState = (initianState:any) => {
    const storedData:any = localStorage.getItem("stored");
    const [value, setValue] = useState(JSON.parse(storedData) || initianState);
    useEffect(() => {
        localStorage.setItem("stored", JSON.stringify(value));
    }, [value]);
    return [value,setValue];
}

/**
 * @state [citylist, updateCityList]: we use a custom hook that update the localstorage with the current state of the app so we can keep the data (lost connexion, bugs, close browser....)
 * @method updateList: each time we add a city in the AddForm Component we automatically update the state of this Component
 * @method removeItem: we remove the city from the state
 * @returns the addForm and List of cities
 */

const AddCity = () => {
    const [citylist, updateCityList]:any = usePersistentState({data:[],error:null});

    const updateList = (cityInfo:any) => {
        if (citylist.data && !citylist.data.find((elem:any)=>elem.city === cityInfo[0].city)){
            updateCityList({ data: [...citylist.data,...cityInfo], error:null});
        }else{
            updateCityList({ data: citylist.data,error:"this city already exist!"});
        }
    }
    const removeItem = (index:number) => {
        // console.log(citylist.data[index]);
        citylist.data.splice(index, 1);
        updateCityList({data: citylist.data});
    }
    
    return (<>
        <Col sm={12}>
            <Row>
                <Col>
                    <AddForm updateList={updateList}/>
                    { citylist.error && <p>{citylist.error}!</p>}
                </Col>
            </Row>
            <ListItem dataList={citylist.data} removeItem={removeItem}/>
        </Col>
    </>);
}

export default AddCity;