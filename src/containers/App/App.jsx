import "./App.style.scss"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import LinkItem from "../../components/LinkItem/LinkItem"
import { useState } from "react"
import LinksSection from "../../components/LinksSection/LinksSection"
import Form from "../../components/Form/Form"

function App() {
  const [error, setError] = useState(false)
  const [urlText, setUrlText] = useState("")
  const [links, setLinks] = useState([])

  const handleSetUrl = target => {
    setUrlText(target.value)
  }

  const handleApi = async () => {
    setError(false)
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlText}`)
    const result = await response.json()
    if(result.ok){
      setLinks([...links, result.result])
      setUrlText("") 
    }else{
      setError("Please add a correct link")
    }
  }

  const handleGetUrl = e => {
    e.preventDefault()
    handleApi(urlText)
  }

  links.length > 5 && links.splice(0, 1)

  return (
    <div className="App">
      <Header/>
        <Main>
          <Form
            urlText={urlText}
            handleSetUrl={handleSetUrl}
            handleGetUrl={handleGetUrl}
            error={error}
          /> 
          <LinksSection>
            {
              links.length > 0 && 
                links.map((link, index) => 
                  <LinkItem 
                    key={index} 
                    url={link?.original_link} 
                    shorterUrl={link?.full_short_link}
                  />
                )
            } 
          </LinksSection>
        </Main>
      <Footer/>
    </div>
  )
}

export default App
