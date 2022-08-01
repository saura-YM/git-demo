window.addEventListener('load', function () {

    // 登录模块
    let hez = document.querySelector('.account-input-item')
    let label = document.querySelectorAll('.itnm label')
    let iptwscdsf = hez.querySelector('#iptwsc-dsf');
    let iochio = hez.querySelectorAll('.ioch-io');
    let guo = document.querySelectorAll('.ioch-hdhb-hasv');
    console.log(guo);
    let accksndbdsb = document.querySelectorAll('.itnm .accksnd-bdsb');
    console.log(accksndbdsb);
    let ipt = document.querySelectorAll('.ipt');
    let pop = document.querySelectorAll('.pop');
    iptwscdsf.addEventListener('focus', function () {
        iptwscdsf.style.fontSize = '14px';
        iptwscdsf.style.color = 'black';
        iochio[0].style.display = 'block';
        iptwscdsf.value = '';
        guo[0].style.display = 'none';
        label[0].style.border = '1px #000 solid'
        iochio[0].addEventListener('click', function () {
            console.log(112);
            iptwscdsf.value = ''
            guo[0].style.display = 'none';
        })

    });
    let mool = false;
    iptwscdsf.addEventListener('blur', function () {
        console.log(iptwscdsf.value.length);
        iochio[0].style.display = 'none';
        if (iptwscdsf.value == '') {
            iptwscdsf.style.fontSize = '12px';
            iptwscdsf.style.color = '#ccc';
        }
        label[0].style.border = '1px #ccc solid'

        let m = /^(13[0-9]|14[01456789]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        if (m.test(ipt[0].value)) {

            pop[0].style.display = 'none'

            mool = true;

            guo[0].style.display = 'block';
        } else {
            iptwscdsf.value = '';
            pop[0].style.display = 'block';
            mool = false;
        }
        // if (mool==true&&olo==true&&lplp==true) {
        //     button.style.backgroundColor = '#000000'
        //     button.style.cursor = 'pointer';
        //     button.disabled = false;
        // } else {
        //     button.style.backgroundColor = '#ccc'
        //     button.style.cursor = 'not-allowed';
        //     button.disabled = true;
        // }
        geiSun()

    });

    // *****************输入密码************
    // *****************输入密码************
    let olo = false
    let tiopl = document.querySelector('.ti-opl');
    let kai = document.querySelectorAll('.kai');
    let guan = document.querySelectorAll('.guan');
    let flge = true;
    ipt[1].addEventListener('focus', function () {
        ipt[1].style.fontSize = '14px';
        ipt[1].style.color = 'black';
        // ipt[1].value = '';
        guo[1].style.display = 'none';
        label[1].style.border = '1px #000 solid'
        tiopl.style.display = 'block'
        guan[0].style.display = 'block'
        pop[1].style.display = 'none'

    });
    guan[0].addEventListener('click', function () {
        console.log(1);
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

    ipt[1].addEventListener('blur', function () {
        let mm = /(?!.*\s)(?!.*[\u4e00-\u9fa5])(?!^[0-9]+$)(?!^[A-z]+$)(?!^[ ^A-z0-9]+$)^.{8,16}$/;

        if (mm.test(ipt[1].value)) {
            console.log(ipt[1].value);
            pop[1].style.display = 'none'
            guo[1].style.display = 'block';
            tiopl.style.display = 'none'
            label[1].style.border = '1px #ccc solid';
            olo = true;
        } else {
            console.log(ipt[1].value);
            tiopl.style.display = 'none';
            pop[1].style.display = 'block';
            olo = false;
        }
        // if (mool == true && olo == true && lplp == true) {
        //     button.style.backgroundColor = '#000000'
        //     button.style.cursor = 'pointer';
        //     button.disabled = false;
        // } else {
        //     button.style.backgroundColor = '#ccc'
        //     button.style.cursor = 'not-allowed';
        //     button.disabled = true;
        // }
        geiSun()
    })



    // ****************确定密码*******************
    // ****************确定密码*******************
    let lplp = false
    ipt[2].addEventListener('focus', function () {
        ipt[2].style.fontSize = '14px';
        ipt[2].style.color = 'black';

        guo[2].style.display = 'none';
        label[2].style.border = '1px #000 solid'

        guan[1].style.display = 'block'
        pop[2].style.display = 'none'

    });
    guan[1].addEventListener('click', function () {
        console.log(1);
        if (flge == true) {
            guan[1].style.backgroundImage = 'url(../image/登录注册/kai.png)'
            ipt[2].type = 'text';

            flge = false;
        } else {

            guan[1].style.backgroundImage = 'url(../image/登录注册/guan.png)'
            ipt[2].type = 'password';
            flge = true;
        }
    })


    //****************** */ 验证码******************
    // *********************验证码*****************


    let arr = [];
    let arr1 = []
    let button = document.querySelector('.button');
    let itnm2 = document.querySelector('.account-input-item-ioct');
    let djasaas = document.querySelector('.djasa-as');
    let dhsjhasd = document.querySelector('.dhsjh-asd');
    let index = 0;
    let num = 60;
    let timer = null;

    ipt[2].addEventListener('blur', function () {
        let mm = /(?!.*\s)(?!.*[\u4e00-\u9fa5])(?!^[0-9]+$)(?!^[A-z]+$)(?!^[ ^A-z0-9]+$)^.{8,16}$/;

        if (mm.test(ipt[2].value)) {
            pop[2].style.display = 'none'
            guo[2].style.display = 'block';
            label[2].style.border = '1px #ccc solid'
            if (ipt[2].value == ipt[1].value) {
                console.log(ipt[2].value);
                pop[2].style.display = 'none'
                guo[2].style.display = 'block';
                label[2].style.border = '1px #ccc solid'
                lplp = true;
            }
        } else {
            console.log(ipt[1].value);
            tiopl.style.display = 'none'
            pop[2].style.display = 'block'

            lplp = false;
        }

        // if (mool == true && olo == true && lplp == true) {
        //     button.style.backgroundColor = '#000000'
        //     button.style.cursor = 'pointer';
        //     button.disabled = false;
        //     button.addEventListener('click', function () {
        //         console.log(1);
        //         for (let i = 0; i < 4; i++) {
        //             console.log('klkl');
        //             arr += parseInt(Math.random() * (9 - 1) + 1)
        //         }
        //         arr1.push(arr);
        //         arr = [];
        //         console.log(arr1);

        //         djasaas.style.display = 'block';
        //         pop[3].style.display = 'none';
        //         button.disabled = true;
        //         button.style.cursor = 'pointer';
        //         index++
        //         console.log(index);
        //         if (index > 5) {
        //             dhsjhasd.style.display = 'block';
        //             button.style.cursor = 'not-allowed';
        //             button.style.backgroundColor = '#ccc'
        //             button.disabled = true;
        //             djasaas.style.display = 'none';
        //         } else {
        //             button.disabled = true;
        //             button.style.fontSize = '13px'
        //             button.innerHTML = '获取中...'
        //             button.style.cursor = 'not-allowed';

        //             timer =setInterval(function () {

        //                 if (num==3) {
        //                     alert(arr1[arr1.length - 1])
        //                 }
        //                 if (num == 0) {
        //                     console.log(num);
        //                     clearInterval(timer);
        //                     num = 6;
        //                     timer = null;
        //                     button.style.fontSize = '14px';
        //                     button.innerHTML = '获取验证码';
        //                     button.style.cursor = 'pointer';
        //                     button.disabled = false;
        //                     button.style.backgroundColor = '#000000';
        //                 } else {
        //                     button.innerHTML = num + 's';
        //                     button.style.backgroundColor = '#ccc';
        //                     num--;
        //                     button.disabled = true;
        //                 }
        //                 console.log(num);
        //             }, 1000)

        //         }

        //     });
        // } else {
        //     button.disabled = true;
        //     button.style.backgroundColor = '#ccc'
        //     button.style.cursor = 'not-allowed';
        // }
        geiSun()
    });
    function geiSun() {
        if (mool == true && olo == true && lplp == true) {
            button.style.backgroundColor = '#000000'
            button.style.cursor = 'pointer';
            button.disabled = false;
            button.addEventListener('click', function () {
                console.log(1);
                for (let i = 0; i < 4; i++) {
                    console.log('klkl');
                    arr += parseInt(Math.random() * (9 - 1) + 1)
                }
                arr1.push(arr);
                arr = [];
                console.log(arr1);

                djasaas.style.display = 'block';
                pop[3].style.display = 'none';
                button.disabled = true;
                button.style.cursor = 'pointer';
                index++
                console.log(index);
                if (index > 5) {
                    dhsjhasd.style.display = 'block';
                    button.style.cursor = 'not-allowed';
                    button.style.backgroundColor = '#ccc'
                    button.disabled = true;
                    djasaas.style.display = 'none';
                } else {
                    button.disabled = true;
                    button.style.fontSize = '13px'
                    button.innerHTML = '获取中...'
                    button.style.cursor = 'not-allowed';

                    timer = setInterval(function () {

                        if (num == 55) {
                            alert(arr1[arr1.length - 1])
                        }
                        if (num == 0) {
                            console.log(num);
                            clearInterval(timer);
                            num = 60;
                            timer = null;
                            button.style.fontSize = '14px';
                            button.innerHTML = '获取验证码';
                            button.style.cursor = 'pointer';
                            button.disabled = false;
                            button.style.backgroundColor = '#000000';
                        } else {
                            button.innerHTML = num + 's';
                            button.style.backgroundColor = '#ccc';
                            num--;
                            button.disabled = true;
                        }
                        console.log(num);
                    }, 1000)

                }

            });
        } else {
            button.disabled = true;
            button.style.backgroundColor = '#ccc'
            button.style.cursor = 'not-allowed';
        }
    }

    // 验证码
    // 验证码
    let yanz = false;
    ipt[3].addEventListener('focus', function () {
        console.log(1);
        ipt[3].style.fontSize = '14px';
        ipt[3].style.color = 'black';
        label[3].style.border = '1px #000 solid'
        pop[3].style.display = 'none'
        guo[3].style.display = 'none';

    });

    ipt[3].addEventListener('blur', function () {
        if (ipt[3].value == arr1[arr1.length - 1]) {
            pop[2].style.display = 'none'
            guo[3].style.display = 'block';
            label[3].style.border = '1px #ccc solid'
            djasaas.style.display = 'none'
            yanz = true;
        } else {
            pop[3].style.display = 'block';
            guo[3].style.display = 'none';
            djasaas.style.display = 'none';
        }
    });

    // ***********************注册按钮***********************************
    // ***********************注册按钮***********************************



    let zhuce = document.querySelector('.btnan-sbj');
    let guoxuan = document.querySelector('.guoxuan');
    let xieyi = document.querySelector('.xieyi')
    zhuce.addEventListener('mouseover', function () {
        zhuce.style.backgroundColor = '#000';
  
        zhuce.addEventListener('click', function () {

            if (mool == true && olo == true && lplp == true && guoxuan.checked == true) {
                // ****************数据存储******************************
                function fn(arr) {
                    localStorage.my = JSON.stringify(arr);
                }
                function load() {
                    var arr = JSON.parse(localStorage.my);
                    return arr;
                }
                //来个空数组
                var myarr = [];
                //判断如果为空就加进去
                if (localStorage.my != null) {
                    myarr = load();
                }
                //把账号密码加到数组里面去
                myarr.push(ipt[0].value)
                myarr.push(ipt[1].value);
                fn(myarr)//保存
                console.log(myarr)
                localStorage.setItem('zhmm', myarr)


                setTimeout(function () {
                    alert('恭喜你，注册成功')
                    // span1.style.display = 'none'
                    // span2.style.display = 'none'
                    // span3.style.display = 'none'
                }, 1500)
                location.href = '../html/login.html';
            } else {
                for (let i = 0; i < ipt.length; i++) {
                    if (ipt[i].value == '') {
                        pop[i].style.display = 'block'
                    }

                }
                if (guoxuan.checked == false) {
                    xieyi.style.display = 'block'
                }
            }
        });
    });
    zhuce.addEventListener('mouseout', function () {
        zhuce.style.backgroundColor = '#444444';

    })
   


























    // 获取验证码按钮

    // inputyi.addEventListener('focus', function () {
    //     inputyi.style.fontSize = '14px';
    //     inputyi.style.color = 'black';
    //     inputyi.style.display = 'block';
    //     inputyi.value = '';
    //     label[1].style.border = '1px #000 solid'
    //     inputyi.addEventListener('input', function () {
    //         button.disabled = false;
    //         if (inputyi.value != '') {

    //             button.style.backgroundColor = '#000000'
    //             button.style.cursor = 'pointer';
    //             button.addEventListener('click', function () {
    //                 djasaas.style.display = 'block';
    //                 accksndbdsb[2].style.display = 'none';
    //                 button.disabled = false;
    //                 button.style.cursor = 'pointer';
    //                 index++
    //                 if (index > 5) {
    //                     dhsjhasd.style.display = 'block';
    //                     button.style.cursor = 'not-allowed';
    //                     button.style.backgroundColor = '#ccc'
    //                     button.disabled = true;
    //                     djasaas.style.display = 'none';
    //                 } else {
    //                     button.disabled = true;
    //                     button.style.fontSize = '13px'
    //                     button.innerHTML = '获取中...'
    //                     button.style.cursor = 'not-allowed';
    //                     timer = setInterval(function () {
    //                         if (num == 0) {
    //                             console.log(num);
    //                             clearInterval(timer);
    //                             num = 60;
    //                             timer = null;
    //                             button.style.fontSize = '14px';
    //                             button.innerHTML = '获取验证码';
    //                             button.style.cursor = 'pointer';
    //                             button.disabled = false;
    //                             button.style.backgroundColor = '#000000';
    //                         } else {
    //                             button.innerHTML = num + 's';
    //                             button.style.backgroundColor = '#ccc';
    //                             num--;
    //                         }
    //                         console.log(num);
    //                     }, 1000)

    //                 }

    //             })
    //         } else {
    //             button.disabled = true;
    //             button.style.backgroundColor = '#ccc'
    //             button.style.cursor = 'not-allowed';
    //         }
    //         // }
    //     })
    // });


    // inputyi.addEventListener('blur', function () {
    //     console.log(1);
    //     label[1].style.border = '1px #ccc solid'
    //     if (inputyi.value == '') {
    //         inputyi.style.fontSize = '12px';
    //         accksndbdsb[1].style.display = 'block';
    //     } else {
    //         accksndbdsb[1].style.display = 'none';
    //     }

    // });

    // 短信验证
    // 短信验证


    // ipt[2].addEventListener('focus', function () {
    //     ipt[2].style.fontSize = '14px';
    //     ipt[2].style.color = 'black';
    //     ipt[2].style.display = 'block';
    //     ipt[2].value = '';
    //     label[2].style.border = '1px #000 solid'

    // })
    // ipt[2].addEventListener('blur', function () {
    //     djasaas.style.display = 'none';
    //     dhsjhasd.style.display = 'none';
    //     label[2].style.border = '1px #ccc solid'

    //     if (inputer.value == '') {
    //         inputer.style.fontSize = '12px';
    //         accksndbdsb[2].style.display = 'block';

    //     } else {
    //         accksndbdsb[2].style.display = 'none';
    //     }
    // });

    // // 登录按钮
    // // 登录按钮
    // let btnansbj = document.querySelector('.btnan-sbj');
    // btnansbj.addEventListener('mouseover', function () {
    //     this.style.backgroundColor = '#000000'
    // });
    // btnansbj.addEventListener('click', function () {
    //     for (let i = 0; i < ipt.length; i++) {
    //         if (ipt[i].value == '') {
    //             pop[i].style.display = 'block'
    //             djasaas.style.display = 'none';
    //         } else {
    //             pop[i].style.display = 'none'
    //         }

    //     }
    // })
    // btnansbj.addEventListener('mouseout', function () {
    //     this.style.backgroundColor = '#444444'
    // });
    // let cellspan = document.querySelector('.cell-span');
    // let bool = true;
    // cellspan.addEventListener('click', function () {
    //     if (bool) {
    //         cellspan.style.backgroundColor = '#000000';
    //         cellspan.style.border = '2.5px solid #000000';
    //         bool = false
    //     } else {
    //         cellspan.style.backgroundColor = '';
    //         cellspan.style.border = '2.5px solid #ccc';
    //         bool = true
    //     }

    // })
});


