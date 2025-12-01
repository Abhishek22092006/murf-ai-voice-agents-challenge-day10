import { Button } from '@/components/livekit/button';

function SpotlightIcon() {
  return (
    <div className="relative mb-8">
      {/* Stage lights effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-40 w-40 rounded-full bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-red-500/40 animate-pulse" />
      </div>
      
      {/* Microphone with stage lights */}
      <div className="relative flex items-center justify-center">
        <svg className="h-28 w-28 text-yellow-500 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
        </svg>
        {/* Sparkle effects */}
        <div className="absolute -top-4 -right-4 text-3xl animate-bounce">✨</div>
        <div className="absolute -bottom-3 -left-4 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎭</div>
        <div className="absolute top-0 right-12 text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</div>
        <div className="absolute -top-2 left-10 text-xl animate-bounce" style={{ animationDelay: '0.6s' }}>🎪</div>
      </div>
    </div>
  );
}

function TheaterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
      {/* Animated stage curtains effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-red-800 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-red-800 to-transparent"></div>
      </div>

      {/* Spotlight beams */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-2 h-full bg-yellow-300 blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-2 h-full bg-yellow-300 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-1/2 w-3 h-full bg-white blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
        <SpotlightIcon />

        {/* Show title */}
        <div className="mb-6">
          <div className="text-sm uppercase tracking-widest text-yellow-300 mb-2 font-bold animate-pulse">
            🎬 LIVE FROM THE STAGE 🎬
          </div>
          <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-3 drop-shadow-2xl">
            IMPROV BATTLE
          </h1>
          <p className="text-2xl text-pink-200 font-bold">
            The Ultimate Voice Comedy Showdown!
          </p>
        </div>

        {/* Show description */}
        <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-4 border-yellow-500/50 rounded-2xl p-6 max-w-2xl mb-8 backdrop-blur-sm shadow-2xl">
          <div className="flex items-start gap-3 mb-3">
            <TheaterIcon className="h-7 w-7 text-yellow-300 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-yellow-100 font-bold text-lg mb-2">
                🎭 How It Works
              </p>
              <p className="text-yellow-200 text-sm leading-relaxed">
                Your AI host will throw wild scenarios at you - act them out on the spot! 
                Play a time-traveling tour guide, a barista with magical coffee, or a waiter whose food escaped. 
                The host will react, critique, and keep you on your toes!
              </p>
            </div>
          </div>
        </div>

        {/* Game features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="bg-purple-800/60 border-3 border-purple-500 rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">🎪</div>
            <p className="text-sm font-bold text-purple-100">Random Scenarios</p>
            <p className="text-xs text-purple-300 mt-1">Never know what's coming!</p>
          </div>
          
          <div className="bg-pink-800/60 border-3 border-pink-500 rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">😂</div>
            <p className="text-sm font-bold text-pink-100">Live Reactions</p>
            <p className="text-xs text-pink-300 mt-1">Host critiques your performance</p>
          </div>
          
          <div className="bg-red-800/60 border-3 border-red-500 rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">🏆</div>
            <p className="text-sm font-bold text-red-100">Grand Finale</p>
            <p className="text-xs text-red-300 mt-1">Final host review</p>
          </div>
        </div>

        {/* Epic CTA */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-1 rounded-full mb-4 animate-pulse">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onStartCall} 
              className="w-96 font-black text-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 shadow-2xl text-purple-900 border-4 border-yellow-300 transition-all duration-300 hover:scale-110"
            >
              {startButtonText}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};