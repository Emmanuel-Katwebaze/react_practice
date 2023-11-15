import React from 'react'

const Header = ({ title }) => {
    /* can use props then after use props.title */
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: "Default Title",
}

export default Header