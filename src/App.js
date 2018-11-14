import React, { Component } from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import Footer from './components/Footer/Footer';
import './bootstrap.min.css';
import './style.css';

class App extends Component {

constructor() {
    super();
    this.state = {
      eleve: [],
      searchfield: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        username: '',
        email: '',
        joined: ''
      }
    }
}

loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    username: data.username,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}

componentDidMount() {
  this.fetchUsers()
}

fetchUsers() {
  // Where we're fetching data from
  fetch('http://api.jsonbin.io/b/5bd8bba051e8b664f2c51108')
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(users => {this.setState({ eleve : users})})
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false});
  } else if (route === 'home') {
    this.setState({isSignedIn: true});
  }
  this.setState({route: route});
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })
}

render() {
    const { eleve, searchfield, isSignedIn, route } = this.state;
    const filteredEleve = eleve.filter(eleve => {
      return (
      eleve.firstName.toLowerCase().includes(searchfield.toLowerCase()) ||
      eleve.surname.toLowerCase().includes(searchfield.toLowerCase())
    )
    })
      return !eleve.length ? <h1 className='display-4 text-center pt-5'>Chargement de la liste</h1> :
      (
        <div className='App'>
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          { route === 'home'
          ? <div>
              <div className='container'>
                <Rank username={this.state.user.username} />
                <SearchBox searchChange={this.onSearchChange} />
                <CardList eleve={filteredEleve} />
              </div>
            </div>
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
          }
          <Footer />
        </div>
      );
}

}
export default App;
