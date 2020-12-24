import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow, MDBLink } from "mdbreact";

const PaginationPage = () => {
    return (
        <MDBRow>
            <MDBCol>
                <MDBPagination size="lg">
                    <MDBPageItem>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBLink to='/page/0'>
                            <MDBPageNav className="border shadow">
                                1
                        </MDBPageNav>
                        </MDBLink>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBLink to='/page/1'>
                            <MDBPageNav className="border shadow">
                                2
                        </MDBPageNav>
                        </MDBLink>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBLink to='/page/2'>
                            <MDBPageNav className="border shadow">
                                3
                        </MDBPageNav>
                        </MDBLink>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBLink to='/page/4'>
                            <MDBPageNav className="border shadow">
                                4
                        </MDBPageNav>
                        </MDBLink>
                    </MDBPageItem>
                </MDBPagination>
            </MDBCol>
        </MDBRow>
    )
}

export default PaginationPage;