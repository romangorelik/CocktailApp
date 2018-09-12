import React from 'react'

/* Styling imports */
import BackgroundSlideshow from 'react-background-slideshow'

/* Component imports */

let image1 = 'https://images.unsplash.com/photo-1438522014717-d7ce32b9bab9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cb1a59dd5a3cecf474342bc3048ea7&auto=format&fit=crop&w=2849&q=80'
let image2 = 'https://images.unsplash.com/photo-1518619660967-1d65afe62056?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23cf3556716d5db7c4a6210bb98d8150&auto=format&fit=crop&w=2850&q=80'
let image3 = 'https://images.unsplash.com/photo-1482349212652-744925892164?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b719ce0351a8dd27a1ecc9f18d9210f&auto=format&fit=crop&w=2600&q=80'

class App extends React.Component {
  render () {
		return (
			<div>
				<div className='splashPage'>
					<BackgroundSlideshow images={[ image1, image2, image3 ]} />
				</div>
				<div className='centeredText'>
					<h1>Hello World!</h1>
				</div>
			</div>
		)
	}
}

export default App

