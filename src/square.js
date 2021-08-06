import React from 'react';

class Square extends React.Component{
    render (){
        return (
            <button className="Square">
                {this.props.value}
            </button>
        );
            
    }
}

export default Square