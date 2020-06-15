import React from 'react'
import { Display, MemeAPI} from './components'

class App extends React.Component{

    render(){
        return(
            <div className="App">
                <Display />
                <MemeAPI />
            </div>
        )
    }

}

export default App