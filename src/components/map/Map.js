import React, { useEffect } from "react";
import * as Honeycomb from "honeycomb-grid";

function Map({ size, width, height, ...props }) {
  const canvasRef = React.useRef(null);

  useHoneyCombGrid(canvasRef, { size, width, height });

  const gridwidth = ((Math.floor(width/2)) * 40) + ((Math.floor(width/2)) * 20) + 10;
  const gridheight = (height * 34.6410) + 20

  return (
    <div id="canvasdiv" style={{width: '100%', height: 730, padding: '0px 0px', border: 1, solid: '#000', overflow: 'auto'}}>
      <canvas ref={canvasRef} {...props} width={gridwidth} height={gridheight} style={{display: 'inline-block', marginRight:'-calc4px'}}/>
    </div>
  )
}

function useHoneyCombGrid(canvasRef, { size, width, height }) {
  React.useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const Hex = Honeycomb.extendHex({
      size,
      orientation: 'flat',
      render(context) {
        const position = this.toPoint();
        const centerPosition = this.center().add(position);
        const xOffset = 0
        const yOffset = 0
        //console.log([this, position, xOffset, yOffset, this.width(), this.height()])
        context.beginPath();

        const point = this.toPoint()
        // add the hex's position to each of its corner points
        const corners = this.corners().map(corner => corner.add(point))

        // separate the first from the other corners
        const [firstCorner, ...otherCorners] = corners

        // move the "pen" to the first corner
        context.moveTo(firstCorner.x + xOffset, firstCorner.y + yOffset)
        // draw lines to the other corners
        otherCorners.forEach(({ x, y }) => context.lineTo(x + xOffset, y + yOffset))
        // finish at the first corner
        context.lineTo(firstCorner.x + xOffset, firstCorner.y + yOffset)

        context.strokeStyle = "#000000";
        context.lineWidth = 1;
        context.stroke();

        console.log([(this.x + Math.floor(width / 2)),(this.y + (Math.floor(height / 2)))])
        if((this.x === Math.floor(width / 2))  && (this.y === (Math.floor(height / 2)))){
          context.fill();
        }
        context.closePath();
      },
    });

    const Grid = Honeycomb.defineGrid(Hex);
    const grid = Grid.rectangle({
      width,
      height,
      start: [0, 0],
      direction: 1,
      onCreate: hex => hex.render(context)
    });

    return () => {
      canvas.innerHTML = "";
    };
  }, [canvasRef, size, width, height]);
}

export default Map;