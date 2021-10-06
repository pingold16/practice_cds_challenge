import React, { useState } from 'react'
import Search from '../services/ApiService'

export function SearchBar() {
    return (
        <div className='col-lg-6 col-xl-12'>
            <input id='txtBar' className='form-control col-8'></input>
            <button type="submit" id="submit-search-media" className="btn btn-success" >Buscar</button>
        </div>
    )
}

export default SearchBar;
