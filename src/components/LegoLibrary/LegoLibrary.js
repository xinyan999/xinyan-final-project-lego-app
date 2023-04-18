import { useEffect, useState} from 'react'
import { REBRICKABLE_API_KEY } from '../REBRICKABLE/REBRICKABLE'
import './LegoLibrary.css'
import LegoFaves from '../LegoFaves/LegoFaves'

function LegoLibrary () {
  const [legoLibrary, setlegoLibrary] = useState([])
  const [page, setPage] = useState(1)
  const [favLegoList, setFavLegoList] = useState([])
  const [isFav, setIsFav] = useState(false)
  const legoDisplayed = isFav?favLegoList:legoLibrary

  const loadMoreLego = () => {
    setPage(page + 1)
  }

  const updateAllLego = () => {
    setIsFav(false)
    setPage(page)
  }

  const updateFavLego = () => {
    setIsFav(true)
  }

  useEffect(()=>{
    const setsUrl = `https://rebrickable.com/api/v3/lego/sets/?key=${REBRICKABLE_API_KEY}&page=${page}&ordering=-name/%2Cid`
    fetch(setsUrl)
    .then((data) =>data.json())
    .then(({results})=> {
      setlegoLibrary(prevResults => [...prevResults, ...results])
    })
  },[page])

if (!legoLibrary) {
  return <p>Loading</p>
  } else{
  return(
    <>
    <div className='button-container'>
      <button onClick={updateAllLego} className='top-buttons'>ALL</button>
      <button onClick={updateFavLego} className='top-buttons'>MY WISH LIST</button>
      <button onClick={loadMoreLego} className='top-buttons'>LOAD MORE</button>
    </div>
    <div className= 'row'>
      {legoDisplayed.map((lego)=>
      <div key={lego.set_num} className="lego-container" >
      <LegoFaves
        name={lego.name}
        year={lego.year}
        numParts={lego.num_parts}
        setImgUrl={lego.set_img_url}
        setFavLegoList={setFavLegoList}
        favLegoList={favLegoList}
        setNum={lego.set_num}
        legoLibrary={legoLibrary}
      />
      </div>
      )}
    </div>
    </>
  )
  }
}

export default LegoLibrary
