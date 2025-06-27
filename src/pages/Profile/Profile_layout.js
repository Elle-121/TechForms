import React from 'react'

function Layout({ sidebar, main }) {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
  };

  const sidebarStyle = {
    flex: '0 0 41.6667%',
    borderRight: '5px solid #ee9377',
    padding: '1rem',
    height: '75%',
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

