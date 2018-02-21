import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.scss'

const TemplateWrapper = ({ data, children, location }) => (
  <div>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
      ]}
    />
    <Header />

    <main>
      {children()}
    </main>

    <Footer />
  </div>
)

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
