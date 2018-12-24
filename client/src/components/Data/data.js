import React, { Component } from 'react'

class Data extends Component {
  render () {
    const { data } = this.props
    console.log(data)

    // const test = data.launches.map(z => z)

    // var FilterTitle = data.launches.map(data => {
    //   return data
    // })

    // return <div>{FilterTitle}</div>

    // return

    //     {data.launches.map(post, launches.flight_number) => (
    //       <div key={launches.flight_number} >
    //            {post}
    //       </div>
    //     ))}

    return <div>test</div>
  }
}

export default Data
