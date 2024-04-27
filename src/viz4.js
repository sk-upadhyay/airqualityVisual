import * as vl from 'vega-lite-api';

export const viz4 = vl
  .markLine()
  .encode(
    vl.x().fieldT('timestamp').scale({ zero: false }),
    vl.y().fieldQ('pm10').scale({ zero: false }),
    vl.tooltip('device_id')
  );
