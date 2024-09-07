

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleAngleChange = (value) => {
    const newAngle = ((value % 360) + 360) % 360;
    setAngle(newAngle);
  };

  const handleSliderChange = (value) => {
    const newAngle = value >= 0 ? value : value + 360;
    setAngle(newAngle);
  };

  return (
    <div className="container">
      <h2>Angle Selector</h2>
      <input
        type="number"
        value={angle}
        onChange={(e) => handleAngleChange(parseInt(e.target.value))}
        min="0"
        max="360"
      />
      <input
        type="range"
        value={angle <= 180 ? angle : angle - 360}
        onChange={(e) => handleSliderChange(parseInt(e.target.value))}
        min="-180"
        max="180"
      />
      <div>
        {[0, 45, 60, 90, 180].map((preset) => (
          <label key={preset}>
            <input
              type="radio"
              name="anglePreset"
              value={preset}
              checked={angle === preset}
              onChange={() => handleAngleChange(preset)}
            />
            {preset}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
