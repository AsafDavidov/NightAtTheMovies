import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {Grommet} from 'grommet';

// popcorn png image: https://www.flaticon.com/free-icon/popcorn_705062

// Grommet theme - modify & use if we want to change styling on the form
// const theme = {
//   global: {
//     font: {
//       family: 'Roboto',
//       size: '14px',
//       height: '20px',
//     },
//   },
// };



function Login(props) {
  return (

    <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://image.flaticon.com/icons/svg/705/705062.svg' className="App-logo "/> Log-in to your account
          </Header>
          <Form size='large' onSubmit={props.handleLogin}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />

              <Button color='teal' fluid size='large'>
                Login/SignUp
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>

  )
}
// function Login() {
//   return (
//     <h1>Login Page</h1>
//   )
// }

export default Login;
