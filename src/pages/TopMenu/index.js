/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { CiLocationOn } from 'react-icons/ci'
import { BiDollar } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'



const TopMenu = () => {
  const sizeIcon = 16;
  return (
    <div className='lightBlackColor'>
      <Container className='topmenu' >
        <Row className='row'>
          <Col className='cols'>
            <a className='col' href='#'><BsFillTelephoneFill className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> +0123456789</span></a>
            <a className='col' href='#'><BiMailSend className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> Example@gmail.com</span></a>
            <a className='col' href='#'><CiLocationOn className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> 1734 Stonecoal Road</span></a>
          </Col>

          <Col className='cols rtf'>
            <a className='col' href='#'><BsPerson className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> My Acount</span></a>
            <a className='col' href='#'><BiDollar className='txtredColor icons' size={sizeIcon} /><span className='txtwhite spanTopMenu'>USD</span></a>
          </Col>
        </Row>
      </Container >
    </div >
  )
}

export default TopMenu
