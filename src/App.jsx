import React from "react";
import Card from "./Card";
function App() {
  return (
    <>
      <Card
        imgScr="https://picsum.photos/200"
        title="First Card"
        link="https://picsum.photos/"
      />

      <Card
        imgScr="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
        title="Second Card"
        link="https://picsum.photos/"
      />
      <Card
        imgScr="https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII"
        title="Third Card"
        link="https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII"
      />
    </>
  );
}
export default App;
