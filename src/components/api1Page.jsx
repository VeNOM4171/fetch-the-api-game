import React from "react";
import Rank from "./rank";
import ImageLinkForm from "./imageLinkForm";
import FaceRecognition from "./faceRecognition";


const Api1Page = (props) => {
  const {box, imageUrl} = props;
  const entries = 2;
  return (
    <>
      {/* <Rank name={this.state.user.name} entries={this.state.user.entries} /> */}
      <Rank name="sudip" entries={entries}/>
      
      {/* <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition box={box} imageUrl={imageUrl} /> */}
    </>
  );
};

export default Api1Page;
