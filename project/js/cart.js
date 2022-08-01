$(function () {

    let itme = localStorage.getItem('zjg');
    let textt = localStorage.getItem('text');

    console.log(textt);

    console.log(itme);
    if (itme != null) {
        // itme.classList.add('itme1')

        let div = $(itme);
        console.log($(div).attr("name", "name"));
        $(div).attr("name", "name")
        $('.promotion-info').append(div);
        $('.shul').val(textt);
        let p = $('.shul').val();
        let mun = $('.klk').html();

        mun = mun.substr(1);
        // console.log(mun);
        $('.klprice').html('￥' + (p * mun).toFixed(2));
    }
    
    // $('.operation-delete').last().click(function () {
    //     localStorage.clear();
    // });

    // 减商品存储数据
    // 减商品存储数据

    $('.jian').click(function () {
        let pp = $('.shul').val()
        pp = pp - 1;
        console.log(pp);
        localStorage.setItem('text', pp)
    });

    // 改数量存储数据
    // 改数量存储数据

    $('.shul').blur(function () {
        let m = $(this).val();
        m = parseInt(m);
        let zz = /^\+?[1-9]{1}[0-9]{0,2}\d{0,0}$/;
        if (!zz.test(m)) {
            $(this).val(parseInt(1));
            m = $(this).val();
            alert('请输入1-99的数字！');
            let p = $('.klk').html()
            p = p.substr(1)
            $('.klprice').html('￥' + (m * p).toFixed(2))
            getSun();
        } else {
            localStorage.setItem('text', m)
            let p = $('.klk').html()
            p = p.substr(1)
            $('.klprice').html('￥' + (m * p).toFixed(2))
            getSun()
        }

    });

    // 加商品存储数据
    $('.jia').click(function () {
        let j = parseInt($('.shul').val());
        j = j + 1
        console.log(j);
        localStorage.setItem('text', j)
    })



    // 全选

    $('.checkall').click(function () {
        $('.linklpo').prop('checked', $(this).prop('checked'));
        if ($('.linklpo:checked').prop('checked')) {
            $('.promotion-meet').css('display', 'block')
        } else {
            $('.promotion-meet').css('display', 'none')
        }
        getSun()
    });

    // 单选
    $('.linklpo').each(function () {
        $(this).click(function () {
            if ($('.linklpo:checked').prop('checked')) {
                $('.promotion-meet').css('display', 'block')
            } else {
                $('.promotion-meet').css('display', 'none')
            }
            if ($('.linklpo:checked').length === $('.linklpo').length) {
                $('.checkall').prop('checked', true);
            } else {
                $('.checkall').prop('checked', false);
            }
            getSun()
        })
    });
    getSun()
    // 加号

    $('.quantity-add').click(function () {

        let n = $(this).siblings('.cart-count').val()
        if (isNaN(n)) {
            $(this).siblings('.cart-count').val(1)
            alert('请输入1-99的数字！');
        } else {
            n++
            $(this).siblings('.cart-count').val(n);
            // 小计模块
            let num = $(this).parents('.opop').siblings('.pricee').find('span').html()
            console.log(num);
            num = num.substr(1);
            // console.log(num);
            $(this).parents('.opop').siblings('.subtotall').find('p').html('￥' + (num * n).toFixed(2))

            // 重量
            getSun()
        }

    });

    // 减号
    $('.quantity-minus').click(function () {
        let n = $(this).siblings('.cart-count').val()
        // console.log(n);
        if (isNaN(n)) {
            $(this).siblings('.cart-count').val(1)
            alert('请输入1-99的数字！');

        } else {
            if (n == 1) {
                return false;
            }
            n--
            $(this).siblings('.cart-count').val(n);
            let num = $(this).parents('.opop').siblings('.pricee').find('span').html()
            num = num.substr(1);
            $(this).parents('.opop').siblings('.subtotall').find('p').html('￥' + (num * n).toFixed(2));
            getSun()
        }


    });

    // 改数量
    $('.cart-count').each(function () {
        $(this).change(function () {
            let m = $(this).val();
            m = parseInt(m)
            let zz = /^\+?[1-9]{1}[0-9]{0,2}\d{0,0}$/;
            console.log(m);
            if (!zz.test(m)) {
                $(this).val(parseInt(1));
                m = $(this).val();
                alert('请输入1-99的数字！');
                let p = $(this).parents('.opop').siblings('.subtotall').find('p').html()
                p = p.substr(1)
                $(this).parents('.opop').siblings('.subtotall').find('p').html('￥' + (m * p).toFixed(2))
                getSun();
            } else {
                let p = $(this).parents('.opop').siblings('.subtotall').find('p').html()
                p = p.substr(1)
                $(this).parents('.opop').siblings('.subtotall').find('p').html('￥' + (m * p).toFixed(2))
                getSun();
            }

        })

    })

    function getSun() {
        let jianshu = 0;    //件数
        let count = 0;        //总额
        let youhui = 0;         //优惠
        let chajia = 0;             //差价
        let n = 0;
        let b = 0
        let l = 0
        $('.quantity-display').each(function () {
            if ($(this).parents('.opop').siblings('.cctv').find('.linklpo').prop('checked')) {
                jianshu += parseInt($(this).val())
                console.log(jianshu);
            }
        })
        $('.mlml strong').html(jianshu);
        // 存储商品数据
        $('.subtotal-price').each(function () {
            if ($(this).parent('.cart-product-cell').siblings('.cctv').find('.linklpo').prop('checked')) {
                count += parseFloat($(this).html().substr(1))
            }

        })
        $('.quantity-display').each(function () {
            if ($(this).parents('.opop').siblings('.cctv').find('.linklpo').prop('checked')) {
                n += parseInt($(this).val())
                b = $(this).parents('.opop').siblings('.weight').find('span').html();
                b = b.substring(0, 4)
                console.log(b);
            }
        })
        // 享优惠

        if ($('.linklpo').prop('checked')) {
            $('.btn-checkout').css('backgroundColor', '#700017')
            $('.meet-span').css({ 'display': 'inline-block', 'color:': '#700017' }).siblings('.lpolpo').css('display', 'none')
            $('.cvcvcv').css('display', 'block').siblings('.nvnvnv').css('display', 'none')
        } else {
            $('.btn-checkout').css('backgroundColor', '#999999')
            $('.meet-span').css('display', 'none').siblings('.lpolpo').css('display', 'inline-block')
            $('.cvcvcv').css('display', 'none').siblings('.nvnvnv').css('display', 'block')

        }
        // 购物车数量
        $('.quantity-display').each(function () {
            l += parseInt($(this).val())
            console.log(l);
        })
        localStorage.setItem('jianshu', l);
        $('.jianshu').html(l)
        $('.zl').html((b * n) + 'g')
        youhui = (count * 0.9);
        chajia = count - youhui
        $('.chaj em').html('-￥' + chajia.toFixed(2));
        $('.meet-price').html('-￥' + chajia.toFixed(2));
        $('.heji strong').html('￥' + youhui.toFixed(2));
        $('.cart-lp em').html('￥' + count.toFixed(2))
        $('.zj').html('￥' + count.toFixed(2));


    }


    // 点击删除，删除当前商品
    $('.operation-delete').each(function () {
        $(this).click(function () {
            // $(this).parent('.operationn').parent('.promotion-product').remove();
            let shan = $(this).parent('.operationn').parent('.promotion-product');
            console.log(shan);
            let ta = $(this).parent('.operationn').parent('.kpl').parents('.cart-product-row').parents('main').siblings('.queren-lp');
            $(ta).css('display', 'block')
            $(ta).find('.he-shang span').click(function () {
                shan = '';
                $(ta).css('display', 'none')
                getSun()
            })
            $(ta).find('.he-xia .he-btn').click(function () {
                console.log($(shan).attr("name") == "name");
                if ($(shan).attr('name') == "name") {
                    localStorage.removeItem('zjg')
                }
                $(ta).css('display', 'none')
                $(shan).remove()
                getSun()

            })
            $(ta).find('.he-xia .he-btn2').click(function () {
                $(ta).css('display', 'none');
                 shan = '';
                getSun()
            })
            getSun()
        })
    });

    // 删除所选商品
    $('.settlement-operation').click(function () {
        let xuan = $('.queren-lp2')
        console.log(1234);
        if ($('.linklpo:checked')) {

            $(xuan).css('display', 'block')
            console.log(xuan);
            $(xuan).find('.he-shang2 span').click(function () {
                $(xuan).css('display', 'none');
                getSun();
            });
            $(xuan).find('.he-xia2 .he-btn2').click(function () {
                $('.linklpo:checked').parents('.cctv').parent('.promotion-product').remove()
                $(xuan).css('display', 'none');
                getSun();
            })
            $(xuan).find('.he-xia2 .he-btn3').click(function () {
                $(xuan).css('display', 'none');
                getSun();
            })
            // $('.linklpo:checked').parents('.cctv').parent('.promotion-product').remove()
            getSun();
        }
    });
    $('.settlement-operation').click(function () {
        let xuan = $('.queren-lp2')
        console.log(1234);
        if ($('.lsp:checked')) {

            $(xuan).css('display', 'block')
            console.log(xuan);
            $(xuan).find('.he-shang2 span').click(function () {
                $(xuan).css('display', 'none');
                getSun();
            });
            $(xuan).find('.he-xia2 .he-btn2').click(function () {
                $('.linklpo:checked').parents('.cctv').parent('.promotion-product').remove();
                localStorage.clear()
                $(xuan).css('display', 'none');
                getSun();
            })
            $(xuan).find('.he-xia2 .he-btn3').click(function () {
                $(xuan).css('display', 'none');
                getSun();
            })
            // $('.linklpo:checked').parents('.cctv').parent('.promotion-product').remove()
            getSun();
        }
    })
})