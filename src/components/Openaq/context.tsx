import React from 'react';

/**
 * using CreateContext hook we have a Provider and Consumer Component
 * enable us to update/distribute data a cross of the app
 */

const OpenaqContext = React.createContext<any|null>(null);

export const withOpenaq = (Comp:any) => (props:any) => (
    
    <OpenaqContext.Consumer>
        { openaq => <Comp {...props} openaq = { openaq } />}
    </OpenaqContext.Consumer>
);

export default OpenaqContext;