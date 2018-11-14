import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('https://dry-anchorage-44272.herokuapp.com/register', {
      method: 'post',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email : this.state.email,
        password : this.state.password,
        username : this.state.username
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }

  render () {
    return (
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 text-center'>
            <h1 className='pb-3'>Veuillez vous enregistrer</h1>
          <div className='form-group'>
            <label>Nom d'utilisateur</label>
            <input onChange={this.onUsernameChange} type='text' className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Adresse email</label>
            <input onChange={this.onEmailChange} type='email' className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Mot de passe</label>
            <input onChange={this.onPasswordChange} type='password' className='form-control'/>
          </div>
            <button onClick={this.onSubmitRegister} type='submit' className='btn btn-success btn-block mb-2 pointer'>S'enregistrer</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
