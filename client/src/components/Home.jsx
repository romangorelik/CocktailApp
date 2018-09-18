import React from 'react'

/* Styling imports */
import { Container } from 'semantic-ui-react'

/* Component imports */

/* Module imports */
import BackgroundSlideshow from 'react-background-slideshow'

let image1 = 'https://images.unsplash.com/photo-1438522014717-d7ce32b9bab9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cb1a59dd5a3cecf474342bc3048ea7&auto=format&fit=crop&w=2849&q=80'
let image2 = 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1babec6c62cca17f98a64f8785d3efba&auto=format&fit=crop&w=2850&q=80'
let image3 = 'https://images.unsplash.com/photo-1482349212652-744925892164?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b719ce0351a8dd27a1ecc9f18d9210f&auto=format&fit=crop&w=2600&q=80'

class Home extends React.Component {
  render () {
		return (
			<div>
				<div className='splashPage'>
					<BackgroundSlideshow images={[ image1, image2, image3 ]} />
				</div>
        <div className='appName'>
          Yasigi
        </div>
        <Container text className='descriptionMain'>
          <p className='paragraphMain'>
            Yasigi is a user friendly cocktail and juice application that allows users to easily 
            search up drinks by ingredient or name. It also allows you to filter the different drinks
            by the different types of glasses they are served in. It allows the user to save and view 
            their favorite drinks, as well as delete them if they are no longer interested.
          </p>
        </Container>
			</div>
		)
	}
}

export default Home