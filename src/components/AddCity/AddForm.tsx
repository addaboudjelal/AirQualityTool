import React, { Component } from 'react';
import { withOpenaq } from '../Openaq';

const INIT_STATE = {
    city: '',
    error: { message: '' } || null,
    data: null,
}

/**
 * @method onSubmit: fetch and check the existance of the city, once validate we use @method updateList to send that information to the parent Component AddCity
 * @method onChange: update the value for the form and the state
 * @method capiTalize: the majority of the city names are Capitalize, this method make sure that our string is.
 * @method urlFormat: convert space to %20 and capitilaze city name
 * 
 */

class AddFormBase extends Component<any,any> {
    
    constructor(props: any) {
        super(props);
        this.state = { ...INIT_STATE };
    }
    componentDidUpdate(){
        // console.log("ex:", this.state);
    }
    onSubmit = (event:any) => {
        const { city } = this.state;
        this.props.openaq.doCity(this.urlFormat(city))
            .then((result:any) => {
                return result.json();
            })
            .then((data:any) =>{
                if (data.results.length !== 0 && data.results){
                    this.setState({data:data.results, error:null,city:""});
                    this.props.updateList(data.results);
                }else{
                    this.setState({city:"",error: {message:"Entre a Valid City"}})
                }
            })
            .catch((err:any)=>{
                this.setState({error:err});
            });
        event.preventDefault();
    }
    capiTalize = (str:string) => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    urlFormat(str:string){
        let arr = str.split(" ");
        let temp = arr.map(elem => this.capiTalize(elem));
        return temp.join("%20");
    }
    onChange = (event:any) => {
        /** TODO:: Create autocomplete methode:
         * Compare city with remote fetched cities
         */
        this.setState({ [event.target.name]: event.target.value});
    }
    render() { 
        const {city, error} = this.state;
        const isInvalid = city === '';
        return (<>

            <form className="row g-2" onSubmit={this.onSubmit}>
                <div className="col-md-12">
                    <label className="form-label">Add a city: </label>
                    <input className="form-control form-control-sm" name="city" value={city} onChange={this.onChange} type="text" placeholder="Entre a City!"/>
                </div>
                <div className="col-md-12">
                    {error && <div className="text-danger ">{error.message}</div>}
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary my-3" type="submit" disabled={isInvalid}>
                        Add
                    </button>
                </div>
            </form>
        </>);
    }
}

// Composing this Component with Openaq Consumer Context, so all the methode of Openaq fetch Api are available. 
export default withOpenaq(AddFormBase);