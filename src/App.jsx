import { useState } from 'react'
import { createWorker } from 'tesseract.js';

function App() {
  const [result, setResult] = useState('')

  const handleGetOcr = async (fileName) => {
    setResult('')
    const worker = await createWorker({
      logger: m => console.log(m)
    });

    (async () => {
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(`/image/sample/${fileName}`);
      setResult(text);
      await worker.terminate();
    })();
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 gap-4 my-8">
        <div className="flex flex-wrap gap-4 items-stretch justify-center md:max-w-4xl">
          <button className='h-full' onClick={() => handleGetOcr('sample(1).jpeg')}>
            <img src="/image/sample/sample(1).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
          <button className='h-full' onClick={() => handleGetOcr('sample(2).jpeg')}>
            <img src="/image/sample/sample(2).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
          <button className='h-full' onClick={() => handleGetOcr('sample(3).jpeg')}>
            <img src="/image/sample/sample(3).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
          <button className='h-full' onClick={() => handleGetOcr('sample(4).jpeg')}>
            <img src="/image/sample/sample(4).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
          <button className='h-full' onClick={() => handleGetOcr('sample(5).jpeg')}>
            <img src="/image/sample/sample(5).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
          <button className='h-full' onClick={() => handleGetOcr('sample(6).jpeg')}>
            <img src="/image/sample/sample(6).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
          <button className='h-full' onClick={() => handleGetOcr('sample(7).jpeg')}>
            <img src="/image/sample/sample(7).jpeg" width={200} className='rounded-lg border shadow' />
          </button>
        </div>
        <h1 className='text-center font-semibold text-lg'>Result</h1>
        <textarea value={result} cols="50" rows="8" className='border border-gray-500 rounded-lg p-4'></textarea>
      </div>
    </>
  )
}

export default App
