import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', color: '#1e293b', fontFamily: 'sans-serif', padding: '20px' }}>
          <div style={{ maxWidth: '480px', background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '12px' }}>⚠️</span>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Application Encountered an Error</h2>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>{this.state.error?.message || 'Failed to load application components'}</p>
            <button onClick={() => window.location.reload()} style={{ backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
