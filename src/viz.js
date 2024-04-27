import * as vl from 'vega-lite-api';

export const viz = vl
  .markCircle({stroke : false, size:100, opacity: 0.5})
  .encode( 
    vl.x().fieldT('timestamp').scale({ zero: false }),
    vl.y().fieldQ('humidity').scale({ zero: false }),
    vl.color().fieldQ('temperature'),
    vl.tooltip('device_id')
  );
