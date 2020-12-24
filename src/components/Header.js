import React, { useState } from 'react'
import { MDBBtn, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow } from 'mdbreact'
import {Route} from 'react-router-dom'
import io from "./bb.png"
import Search from './Search'
const Header = () => {
   
    return (
        <div>
            <MDBRow className="shadow grey dark-1 border border-light">
                <MDBCol md="2">
                    <img src={io} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol md="8" className="p-5">
                    <Route render={({history})=><Search history={history}/>}/>
                </MDBCol>
            </MDBRow>

        </div>
    )
}

export default Header
