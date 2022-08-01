window.addEventListener('load', function () {
    // 购物车的数量
    // 购物栏数量；
    let guo = localStorage.getItem('jianshu');
    if (guo != null) {
        $('.jianshu').html(guo);
    }

    // ***************************Tbo**********************************
    let liss = document.querySelectorAll('.nav-yiul li');
    let lala = document.querySelectorAll('.lala');
    for (let i = 0; i < liss.length; i++) {
        liss[i].addEventListener('mouseover', function () {
            for (let i = 0; i < lala.length; i++) {
                lala[i].style.display = 'none';

            }
            lala[i].style.display = 'block';
        });

        lala[i].addEventListener('mousemove', function () {

            lala[i].style.display = 'block';

        });
        lala[i].addEventListener('mouseout', function () {

            lala[i].style.display = 'none';

        });
        liss[i].addEventListener('mouseout', function () {

            lala[i].style.display = 'none';

        });
    }
    // *********************菜单*************************
    // *********************菜单*************************
    let jkf = document.querySelectorAll('.jkf');
    let xia = document.querySelectorAll('.xia');
    for (let i = 0; i < jkf.length; i++) {
        jkf[i].addEventListener('mouseover', function () {
            for (let i = 0; i < jkf.length; i++) {
                xia[i].style.display = 'none'
                this.style.borderColor = ''
            }
            this.style.borderColor = '#000'
            xia[i].style.display = 'block';
        })
        xia[i].addEventListener('mouseover', function () {
            xia[i].style.display = 'block';
        });
        xia[i].addEventListener('mouseout', function () {

            xia[i].style.display = 'none';

        });
        jkf[i].addEventListener('mouseout', function () {
            for (let i = 0; i < jkf.length; i++) {
                xia[i].style.display = 'none'
                this.style.borderColor = ''
            }
            xia[i].style.display = 'none';
        })
        
    }

    // 内容区
    let hbhaas = document.querySelectorAll('.hbha-as');
    console.log(hbhaas);
    let mainfdaddcart = document.querySelectorAll('.nen-nvn .main-bfd-addcart');
    console.log(mainfdaddcart);
    for (let i = 0; i < hbhaas.length; i++) {
        hbhaas[i].addEventListener('mouseover', function () {
            for (let i = 0; i < hbhaas.length; i++) {
                hbhaas[i].style.border = '';
                mainfdaddcart[i].style.display = '';
            }
            this.style.borderColor = 'black'
            mainfdaddcart[i].style.display = 'block'

        })
        hbhaas[i].addEventListener('mouseout', function () {
            for (let i = 0; i < hbhaas.length; i++) {
                hbhaas[i].style.border = '';
                mainfdaddcart[i].style.display = '';
            }
        })
        mainfdaddcart[i].addEventListener('mouseover', function () {
          
            this.style.backgroundColor = '#700017'
        })
        mainfdaddcart[i].addEventListener('mouseout', function () {
           
            this.style.backgroundColor = '#000'
        })
    }

    let lunbochang = document.querySelector('.lunbo-chang');
    let wuppos = lunbochang.querySelectorAll('.wup-po');
    let jiaru = lunbochang.querySelectorAll('.recommend-bfd-addcart');
    let bttn = document.querySelectorAll('.recommend-bfd-addcart')
    console.log(bttn);
    console.log(wuppos);
    for (let i = 0; i < wuppos.length; i++) {
        wuppos[i].addEventListener('mouseover', function () {
            for (let i = 0; i < wuppos.length; i++) {
                wuppos[i].style.border = '';
                jiaru[i].style.display = '';
            }
            this.style.borderColor = 'black'
            jiaru[i].style.display = 'block'

        })
        wuppos[i].addEventListener('mouseout', function () {
            for (let i = 0; i < wuppos.length; i++) {
                wuppos[i].style.border = '';
                jiaru[i].style.display = '';
            }
        })
        bttn[i].addEventListener('mouseover', function () {
           
            this.style.backgroundColor = '#700017'
        })
        bttn[i].addEventListener('mouseout', function () {
           
            this.style.backgroundColor = '#000'
        })
    }

    // ********************分页************************************
    let xiajbullis = document.querySelectorAll('.xiajb-ul .jb-l');
    for (let i = 0; i < xiajbullis.length; i++) {
        xiajbullis[i].addEventListener('mouseover', function () {
            for (let i = 0; i < xiajbullis.length; i++) {
                xiajbullis[i].style.borderColor = '#ececec'
            }
            this.style.borderColor = '#000';
            xiajbullis[i].addEventListener('mouseout', function () {
                xiajbullis[i].style.borderColor = '#ececec'
            })
        })

    }

    // 相关推荐
    // 相关推荐
    // 相关推荐
    // ************************************************************
    let lubo1 = document.querySelector('.lubo1');
    let ulzuo = lubo1.querySelector('.ulzuo');
    let ulyou = lubo1.querySelector('.ulyou');
    let lubo1Width = lubo1.offsetWidth;
    let index = 1;
    ulyou.addEventListener('mouseover', function () {
        ulyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';

    })
    ulyou.addEventListener('click', function () {
        index++;
        if (index == 4) {
            index = 1;
            lunbochang.style.left = 1240 + 'px'
        }
        animation(lunbochang, -index * lubo1Width)
    });
    ulyou.addEventListener('mouseout', function () {
        ulyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    ulzuo.addEventListener('mouseover', function () {
        ulzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    ulzuo.addEventListener('click', function () {
        if (index == 0) {
            index = 3;
            lunbochang.style.left = -index * lubo1Width + 'px'
        }
        index--;
        animation(lunbochang, -index * lubo1Width)
    });
    ulzuo.addEventListener('mouseout', function () {
        ulzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    // *****************************猜你喜欢*************************
    // *****************************猜你喜欢*************************
    // *****************************猜你喜欢*************************
    let viplunbochang = document.querySelector('.vip-lunbo-chang');
    let vipwuppos = viplunbochang.querySelectorAll('.vip-wup-po');
    let vipjiaru = viplunbochang.querySelectorAll('.vip-recommend-bfd-addcart');
    let vipbttn = document.querySelectorAll('.vip-recommend-bfd-addcart')
    console.log(wuppos);
    for (let i = 0; i < vipwuppos.length; i++) {
        vipwuppos[i].addEventListener('mouseover', function () {
            for (let i = 0; i < vipwuppos.length; i++) {
                vipwuppos[i].style.border = '';
                vipjiaru[i].style.display = '';
            }
            this.style.borderColor = 'black'
            vipjiaru[i].style.display = 'block'

        })
        vipwuppos[i].addEventListener('mouseout', function () {
            for (let i = 0; i < vipwuppos.length; i++) {
                vipwuppos[i].style.border = '';
                vipjiaru[i].style.display = '';
            }
        });
        vipbttn[i].addEventListener('mouseover', function () {
            
            this.style.backgroundColor = '#700017'
        })
        vipbttn[i].addEventListener('mouseout', function () {
            
            this.style.backgroundColor = '#000'
        })
    }


    let viplubo1 = document.querySelector('.vip-lubo1');
    let vipulzuo = viplubo1.querySelector('.vip-ulzuo');
    let vipulyou = viplubo1.querySelector('.vip-ulyou');
    let viplubo1Width = viplubo1.offsetWidth;
    let vipindex = 1;
    vipulyou.addEventListener('mouseover', function () {
        vipulyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';

    })
    vipulyou.addEventListener('click', function () {
        vipindex++;
        if (vipindex == 4) {
            vipindex = 1;
            viplunbochang.style.left = 1240 + 'px'
        }
        animation(viplunbochang, -vipindex * viplubo1Width)
    });
    vipulyou.addEventListener('mouseout', function () {
        vipulyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    vipulzuo.addEventListener('mouseover', function () {
        vipulzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    vipulzuo.addEventListener('click', function () {
        if (vipindex == 0) {
            vipindex = 3;
            viplunbochang.style.left = -vipindex * viplubo1Width + 'px'
        }
        vipindex--;
        animation(viplunbochang, -vipindex * viplubo1Width)
    });
    vipulzuo.addEventListener('mouseout', function () {
        vipulzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

})