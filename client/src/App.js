import React from 'react';
import axios from "axios";
import MenuList from "./components/MenuList";
import {Container} from "semantic-ui-react";

class App extends React.Component {
  state = { menus: [] }

  componentDidMount(){
    axios.get("/api/menus")
      .then( res => {
        
        this.setState({menus: res.data})
      })
      .catch ( err => {
        
        console.log(err)
      })
  };

  addMenu = () => {
    axios.post("/api/menus", { name })
    .then( res => {
      const { menus } = this.state;
      this.setState({ menus: [...menus, res.data ]})
    })

  };

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map( t =>{
        if (t.id === id )
          return res.data;
        return t;
      })
      this.setState({ menus })
    })
  };

  deleteMenu = (id) => {
    debugger
    // axios.delete(`/api/menus/${id}`)
    // .then( res => {
    //   this.setState({ menus: menus.filter(t => t.id !==id) })
    // })
    // .catch( err => {
    //   console.log(err)
    // })
  };

  render() {
    return (
      <Container style={{ padding: "25px"}}>
        <MenuList 
          menus={this.state.menus}
          />
      </Container>
    )
  }
}

export default App;
