function TimeDisplay({ time }) {
  const digits = time.split('');

  return (
    <div className="timer__time-container">
      {digits.map((digit, idx) => (
        <p key={idx}>{digit}</p>
      ))}
    </div>
  );
}

export default TimeDisplay;
