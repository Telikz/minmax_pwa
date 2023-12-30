'use client'
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className="hero bg-base-100" style={{ height: 'calc(100vh - 55px)' }}>
        <div className="hero-content text-center">
          <div className="max-w-screen-lg">
            <h1 className="text-5xl font-bold">MINMAX</h1>
            <p className="py-6">Welcome to Minmax – your ultimate skill-maximizing resource. Catering to athletes, artists, and life enthusiasts, our platform is designed to help you excel.
              MinMax turns personal growth into a game, enabling you to track progress, set goals, and receive tailored recommendations to unlock your potential.
              Focusing on meditation and more, Minmax covers nutrition, exercise, productivity, and creativity to help you reach new heights. Join us and level up your life today!</p>
            <Link href='/Dashboard'><button className="btn btn-primary mb-16">Get Started</button></Link>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5">
              <button className='btn disabled btn-ghost hover:bg-base-100 text-5xl mt-20 '>↓</button>
            </div>
          </div>
        </div>

      </div>
      <div className="hero bg-base-300 py-24" >
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Unlock Your Inner Compass</h1>
            <p className="py-6">Embark on a journey of self-discovery and ethical growth. Earn experience points as you master the art of living with integrity and purpose.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 py-24"  >
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Elevate Your Wellness Game</h1>
            <p className="py-6">Step up your fitness regime. Level up through tailored workouts and wellness challenges designed for the modern lifestyle.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-24">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Your Quick Reset Button</h1>
            <p className="py-6">Discover the power of breath. Gain instant boosts to your mental and physical state with simple, effective breathing techniques.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-300 py-24">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Navigate Your Digital World</h1>
            <p className="py-6">Transform your relationship with technology. Switch between mind modes for a balanced, mindful, and productive digital life.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 py-24">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Sharpen Your Mind's Edge</h1>
            <p className="py-6">Concentrate, collect, conquer. Accumulate focus points through engaging activities and exercises that enhance your mental clarity.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-24">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Your Meditation Arenas</h1>
            <p className="py-6">Explore various meditation styles in our Zen Zones. Unlock new arenas of calm, clarity, and mindfulness as you progress.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-300 py-24">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Connect & Contribute</h1>
            <p className="py-6">Forge meaningful connections. Earn rewards by syncing with community activities and expanding your social and empathetic horizons.</p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-14">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Start your journey now</h1>
            <p className="py-6">Forge meaningful connections. Earn rewards by syncing with community activities and expanding your social and empathetic horizons.</p>
            <Link href='/Dashboard'><button className="btn btn-primary mb-16">Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}