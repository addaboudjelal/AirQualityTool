import React from 'react';

const OpenaqContext = React.createContext<any|null>(null);

export const withOpenaq = (Comp:any) => (props:any) => (
    
    <OpenaqContext.Consumer>
        { openaq => <Comp {...props} openaq = { openaq } />}
    </OpenaqContext.Consumer>
);

export default OpenaqContext;