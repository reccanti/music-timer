import {Synth, Loop, Transport} from 'tone';
import {data} from './testdata';

// const synth = new Synth().toMaster();
// synth.triggerAttackRelease("C4", "8n");

let counter = 0;
const loop = new Loop((time) => {
    if (counter < data.length) {
        console.log(data[counter]);
    }
    counter++;
}, '1m');

loop.start('0m');

// Transport.scheduleRepeat((time) => {
//     console.log(Transport.ticks);
//     if (Transport.ticks < data.length) {
//         console.log(data[Transport.ticks]);
//     }
// }, "1m");
Transport.start();