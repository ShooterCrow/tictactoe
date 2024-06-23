import circle from "../Components/Assets/O-icon.png"

const Square = ({ square, id }) => {

  const handleClick = (e) => {
    e.target.firstChild.innerHTML = `<img src='${circle}'>`
    // const taken = e.target.firstChild.innerHTML = ("circle")
    console.log(e.target)
    e.target.firstChild.removeEventListener("click", handleClick)
  }
  return (
    <div
      id={id}
      onClick={handleClick}
      className="cell">
      <div>{square} </div>
    </div>
  )
}

export default Square