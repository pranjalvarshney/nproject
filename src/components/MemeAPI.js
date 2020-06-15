import React, { Component } from 'react'
import axios from 'axios'
import './MemeAPI.css'

const uri = "https://api.imgflip.com/get_memes"

class MemeAPI extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
        this.fetchApi()
    }

    fetchApi = async() => {
       
        const response = await axios.get(uri)
        console.log(response.data)
        this.setState({
            allMemeImgs :response.data.data.memes
        })
    }
    
    handleChange = (event) => {
        const { name , value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleGenerate = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * 100)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    
    render() {

        const { topText, bottomText, randomImg } = this.state


        return (
            <div>
                <form className="meme-form" onSubmit={this.handleGenerate}>
                    <input
                        name="topText"
                        type="text"
                        placeholder="Top text"
                        onChange={this.handleChange}
                        value={topText}
                    />
                    <input
                        name="bottomText"
                        type="text"
                        placeholder="Top text"
                        onChange={this.handleChange}
                        value={bottomText}
                    />
                    <button type="submit">Generate</button>
                </form>
                <div className="meme">
                    <img
                        src={randomImg}
                        alt=""
                    />
                    <h3 className="top">{topText}</h3>
                    <h3 className="bottom">{bottomText}</h3>
                </div>
            </div>
        )
    }
}

export default MemeAPI
