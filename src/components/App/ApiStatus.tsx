import React, { Component } from 'react'
import { withOpenaq } from '../Openaq';

const INIT_STATE = {
    check: false,
    error: { message:"" } || null,
    data: null,
}

/**
 * Simple example of a Component that would be able to check the status of the API (TODO: update this status every 1s)
 */

class ApiStatus extends Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {...INIT_STATE};
    }
    componentDidMount(){
        this.props.openaq.doHealth()
            .then((result:any) => {
                this.setState({check:result.ok});
                return result.json()
            })
            .then((data: any) => {
                console.log("Health", data);
                this.setState({data});
            })
            .catch((err:any) => this.setState({error:err}));
    }
    render(){
        const { check, error } = this.state;
        return(<>
            <p>Server Status: { check?"Online":"No connection"}</p>
            { error && <p>{error.message}</p> }
        </>)
    }
}

export default withOpenaq(ApiStatus);