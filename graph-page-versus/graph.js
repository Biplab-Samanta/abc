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
    gradient = ctx.createLinearGradient(0, 0, 0, 450);
            // gradient.addColorStop(0, '#db4b54');
            gradient.addColorStop(0.1, '#3f1473');
            gradient.addColorStop(0.4, '#db4b54');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Mvx',
        data: [20, 15, 5, 16, 12, 3],
        backgroundColor: gradient,
        borderWidth:0,
        tension:0.4,
        fill:true,
      },{
        label: 'wcfm',
        data: [12, 9, 3, 14, 2, 3],
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
        }
    }
  });

//2nd chart----------
const rev = document.getElementById('review-chart');

new Chart(rev, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Mvx',
      data: [20, 15, 50, 160, 12, 3],
      backgroundColor: gradient,
      borderWidth:0,
      tension:0.4,
      fill:true,
    },{
      label: 'wcfm',
      data: [12, 90, 30, 14, 2, 3],
      backgroundColor: "#ebe7f0",
      borderWidth:0,
      tension:0.4,
      fill:true,
    }
  ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// 2nd right chart-------
var value = 90;
var circleDegrees = 290;


var myConfig = {
 	type: "gauge",
 	globals: {
 	  fontSize: 25
 	},
 	plot:{
 	  size:'100%',
 	  valueBox: {
 	    placement: 'center',
 	    text:'%v', //default
 	    fontSize:30,
 	    // rules:[
      //   {
 	    //     rule: '%v < 80',
 	    //     text: '%v MB'
 	    //   },
 	    //   {
 	    //     rule: '%v >= 80',
 	    //     text: '%v<br>Threshold<br>reached'
 	    //   },
      //   {
 	    //     rule: '%v >= 100',
 	    //     text: 'Exhausted'
 	    //   }
 	    // ]
 	  }
 	},
 	scaleR:{
	  aperture:circleDegrees,
	  minValue:0,
	  maxValue:100,
	  step:1,
	  center:{
	    visible:false
	  },
	  tick:{
	    visible:false
	  },
	  item:{
      visible: false,
	  },
	  ring:{
	    size:20,
	    rules:[
        {
	        rule:'%v < '+value+'',
	        backgroundColor:'#3f1473'
          // backgroundColor: gradient,
	      }
	    ]
	  }
 	},
	series : [
		{
			values : [value], // starting value
			backgroundColor:'#9e3568',
	    indicator:[5,2,5,9,.7],
	    animation:{  
        effect:2,
        method:4,
        sequence:4,
        speed: 2000
     }
		}
	]
};

zingchart.render({ 
	id : 'myChart', 
	data : myConfig,
	height: 150, 
	width: '100%'
});







//3rd chart----------
const ui = document.getElementById('feature-chart');

new Chart(ui, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Mvx',
      data: [20, 15, 50, 160, 12, 3],
      backgroundColor: gradient,
      borderWidth:0,
      tension:0.4,
      fill:true,
    },{
      label: 'wcfm',
      data: [12, 90, 30, 14, 2, 3],
      backgroundColor: "#ebe7f0",
      borderWidth:0,
      tension:0.4,
      fill:true,
    }
  ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
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




 
