function startGame(){
    
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    let inputNum = document.querySelector(".input-num");
    let num = + inputNum.value;
    
    let container = document.querySelector('.div-container');
    container.innerHTML = ''
    
    
    let jailGrid = []

    for(let i = 0; i < num; i++){
        jailGrid.push(i);
    }

    //make grid
    createGrid()

    //make walls
    createWall();
            
    
    //create Jack
    let jackX = jailGrid.slice().sort(function() {return .5 - Math.random() })[0];
    let jackY = jailGrid.slice().sort(function() {return .5 - Math.random() })[0];
    let jackPos = document.getElementById(`b[${jackX}][${jackY}]`);
    
    let jack = document.createElement("div")
    jack.classList.add("jack-dot");
    jackPos.appendChild(jack);

    
    //create Exit
    let exitX = jailGrid.slice().sort(function() {return .5 - Math.random() })[0];
    let exitY = jailGrid.slice().sort(function() {return .5 - Math.random() })[0];
    let exitPos = document.getElementById(`b[${exitX}][${exitY}]`);
    
    let exit = document.createElement("div")
    exit.classList.add("exit-dot");
    exitPos.appendChild(exit);
    

    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.key === "ArrowUp") { //arrow up
            jack.classList.remove('jack-dot');

            let jackPosUp = document.getElementById(`b[${jackX + direction[3][0]}][${jackY + direction[3][1]}]`);

            if(jackPos.style.borderTop) {
                jackX = jackX;
                jackY = jackY;
            } else if (jackX === 0){
                jackX = jailGrid.length - 1;
            } else if (jackPosUp.style.borderBottom) {
                jackX = jackX;
                jackY = jackY;
            } else {
                jackX = jackX + direction[3][0];
                jackY = jackY + direction[3][1];
            }

    
        } else if (e.key === "ArrowDown") { //arrow down
            jack.classList.remove('jack-dot');
            
            let jackPosDown = document.getElementById(`b[${jackX + direction[1][0]}][${jackY + direction[1][1]}]`);

            if(jackPos.style.borderBottom) {
                jackX = jackX;
                jackY = jackY;
            } else if(jackX === jailGrid.length - 1) {
                jackX = 0;
            } else if (jackPosDown.style.borderTop) {
                jackX = jackX;
                jackY = jackY;
            } else {
                jackX = jackX + direction[1][0];
                jackY = jackY + direction[1][1];
            }

        } else if (e.key === "ArrowLeft") { //arrow left
            jack.classList.remove('jack-dot');

            let jackPosLeft = document.getElementById(`b[${jackX + direction[2][0]}][${jackY + direction[2][1]}]`);
            
            if(jackPos.style.borderLeft) {
                jackX = jackX;
                jackY = jackY;
            } else if(jackY === 0){
                jackY = jailGrid.length - 1;
            } else if (jackPosLeft.style.borderRight) {
                jackX = jackX;
                jackY = jackY;
            } else {                
                jackX = jackX + direction[2][0];
                jackY = jackY + direction[2][1];
            }
            
        } else if (e.key === "ArrowRight") { //arrow right
            jack.classList.remove('jack-dot');
    
            let jackPosRight = document.getElementById(`b[${jackX + direction[0][0]}][${jackY + direction[0][1]}]`);

            if(jackPos.style.borderRight) {
                jackX = jackX;
                jackY = jackY;
            } else if(jackY === jailGrid.length - 1){
                jackY = 0;
            } else if (jackPosRight.style.borderLeft){
                jackX = jackX;
                jackY = jackY;
            } else {
                jackX = jackX + direction[0][0];
                jackY = jackY + direction[0][1];
            }
            
        }
        
        if((jackX === exitX)&&(jackY === exitY)){
            container.innerHTML = '<p>JACK IS FREE</p>'
        }
        
        jackPos = document.getElementById(`b[${jackX}][${jackY}]`);
        jack.classList.add("jack-dot");
        jackPos.appendChild(jack);
    }

    function createGrid(){
        container.style.display = 'grid'
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`
        for(i = 0; i < num; i++){
            for(j = 0; j < num; j++){
                let box = document.createElement('div');
                box.className = 'box';
                box.id = `b[${i}][${j}]`
                container.appendChild(box);
            }
        }
    }

    function createWall(){
        for(i = 0; i < num; i++){
            for(j = 0; j < num; j++){
    
                if(Math.random()>0.7){
                    let wall = Math.ceil(Math.random() * 4);
                    if(wall === 1){
                        box = document.getElementById(`b[${i}][${j}]`);
                        box.style.borderTop = '1px solid black'
                        if (i - 1 >= 0){
                            box = document.getElementById(`b[${i-1}][${j}]`);
                            box.style.borderBottom = '1px solid black'             
                        }
                    } else if(wall === 2){
                        box = document.getElementById(`b[${i}][${j}]`);
                        box.style.borderLeft = '1px solid black'
                        if (j-1 >= 0){
                            box = document.getElementById(`b[${i}][${j-1}]`);
                            box.style.borderRight = '1px solid black'  
                        }
                    } else if(wall === 3){
                        box = document.getElementById(`b[${i}][${j}]`);
                        box.style.borderRight = '1px solid black'
                        if (j+1 < num){
                            box = document.getElementById(`b[${i}][${j+1}]`);
                            box.style.borderLeft = '1px solid black'
                        }
                    } else if(wall === 4){
                        box = document.getElementById(`b[${i}][${j}]`);
                        box.style.borderBottom = '1px solid black'
                        if (i+1 < num){
                            box = document.getElementById(`b[${i+1}][${j}]`);
                            box.style.borderTop = '1px solid black'
                        }
                    }
                }
                
            }
        }
    };
}
