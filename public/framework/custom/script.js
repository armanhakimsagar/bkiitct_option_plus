/*-----------------------------------------------------------------------------------

    Template Name: Sell Bazar
    Author: Md. Nayem
    Author URI:

-----------------------------------------------------------------------------------

    Javascript INDEX
    ===================

    1.  Side var collapse Javascript
    2.  Sparkline chart apply
    3.  Ctx category, sub category, item, unit chart
    4.  Button delete value apply
    5.  Number count animation

-----------------------------------------------------------------------------------*/

/*----------------------------------------*/
/*  1.  Side var collapse Javascript
/*----------------------------------------*/
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('toggled');
    });
});

/*----------------------------------------*/
/*  2.  Sparkline chart apply
/*----------------------------------------*/
$("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
    type: 'line',
    lineColor: '#17997f',
    lineWidth: 1,
    barSpacing: '100px',
    fillColor: '#03a9f4',
});
$("#sparkline2").sparkline([-4, -2, 2, 0, 4, 5, 6, 7], {
    type: 'bar',
    barColor: '#03a9f4',
    negBarColor: '#303030'
});

$("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7,], {
    type: 'discrete',
    lineColor: '#03a9f4'
});

/*----------------------------------------*/
/*  3.  Ctx category, sub category, item, unit chart
/*----------------------------------------*/
var ctx = document.getElementById("widgetChart1");
ctx.height = 150;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        type: 'line',
        datasets: [{
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
        },]
    },
    options: {

        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});

//WidgetChart 2
var ctx = document.getElementById("widgetChart2");
ctx.height = 150;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        type: 'line',
        datasets: [{
            data: [1, 18, 9, 17, 34, 22, 11],
            label: 'Dataset',
            backgroundColor: '#63c2de',
            borderColor: 'rgba(255,255,255,.55)',
        },]
    },
    options: {

        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                tension: 0.00001,
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});


//WidgetChart 3
var ctx = document.getElementById("widgetChart3");
ctx.height = 70;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        type: 'line',
        datasets: [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'Dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
        },]
    },
    options: {

        maintainAspectRatio: true,
        legend: {
            display: false
        },
        responsive: true,
        // tooltips: {
        //     mode: 'index',
        //     titleFontSize: 12,
        //     titleFontColor: '#000',
        //     bodyFontColor: '#000',
        //     backgroundColor: '#fff',
        //     titleFontFamily: 'Montserrat',
        //     bodyFontFamily: 'Montserrat',
        //     cornerRadius: 3,
        //     intersect: false,
        // },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});


//WidgetChart 4
var ctx = document.getElementById("widgetChart4");
ctx.height = 70;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: "My First dataset",
                data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                borderColor: "rgba(0, 123, 255, 0.9)",
                //borderWidth: "0",
                backgroundColor: "rgba(255,255,255,.3)"
            }
        ]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false,
                categoryPercentage: 1,
                barPercentage: 0.5
            }],
            yAxes: [{
                display: false
            }]
        }
    }
});


var ctx = document.getElementById("barchart1");
var barchart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Purchase", "Sales", "Purchase", "Sales", "Purchase", "Sales"],
        datasets: [{
            label: 'Bar Chart',
            data: [17000, 19000, 15000, 14000, 11000, 12000],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 0
                },
                ticks: {
                    fontColor: "#fff", // this here
                }
            }],
            yAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 0
                },
                ticks: {
                    fontColor: "#fff", // this here
                }
            }]
        }
    }
});

/*----------------------------------------*/
/*  4.  Button delete value apply
/*----------------------------------------*/
$('#deleteModal').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
});

/*----------------------------------------*/
/*  5.  Number count animation
/*----------------------------------------*/
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});