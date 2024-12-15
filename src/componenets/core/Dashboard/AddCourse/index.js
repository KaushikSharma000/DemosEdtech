

import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full justify-center items-center gap-x-6 bg-richblack-900 mb-40">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5 text-center mt-2">
            Add Property
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky mr-10 justify-center top-10 hidden max-w-[300px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Property Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Standard size for the property thumbnail is 1024x576.</li>
            <li>Property Builder is where you create & organize a property.</li>
            <li>
              Add images in the Interior section to create visual appearance.
            </li>
            <li>
              Read the Term and Condition properly.
            </li>
            <li>The Information provided should be Correct.</li>
            <li>The Rent Amount Should be fare.</li>
          </ul>
        </div>
      </div>
    </> 
  )
}