import React from 'react'
import Helmet from 'react-helmet'

import { TICKETS_URL } from '../../lib/constants'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.scss'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      htmlAttributes={{
        lang: 'en',
        itemscope: undefined,
        itemtype: `http://schema.org/WebSite`,
      }}
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
        {
          property: 'og:image',
          content: 'https://carneyarenadc.com/og-image.jpg',
        },
      ]}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: `{
            '@context': 'http://schema.org/',
            '@type': 'ExhibitionEvent',
            'name': 'Carne y Arena',
            'director': 'Alejandro G. Iñárritu',
            'startDate': '2018-03-09',
            'endDate': '2018-03-31',
            'description': '${data.site.siteMetadata.description}',
            'location': {
              '@type': 'Place',
              'name': 'Trinidad Baptist Church',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Washington',
                'addressRegion': 'DC',
                'postalCode': '20002',
                'streetAddress': '1611 Benning Rd NE'
              },
              'hasMap': 'https://www.google.com/maps/place/1611+Benning+Rd+NE,+Washington,+DC+20002'
            },
            'offers': {
              '@type': 'Offer',
              'url': '${TICKETS_URL}'
            },
          }`
        }
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
