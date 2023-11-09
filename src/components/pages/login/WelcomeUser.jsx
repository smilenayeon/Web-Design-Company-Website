import React from 'react'

function WelcomeUser(props) {
  return (
    <div className="welcome-client">
      Welcome back! Logged in as {props.clientCode}.
    </div>
  )
}

export default WelcomeUser