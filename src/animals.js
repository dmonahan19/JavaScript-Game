const Penguin = require('./penguin');
const Dolphin = require('./dolphin');
const PolarBear = require('./polarbear');
const Whale = require('./whale');
const HumpBackWhale = require('./humpbackwhale');
const IceBerg = require('./ice_berg');
const Obstacle = require('./obstacle');


export const penguin = new Penguin(0, 152, 35, 37, 300, 700, 35, 38);
export const dolphin1 = new Dolphin(350, 620, 157, 30);
export const dolphin2 = new Dolphin(40, 620, 157, 30);
export const polarBear1 = new PolarBear(100, 576, 150, 30, 2.5);
export const polarBear2 = new PolarBear(400, 576, 150, 30, 2.5);
// export const whale1 = new Whale([11, 100, 201, 293, 385, 481], [95, 98, 97, 95, 96, 97],400, 532, 150, 30)
// export const whale2 = new Whale([11, 100, 201, 293, 385, 481], [95, 98, 97, 95, 96, 97],100, 532, 150, 30)

export const whale1 = new Whale([95, 98, 97, 95, 96, 97], [11, 100, 201, 293, 385, 481], 72, 31, 400, 532, 90, 40, 3, 10)
export const whale2 = new Whale([95, 98, 97, 95, 96, 97], [11, 100, 201, 293, 385, 481], 72, 31, 100, 532, 90, 40, 3, 10)
export const humbackwhale1 = new HumpBackWhale(0, 488, 150, 30);
export const humbackwhale2 = new HumpBackWhale(350, 488, 150, 30);
export const dolphin3 = new Dolphin(350, 444, 157, 30);
export const dolphin4 = new Dolphin(40, 444, 157, 30);
export const polarBear3 = new PolarBear(100, 405, 150, 30, 4);
export const polarBear4 = new PolarBear(400, 405, 150, 30, 4);
export const iceberg1 = new IceBerg(5, 365, 250, 30);
export const iceberg2 = new IceBerg(275, 365, 250, 30);
export const iceberg3 = new IceBerg(550, 365, 250, 30);


