import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
          <div className="max-w-xl w-full border border-white/10 rounded-2xl p-6 bg-white/5">
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-blue-200/80 mb-4">The page failed to load. Try refreshing the page. If the issue persists, let us know.</p>
            <pre className="text-xs bg-black/40 p-3 rounded overflow-auto">
              {String(this.state.error)}
            </pre>
            <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition-colors">Reload</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
