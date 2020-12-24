import { MDBBtn, MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdbreact'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { listCharacterDetails } from '../actions/characteraction'
import Loader from '../components/Loader'
const CharacterDetails = ({ match }) => {
    const dispatch = useDispatch()

    const characterDetails = useSelector(state => state.characterDetails)
    const { loading, error, character } = characterDetails

    useEffect(() => {
        dispatch(listCharacterDetails(match.params.id))
    }, [dispatch, match])
    console.log(character.appearance);
    const p = [1, 2, 3]
    return (
        <>
            {loading
                ?
                <Loader />
                :
                <MDBContainer>
                    <MDBBtn color="light" href="/"><i></i>Back</MDBBtn>
                    <MDBRow className="pt-4">
                        <MDBCol md="4" className="px-3">
                            <img src={character.img} alt={character.name} className="img-fluid rounded shadow-lg" />
                        </MDBCol>
                        <MDBCol md="8" className="pl-5">
                            <div>
                                <div className="h1 pt-5">{character.name} <small>aka</small> ({character.nickname})</div>
                                <hr />
                                <div className="row">
                                    <div className="col-4 h3 text-muted">Data of Birth:-</div>
                                    <div className="col h3">{character.birthday}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4 h3 text-muted">Portrayed By:-</div>
                                    <div className="col h3">{character.portrayed}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 h3 text-muted">Status:-</div>
                                    <div className="col h3">{character.status}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 h3 text-muted">Appeared:-</div>
                                    <div className="col h3">{character.appearance}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 h3 text-muted">Occupation:-</div>
                                    <div className="col h3">{character.occupation}
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer >
    }
        </>
    )
}

export default CharacterDetails
