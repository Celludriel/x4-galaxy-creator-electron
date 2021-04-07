import React, { useEffect } from "react";
import * as Honeycomb from "honeycomb-grid";

function Map({ size, width, height, ...props }) {
  const canvasRef = React.useRef(null);

  useHoneyCombGrid(canvasRef, { size, width, height });

  const gridwidth = width * 32;
  const gridheight = height * 36;

  return (
    <div id="canvasdiv" style={{width: '100%', height: 880, padding: '0px 0px', border: 1, solid: '#000', overflow: 'auto'}}>
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
        const xOffset = (Math.floor(width / 2) * this.width()) - (6*size)
        const yOffset = Math.floor(height / 2) * this.height()
        console.log([this, position, xOffset, yOffset])
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
        if(this.x == 0 && this.y == 0){
          context.fill();
        }
        context.closePath();
      },
    });

    const Grid = Honeycomb.defineGrid(Hex);
    const grid = Grid.rectangle({
      width,
      height,
      start: [-(Math.floor(width / 2)), -(Math.floor(height / 2))],
      direction: 1,
      onCreate: hex => hex.render(context)
    });

    return () => {
      canvas.innerHTML = "";
    };
  }, [canvasRef, size, width, height]);
}

export default Map;