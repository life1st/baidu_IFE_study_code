var phoneNum = document.getElementById('phoneNum')
var submit = document.getElementById('submit')

submit.addEventListener('click', function () {
    var arr = []
    arr.push(/1{1}[3578]{1}[0-9]{9}/.test(phoneNum.value))
    console.log(arr)
})
