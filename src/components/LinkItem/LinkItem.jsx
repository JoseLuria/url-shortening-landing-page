import CustomButton from "../CustomButton/CustomButton"
import "./LinkItem.style.scss"
import { useState } from "react"

const LinkItem = ({url, shorterUrl}) => {
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    setCopy(true)
    navigator.clipboard.writeText(shorterUrl)
  }

  return (
    <div className="link-item">
      <p className="link-item-url">{url}</p>
      <hr className="link-item-line"/>
      <p className="link-item-shorter">{shorterUrl}</p>
      <CustomButton action={handleCopy} copy={copy}>{copy ? "Copied!" : "Copy"}</CustomButton>
    </div>
  )
}

export default LinkItem
