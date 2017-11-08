var block = {
    node: document.querySelector('.block'),
    deg : 0,
    LEF: function () {
        console.log('左转');
        var degBefore = block.deg,
            degNow = block.deg;
        var i = setInterval(function () {
            if(degNow-degBefore > 90){
                block.node.style.transform = 'rotateZ(' + --degNow + 'deg)';
            }else {
                if (block.deg < 90){
                    block.deg = 0;
                }else {
                    block.deg = degNow;
                }
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
                if (block.deg > 270){
                    block.deg = 0;
                }else {
                    block.deg = degNow;
                }
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
                if (block.deg > 270){
                    block.deg = 0;
                }else {
                    block.deg = degNow;
                }
                clearInterval(i);
            }
        },1)
    },
    GO: function () {
        console.log('前进')
        switch (deg){
            case 90:

        }
    }
}

document.querySelector('input[type=button]').addEventListener('click',function () {
    var direction = document.querySelector('input[type=text]').value;
    switch (direction){
        case 'GO':
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
