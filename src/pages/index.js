// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <main className=''>
      <section className='px-8 py-4'>
      <header className='flex flex-row space-x-4 absolute right-0 px-4'>
              <div className='pt-2 font-light'>Gmail</div>
              <div className='pt-2 font-light'>Images</div>
              <div className='w-24 h-10 rounded-md bg-blue-500 text-white text-center py-2'>Sign in</div>
            </header>
            <section className='flex flex-col space-y-8 my-36 mx-auto justify-center items-center'>
              <div>
                <StaticImage
                src="../images/googlelogo.png"
                />
              </div>
              <div className='w-1/2 h-16 p-2 rounded-full border border-0.5 border-gray-500 flex flex-row justify-between'>
                <div>s</div>
                <div className='flex flex-row space-x-4'></div>
              </div>
              <div className='flex flex-row space-x-4'>
                <div className='w-32 h-8 bg-gray-100 text-center pt-1 rounded-sm text-gray-700'>Google search</div>
                <div className='w-36 h-8 bg-gray-100 text-center pt-1 rounded-sm text-gray-700'>I'm Feeling Lucky</div>
              </div>
              <div>Google offered in: Hausa Akan Ewe Ga</div>
            </section>
      </section>
           
            <footer className='flex flex-col bg-gray-100'>
              <div className='px-8 py-4'>Ghana</div>
              <div className='border w-full h-0.5 border-0.5 bg-gray-400'></div>
              <div className='px-8 py-4 flex flex-row justify-between'>
                <div className='flex flex-row space-x-4'>
                <div>About</div>
                <div>Advertising</div>
                <div>Business</div>
                <div>How Search Works</div>
                </div>
                <div className='flex flex-row space-x-4'>
                  <div>Privacy</div>
                  <div>Terms</div>
                  <div>Settings</div>
                </div>
              </div>
            </footer>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage