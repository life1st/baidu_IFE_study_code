var block = {
    node: document.querySelector('.block'),
    deg : 0,
    pos: {
        x: 20,
        y: 20
    },
    LEF: function () {
        console.log('左转');
        var degBefore = block.deg,
            degNow = block.deg;
        var i = setInterval(function () {
            if(degNow-degBefore > -90){
                block.node.style.transform = 'rotateZ(' + --degNow + 'deg)';
            }else {
                block.deg = degNow;
                clearInterval(i);
            }
        },1)
    },
    RIG: function () {
        console.log('右转')
        var degBefore = block.deg,
            degNow = block.deg;
        var i = setInterval(function () {
            if(degNow-degBefore < 90){
                block.node.style.transform = 'rotateZ(' + ++degNow + 'deg)';
            }else {
                block.deg = degNow;
                clearInterval(i);
            }
        },1)
    },
    BAC: function () {
        console.log('倒转')
        var degBefore = block.deg,
            degNow = block.deg;
        var i = setInterval(function () {
            if(degNow-degBefore < 180){
                block.node.style.transform = 'rotateZ(' + ++degNow + 'deg)';
            }else {
                block.deg = degNow;
                clearInterval(i);
            }
        },1)
    },
    GO: function () {
        console.log('前进')
        var tempDeg = block.deg % 360;
        var [x,y] = [block.pos.x,block.pos.y];
        console.log(x,y)
        var tx,ty;
        switch (tempDeg){
            case 0:
                if (y>20){
                    block.pos.y -= 30;
                }
                ty = setInterval(function () {
                    if (y > block.pos.y){
                        block.node.style.top = --y + 'px';
                    }else {
                        clearInterval(tx);
                    }
                },10)
                break;
            case 90:
                if (x<=260){
                    block.pos.x += 30;
                }
                tx = setInterval(function () {
                    if (x < block.pos.x){
                        block.node.style.left = ++x + 'px';
                    }else {
                        clearInterval(tx);
                    }
                },10)
                break;
            case 180:
                if (y<=260) {
                    block.pos.y += 30;
                }
                ty = setInterval(function () {
                    if (y < block.pos.y){
                        block.node.style.top = ++y + 'px';
                    }else {
                        clearInterval(tx);
                    }
                },10)
                break;
            case 270:
                if (x>20) {
                    block.pos.x -= 30;
                }
                tx = setInterval(function () {
                    if (x > block.pos.x){
                        block.node.style.left = --x + 'px';
                    }else {
                        clearInterval(tx);
                    }
                },10)
                break;
        }
    }
}

document.querySelector('input[type=button]').addEventListener('click',function () {
    var direction = document.querySelector('input[type=text]').value;
    switch (direction){
        case 'GO':
            block.GO();
            break;
        case 'TUN LEF':
            block.LEF();
            break;
        case 'TUN RIG':
            block.RIG();
            break;
        case 'TUN BAC':
            block.BAC();
            break;
        default:
            console.log('输入有误。')
    }
})

document.querySelector('#left').onclick = function () {
    block.LEF();
}
document.querySelector('#right').onclick = function () {
    block.RIG();
}
document.querySelector('#bac').onclick = function () {
    block.BAC();
}
document.querySelector('#go').onclick = function () {
    block.GO();
}