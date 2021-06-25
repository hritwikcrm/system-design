import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseIconModal=styled.button`
cursor:pointer;
background:none;
border:none;
position:absolute;
top:45px;
right:45px;
padding:0;
height:24px;
width:24px;
`


export const SignUpModal=()=>{


    return(
        <ModalWrapper>
            <img src={illustrations.SignUp} alt='sign up for an account' aria-hidden='true'/>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>
            <PrimaryButton onClick={()=> console.log('You Signed up!!')}>Sign Up</PrimaryButton>
            <CloseIconModal arial-label='close modal'>
                <CloseIcon/>
            </CloseIconModal>
        </ModalWrapper>
    )
}