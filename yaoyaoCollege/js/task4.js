var block = {
    node: document.querySelector('.block'),
    deg: 0,
    pos: {
        x: 20,
        y: 20
    },
    LEF: function () {
        console.log('左转')
        block.deg -= 90;
        block.animate();
        return block;
    },
    RIG: function () {
        console.log('右转')
        block.deg += 90;
        block.animate();
    },
    BAC: function () {
        console.log('倒转')
        block.deg += 180;
        block.animate();
    },
    GO: function (direction) {
        var tempDeg =
            direction === undefined ?
                block.deg % 360 : direction;
        if (tempDeg < 0){
            tempDeg = -tempDeg;
        }
        var [x,y] = [block.pos.x,block.pos.y];
        switch (tempDeg){
            case 0:
                if (y>20){
                    block.pos.y -= 30;
                }
                break;
            case 90:
                if (x<=260){
                    block.pos.x += 30;
                }
                break;
            case 180:
                if (y<=260) {
                    block.pos.y += 30;
                }
                break;
            case 270:
                if (x>20) {
                    block.pos.x -= 30;
                }
                break;
        }
        block.animate();

        console.log('前进:',x,y,tempDeg)
    },
    animate: function () {
        var [x,y,d] = [block.pos.x, block.pos.y, block.deg];
        block.node.style.left = x +'px';
        block.node.style.top = y +'px';
        block.node.style.transform = 'rotate(' + d +'deg) ';
        //translate(' + x + 'px,'+ y + 'px) 有点问题，方向不对。

        console.log('动画:',x,y,d);
    }
}

document.querySelector('.button-box').addEventListener('click',function (event) {
    var t = event.target;
    if (t.type != 'button') return;

    var direction =
        t.value === '执行' ?
        document.querySelector('input[type=text]').value : t.value.toUpperCase();
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

        //Other Group.
        case 'TRA LEF':
            block.GO(270);
            break;
        case 'TRA TOP':
            block.GO(0);
            break;
        case 'TRA RIG':
            block.GO(90);
            break;
        case 'TRA BOT':
            block.GO(180);
            break;
        case 'MOV LEF':
            block.deg = 270;
            block.GO();
            break;
        case 'MOV TOP':
            block.deg = 0;
            block.GO();
            break;
        case 'MOV RIG':
            block.deg = 90;
            block.GO();
            break;
        case 'MOV BOT':
            block.deg = 180;
            block.GO();
            break;
        default:
            console.log('输入有误。')
    }
});
document.querySelector('input[type=number]').addEventListener('change', function (e) {
    if (this.value <= 0){
        return;
    }
    block.node.style.transition = 'all '+ this.value + 's';
})
