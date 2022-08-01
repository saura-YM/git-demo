window.addEventListener('load', function () {


    let arr = localStorage.getItem('zhmm');
    let arr3 = []
    let arr4 = [];
    if (arr != null) {
        console.log(arr)
        arr3 = arr.split(',');
        console.log(typeof (arr3));
        console.log(arr3)
        for (let i = 0; i <= arr3.length; i++) {
            //添加进去
            arr4.push(arr3[i]);
            //删除原数组里面的元素
            arr3.splice(i, 1);
        }
        console.log("账号" + arr4)//账号
        console.log("密码" + arr3)//密码;
    }

    // 登录模块

    let label = document.querySelectorAll('.itnm label')
    let iochio = document.querySelectorAll('.ioch-io');
    let guo = document.querySelectorAll('.ioch-hdhb-hasv');
    console.log(guo);
    let accksndbdsb = document.querySelectorAll('.itnm .accksnd-bdsb');
    console.log(accksndbdsb);
    let ipt = document.querySelectorAll('.ipt');
    let pop = document.querySelectorAll('.pop');
    let bool = false

    // ******************手机号码**********************
    // ******************手机号码**********************
    ipt[0].addEventListener('focus', function () {
        ipt[0].style.fontSize = '14px';
        ipt[0].style.color = 'black';
        iochio[0].style.display = 'block';
        ipt[0].value = '';
        guo[0].style.display = 'none';
        label[0].style.border = '1px #000 solid'

    });

    ipt[0].addEventListener('blur', function () {

        iochio[0].style.display = 'none';
        if (ipt[0].value == '') {
            ipt[0].style.fontSize = '12px';
            ipt[0].style.color = '#ccc';
        }
        label[0].style.border = '1px #ccc solid'

        let m = /^(13[0-9]|14[01456789]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        if (m.test(ipt[0].value)) {

            pop[0].style.display = 'none'

            guo[0].style.display = 'block';
            bool = true
        } else {
            pop[0].style.display = 'block';
            bool = false
        }

    });


    // **************************密码******************************
    // **************************密码******************************

    let tiopl = document.querySelector('.ti-opl');
    let kai = document.querySelectorAll('.kai');
    let guan = document.querySelectorAll('.guan');
    let flge = true;
    ipt[1].addEventListener('focus', function () {
        ipt[1].style.fontSize = '14px';
        ipt[1].style.color = 'black';
        guo[1].style.display = 'none';
        label[1].style.border = '1px #000 solid'

        guan[0].style.display = 'block'
        pop[1].style.display = 'none'

    });
    guan[0].addEventListener('click', function () {

        if (flge == true) {
            guan[0].style.backgroundImage = 'url(../image/登录注册/kai.png)'
            ipt[1].type = 'text';

            flge = false;
        } else {

            guan[0].style.backgroundImage = 'url(../image/登录注册/guan.png)'
            ipt[1].type = 'password';
            flge = true;
        }
    })

    let olo = false;
    ipt[1].addEventListener('blur', function () {
        let mm = /(?!.*\s)(?!.*[\u4e00-\u9fa5])(?!^[0-9]+$)(?!^[A-z]+$)(?!^[ ^A-z0-9]+$)^.{8,16}$/;

        if (mm.test(ipt[1].value)) {
            console.log(ipt[1].value);
            pop[1].style.display = 'none'
            guo[1].style.display = 'block';

            label[1].style.border = '1px #ccc solid';
            olo = true;
        } else {
            console.log(ipt[1].value);

            pop[1].style.display = 'block';
            olo = false;
        }


    });
    // if (bool == true && olo == true) {

    // }

    // 登录按钮
    // 登录按钮
    let dl = document.querySelector(".btnan-sbj");
    dl.addEventListener('mouseover', function () {
        console.log(12);
        dl.style.backgroundColor = '#000';
        dl.addEventListener('click', function () {
            console.log('点击');
            if (ipt[0].value != '' && ipt[1].value != '') {
                console.log(arr4);
                if (arr4.length !=0) {
                    for (let i = 0; i < arr4.length; i++) {
                        if (ipt[0].value == arr4[i] && ipt[1].value == arr3[i]) {
                            location.href = '../html/Home.html';
                        } else {
                          console.log('该账号或密码错误!');
                        }

                    }
                } else {
                   alert('该账号或密码错误!');
                }

            } else {
                for (let i = 0; i < ipt.length; i++) {
                    pop[i].style.display = 'block';
                }
            }


        });
    });
    dl.addEventListener('mouseout', function () {
        dl.style.backgroundColor = '#444444';
    });



});


