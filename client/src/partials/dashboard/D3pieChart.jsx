import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const D3pieChart = ({ data, width, height }) => {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    const radius = Math.min(width, height) / 2;
    const pie = d3.pie().value((d) => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    svg.attr('width', width).attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal().range(d3.schemeCategory10);

    const arcs = g.selectAll('arc').data(pie(data)).enter().append('g').attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data.label))
      .attr('stroke', '#fff')
      .style('stroke-width', '2px')
      .on('mouseover', (event, d) => setActiveIndex(d.index))
      .on('mouseout', () => setActiveIndex(null));

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d) => d.data.label);

    const tooltip = g
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', 18)
      .attr('font-weight', 'bold')
      .attr('fill', '#666');
      

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d) => `${d.data.label}: ${(d.data.value / d3.sum(data, (d) => d.value)).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })}`);
    
        g.selectAll('path').on('mousemove', function (event, d) {
            tooltip
            .text(`${d.data.label}: ${(d.data.value / d3.sum(data, (d) => d.value)).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })}`)
            .attr('x', event.offsetX)
            .attr('y', event.offsetY - 20)
            .attr('visibility', activeIndex === d.index ? 'visible' : 'hidden');
        });
  }, [activeIndex, data, height, width]);

  return <svg ref={ref}></svg>;
};

export default D3pieChart;

