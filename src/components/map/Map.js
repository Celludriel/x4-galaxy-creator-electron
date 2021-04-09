import React from "react";
import * as Honeycomb from "honeycomb-grid";
import GalaxyService from "../../service/galaxyservice";

function Map({ size, width, height, clusters, ...props }) {
  const canvasRef = React.useRef(null);
  const clusterMap = {}
  if(clusters != undefined && clusters.length > 0){
      for(var i = 0;i < clusters.length;i++){
          var key = clusters[i].x + "," + clusters[i].y
          clusterMap[key] = clusters[i];
      }
  }

  useHoneyCombGrid(canvasRef, size, width, height, clusterMap);

  const gridwidth = ((Math.ceil(width / 2)) * 40) + ((Math.ceil(width / 2)) * 20) + 10;
  const gridheight = (height * 34.6410) + 20

  return (
    <div id="canvasdiv" style={{ width: '100%', height: 730, padding: '0px 0px', border: 1, solid: '#000000', overflow: 'auto' }}>
      <canvas ref={canvasRef} {...props} width={gridwidth} height={gridheight} style={{ display: 'inline-block', marginRight: '-calc4px' }} />
    </div>
  )
}

function useHoneyCombGrid(canvasRef, size, width, height, clusters) {

    console.log("clusters entering HoneyCombGrid: " + clusters)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const colors = GalaxyService.getFactionColors();

    const Hex = Honeycomb.extendHex({
      size,
      orientation: 'flat',
      offset: 1,
      render(context, clusters) {
        const position = this.toPoint();
        const centerPosition = this.center().add(position);

        const xOffset = (Math.floor(width/2) * this.width()) - 100
        const yOffset = Math.floor(height/2) * this.height()

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

          // debugger
        if(clusters !== undefined && Object.keys(clusters).length > 0) {
            let gameCoords = GalaxyService.getGameCoordinates([this.x, this.y])
            let cluster = clusters[gameCoords[0]+","+gameCoords[1]];

            if(cluster !== undefined){
                let clusterOwner = GalaxyService.getClusterOwner(cluster);
                context.fillStyle = 'grey';
                if(clusterOwner !== null){
                    if(clusterOwner !== undefined){
                        context.fillStyle = colors[clusterOwner];
                    }
                }
                context.fill();
            }
        }

        //context.fillStyle = "black"
        //context.fillText(this.x+","+this.y,centerPosition.x+xOffset,centerPosition.y+yOffset)
        context.closePath();
      },
    });

      console.log("clusters before grid: " + clusters)
    const Grid = Honeycomb.defineGrid(Hex);
    Grid.rectangle({
      width,
      height,
      start: [-(Math.floor(width/2)), -(Math.floor(height/2))],
      direction: 1,
      onCreate: hex => hex.render(context, clusters)
    });

    return () => {
      canvas.innerHTML = "";
    };
  }, [canvasRef, size, width, height, clusters]);
}

export default Map;