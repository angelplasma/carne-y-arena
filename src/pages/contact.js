import React from 'react'

import styles from './contact.module.scss'

const renderImageBox = (node) => {
  return (
    <li className="box" styleName="image-box" style={{backgroundImage: `url(${node.url})`}}>
      <a href={node.url} className="button">Download Press Image</a>
    </li>
  )
}

const renderArticleBox = (node, index) => {
  return (
    <li className="box" styleName="custom-box" key={index}>
      <h3>{node.title}</h3>
      <p>{node.summary}</p>
      <a href={node.url} className="button">Read More</a>
    </li>
  )
}

const renderBox = ({node}, index) => {
  if (node.imagedownload) {
    return (
      renderImageBox(node)
    )
  } else {
    return (
      renderArticleBox(node, index)
    )
  }
}

const ContactPage = ({data}) => (
  <div className="container">
    <h1 className="screenreader-only">Contact</h1>

    <div styleName="contacts">
      <p>
        Email:<br/>
        <a href="mailto:info@carneyarenadc.com">info@carneyarenadc.com</a>
      </p>

      <p>
        For press inquiries, please contact:<br />
        Kristin Guiter<br />
        Sutton<br />
        <a href="mailto:kristin@suttonpr.com">kristin@suttonpr.com</a>
      </p>
    </div>

    <a href="/Carne y Arena DC Press Release 3 26 2018.pdf" className="button">View Press Release</a>

    <h2 className="screenreader-only">Articles</h2>

    <div className="grid" styleName="custom-grid">
      {data.allArticlesYaml.edges.map(renderBox)}
    </div>
  </div>
)

export default ContactPage

export const query = graphql`
  query ArticleQuery {
    allArticlesYaml {
      edges {
        node {
          title
          imagedownload
          summary
          url
        }
      }
    }
  }
`
