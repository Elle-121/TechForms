import React from 'react'

function Layout({ sidebar, main }) {
  const containerStyle = {
    height: '85vh',
    display: 'flex',
  };

  const sidebarStyle = {
    flex: '0 0 41.6667%',
    borderRight: '7px solid #EE9337',
    height: '95%',
  };

  const mainStyle = {
    flex: '0 0 58.3333%',
    padding: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        {sidebar}
      </div>
      <div style={mainStyle}>
        {main}
      </div>
    </div>
  )
}

export default Layout

