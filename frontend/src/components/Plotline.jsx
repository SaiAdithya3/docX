import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const LineChart = () => {
  const [cpuData, setCpuData] = useState(Array.from({ length: 3 }, () => []));
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate CPU usage change for multiple CPUs
      const newCpuData = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
      setCpuData(prevData => {
        const updatedData = [...prevData.slice(1), newCpuData];
        return updatedData;
      });
      setTime(new Date());
    }, 1000); // Update interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Plot
      style={{ width: '100%', height: '50%' }} // Adjust width and height
      data={cpuData.map((cpuUsage, index) => ({
        type: 'scatter',
        x: Array.from({ length: cpuUsage.length }, (_, i) => new Date(time.getTime() - (7 - i) * 1000)),
        y: cpuUsage,
        mode: 'lines+markers',
        name:` CPU ${index + 1}`,
        marker: { color: `hsl(${(index * 60) % 360}, 100%, 50%) `},
        line: { shape: 'spline' } // Smooth line
      }))}
      layout={{
        title: {
          text: 'CPU Usage Over Time',
          font: { color: 'white' } // Set text color to white
        },
        xaxis: { 
          title: 'Time', 
          tickformat: '%H:%M:%S',
          color: 'white' // Set x-axis text color to white
        }, 
        yaxis: { 
          title: 'Usage (%)', 
          range: [0, 100],
          color: 'white' // Set y-axis text color to white
        },
        plot_bgcolor: '#1c1c1c', // Set plot background color
        paper_bgcolor: '#1c1c1c', // Set paper background color
      }}
    />
  );
};

export default LineChart;
