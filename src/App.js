
import './App.css';
import * as vega  from 'vega';
import * as vegaLite  from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { config } from './config';
import { getData } from './getData';
import { viz } from './viz';
import { viz1 } from './viz1';
import { viz2 } from './viz2';
import { viz3 } from './viz3';
import {viz4} from './viz4'

vl.register(vega,vegaLite,{
  view:{render:'svg'},
  init:view=>{view.tooltip(new Handler().call);}
});

function App() {
  
  
  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);
      document.body.appendChild(await marks.render());

    
    const marks1 = viz1
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);
    document.body.appendChild(await marks1.render());

    const marks2 = viz2
    .data(await getData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: 'fit', contains: 'padding' })
    .config(config);
  document.body.appendChild(await marks2.render());

  const marks3 = viz3
  .data(await getData())
  .width(window.innerWidth)
  .height(window.innerHeight)
  .autosize({ type: 'fit', contains: 'padding' })
  .config(config);
document.body.appendChild(await marks3.render());

const marks4 = viz4
.data(await getData())
.width(window.innerWidth)
.height(window.innerHeight)
.autosize({ type: 'fit', contains: 'padding' })
.config(config);
document.body.appendChild(await marks4.render());
  };

  run();

  
}

export default App;
