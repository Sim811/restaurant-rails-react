import React from "react";
import {Header, Button} from "semantic-ui-react";

const Menu = ({id, name, deleteMenu }) => (
  <div>
    <div>
      <Header as="h2" style={{ marginLeft: "15px" }}>{name}</Header>
    </div>
    
      <Button color="yellow" style={{ marginLeft: "15px"}}>View Menu</Button>
      <Button color="pink">Edit</Button>
      <Button color="red" onClick={() => deleteMenu(id)}>Delete</Button>
    
      
  </div>
)






export default Menu;