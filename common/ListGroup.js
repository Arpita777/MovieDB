import React from 'react'

function ListGroup(props){
  const {items,textProperty,valueProperty,selectedItem,onSelectedItem}=props;
  return(
    
  <ul class="list-group">
    {items.map(item=> 
    <li 
    onClick={()=>onSelectedItem(item)}
    key={item[textProperty]} 
    class={item===selectedItem?"list-group-item active":"list-group-item"}>
    {item[valueProperty]}
    </li>)}
   
  </ul>
  )
 
}
 ListGroup.defaultProps={
    textProperty:"_id",
    valueProperty:"name"
  };
export default ListGroup
