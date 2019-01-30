import React, { Component } from 'react';
import './AnimatedLogo.scss';

const adjustPoint = (startPoint, endPoint, moveAmount) => {
  if (startPoint === endPoint) {
    return startPoint;
  }
  return startPoint < endPoint
    ? Math.min(startPoint + moveAmount, endPoint)
    : Math.max(startPoint - moveAmount, endPoint);
};

const adjustShapesByMoveAmount = (shapes, moveAmount) => shapes.map((shape) => (
  shape.map((coords) => ({
    ...coords,
    current: {
      x: adjustPoint(coords.current.x, coords.end.x, moveAmount),
      y: adjustPoint(coords.current.y, coords.end.y, moveAmount)
    }
  }))
));

const drawSingleShape = (canvasContext, shape) => {
  canvasContext.beginPath();
  canvasContext.moveTo(shape[0].x, shape[0].y);
  shape.forEach(({ current }) => (
    canvasContext.lineTo(current.x, current.y)
  ));
  canvasContext.closePath();
  canvasContext.fill();
};

const drawShapes = (canvas, canvasContext, color, shapes) => {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = color;
  shapes.forEach((shape) => drawSingleShape(canvasContext, shape));
};

const isAnimationNotComplete = (shapes) => shapes.some((shape) => (
  shape.some(({ current, end }) => (
    current.x !== end.x || current.y !== end.y
  ))
));

const animate = (
  canvas, canvasContext, color, startTime, linearSpeed, shapesToUse
) => {
  const time = (new Date()).getTime() - startTime;
  const moveAmount = linearSpeed * time / 10000;

  const adjustedShapes = adjustShapesByMoveAmount(shapesToUse, moveAmount);
  drawShapes(canvas, canvasContext, color, adjustedShapes);

  if (isAnimationNotComplete(adjustedShapes)) {
    window.requestAnimationFrame(() => (
      animate(
        canvas,
        canvasContext,
        color,
        startTime,
        linearSpeed,
        adjustedShapes
      )
    ));
  }
}

export class AnimatedLogo extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const {
      color = '#000000'
    } = this.props || {};

    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const cShape = [
      {
        current: {
          x: 0, y: halfHeight
        },
        end: {
          x: 0, y: halfHeight,
        }
      },
      {
        current: {
          x: halfWidth, y: halfHeight,
        },
        end: {
          x: halfWidth, y: height
        }
      },
      {
        current: {
          x: halfWidth, y: halfHeight
        },
        end: {
          x: halfWidth, y: 0
        }
      }
    ];

    const bShapeStartX = halfWidth * 1.6;
    const bShapeEndX = bShapeStartX * 0.75;
    const bShape = [
      {
        current: {
          x: bShapeEndX, y: halfWidth
        },
        end: {
          x: bShapeEndX, y: height
        }
      },
      {
        current: {
          x: bShapeStartX, y: halfWidth
        },
        end: {
          x: bShapeStartX, y: height
        }
      },
      {
        current: {
          x: bShapeStartX, y: halfWidth
        },
        end: {
          x: bShapeStartX, y: 0
        }
      },
      {
        current: {
          x: bShapeEndX, y: halfWidth
        },
        end: {
          x: bShapeEndX, y: 0
        }
      }
    ];
    const shapes = [
      cShape,
      bShape
    ];

    const timeBeforeAnimate = 1000;
    setTimeout(() => {
      animate(
        canvas,
        canvasContext,
        color,
        new Date().getTime(),
        100,
        shapes
      );
    }, parseInt(timeBeforeAnimate));
  }

  render() {
    return (
      <canvas className='c-animated-logo' ref={ this.canvasRef } />
    );
  }
}
