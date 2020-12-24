import { MDBBtn } from 'mdbreact';
import React, { useState } from 'react'

const Search = ({history}) => {
    const [keyword, setKeyword] = useState('')
    const submitHandler = (e) => {
        console.log(keyword);
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="row">
                <div className="col-10"><input className="form-control mb-0 
                         form-control-lg"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    type="text" placeholder="Search" aria-label="Search" /></div>
                <div className="col=2"><MDBBtn type="submit" className="m-0">Search</MDBBtn></div>
            </div>

        </form>
    )
}

export default Search
