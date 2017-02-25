import {Synth, Loop, Transport} from 'tone';

const synth = new Synth().toMaster();
synth.triggerAttackRelease("C4", "8n");

const loop = new Loop((time) => {
    console.log(time);
}, '4n');

loop.start('0m');

Transport.start();