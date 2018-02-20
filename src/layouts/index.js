import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

class TemplateWrapper extends React.Component {
  render() {
    const {data, children, location} = this.props

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        />
        <Header pathname={location.pathname} />
        <main>
          {children()}
        </main>
      </div>
    )
  }
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
