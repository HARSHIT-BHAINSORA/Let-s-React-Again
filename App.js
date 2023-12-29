const heading = React.createElement("div", {id : "heading"} , 
    React.createElement("div" , {id : "heading 2"},
    [React.createElement("h1" , {id : "head"} , "I am h1") , React.createElement("h2" , {} , "I am h2")]
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);