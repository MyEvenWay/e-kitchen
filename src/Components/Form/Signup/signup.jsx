import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useStyles } from '../style/formStyle'

import { Link } from 'react-router-dom'

import axios from 'axios'
import { SERVER_URL } from '../../../store'


function Signup(){
  const classes = useStyles()
  const [ signupUser, setSignupUser ] = useState({
    signupUsername:"",
    signupEmail:"",
    signupPhone:"",
    signupPassword:"",
    signupPasswordAgain:"",
  })
    // SIGN UP
    const handleSignupUser = e => {
      const { value, name } = e.target
      setSignupUser({
        ...signupUser,
        [name]:value
      })
    }

    const handleSignupUserAxios = async () => {

      try {
        await axios.post( `${ SERVER_URL }/user/signup`, { ...signupUser } )
          .then( res => console.log( res ) )
          .catch( err => console.log( err ) )      

      } catch (err) {
        if( err ) console.log( err )
      }
    }

  return (
    <div className={ classes.cover__signup } >
      <Grid className={ classes.cover__signup__container }>
        <Grid className={ classes.cover__signup__container_header }>
          <Typography
            className={ classes.cover__signup__container_header_title }
            variant={"h4"}
          >SIGN UP</Typography>
        </Grid>
        <Grid className={ classes.cover__signup__container_ }>
          <form
            className={ classes.cover__signup__container_form }
            noValidate
            autoComplete="off"
          >
            <TextField
              className={ classes.cover__signup__container_form_ }
              id="signupUsername"
              type={"text"}
              label="Username"
              variant="outlined"
              name={"signupUsername"}
              value={ signupUser.signupUsername }
              onChange={ e => handleSignupUser(e) }
            />
            <TextField
              className={ classes.cover__signup__container_form_ }
              id="signupEmail"
              type={"email"}
              label="Email"
              variant="outlined"
              name={"signupEmail"}
              value={ signupUser.signupEmail }
              onChange={ e => handleSignupUser(e) }
            />
            <TextField
              className={ classes.cover__signup__container_form_ }
              id="signupPhone"
              type={"number"}
              label="Phone number"
              variant="outlined"
              name={"signupPhone"}
              value={ signupUser.signupPhone }
              onChange={ e => handleSignupUser(e) }
            />
            <TextField
              className={ classes.cover__signup__container_form_ }
              id="signupPassword"
              type={ "password" }
              label="Password"
              variant="outlined"
              name={"signupPassword"}
              value={ signupUser.signupPassword }
              onChange={ e => handleSignupUser(e) }
            />
            <TextField
              className={ classes.cover__signup__container_form_ }
              id="signupPasswordAgain"
              type={ "password" }
              label="Password again"
              variant="outlined"
              name={"signupPasswordAgain"}
              value={ signupUser.signupPasswordAgain }
              onChange={ e => handleSignupUser(e) }
            />
            <Grid className={ classes.cover__signup__container_button }>
              <Button
                className={ classes.cover__signup__container_button_clear }
                variant="contained"
                color="primary"
                onClick={ () => {
                  setSignupUser({
                    signupUsername:"",
                    signupEmail:"",
                    signupPhone:"",
                    signupPassword:"",
                    signupPasswordAgain:"",
                  })
                } }
              >
                Clear
              </Button>
              <Button
                className={ classes.cover__signup__container_button_signup }
                variant="contained"
                color="primary"
                onClick={ handleSignupUserAxios }
              >
                Sign up
              </Button>
            </Grid>
            <Grid className={ classes.cover__signup__container_links }>
              <Typography className={ classes.cover__signup__container_links_typography }>Have you registered?</Typography>
              <Link className={ classes.cover__signup__container_links_link } to={"/login"}>LOGIN</Link>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup