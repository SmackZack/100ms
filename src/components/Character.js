import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBNavLink } from 'mdbreact';

const Character = ({ char }) => {
    return (
        <MDBNavLink to={`/character/${char.char_id}`}>

            <MDBCard className="" style={{ height: '350px' }}>
                <MDBCardImage hover className="img-fluid" src={char.img}
                    waves />
            </MDBCard>
        </MDBNavLink>
    )
}

export default Character;