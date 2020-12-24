import { MDBCardImage, MDBCol, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow } from 'mdbreact'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listCharacters } from '../actions/characteraction'
import Character from '../components/Character'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber
    const dispatch = useDispatch()
    const characterList = useSelector(state => state.characterList)
    const { loading, error, characters } = characterList
    useEffect(() => {
        dispatch(listCharacters(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])
    // const p = [1,2,3,4]
    return (
        <>
        <MDBRow className="p-3">
                <MDBCol className="d-flex justify-content-end"> <Pagination page="" />
                </MDBCol>
        </MDBRow>
         <MDBRow className="px-5">
            {loading ?
                <Loader /> :
                characters.map(char => <MDBCol key={char.char_id} className="mb-3" md="3">
                    <Character char={char} />
                </MDBCol>)}
           
            </MDBRow >
            </>
    )
}

export default HomeScreen
