import NavBar from './NavBar'
import Home from './Home'
import About from './About'

// pass this data down as props to the child component(s) that need it!
import user from '../data/user'
console.log(user)

const App = () => {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
		</div>
	)
}

export default App
