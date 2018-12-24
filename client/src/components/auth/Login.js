import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const loginDetails = {
      email,
      password
    }

    // Log the user in...
    axios.post('/api/users/login', loginDetails)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your DevConnector account</p>
              <form noValidate onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    value={email}
                    onChange={this.handleChange}
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                  />
                  {errors.email && (<div className="invalid-feeback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                  <input
                    value={password}
                    onChange={this.handleChange}
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                  />
                  {errors.password && (<div className="invalid-feeback">{errors.password}</div>)}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

loginUser.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(null, { loginUser })(Login);