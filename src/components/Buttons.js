import styled from 'styled-components';
import { defaultTheme,typeScale } from "../utils";
import {applyStyleModifiers} from 'styled-components-modifiers';
const BUTTON_MODIFIERS={
    small: ()=> `
    font-size:${typeScale.helperText};
    padding:8px
    `,
    large:()=>`
    font-size:${typeScale.header5};
    padding:16px 24px;
    `,
    warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props => props.theme.status.warningColorHover};
      outline: 3px solid ${props => props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props => props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${props => props.theme.status.warningColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${props => props.theme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${props => props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props => props.theme.status.errorColorHover};
      outline: 3px solid ${props => props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props => props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${props => props.theme.status.errorColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${props => props.theme.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${props => props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props => props.theme.status.successColorHover};
      outline: 3px solid ${props => props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props => props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${props => props.theme.status.successColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${props => props.theme.status.warningColor};
  `
}


const Button =styled.button`
padding:8px 12px;
font-size:${typeScale.paragraph};
border-radius:2px;
min-width:100px;
cursor:pointer;
font-family:${defaultTheme.primaryFont};
&:hover{
    background-color:${defaultTheme.primaryHoverColor};
    color:${defaultTheme.textColorOnPrimary}
}
&:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
&:disabled{
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;

}
`;



export  const PrimaryButton =styled(Button)`
    background-color:${defaultTheme.primaryColor};
    border:none;
    color:${defaultTheme.textColorOnPrimary};
    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        border-color: ${defaultTheme.disabled};
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton=styled(Button)`
    border:2px solid ${defaultTheme.primaryColor};
    color:${defaultTheme.primaryColor};
    &:disabled {
        border: 2px solid ${defaultTheme.disabled};
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton=styled(Button)`
    border:2px solid transparent;
    color:${defaultTheme.primaryColor};
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

