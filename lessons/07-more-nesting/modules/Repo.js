import React from 'react'

export default React.createClass({
  render() {
    console.log('this.props.params ==>', this.props.params)
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})
