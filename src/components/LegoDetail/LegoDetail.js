import '../LegoLibrary/LegoLibrary.css'

function LegoDetail(props) {

  return(
    <>
      <img src={props.setImgUrl} alt={props.name} />
      <p>{props.name}</p>
      <p>Released: {props.year}</p>
      <p>Inventory: {props.numParts}</p>
    </>
  )
}

export default LegoDetail
