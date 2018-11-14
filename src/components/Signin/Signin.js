import React from 'react';

class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://dry-anchorage-44272.herokuapp.com/signin', {
      method: 'post',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email : this.state.signInEmail,
        password : this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
        if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

render() {
  const { onRouteChange } = this.props;
    return (
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 text-center'>
            <h1 className='pb-3'>Veuillez vous connecter</h1>
          <div className='form-group'>
            <label>Nom d'utilisateur</label>
            <input onChange={this.onEmailChange} type='email' className='form-control' id='email' name='email' autoComplete="off"/>
          </div>
          <div className='form-group'>
            <label>Mot de passe</label>
            <input onChange={this.onPasswordChange} type='password' className='form-control' id='password' name='password' autoComplete="off"/>
          </div>
            <button onClick={this.onSubmitSignIn} type='submit' className='btn btn-success btn-block mb-2'>Se connecter</button>
            <p onClick={() => onRouteChange('register')} className='text-dark pointer'>M'inscrire</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
