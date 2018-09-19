import React from 'react'

/* Styling imports */
import { Input, Icon, Button, Image, Modal, Header } from 'semantic-ui-react'

/* API Calls */
import axios from 'axios'

/* Module imports */


class Search extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      drinks: [],
      drink: ''
    }
  }

  fetchDataByLiquour(liquour) {
    axios.post(`/search/${liquour}`)
      .then(res => {
        this.setState({
          drinks: res.data
        })
      })
      .catch(err => console.error(err))
  }

  saveFavorites(drink) {
    axios.post('/save', drink)
      .then(res => console.log('Saved'))
      .catch(err => console.error(err))
  }

  onChange(e) {
    this.setState({drink: e.target.value})
  }

  render () {
    return (
      <div>
        <div className='banner'></div>
        <Input className='searchBar' icon={<Icon name='search' inverted circular link onClick = {() => {this.fetchDataByLiquour(this.state.drink)}}/>} placeholder='Search...' onChange={(e) => {this.onChange(e)}}/>
        <Image.Group size='large' style={{marginTop: '2%', marginLeft: '2.5%'}}>
          {this.state.drinks.map((drink, ind) => {
            return (
              <div style={{display: 'inline'}} key={ind}>
                <Modal trigger={<Image src={drink.strDrinkThumb}/>}>
                  <Modal.Header style={{textAlign: 'center'}}>{drink.strDrink}</Modal.Header>
                  <Modal.Content image>
                    <Image style={{height: '30%', width: '30%'}}src={drink.strDrinkThumb} />
                    <Modal.Description>
                      <p>{drink.strInstructions}</p>
                      <ul>
                        <li>{drink.strIngredient1}</li>
                        <li>{drink.strIngredient2}</li>
                        {drink.strIngredient3 && <li>{drink.strIngredient3}</li>}
                        {drink.strIngredient4 && <li>{drink.strIngredient4}</li>}
                      </ul>
                      <Header>{drink.strGlass}</Header>
                      <Button style={{float: 'right'}} onClick={() => this.saveFavorites(drink)}>Save This Drink</Button>
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

export default Search
