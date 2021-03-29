import React, {useState, useEffect} from 'react'
import AddForm from './AddForm';
import ListItem from './ListItem';
import {Row,Col} from 'react-bootstrap';

// TODO: create a persistan state
/**
 * WE store our state, current data in the localstorage, in order to keep the user last info ( cities selected :
 * @param initianState 
 * @returns Custom useState
 */
const usePersistentState = (initianState:any) => {
    const storedData:any = localStorage.getItem("stored");
    const [value, setValue] = useState(JSON.parse(storedData) || initianState);
    useEffect(() => {
        localStorage.setItem("stored", JSON.stringify(value));
    }, [value]);
    return [value,setValue];
}

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
        console.log(citylist.data[index]);
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