const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
let jailGrid = [0, 1, 2]

let jackX = jailGrid.slice().sort(function() {return .5 - Math.random() })[0];
let jackY = jailGrid.slice().sort(function() {return .5 - Math.random() })[0];


let jackPos = document.getElementById(`b[${jackX}][${jackY}]`);

let jack = document.createElement("div")
jack.classList.add("jack-dot");
jackPos.appendChild(jack);

console.log(`b[${jackX},${jackY}]`)

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) { //arrow up
        jack.classList.remove('jack-dot');

        jackX = jackX + direction[3][0];
        jackY = jackY + direction[3][1];

        if(jackX < 0){
            jackX = jailGrid.length - 1;
        }

    } else if (e.keyCode === 40) { //arrow down
        jack.classList.remove('jack-dot');
        
        jackX = jackX + direction[1][0];
        jackY = jackY + direction[1][1];

        if(jackX === jailGrid.length) {
            jackX = 0;
        }
    } else if (e.keyCode === 37) { //arrow left
        jack.classList.remove('jack-dot');
        
        jackX = jackX + direction[2][0];
        jackY = jackY + direction[2][1];
        
        if(jackY < 0){
            jackY = jailGrid.length - 1;
        }
    } else if (e.keyCode === 39) { //arrow right
        jack.classList.remove('jack-dot');

        jackX = jackX + direction[0][0];
        jackY = jackY + direction[0][1];
        
        if(jackY === jailGrid.length){
            jackY = 0;
        }
    }
    jackPos = document.getElementById(`b[${jackX}][${jackY}]`);
    jack.classList.add("jack-dot");
    jackPos.appendChild(jack);
}

