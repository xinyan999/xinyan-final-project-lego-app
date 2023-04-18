import { Link } from "react-router-dom"
import '../LegoLibrary/LegoLibrary.css'

function LegoFaves(props){
  const isAddToFav = props.favLegoList.some(lego => lego.set_num === props.setNum)

  const addToFav = (setNum) => {
    const favLego = props.legoLibrary.find(lego=>lego.set_num===setNum)
    props.setFavLegoList([...props.favLegoList, favLego])
  }

  const removeFromFav = (setNum) => {
    const updateFavLegoList = props.favLegoList.filter(lego=>lego.set_num!==setNum)
    props.setFavLegoList([...updateFavLegoList])
  }

  return(
    <>
      <Link to={`/lego/${props.setNum}`}>
        <img src={props.setImgUrl} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <p>Released: {props.year}</p>
      <p>Inventory: {props.numParts}</p>
      <button onClick={()=> isAddToFav?removeFromFav(props.setNum):addToFav(props.setNum)} className='fav-button'>
        {isAddToFav?"❤️":"🤍"}
      </button>
    </>
  )
}
export default LegoFaves







