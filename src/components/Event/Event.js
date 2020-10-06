import React from 'react';
import { useHistory } from 'react-router-dom';

const Event = (props) => {
  const {name, image} = props.item;

  const history = useHistory()

  const handleClick = (name) => {
    
    history.push(`/register/${name}`)
  }
  
  return (
    <div className="col-md-3">
      <img style={{height:'300px', marginBottom: '10px'}} src={require(`../../images/${image}`)} alt="" />
      <button color="primary" onClick={() => handleClick(name)} > Select: {name} </button>
    </div>
  );
};

export default Event;