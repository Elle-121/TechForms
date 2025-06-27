import React from 'react'
import Header from "../../components/Header"
import Layout from "../../pages/Profile/Profile_layout"

function ProfileContainer({ headerVisible = true, fluid, loading = false, activeHeader, style, sidebar, main }) {
  return (
    <React.Fragment>
      {headerVisible && <Header activeHeader={activeHeader} />}
      <Layout
        fluid={fluid}
        loading={loading}
        style={style}
        sidebar={sidebar}
        main={main}
      />
    </React.Fragment>
  );
}

export default ProfileContainer


