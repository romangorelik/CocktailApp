import React from 'react'

/* API calls */
import axios from 'axios'

/* Styling imports */
import { Input, Icon, Button, Image, Modal, Header } from 'semantic-ui-react'

class Favorites extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      savedFavorites: []
    }
    this.setFavorites = this.setFavorites.bind(this)
  }

  componentDidMount () {
    this.setFavorites()
  }

  setFavorites () {
    axios.get('/save')
      .then(res => {
        this.setState({
          savedFavorites: res.data
        })
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }

  deleteOnClick(name) {
    axios.delete(`/save/${name}`)
      .then(res => {
        console.log('client new data', res)
      })
      .catch(err => console.error(err))
  }


  render () {
    return (
      <div>
        <div className='banner'></div>
        <Input className='searchBar' style={{visibility: 'hidden'}} icon={<Icon name='search' inverted circular link/>} placeholder='Search...'/>
        <Image.Group size='large' style={{marginTop: '2%', marginLeft: '2.5%'}}>
          {this.state.savedFavorites.map((drink, ind) => {
            return (
              <div style={{display: 'inline'}} key={ind}>
                <Modal trigger={<Image src={drink.image}/>}>
                  <Modal.Header style={{textAlign: 'center'}}>{drink.name}</Modal.Header>
                  <Modal.Content image>
                    <Image style={{height: '30%', width: '30%'}}src={drink.image} />
                    <Modal.Description>
                      <p>{drink.instructions}</p>
                      <Header>{drink.glass}</Header>
                      <Button style={{float: 'right'}} onClick={() => {this.deleteOnClick(drink.name); this.setFavorites()}}>Delete This Drink</Button>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </div>
            )
          })}
        </Image.Group>
      </div>
    )
  }
}

export default Favorites

