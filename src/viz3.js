import * as vl from 'vega-lite-api';

export const viz3 = vl
  .markPoint()
  .encode(
    vl.x().fieldT('timestamp').scale({ zero: false }),
    vl.y().fieldQ('pm10').scale({ zero: false }),
    vl.color().fieldQ('pm2_5'),
    vl.tooltip('device_id')
  );
