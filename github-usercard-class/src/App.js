import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import User from './components/User';


export default class App extends Component {
  state = {
    user: '',
    isSubmitted: false,
    url: '',
    userData: {},
    userExists: false,
    followers: [],
    repos: []
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  searchUser = (username) => {
    this.setState({
      isSubmitted: true,
      url: `https://api.github.com/users/${username}`
    })
  }

  resetHandler = () => {
    this.setState({
      user:'',
      isSubmitted: false,
      url:'',
      userData:{},
      userExists: false
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.isSubmitted !== this.state.isSubmitted) {
      axios.get(this.state.url)
        .then(res => {
          console.log(res.data)
          this.setState({
            userData: res.data,
            userExists: true
          })
        })
        .catch(err => {
          window.alert('No user found, please check spelling and search again', err)
        })
        .then(
          (this.state.userData === {} && this.state.userExists) && axios.get(`${this.state.url}/followers`)
            .then(res => {
              this.setState({
                followers: res.data
              })
            })
            .catch(err => {
              window.alert('Something went wrong try again in 5 minutes', err)
            })
            )
        .then(
          (this.state.userData === {} && this.state.userExists) && axios.get(`${this.state.url}/repos`)
          .then(res => {
            this.setState({
              repos: res.data
            })
          })
          .catch(err => {
            window.alert('Something went wrong try again in 5 minutes', err)
          })
        )
      }}
  

  render() {
    return (
      <div>
        <Header />
        {!this.state.isSubmitted ? 
          <Form user={this.state.user} changeHandler={this.changeHandler} searchUser={this.searchUser} />
        :
        <User userData={this.state.userData} followers={this.state.followers} repos={this.state.repos} resetHandler={this.resetHandler} />
        }
      </div>
    )
  }
}
