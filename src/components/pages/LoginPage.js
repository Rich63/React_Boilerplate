import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate_React_App</h1>
      <p>This is the boilerplate for a React Application with google authentication, Firebase db, redux</p>
      <button className='button' onClick={ startLogin }>Login with Google</button>
    </div>
    
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)