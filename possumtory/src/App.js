import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Suspense } from 'react'
import Model from './Model'

function App() {
  return (
    <div className='bg-black w-screen h-screen'>
      <div className='font-main font-extrabold ml-5'>
        <h1 className='text-big text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500'>
          POSSUM<br></br>(opossum)
        </h1>
      </div>

      <div className='font-main font-semibold absolute mt-0 bottom-10 left-5 w-2/4'>
        <p className='text-white/50 text-small hover:bg-gradient-to-br hover:from-white to-purple-500 bg-clip-text hover:text-transparent transition-all '>
          Opossums (/əˈpɒsəm/) are members of the marsupial order Didelphimorphia (/daɪˌdɛlfɪˈmɔːrfiə/) endemic to the
          Americas. The largest order of marsupials in the Western Hemisphere, it comprises 120+ species in 19 genera.
          Opossums originated in South America and entered North America in the Great American Interchange following the
          connection of North and South America.
        </p>
      </div>

      <div className='absolute inset-y-0 right-0 w-2/4'>
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight color='white' position={[50, 50, 50]} />
          <Physics gravity={[0, 2, 0]} iterations={10}></Physics>
          <Suspense fallback={null}>
            <Model />
          </Suspense>

        
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}

export default App
