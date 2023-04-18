import { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom'
import LegoLibrary from '../LegoLibrary/LegoLibrary'
import DetailPage from '../DetailPage/DetailPage'
import './App.css'
import '../LegoLibrary/LegoLibrary.css'
import HomePage from '../HomePage'
import NotExist from '../NotExist/NotExist'
import SearchPage from '../SearchPage/SearchPage'

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const searchIsClicked = () =>{
    setSearchQuery('')
  }

  return (
      <BrowserRouter>
        <nav className='nav-bar' role='navigation'>
          <NavLink className='lego-icon' to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1000px-LEGO_logo.svg.png?20221012140704' alt='Lego Logo'/></NavLink>
          <NavLink className='discovery' to='/lego'>DISCOVERY</NavLink>
          <form role='search'>
          <label for='searchInput' className='search-label'>Search</label>
            <input type='text' value={searchQuery} onChange={event => setSearchQuery(event.target.value)} className='search-input' id='searchInput' name='search' aria-labelledby='searchInput' autoComplete='off' autoFocus/>
            <Link to={`/search/${searchQuery}`} className='search' onClick={searchIsClicked}>
              <span aria-hidden='true'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/800px-Vector_search_icon.svg.png' alt='search icon' className='search-icon'/></span>
            </Link>
          </form>
        </nav>

        <main role='main'>
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='*' element = {<NotExist />} />
            <Route path='/lego' element = {<LegoLibrary />}/>
            <Route path='/lego/:legoID' element = {<DetailPage />} />
            <Route path={'/search/:searchQuery'} element={<SearchPage />} />
          </Routes>
        </main>
      </BrowserRouter>

  )
}

export default App

