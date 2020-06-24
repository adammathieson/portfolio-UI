## Look for trends
`const defs = svg.append("defs")

```
{
const linearGradient = defs.append('linearGradient')
    .attr("id", "linearGradient")
}
```

```
{
   linearGradient
    attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y1", "100%") 
}
```
    

##set the color for the start

linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#ffa474")

linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#8b00000")

d3.select("#legend-rectangle")
    .style("fill", "url(#linear-gradient)")


linearGradient.selectAll("stop")
    .data([
        {offset: "0%", color: "#2c7bb6"},
        {offset: "12.5%", color: "#e76818"},
        {offset: "87.5%", color: "#d7191c"},
        {offset: "100%", color: "d7191c"},

    ])
    .enter().append("stop")
        .attr("offset", (d) => d.offset)
        .attr("stop-color", (d) => d.color)

d3.select("#legend-rectangle")
    .style("fill", "url(#linear-gradient)")

const gradientRadial = defs.selectAll("radialGradient")
    .data(planets).enter()
    .append("radialGradient")
    .attr("id", (d, i) => "gradient-radial-" + i)

gradientRadial.append("stop")
    .attr("stop-color", (d) => colorScale(d.feature))

d3.selectAll("planet")
    .style("fill", (d,i) => "url(#gradient-radial-" + i + ")")

linearGradients
    // use the chord.chords() dataset to append a linear gradient for each chord
    //instead of the object bounding box, use the user coordinate system for setting locations
    .attr("gradientUnits", "userSpaceOffset")
    .attr("x1", (d,i) => SourceBuffer.x.locations)  // using d.source.startAngle & d.source.endAngle
    // ... do the same for y1, x2 and y2

// Smooth and rough color changes

const filter = defs.append("filter")
    .attr("id", "filter-id")

    //..append different filters

d3.selectAll(".element").style("filter", "url(#filter-id)")

// glow
// motion- blur
// gooey
// blending 