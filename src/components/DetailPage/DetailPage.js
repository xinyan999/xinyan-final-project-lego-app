import { useParams } from 'react-router-dom'
import { useState, useEffect} from "react"
import { REBRICKABLE_API_KEY } from '../REBRICKABLE/REBRICKABLE'
import LegoDetail from "../LegoDetail/LegoDetail"
import '../LegoLibrary/LegoLibrary.css'

const DetailPage = () => {
  const [selectedLego, setSelectedLego] = useState()
  let params = useParams()

  useEffect(() => {
    if(params.legoID){
      fetch(`https://rebrickable.com/api/v3/lego/sets/${params.legoID}?key=${REBRICKABLE_API_KEY}&ordering=-name/%2Cid`)
      .then(data => data.json())
      .then(res => setSelectedLego(res))
      .catch(error => console.log(error))
    }
  },[params])

  if (!selectedLego) {
    return <p>Loading</p>
    } else{
    return(
    <>
      <div className='lego-detail-container'>
        <LegoDetail className='lego-detail-container-text'
          name={selectedLego.name}
          year={selectedLego.year}
          numParts={selectedLego.num_parts}
          setImgUrl={selectedLego.set_img_url}
        />
      </div>
    </>
  )
}
}
export default DetailPage

