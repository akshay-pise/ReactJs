import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
ReactDOM.render(<>
<div className="container">
  <Card
  imgsrc="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/06/loki-series-1624525409.jpg"
  title="Disney+ Hotstar"
  sname="LOKI"
  link="https://www.hotstar.com/in/tv/loki/1260063451"/>

  <Card
  imgsrc="https://phantom-marca.unidadeditorial.es/90c871343e40a76fdfb435ed144950b7/crop/0x477/1500x1316/resize/1200/f/webp/assets/multimedia/imagenes/2021/08/03/16280000722808.jpg"
  title="A Netflix OriginalSeries"
  sname="MONEY HEIST"
  link="https://www.netflix.com/in/title/80192098"/>

  <Card
  imgsrc="https://videotapenews.com/wp-content/uploads/2020/10/Stranger_Things_Season_1_3.jpg"
  title="A Netflix OriginalSeries"
  sname="STRANGER THINGS"
  link="https://www.netflix.com/in/title/80057281"/>
</div>
</>

,document.getElementById("root"));