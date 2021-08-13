import * as React from 'react';

const useHeart = (draw: (ctx, frameCount) => void) => {
  const canvasRef = React.useRef(null);

  function resizeCanvas(canvas) {
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      const ctx = canvas.getContext('2d');
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.scale(ratio, ratio);
      return true;
    }
    return false;
  }

  React.useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
    const ctx = canvas.getContext('2d');
    let frameCount;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);

  return canvasRef;

}

export default useHeart;