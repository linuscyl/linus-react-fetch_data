import React, { Component } from 'react'

class FetchRandomUser extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      person: []
    }
  }


  async componentDidMount() {
    const url = "https://api.randomuser.me/"
    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data.results[0])
    this.setState({
      person: data.results[0],
      loading: false
    })
  }

  render() {
    return (
      <div>
        {(this.state.loading) ? (<div>loading...</div>) :
          (<div>
            <h3>{this.state.person.name.first} {this.state.person.name.last}</h3>
            <img src={this.state.person.picture.large} alt="other" />
          </div>)}
        {/* {this.state.person.name.first} */}
      </div>
    );
  }
}
export default FetchRandomUser
