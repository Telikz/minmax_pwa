import Link from 'next/link';


export default function Home() {
  return (
        <div className='flex flex-col'>
          <div className='container mx-auto p-4'>
            <div className="grid grid-cols-1 gap-4 px-4">
              <Link href='/Ethics' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Ethical standards and practices</h2>
                  <p className=' text-center'>Discover how to navigate the complexities of modern life with principles that champion respect, fairness, and sustainability. Transform your choices into impactful actions that contribute positively to the world around you.</p>
                </div>
              </Link>
              <Link href='/Yoga' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Fitness, Streangth and Freedom</h2>
                  <p className=' text-center'> Blending traditional asanas, strength training and mordern excersises. Embrace a comprehensive approach to wellness, harmonizing body, mind, and spirit for the modern era. Each level you ascend integrates innovative exercises and challenges, crafted to fit seamlessly into your dynamic lifestyle.</p>
                </div>
              </Link><Link href='/Fitness' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Breath Mastery and Vitality</h2>
                  <p className=' text-center'>Unlock the transformative power of your breath. Experience instant boosts to both your mental and physical states, as you master the art of breathing for a healthier, more balanced life.</p>
                </div>
              </Link><Link href='/Nutrition' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">The Art of Sensory Selection</h2>
                  <p className=' text-center'>Learn to strategically withdraw from sensory overload, enhancing your focus and mental clarity. Discover practical tools to selectively engage with the world, fostering a healthier, more balanced presence.</p>
                </div>
              </Link><Link href='/Communication' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Elevating Mental Focus</h2>
                  <p className=' text-center'>Straightforward exercises and activities designed to strengthen your focus. You'll find effective techniques to clear mental fog, boost attention span, and cultivate a sharp, focused mind.</p>
                </div>
              </Link><Link href='/Streangth' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Strength Training</h2>
                  <p className=' text-center'>Increase your muscle strength and endurance through targeted exercises, such as weightlifting, bodyweight exercises, and resistance training.</p>
                </div>
              </Link><Link href='/Sleep' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Sleep Optimization</h2>
                  <p className=' text-center'>Improve your sleep quality and establish healthy sleep habits to boost your overall health, productivity, and well-being.</p>
                </div>
              </Link><Link href='/Cheats' className="card bg-base-100 shadow-xl image-full hover:bg-base-200">
                <div className="card-body items-center">
                  <h2 className="card-title text-center">Cheat Codes</h2>
                  <p className=' text-center'>Unlock shortcuts, tips, and tricks to accelerate your progress in various skills, streamline your learning process, and achieve your goals more efficiently.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
  );
}