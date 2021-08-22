import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let ctime=new Date();
ctime= ctime.getHours();
let greeting="";
const cssStyle={};

if(ctime>=1 && ctime<12){
  greeting="Good morning";
  cssStyle.color='green';
}
else if(ctime>=12 && ctime<19){
  greeting="Good afternoon";
  cssStyle.color='orange';
}
else{
  greeting="good Night";
  cssStyle.color='gray';
}

ReactDOM.render(<>
    <div>
      <h1>hello sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>

  ,document.getElementById('root')
);
