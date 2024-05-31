import './Progress.css';
function Progress({ percentage }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <span className="progress-bar-text">{percentage}%</span>
      </div>
    </div>
  );
}

export default Progress;