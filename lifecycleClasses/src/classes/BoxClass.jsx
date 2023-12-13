import React from "react";
import "./boxclass.css"





function BoxClass() {
  this.state = {
    box: "",
  };
  return <div>BoxClass</div>;
}

render() {
    return (
        <div>
            <box onclick= {()=> {this.setUseBox((current) => {
                setTimeout (()=> {
                    box = setUseBox("face_box")

                },1000)
                return {

                }
            })}}
/>
        </div>
    )
}

export default BoxClass;
