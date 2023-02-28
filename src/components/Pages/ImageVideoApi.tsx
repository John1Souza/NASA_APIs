import { useState } from "react"


export default function ImageVideoApi() {
    const [ image, setImage ] = useState([])
    fetch('https://images.nasa.gov/#/')
        .then(resp => resp.json())
        .then(data => 
            setImage(data))
        .catch(err => console.log(err))

  return (
    <div>
      <h1>Here are suppose to have some important NASA information</h1>
        {image.map((img) => <div>{img}</div>)}
    </div>
  )
}
