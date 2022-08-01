window.addEventListener('load', function () {

    // 设置数据与存储数据
    let btnbuy = document.querySelector('.btn-buy');
    btnbuy.addEventListener('click', function () {
        let item1 = " <div class=\"promotion-product kpl lkj \">\n" +
            "                        <div class=\"cctv cconte0 disflexcoum flexstart\">\n" +
            "\n" +
            "                            <div class=\"ol\">\n" +
            "\n" +
            "                                <input type=\"checkbox\" name=\"brand0hs\" value=\"1\" class=\"linklpo lsp\">\n" +
            "\n" +
            "                            </div>\n" +
            "\n" +
            "                        </div>\n" +
            "                        <div class=\"cart-product-cell info\">\n" +
            "                            <a href=\"javascript:;\" class=\"info-imglink left\">\n" +
            "                                <img src=\"../image/放大镜区/fada.jpg\" alt=\"\">\n" +
            "                            </a>\n" +
            "                            <div class=\"info-details left\">\n" +
            "                                <a class=\"info-link\" sel-id=\"cart-product-name\" href=\"javascript:;\"\n" +
            "                                    title=\"【经典款】Gucci古驰GG Marmont系列mini绗缝单肩包黑色\" target=\"_blank\">【经典款】Gucci古驰GG\n" +
            "                                    Marmont系列mini绗缝单肩包黑色</a>\n" +
            "                                <div class=\"info-configurable\">\n" +
            "                                    <span sel-id=\"cart-product-attr\">规格：<em>ONESIZE</em></span>\n" +
            "                                    <span sel-id=\"cart-product-attr\">颜色：<em>黑色</em></span>\n" +
            "                                </div>\n" +
            "                                <div class=\"info-bundle scrollbar\">\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"cart-product-cell weight bnm matop\">\n" +
            "                            <span>1000g</span>\n" +
            "                        </div>\n" +
            "                        <div class=\"cart-product-cell pricee bnm matop\">\n" +
            "                            <p class=\"original-price\">￥35900.00</p>\n" +
            "                            <p class=\"current-price tag-reference\">\n" +
            "                                <span class=\"klk\" sel-id=\"cart-product-price\">￥32311.00</span>\n" +
            "                            </p>\n" +
            "                        </div>\n" +
            "                        <div class=\"opop matop\">\n" +
            "                            <div class=\"dd clearfix js-panel-cartcount\">\n" +
            "                                <input type=\"button\" class=\"button quantity-minus btn-minus jian\">\n" +
            "                                <input type=\"text\" value=\"1\" class=\"quantity-display cart-count shul\">\n" +
            "                                <input type=\"button\" class=\"button quantity-add btn-add jia\">\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"cart-product-cell bnm subtotall matop\">\n" +
            "                            <p class=\"subtotal-price klprice\" sel-id=\"cart-product-total-price\">￥32311.00</p>\n" +
            "                        </div>\n" +
            "                        <div class=\"cart-product-cell operationn matop\">\n" +
            "                            <a class=\"operation-delete\" id=\"id\" href=\"javascript:;\">\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </div>"


        let text = $('.cart-count').val()

        localStorage.setItem('text', text)

        if (localStorage.getItem('zjg') != null) {
            $('.queren-lp').css('display', 'block');
        }
        localStorage.setItem('zjg', item1);

    });
    $('.he-shang span').click(function () {
        $('.queren-lp').css('display', 'none');
    });
    $('.he-btn').click(function () {
        $('.queren-lp').css('display', 'none');
    });
    $('.he-btn2').click(function () {
        location.href = '../html/cart.html';
    });

    // 购物栏数量；
    let guo = localStorage.getItem('jianshu');
    if (guo != null) {
        $('.jianshu').html(guo);
    }

    // 获取购物车数量 
    
    // $('.btn-buy').click(function () {
    //     let guoce = parseInt($('.jianshu').html());
    //     let text = parseInt($('.cart-count').val());
    //     console.log(guoce);
    //     console.log(text);
    //     let n = guoce + text
    //     // localStorage.setItem('jianshu', n);
    //     // let shu = localStorage.getItem('jianshu');
    //     // console.log(shu);
    //     // if (shu!=null) {
    //         $('.jianshu').html(shu);
    //     // }
    // })
  
    // 加号按钮
    
     
    // ***************************Tbo下拉菜单**********************************
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


    // 大盒子
    let big = document.querySelector('.product-gallery-big');
    // 遮挡层
    let zhe = big.querySelector('.zhe');
    // 大图片盒子
    let datu = big.querySelector('.datu');
    // 大图片
    let datuImg = datu.querySelector('.datu-tu')
    let bigWidth = big.offsetWidth;

    // 显示隐藏
    big.addEventListener('mouseover', function () {
        zhe.style.display = 'block';
        datu.style.display = 'block';
    });

    big.addEventListener('mouseout', function () {
        zhe.style.display = 'none';
        datu.style.display = 'none';
    });
    let bigLeft = big.offsetLeft;
    let bigTop = big.offsetTop;

    // 鼠标移动获取偏移量
    big.addEventListener('mousemove', function (e) {
        let x = e.pageX - bigLeft;
        let y = e.pageY - bigTop;
        let zheX = x - zhe.offsetWidth / 2;
        let zheY = y - zhe.offsetHeight / 2;
        let zheMaxX = big.offsetWidth - zhe.offsetWidth;
        let zhemaxY = big.offsetHeight - zhe.offsetHeight;
        if (zheX <= 0) {
            zheX = 0;
        } else if (zheX >= zheMaxX) {
            zheX = zheMaxX
        }
        if (zheY <= 0) {
            zheY = 0
        } else if (zheY >= zhemaxY) {
            zheY = zhemaxY
        }

        zhe.style.left = zheX + 'px'
        zhe.style.top = zheY + 'px'

        // 大图最大偏移量
        let imgMaxX = datuImg.offsetWidth - datu.offsetWidth;
        let imgMaxY = datuImg.offsetHeight - datu.offsetHeight;

        // 图片的移动=（遮挡层的偏移量*大图的最大偏移量）/遮挡层的最大偏移量
        let imgX = (zheX * imgMaxX) / zheMaxX;
        let imgY = (zheY * imgMaxY) / zhemaxY

        datuImg.style.left = -imgX + 'px';
        datuImg.style.top = -imgY + 'px';
    })
    // 切换图片

    let zoomPad = document.querySelector('.zoomPad img');
    console.log(zoomPad);
    let lis = document.querySelectorAll('.thumb-wrap ul li')
    let dizi = document.querySelectorAll('.thumb-wrap ul li img')
    console.log(dizi);
    for (let i = 0; i < dizi.length; i++) {
        lis[i].addEventListener('click', function () {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            this.className = 'crrent'
            zoomPad.src = dizi[i].src
            datuImg.src = dizi[i].src
        })

    }

    // 按钮
    let flas = document.querySelectorAll('.fl-a');

    flas[0].addEventListener('mouseover', function () {
        this.style.backgroundImage = 'url(../image/放大镜区/jian2.png)'
        this.style.borderColor = '#000'
    })
    flas[0].addEventListener('mouseout', function () {
        this.style.backgroundImage = 'url(../image/放大镜区/jian1.png)'
        this.style.borderColor = '#ececec'
    })

    flas[1].addEventListener('mouseover', function () {
        this.style.backgroundImage = 'url(../image/放大镜区/jian4.png)'
        this.style.borderColor = '#000'
    })
    flas[1].addEventListener('mouseout', function () {
        this.style.backgroundImage = 'url(../image/放大镜区/jian3.png)'
        this.style.borderColor = '#ececec'
    })

    // 加商品
    let int1 = document.querySelector('.quantity-minus');
    let inp2 = document.querySelector('.quantity-display');
    let inp3 = document.querySelector('.quantity-add');

    inp3.addEventListener('mouseup', function () {

        if (inp2.value < 10) {
            // alert('只限购10件');
            disabled = false;

            inp2.value++

        } else {
            disabled = true

        }

    })

    int1.addEventListener('mouseup', function () {
        if (inp2.value > 1) {
            disabled = false;

            inp2.value--
        } else {
            disabled = true;

        }

    });

    let btn = document.querySelector('.btn-buy');
    btn.addEventListener('mouseover', function () {
        btn.style.backgroundColor = '#700017'
    })

    btn.addEventListener('mouseout', function () {
        btn.style.backgroundColor = '#000'
    })

    // 爱心
    let aix = document.querySelector('.icon-collect');
    let bool = true;
    aix.addEventListener('click', function () {
        if (bool == true) {
            aix.style.backgroundImage = 'url(../image/放大镜区/shixi.png)'
            bool = false
        } else {
            aix.style.backgroundImage = 'url(../image/放大镜区/kongx.png)'

            bool = true
        }

    });


    // 分享部分

    let weixin = document.querySelector('.weixin')
    console.log(weixin);
    let xians = weixin.querySelector('.erweima-show');
    let sina = document.querySelector('.sina');
    let qq = document.querySelector('.qq')
    let douban = document.querySelector('.douban')

    weixin.addEventListener('mouseover', function () {
        weixin.style.backgroundImage = 'url(../image/放大镜区/vx2.svg)'
        xians.style.display = 'block';
    })
    weixin.addEventListener('mouseout', function () {

        weixin.style.backgroundImage = 'url(../image/放大镜区/vx.svg)'
        xians.style.display = 'none';
    });
    sina.addEventListener('mouseover', function () {

        sina.style.backgroundImage = 'url(../image/放大镜区/xl2.svg)'

    })
    sina.addEventListener('mouseout', function () {

        sina.style.backgroundImage = 'url(../image/放大镜区/xl.svg)'

    });
    qq.addEventListener('mouseover', function () {

        qq.style.backgroundImage = 'url(../image/放大镜区/kj2.svg)'

    })
    qq.addEventListener('mouseout', function () {

        qq.style.backgroundImage = 'url(../image/放大镜区/kj.svg)'

    });
    douban.addEventListener('mouseover', function () {

        douban.style.backgroundImage = 'url(../image/放大镜区/duo2.svg)'

    })
    douban.addEventListener('mouseout', function () {

        douban.style.backgroundImage = 'url(../image/放大镜区/dou.svg)'

    })

    // left*******************************zuo左********************************
    let mainpo = document.querySelectorAll('.main-po');
    console.log(mainpo);
    let mbtn = document.querySelectorAll('.main-bfd-addcart')
    console.log(mbtn);
    for (let i = 0; i < mainpo.length; i++) {

        mainpo[i].addEventListener('mouseover', function () {
            for (let i = 0; i < mainpo.length; i++) {
                mainpo[i].style.border = '';
                mbtn[i].style.display = '';
            }
            this.style.borderColor = ' black'
            mbtn[i].style.display = 'block'

        })
        mainpo[i].addEventListener('mouseout', function () {
            for (let i = 0; i < mainpo.length; i++) {
                mainpo[i].style.border = '';
                mbtn[i].style.display = '';
            }
        });
        mbtn[i].addEventListener('mouseover', function () {

            this.style.backgroundColor = '#700017'
        })
        mbtn[i].addEventListener('mouseout', function () {

            this.style.backgroundColor = '#000'
        })
    }

    // 滚动轮播
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
        });
        bttn[i].addEventListener('mouseover', function () {

            this.style.backgroundColor = '#700017'
        })
        bttn[i].addEventListener('mouseout', function () {

            this.style.backgroundColor = '#000'
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
            lunbochang.style.left = 1190 + 'px'
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

    // ************************************teb切换*********************************************
    let spans = document.querySelectorAll('.main-reigth-biao span');
    console.log(spans);
    let divs = document.querySelectorAll('.main-reigth-xia .lll')
    console.log(divs);
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', function () {
            for (let i = 0; i < spans.length; i++) {
                spans[i].className = "";
                divs[i].style.display = 'none';
            }
            this.className = 'anksa';
            divs[i].style.display = 'block';

        })

    }

    // ******************************第二个轮播**********************************


    let mianlunbochang = document.querySelector('.mian-lunbo-chang');
    let mianwuppos = mianlunbochang.querySelectorAll('.mian-wup-po');
    let mianjiaru = mianlunbochang.querySelectorAll('.mian-bfd-addcart');
    let mianbttn = document.querySelectorAll('.mian-bfd-addcart')
    for (let i = 0; i < mianwuppos.length; i++) {
        mianwuppos[i].addEventListener('mouseover', function () {
            for (let i = 0; i < mianwuppos.length; i++) {
                mianwuppos[i].style.border = '';
                mianjiaru[i].style.display = '';
            }
            this.style.border = '1px solid black'
            mianjiaru[i].style.display = 'block'

        })
        mianwuppos[i].addEventListener('mouseout', function () {
            for (let i = 0; i < mianwuppos.length; i++) {
                mianwuppos[i].style.border = '';
                mianjiaru[i].style.display = '';
            }
        });
        mianbttn[i].addEventListener('mouseover', function () {

            this.style.backgroundColor = '#700017'
        })
        mianbttn[i].addEventListener('mouseout', function () {

            this.style.backgroundColor = '#000'
        })
    }

    let mianlubo1 = document.querySelector('.mian-lubo1');
    let mianulzuo = mianlubo1.querySelector('.mian-ulzuo');
    let mianulyou = mianlubo1.querySelector('.mian-ulyou');
    let mianlubo1Width = mianlubo1.offsetWidth;
    let count = 1;

    mianulyou.addEventListener('mouseover', function () {
        mianulyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';

    })
    mianulyou.addEventListener('click', function () {
        count++;
        if (count == 5) {
            count = 1;
            mianlunbochang.style.left = 975 + 'px'
        }
        animation(mianlunbochang, -count * mianlubo1Width)
    });
    mianulyou.addEventListener('mouseout', function () {
        mianulyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    mianulzuo.addEventListener('mouseover', function () {
        mianulzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    mianulzuo.addEventListener('click', function () {
        if (count == 1) {
            count = 4;
            mianlunbochang.style.left = -count * mianlubo1Width + 'px'
        }
        count--;
        animation(mianlunbochang, -count * mianlubo1Width)
    });
    mianulzuo.addEventListener('mouseout', function () {
        mianulzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });


    // ************************************第三个手动轮播*****************************
    // ************************************第三个手动轮播*****************************

    let cainilunbochang = document.querySelector('.caini-lunbo-chang');
    let cainiwuppos = cainilunbochang.querySelectorAll('.caini-wup-po');
    let cainijiaru = cainilunbochang.querySelectorAll('.caini-bfd-addcart');
    let cainibttn = document.querySelectorAll('.caini-bfd-addcart')
    for (let i = 0; i < cainiwuppos.length; i++) {
        cainiwuppos[i].addEventListener('mouseover', function () {
            for (let i = 0; i < cainiwuppos.length; i++) {
                cainiwuppos[i].style.border = '';
                cainijiaru[i].style.display = '';
            }
            this.style.borderColor = 'black'
            cainijiaru[i].style.display = 'block'

        })
        cainiwuppos[i].addEventListener('mouseout', function () {
            for (let i = 0; i < cainiwuppos.length; i++) {
                cainiwuppos[i].style.border = '';
                cainijiaru[i].style.display = '';
            }
        });
        cainibttn[i].addEventListener('mouseover', function () {

            this.style.backgroundColor = '#700017'
        })
        cainibttn[i].addEventListener('mouseout', function () {

            this.style.backgroundColor = '#000'
        })
    }

    // 点击轮播
    let cainilubo1 = document.querySelector('.caini-lubo1');
    let cainiulzuo = cainilubo1.querySelector('.caini-ulzuo');
    let cainiulyou = cainilubo1.querySelector('.caini-ulyou');
    let cainilubo1Width = cainilubo1.offsetWidth;
    let num = 1;

    cainiulyou.addEventListener('mouseover', function () {
        cainiulyou.style.backgroundColor = 'rgba(0, 0, 0, .5)';

    })
    cainiulyou.addEventListener('click', function () {
        num++;
        if (num == 5) {
            num = 1;
            cainilunbochang.style.left = 975 + 'px'
        }
        animation(cainilunbochang, -num * cainilubo1Width)
    });
    cainiulyou.addEventListener('mouseout', function () {
        cainiulyou.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });

    cainiulzuo.addEventListener('mouseover', function () {
        cainiulzuo.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
    cainiulzuo.addEventListener('click', function () {
        if (num == 1) {
            num = 5;
            cainilunbochang.style.left = -num * cainilubo1Width + 'px'
        }
        num--;
        animation(cainilunbochang, -num * cainilubo1Width)
    });
    cainiulzuo.addEventListener('mouseout', function () {
        cainiulzuo.style.backgroundColor = 'rgba(0, 0, 0, .25)';
    });
});

