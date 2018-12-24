import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Data from '../Data/data'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

class Launch extends Component {
  render () {
    return (
      <Fragment>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4> test</h4>
            if (error) return console.log(error)
            return <Data data={data} />
          }}
        </Query>
      </Fragment>
    )
  }
}

export default Launch
