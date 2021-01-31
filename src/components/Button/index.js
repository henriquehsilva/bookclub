import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  box-shadow: 0 2px 2px 0 rgb(156 39 176 / 14%), 0 3px 1px -2px rgb(156 39 176 / 20%), 0 1px 5px 0 rgb(156 39 176 / 12%);
  background-color: #9c27b0;

  color: #FFFFFF;
  border: none;
  cursor: pointer;
  margin: .3125rem 1px;
  padding: 12px 30px;
  position: relative;
  font-size: 12px;
  min-width: auto;
  border-radius: ${({ theme }) => theme.borderRadius};

  /* background-color: ${({ theme }) => theme.colors.secondary}; */
  /* color: ${({ theme }) => theme.colors.contrastText};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s; */
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #9c27b0;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;