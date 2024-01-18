import React from 'react'

const Calls = () => {
  return (
    <div id='call' className='lg:flex-1 w-full'>
       
        <div className='space-y-5 border border-gray-300 bg-white p-5 shadow'>
        <div className='space-y-2'>
            <h1 className='font-bold text-2xl'>CALL FOR PAPERS</h1>
            <p className='text-sm'>We are pleased to invite you to submit original contributions to icrtc2023@gmail.com. This can include, technical and experimental, theoretical, conceptual, or a survey. All submissions will be peer-reviewed on the basis of relevance, originality, importance and clarity.</p>        
        </div>
      <div className='space-y-2'>
        <h3 className='text-xl font-medium'>Submission System</h3>
        <p className='text-sm'>icrtc2023@gmail.com</p>
      </div>


      <div className='space-y-2'>
        <h3 className='text-xl font-medium'>Journal Special Issues</h3>
        <p className='text-sm '>Selected papers from the presented papers will be invited to submit an extended version to number of journals. Papers will be selected based on their reviewers’ scores and appropriateness to the Journal’s theme. All extended versions will undergo reviews and must represent original unpublished research work. Further details will be made available at a later stage.</p>
      </div>
    </div>
    </div>

  )
}

export default Calls
