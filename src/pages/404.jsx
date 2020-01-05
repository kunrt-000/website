import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout notIndex={true} title="404: Not Found" subtitle="Cannot find the page you requested. Please check if you've used the correct link.">
    <SEO title="404: Not found" />
  </Layout>
)

export default NotFoundPage
