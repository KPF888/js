window.addEventListener('DOMContentLoaded', function () {
    // 监控模块
    (function () {
        $(".monitor .tabs").on("click", "a", function () {
            $(this).addClass('active').siblings('a').removeClass('active');
            // console.log($(this).index());
            $(".monitor .content").eq($(this).index()).show().siblings('.content').hide();
        })
    })();
    // 克隆marquee里面所有的row
    $(".marquee-view .marquee").each(function () {
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
    // 点位分布模块
    (function () {
        var myEchart = echarts.init(document.querySelector('.pie'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    // 如果是百分比必须要加引号
                    radius: ['10%', '70%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 0
                    },
                    label: {
                        show: true
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        { value: 20, name: "云南" },
                        { value: 26, name: "北京" },
                        { value: 24, name: "山东" },
                        { value: 25, name: "河北" },
                        { value: 20, name: "江苏" },
                        { value: 25, name: "浙江" },
                        { value: 30, name: "四川" },
                        { value: 42, name: "湖北" }
                    ],
                    // 修改文字相关样式在lable
                    label: {
                        fontSize: 10,
                    }
                    ,
                    // 修改饼图线段tableline
                    lableLine: {
                        length: 6,
                        length2: 8
                    }
                },
            ],
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],

        };
        myEchart.setOption(option);
    })();
})