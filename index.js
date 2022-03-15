var colors = require('colors/safe');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Kaç kere tekrarlansın? ', answer => {
    let iterate = parseInt(answer.trim());
    
    run_simulator(iterate);

    rl.close();
})

function run_simulator(iterations) {
    console.time('simulasyon');

    var switchIsBetter = 0;
    var noSwitchIsBetter = 0;

    for (let i = 0; i < iterations; i++) {
        let should_switch = run_iteration();
        
        if (should_switch)
            switchIsBetter++;
        else
            noSwitchIsBetter++;
    }

    let switchProb = switchIsBetter / iterations;
    let noSwitchProb = noSwitchIsBetter / iterations;

    console.timeEnd('simulasyon');

    console.log('');

    console.log('Simulasyon ' + colors.cyan(iterations) + ' kere tekrarlandı.');
    console.log('Değiştirmenin iyi olduğu durumlar: ' + colors.green(switchIsBetter));
    console.log('Değiştirmenin kötü olduğu durumlar: ' + colors.red(noSwitchIsBetter));
    
    console.log('');

    console.log('Değiştirme olasılığı: ' + colors.green(switchProb));
    console.log('Değiştirmeme olasılığı: ' + colors.red(noSwitchProb));

    
}

function run_iteration() {
    // Create an array with car as 1 and goat as 0
    let indexOf1 = Math.floor(Math.random() * 3);
    
    let doors = [0, 0, 0];
    doors[indexOf1] = 1;

    // Pick the first door and return true if switching is better

    let picked = doors[0];

    if (picked == 0)
        return true;
    else
        return false;
}