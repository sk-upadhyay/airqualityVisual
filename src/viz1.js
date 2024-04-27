import * as vl from 'vega-lite-api';

export const viz1 = vl
  .markBar({stroke : false, size:20})
  .encode(
    vl.x().fieldQ('temperature').scale({ zero: false }),
    vl.y().fieldQ('pm10').scale({ zero: false }),
    vl.tooltip('device_id')
  );
