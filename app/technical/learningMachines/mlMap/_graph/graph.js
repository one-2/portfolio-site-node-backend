'use client'

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'; // Import D3 library

import dummyData from './_data/dummyData.json'; // Data path

function ForceDirectedGraph() {
  // Code adapted from (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)
  // Licence in directory.
  const svgRef = useRef(null);

  useEffect(() => {
    // Set up D3 force simulation
    const width = 600; // TODO: change to max
    const height = 600;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const links = dummyData.links.map(d => ({ ...d }));
    const nodes = dummyData.nodes.map(d => ({ ...d }));

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', ticked);

    // Create SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Add lines for links and circles for nodes
    const link = svg.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll()
      .data(links)
      .enter().append('line')
      .attr('stroke-width', d => Math.sqrt(d.value));

    const node = svg.append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll()
      .data(nodes)
      .enter().append('circle')
      .attr('r', 5)
      .attr('fill', d => color(d.group));

    node.append('title')
      .text(d => d.id);

    // Add drag behavior
    node.call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

    // Update positions of links and nodes as the simulator ticks
    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    }

    // Specify drag behaviour
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

  // cleanup function to remove SVG
  // - cleanup functions needed when using timers, calling DOM manipulations,
  //    using external data sources, or external data sources, which can cause
  //    side effects and memory leaks.
  // capture the current value of svgRef. avoids errors caused by calling cleanup on
  // the current component value.
  const currentSVG = svgRef.current; // ?required since svg creation manipulates the DOM directly?
  return () => {
    if (currentSVG) {
      d3.select(currentSVG).selectAll('*').remove();
    }
  };
  }, [] // dependency array empty since the svg does not need to trigger page updates
);

  console.log('Rendering graph') // DEV: Remove in prod
  return (
    <svg ref={svgRef} />
  );
}

export default ForceDirectedGraph;
