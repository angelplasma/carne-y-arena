import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title='Carne y Arena'
      meta={[
        { name: 'description', content: 'Sample description here' },
      ]}
    />
    <Header nav={data.allNavYaml.edges} />
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query NavQuery {
    allNavYaml {
      edges {
        node {
          line1
          line2
          slug
        }
      }
    }
  }
`
