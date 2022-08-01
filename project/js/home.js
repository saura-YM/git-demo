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


    // **********************************轮播图************************************************
    let lunbo_e = document.querySelector('.lunbo-e');
    let ul = lunbo_e.querySelector('.lunbo-ul');
    let lis = ul.querySelectorAll('li');
    let zuo = document.querySelector('.zuo');
    let you = document.querySelector('.you');
    let ol = document.querySelector('.lunbo-ol')
    let index = 0;
    let timer = null;
    ccc();
    timer = setInterval(fnn, 1500);
    lunbo_e.addEventListener('mouseover', function () {
        zuo.style.display = 'block';
        you.style.display = 'block';
        clearInterval(timer);
    });
    lunbo_e.addEventListener('mouseout', function () {
        zuo.style.display = 'none';
        you.style.display = 'none';
        timer = setInterval(fnn, 1500)

    });
    // 右键
    you.addEventListener('click', function () {
        fnn()
    })

    // 左键

    zuo.addEventListener('click', function () {
        console.log(1);
        if (index < 0) {
            index = lis.length - 1
        }
        console.log(index);
        fn(index)
        index--;
    });

    function fnn() {
        if (++index >= lis.length) {
            index = 0;
        }
        fn(index)
    }
    // // 小圆点
    function ccc() {
        for (let i = 0; i < lis.length; i++) {
            li = document.createElement('li');
            ol.appendChild(li)
            ol.children[0].className = 'crrent';
            li.setAttribute('index', i)

            ol.children[i].addEventListener('click', function () {
                for (let i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                this.className = 'crrent';
                let index = this.getAttribute('index');
                fn(index)
            });
        };
    };

    function fn(index) {
        $('.lunbo-ul li').each(function (i, ele) {
            $(ele).eq(i).stop().fadeIn()
            $('.lunbo-ol li').eq(i).removeClass('crrent')
        })
        $('.lunbo-ul li').eq(index).stop().fadeIn().show().siblings().stop().fadeOut()
        $('.lunbo-ol li').eq(index).addClass('crrent');
        console.log(1);
    };
})

