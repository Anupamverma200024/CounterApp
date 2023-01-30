import './App.css';
import React, { useState } from "react";
import { Grid, Button, Segment } from 'semantic-ui-react'
function App() {
  const [count, setCount] = useState(0);

  return (
    <Segment className="ui raised segments main">
      <Grid className="my-1 ui equal width grid">
        <Grid className="card-body row">
          <center>
            <h1>Counter App</h1>
          </center>
          <Segment className="ui horizontal segments my-5">
            <h2 className="my-6">{count}</h2>
            <div className="contbox">
              <Button className="ui primary button btn1" onClick={() => setCount(count + 1)}>Increment </Button>
              <Button className="ui secondary button btn2" onClick={() => (count === 0) ? this.disabled = true : (setCount(count - 1))}>Decrement </Button>
            </div>
          </Segment>
        </Grid>
        <center className="reg">Done by:- Anupam Verma 12020330</center>
      </Grid>
    </Segment>
  );
}
export default App;