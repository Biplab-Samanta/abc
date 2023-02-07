jQuery(document).ready( function ($) {
     //default active chart show------
        $("#firstgraph-sec").show();
        $(".logo:not(#firstgraph-sec)").hide(); 

     //default active tab show------

        $("#vs-introduction").addClass('active-vstab');
        $(".tab-item:not(#vs-introduction)").removeClass('active-vstab');

     //change active chart show with scroll-----
    $(window).scroll(function() {
    
    if ($(window).scrollTop() < $("#div01").height()) {
    $("#firstgraph-sec").show();
    $(".logo:not(#firstgraph-sec)").hide();
    $("#vs-introduction").addClass('active-vstab');
    $(".tab-item:not(#vs-introduction)").removeClass('active-vstab');

    
    
    } else if ($(window).scrollTop() < $("#div01").height() +  $("#div02").height() ) { 
    $("#secondgraph-sec").show();
    $(".logo:not(#secondgraph-sec)").hide();
    $("#vs-reviews").addClass('active-vstab');
    $(".tab-item:not(#vs-reviews)").removeClass('active-vstab');

    
    } else if ($(window).scrollTop() < $("#div01").height() +  $("#div02").height() + $("#div03").height()) { 
    $("#thirdgraph-sec").show();
    $(".logo:not(#thirdgraph-sec)").hide();
    $("#vs-features").addClass('active-vstab');
    $(".tab-item:not(#vs-features)").removeClass('active-vstab');

    

    } else if ($(window).scrollTop() < $("#div01").height() +  $("#div02").height() + $("#div03").height() + $("#div04").height()) { 
    $("#forthgraph-sec").show();
    $(".logo:not(#forthgraph-sec)").hide();
    $("#vs-support").addClass('active-vstab');
    $(".tab-item:not(#vs-support)").removeClass('active-vstab');


    } else if ($(window).scrollTop() < $("#div01").height() +  $("#div02").height() + $("#div03").height() + $("#div04").height() + $("#div05").height()) { 
    $("#fifthgraph-sec").show();
    $(".logo:not(#fifthgraph-sec)").hide();
    $("#vs-usibility").addClass('active-vstab');
    $(".tab-item:not(#vs-usibility)").removeClass('active-vstab');


    } else if($(window).scrollTop() < $("#div01").height() +  $("#div02").height() + $("#div03").height() + $("#div04").height() + $("#div05").height() + $("#div06").height()) { 
    $("#sixthgraph-sec").show();
    $(".logo:not(#sixthgraph-sec)").hide();    
    $("#vs-extra").addClass('active-vstab');
    $(".tab-item:not(#vs-extra)").removeClass('active-vstab');
    $(".tab-area-wrap").css({"opacity" : "1"});
    }
    else{
      $(".tab-area-wrap").css({"opacity" : "0"});
    }
    
    });
   

     //make chart height felxible with scroll----------
	$(window).scroll(function(){
    $(".active-line").show(1);
  

		if ($(this).scrollTop() > 20) {
       	 $(".graph-area").addClass('graph-height');
       	 $(".tab-area-wrap").css({"top": "40%", "transition": ".5s all ease"});
            
       	}
        else {
       	 $(".graph-area").removeClass('graph-height');
       	 $(".tab-area-wrap").css({"top": "80%", "color": "#d1d4d9"});  
       	 $(".right-chart-box").css({"height": "10rem"});  

       	}


            //active line position ----

          var defaultposition = $('.active-vstab').position();
          var defaultwidth = $('.active-vstab').height();
          $(".active-line").css({"top":+ defaultposition.top,"height":defaultwidth * 2});

   	});

    //tab funtion---------




$(function(){
  $(".icon-part").click(function(){
    $(".tab-item-wrap").toggleClass("hide-side-nav");
    $(".active-line").hide(1);
  });
})


    
    // chart graphs-----------

 
    var ctx = document.getElementById('intro-chart').getContext('2d');
    gradient2 = ctx.createLinearGradient(0, 0, 0, 450);
          gradient2.addColorStop(0.1, '#3f1473');
          gradient2.addColorStop(0.4, '#db4b54');

    gradient = ctx.createLinearGradient(0, 0, 0, 450);
            gradient.addColorStop(0.1, '#3f147312');
            gradient.addColorStop(0.28, '#db4b5400');
            gradient.addColorStop(0.9, '#db4b5400');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Support', 'Features', 'Reveiw'],
      datasets: [{
        label: 'Mvx',
        data: [2, 15, 5],
        backgroundColor: gradient2,
       borderColor:'#3f1473',
        borderWidth:0,
        tension:0.4,
        fill:true,
      },{
        label: 'wcfm',
        data: [5, 12, 3],
        backgroundColor: "#ebe7f0",
      borderColor:'#db4b54',
        borderWidth:0,
        tension:0.4,
        fill:true,
      }
    ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        hover: { 
          mode: null
        },
        tooltips: {
          backgroundColor:"#f9f8fb",
          titleColor:"#181718",
          bodyColor:"#181718",
        },
    }
  });
  // 1st chart right
  
  const nnn = document.getElementById('overall-chart');

  new Chart(nnn, {
    type: 'doughnut',
    data: {
      labels: ['Mvx', 'Wcfm'],
      datasets: [{
        label: 'compare over all',
        data: [98, 20],
        borderWidth: 1,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//2nd chart----------
const rev = document.getElementById('review-chart');

new Chart(rev, {
  type: 'line',
  data: {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Mvx',
      data: [20, 15, 50, 160, 12, 300, 140, 260],
      backgroundColor: gradient,
      borderColor:'#3f1473',
      borderWidth:2,
      tension:0.4,
      fill:true,
    },{
      label: 'wcfm',
      data: [12, 90, 30, 14, 20, 3, 15, 27],
      backgroundColor: gradient,
      borderColor:'#db4b54',
      borderWidth:2,
      tension:0.4,
      fill:true,
    }
  ]
  },
  options: {
    elements: {
      point:{
          radius: 0
      }
  },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }
});

// 2nd right chart-------







//features chart----------
const ui = document.getElementById('feature-chart');

new Chart(ui, {
  type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J'],
      align:"end",
      datasets: [{
        label: 'Mvx',
        data: [20, 15, 50, 16, 12, 30, 6, 12, 23, 42],
        backgroundColor: gradient2,
        borderWidth:0,
        tension:0.4,
        fill:true,
      },{
        label: 'wcfm',
        data: [12, 9, 30, 14, 20, 43, 5, 14, 21, 32],
        backgroundColor: "#ebe7f0",
        borderWidth:0,
        tension:0.4,
        fill:true,
      }
    ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        hover: { 
          mode: null
        },
        tooltips: {
          backgroundColor:"#f9f8fb",
          titleColor:"#181718",
          bodyColor:"#181718",
        },
    },
 
});
//3rd right chart----------

const rat = document.getElementById('feature-rate-chart');

  new Chart(rat, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue'],
      datasets: [{
        label: '# of Votes',
        data: [25, 9],
        borderWidth: 1,
        backgroundColor:['#3f1473', '#ebe7f0']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

});




 
