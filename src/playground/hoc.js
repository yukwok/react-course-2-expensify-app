// higer order component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    console.log(props);

    return (
        <div>
          <h1>info </h1>
          <p>this is info para .{props.info}</p>
        </div>
    );
    
};



const HigerOrderComponent = (C) =>{
    return (
        (props) => (
            <div>
                { props.isAdmin && <p>ADMIN!!!</p>}
                <p>Inside HigerOrderComponent.</p>
                <C {...props} />

            </div>
        )

    );

};

const AdminReadWrite = HigerOrderComponent(Info);


ReactDOM.render( <AdminReadWrite isAdmin={true} info="sdfafsafsgdfgsfsfsf"/>, document.getElementById('app'));