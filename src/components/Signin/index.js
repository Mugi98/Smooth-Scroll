import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, IconLogo, Text } from './SigninElements'

function Signin() {
    return (
        <div>
            <Container>
                <FormWrap>
                    <IconLogo to="/"> Jackie</IconLogo>
                    <FormContent>
                        <Form action="#">
                            <FormH1>SignIn into your account.</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text> 
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default Signin
