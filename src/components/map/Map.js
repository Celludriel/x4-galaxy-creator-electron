import React, {useEffect} from "react";
import * as Honeycomb from "honeycomb-grid";
import GalaxyService from "../../service/galaxyservice";

function Map({ size, width, height, clusters, mapDisplay, ...props }) {
  const canvasRef = React.useRef(null);
  const canvasDivRef = React.useRef(null);
  const clusterMap = {}

    React.useEffect(() => {
        let myDiv = canvasDivRef.current
        let scrollWidthTo = myDiv.offsetLeft + (myDiv.clientWidth/ 2);
        let scrollHeightTo = myDiv.offsetTop + (myDiv.clientHeight/ 2);
        myDiv.scrollLeft = scrollWidthTo
        myDiv.scrollTop = scrollHeightTo
    }, [canvasDivRef]);

  if(clusters !== undefined && clusters.length > 0){
      for(let i = 0;i < clusters.length;i++){
          let key = clusters[i].x + "," + clusters[i].y
          clusterMap[key] = clusters[i];
      }
  }

  useHoneyCombGrid(canvasRef, size, width, height, clusterMap, mapDisplay);

  const gridwidth = ((Math.ceil(width / 2)) * 80) + ((Math.ceil(width / 2)) * 40) + 20;
  const gridheight = (height * 69.282) + 40

  return (
    <div ref={canvasDivRef} id="canvasdiv" style={{ width: '100%', height: 730, padding: '0px 0px', border: 1, solid: '#000000', overflow: 'auto' }}>
      <canvas ref={canvasRef} {...props} width={gridwidth} height={gridheight} style={{ display: 'inline-block', marginRight: '-calc4px' }} />
    </div>
  )
}

function useHoneyCombGrid(canvasRef, size, width, height, clusters, mapDisplay) {

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    const colors = GalaxyService.getFactionColors();

    const Hex = Honeycomb.extendHex({
      size,
      orientation: 'flat',
      offset: 1,
      render() {
        const position = this.toPoint();
        const centerPosition = this.center().add(position);

        const xOffset = (Math.floor(width/2) * this.width()) - 200
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

        let cluster = null;
        let gameCoords = GalaxyService.getGameCoordinates([this.x, this.y])
        if(clusters !== undefined && Object.keys(clusters).length > 0) {
            cluster = clusters[gameCoords[0]+","+gameCoords[1]];

            if(cluster !== undefined && cluster !== null){
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

        if(mapDisplay.showCoords){
          context.fillStyle = "black"
          context.fillText(gameCoords[0]+","+gameCoords[1],centerPosition.x+xOffset-7,centerPosition.y+yOffset+30)          
        }

        if(cluster !== undefined && cluster !== null && cluster.name !== undefined && cluster.name !== "" && mapDisplay.showSectorName){
          const splitString = cluster.name.match(/.{1,12}/g);
          let xTextOffset = 30;
          let yTextOffset = 0
          for(var i = 0;i < splitString.length;i++){
            context.fillStyle = "black"
            context.fillText(splitString[i],centerPosition.x+xOffset-xTextOffset,centerPosition.y+yOffset+yTextOffset)
            xTextOffset = xTextOffset - 5  
            yTextOffset = yTextOffset + 8;
          }
        }

        context.closePath();
      },
    });

    const Grid = Honeycomb.defineGrid(Hex);
    Grid.rectangle({
      width,
      height,
      start: [-(Math.floor(width/2)), -(Math.floor(height/2))],
      direction: 1,
      onCreate: hex => hex.render()
    });

    return () => {
      canvas.innerHTML = "";
    };
  }, [canvasRef, size, width, height, clusters, mapDisplay]);
}

export default Map;