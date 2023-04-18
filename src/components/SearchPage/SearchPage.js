import { REBRICKABLE_API_KEY } from '../REBRICKABLE/REBRICKABLE'
import { useState, useEffect } from 'react'
import LegoDetail from '../LegoDetail/LegoDetail'
import { useParams } from 'react-router-dom'
import '../LegoLibrary/LegoLibrary.css'

const SearchPage = () => {

  const [searchLego, setSearchLego] = useState([])
  let params = useParams()

  useEffect(()=>{
    const searchUrl =`https://rebrickable.com/api/v3/lego/sets/?search=${params.searchQuery}&key=${REBRICKABLE_API_KEY}&ordering=-name/%2Cid`
    if(params.searchQuery){
    fetch(searchUrl)
    .then((data) =>data.json())
    .then(({results})=> {
      setSearchLego([...results])
    })
    .catch((error) => console.log(error))}
  }, [params])

  if (!searchLego) {
    return <p>Loading</p>
    } else{
    return(
    <div className='row'>
      {searchLego.map((lego)=>
        <div key={lego.set_num} className="lego-container">
          <LegoDetail
            name={lego.name}
            year={lego.year}
            numParts={lego.num_parts}
            setImgUrl={lego.set_img_url}
            setNum={lego.set_num}
          />
        </div>
      )}
    </div>
    )
  }
}

export default SearchPage


