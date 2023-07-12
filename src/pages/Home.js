import React from 'react'
import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Quintessa</h2>
        <div className='prompt'>
          <p>
            A software engineer with a passion for people, learning, and creating 
          </p>
          <LinkedIn/>
          <GitHub/>
          <Email/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB,</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript and Java</span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home
