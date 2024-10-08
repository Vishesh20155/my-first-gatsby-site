import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function AboutPage() {
  return (
    <Layout pageTitle="About">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About us"/>