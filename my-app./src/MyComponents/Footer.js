// React arrow based function
import React from 'react'
// We can import ./footer.css if we are making css on seperate basis.
// React has lot of modules which helps in writing component scope css
// import './footer.css'

const Footer = () => {
  // making object name footerStyle and added all the element styles
  // let footerStyle = {
  //   position: "relative",
  //   top: "10vh",
  //   width: "100%",
  //   border: "2px solid red",

  
  return (
    <footer className = "bg-dark text-light py-3">
      <p className = "text-center">                              
      Copyright &copy; MyTodosList.com
      </p>
      
      
    </footer>
  )
}

export default Footer