window.addEventListener('load', function () {

    // 新品轮播**************************
    // 新品轮播**************************

    let xinpinzhong = document.querySelector('.xinpin-zhong');
    let ulzuo = xinpinzhong.querySelector('.ulzuo');
    let ulyou = xinpinzhong.querySelector('.ulyou');
    let ul = xinpinzhong.querySelector('.xinpinzong-ul')
    let lis = ul.querySelectorAll('li');
    let liImg = ul.querySelectorAll('li img');
    let index = 0;
    let xinpinzhongWidth = xinpinzhong.offsetWidth;
    ulyou.addEventListener('mouseover', function () {
        ulyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';

    })
    ulyou.addEventListener('click', function () {
        index++;
        if (index >= 5) {
            index = 0;

        }
        animation(ul, -index * xinpinzhongWidth)
    });
    ulyou.addEventListener('mouseout', function () {
        ulyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    ulzuo.addEventListener('mouseover', function () {
        ulzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    ulzuo.addEventListener('click', function () {
        if (index <= 0) {
            index = 5
        }
        index--;
        animation(ul, -index * xinpinzhongWidth)
    });
    ulzuo.addEventListener('mouseout', function () {
        ulzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    for (let i = 0; i < liImg.length; i++) {
        liImg[i].addEventListener('mouseover', function () {
            for (let i = 0; i < liImg.length; i++) {
                liImg[i].style.opacity = '';
            }

            this.style.opacity = '.8'
        })
        liImg[i].addEventListener('mouseout', function () {
            for (let i = 0; i < liImg.length; i++) {
                liImg[i].style.opacity = '';
            }
        })
    }

    //热门轮播******************************
    //热门轮播******************************

    let remenzhong = document.querySelector('.remen-zhong');
    let ullzuo = remenzhong.querySelector('.ulzuo');
    let ullyou = remenzhong.querySelector('.ulyou');
    let ull = remenzhong.querySelector('.remen-ul')
    let liis = ull.querySelectorAll('li');
    let liiImg = ull.querySelectorAll('li img');
    let count = 0;
    let remenzhongWidth = remenzhong.offsetWidth;
    ullyou.addEventListener('mouseover', function () {
        ullyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';

    })
    ullyou.addEventListener('click', function () {
        count++;
        if (count >= 5) {
            count = 0;

        }
        animation(ull, -count * remenzhongWidth)
    });
    ullyou.addEventListener('mouseout', function () {
        ullyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    ullzuo.addEventListener('mouseover', function () {
        ullzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    ullzuo.addEventListener('click', function () {
        if (count <= 0) {
            count = 5
        }
        count--;
        animation(ull, -count * remenzhongWidth)
    });
    ullzuo.addEventListener('mouseout', function () {
        ullzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    for (let i = 0; i < liiImg.length; i++) {
        liiImg[i].addEventListener('mouseover', function () {
            for (let i = 0; i < liiImg.length; i++) {
                liiImg[i].style.opacity = '';
            }
            this.style.opacity = '.8'

        });
        liiImg[i].addEventListener('mouseout', function () {
            for (let i = 0; i < liiImg.length; i++) {
                liiImg[i].style.opacity = '';
            }
        })

    }

    // ****************精选分类*************************
    let mainjinx = document.querySelector('.main-jinx');
    let aa = mainjinx.querySelectorAll('a');
    console.log(aa);
    let img = mainjinx.querySelectorAll('a img');
    console.log(img);
    for (let i = 0; i < aa.length; i++) {
        aa[i].addEventListener('mouseover', function () {
            for (let i = 0; i < aa.length; i++) {
                aa[i].style.opacity = '';
            }
            this.style.opacity = '.8'
        })
        aa[i].addEventListener('mouseout', function () {
            for (let i = 0; i < aa.length; i++) {
                aa[i].style.opacity = '';
            }
        })
    }
})


// *******猜你喜欢*********
// *******猜你喜欢*********

window.addEventListener('load', function () {
    let cainscv = document.querySelector('.cain-scv');
    let cainijk = document.querySelector('.cainijk')
    let cainscvnvn = cainscv.querySelector('.cainscv-nvn');
    let scvzuo = cainscv.querySelector('.scvzuo');
    let scvyou = cainscv.querySelector('.scvyou');
    let divs = cainscvnvn.querySelectorAll('.nvn-dg');
    let cainscvWidth = cainscv.offsetWidth;
    let cainijkW = 1160;
    let index = 0;
    let div1 = cainscvnvn.children[0].cloneNode(true);
    cainscvnvn.appendChild(div1)
    let div2 = cainscvnvn.children[1].cloneNode(true);
    cainscvnvn.appendChild(div2)
    let div3 = cainscvnvn.children[2].cloneNode(true);
    cainscvnvn.appendChild(div3)
    let div4 = cainscvnvn.children[3].cloneNode(true);
    cainscvnvn.appendChild(div4)

    scvyou.addEventListener('mouseover', function () {
        scvyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    scvyou.addEventListener('click', function () {
        index++;
        if (index == 6) {
            index = 1;
            cainscvnvn.style.left = 1600 + 'px';
        }
        animation(cainscvnvn, -index * cainijkW);
    });
    scvyou.addEventListener('mouseout', function () {
        scvyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    })

    scvzuo.addEventListener('mouseover', function () {
        scvzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    scvzuo.addEventListener('click', function () {

        if (index == 0) {
            index = 5;
            cainscvnvn.style.left = -index * cainijkW + 'px';
        }
        index--;
        animation(cainscvnvn, -index * cainijkW);
    })
    scvzuo.addEventListener('mouseout', function () {
        scvzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });
    let divimg = document.querySelectorAll('.nvn-dg img')
    for (let i = 0; i < divimg.length; i++) {
        divimg[i].addEventListener('mouseover', function () {
            for (let i = 0; i < divimg.length; i++) {
                divimg[i].style.opacity = '';
            }
            this.style.opacity = '.8'
        })
        divimg[i].addEventListener('mouseout', function () {
            for (let i = 0; i < divimg.length; i++) {
                divimg[i].style.opacity = '';
            }
        })
    }
})
