import React,{ Component } from "react";
import axios from 'axios';


class Handler extends Component {
    state = {
        selectedFile:null
    }
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        // this.state({
        //     selectedFile:event.target.files[0]
        // })
    }


    // fileUploadHandler = () => {
    //     axios.post('');
    // }

    render (){
        return (
            <div className="Handler">
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}
export default Handler;