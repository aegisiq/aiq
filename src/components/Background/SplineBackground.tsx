import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="/world_planet_esimora.spline"
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.7,
          }}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      <div className="absolute inset-0 z-0 bg-gradient-glow opacity-30 bg-gradient-hover" />
    </>
  );
}