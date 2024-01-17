
d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
.then(function(myData){
    var circles = d3.select("svg").selectAll("circle").data(myData).join("circle")
        .attr("cx", function(d){ return d.Xi })
        .attr("cy", function(d){ return d.Yi })
        .attr("r", function(d){ return 10 })
        .attr("fill", function(d){ return d.color });

applyClustering(circles);

    d3.select("svg")
      .on("mouseover", function() { goBack(circles, myData); })
      .on("mouseleave", function() { applyClustering(circles); });
});

function applyClustering(circles) {
    circles.transition().duration(5000)
        .attr("cx", function(d){ return d.Xf })
        .attr("cy", function(d){ return d.Yf });
}

function goBack(circles, myData) {
    circles.transition().duration(2000)
        .attr("cx", function(d){ return d.Xi })
        .attr("cy", function(d){ return d.Yi });
}


