function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          {/* Header with Flames icon */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="/flame-icon.svg"
                alt="Flames"
                className="w-24 h-24 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              />
            </div>

            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Flames Blue
            </h1>

            <p className="text-xl text-blue-200 mb-6">
              Build applications through conversation
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-xl mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Describe your idea</h3>
                <p className="text-blue-200/80 text-sm">Use the chat panel on the left to tell the AI what you want to build</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Watch it build</h3>
                <p className="text-blue-200/80 text-sm">Your app will appear in this preview as the AI generates the code</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Refine and iterate</h3>
                <p className="text-blue-200/80 text-sm">Continue the conversation to add features and make changes</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-blue-300/60">
              No coding required • Just describe what you want
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App