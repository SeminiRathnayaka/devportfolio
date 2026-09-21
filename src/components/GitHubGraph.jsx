import '../styles/github-graph.css';

const GitHubGraph = ({ username = 'your-github-username' }) => {
  const contributions = generateMockContributions();

  return (
    <section className="github-section">
      <div className="container">
        <div className="github-header">
          <span className="micro-heading">GITHUB ACTIVITY</span>
        </div>

        <div className="github-card">
          <div className="github-card-header">
            <div className="github-avatar">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </div>
            <div className="github-info">
              <span className="github-username">{username}</span>
              <span className="github-label">Contribution Graph</span>
            </div>
            <div className="github-stats-badge">
              <span className="green-dot"></span>
              <span>{contributions.filter(c => c > 0).length} active days</span>
            </div>
          </div>

          <div className="contribution-graph">
            <div className="graph-months">
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="graph-grid">
              {contributions.map((level, i) => (
                <div
                  key={i}
                  className={`graph-cell level-${level}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          </div>

          <div className="graph-legend">
            <span className="legend-label">Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className={`graph-cell level-${level}`} />
            ))}
            <span className="legend-label">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

function generateMockContributions() {
  const contributions = [];
  for (let i = 0; i < 365; i++) {
    const rand = Math.random();
    if (rand < 0.45) contributions.push(0);
    else if (rand < 0.7) contributions.push(1);
    else if (rand < 0.85) contributions.push(2);
    else if (rand < 0.95) contributions.push(3);
    else contributions.push(4);
  }
  return contributions;
}

export default GitHubGraph;
