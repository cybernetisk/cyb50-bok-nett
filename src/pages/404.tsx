import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

export default function NotFoundPage () {
  return <Layout>
    <SEO title="404: Side ikke funnet"/>
    <h1>Fant ikke siden</h1>
    <p>Du har kommet til en side som ikke finnes... <Link to="/">Gå til forsiden</Link></p>
  </Layout>
}
