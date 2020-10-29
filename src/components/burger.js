//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledBurger = styled.button`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "display:none;" : "display:inline-block;"};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={open}
      open={open}
      onClick={() => setOpen()}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Burger
