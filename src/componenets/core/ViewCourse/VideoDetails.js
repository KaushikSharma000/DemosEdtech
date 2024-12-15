import React from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ControlBar, Player } from 'video-react';
// import '~video-react/dist/video-react.css'; // import css
import { BigPlayButton, LoadingSpinner, PlaybackRateMenuButton, ForwardControl, ReplayControl, CurrentTimeDisplay, TimeDivider } from 'video-react';
import {BiSkipPreviousCircle} from 'react-icons/bi';
import {BiSkipNextCircle} from 'react-icons/bi';
import {MdOutlineReplayCircleFilled} from 'react-icons/md';
import { markLectureAsComplete } from '../../../services/operations/courseDetailsAPI';
import { setCompletedLectures } from '../../../slices/viewCourseSlice';
import { useDispatch } from 'react-redux';



const VideoDetails = () => {
  const {courseId,sectionId,subsectionId} = useParams();
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {user}= useSelector(state => state.profile);
  // console.log("user",user._id);
  const {courseSectionData, courseEntireData, completedLectures, totalNoOfLectures} = 
  useSelector(state => state.viewCourse);
  const navigate = useNavigate();
  const playerRef = React.useRef(null);

  const [videoData, setVideoData] = useState([]);
  const [videoEnd, setVideoEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    if (courseSectionData.length === 0) {
      return;
    }
    const filteredSection = courseSectionData?.filter((section) => section._id === sectionId);
    const filteredSubsection = filteredSection[0]?.subSection?.filter((subsection) => subsection._id === subsectionId);
    setVideoData(filteredSubsection?.[0]);
    // console.log(filteredSubsection[0]);
    setVideoEnd(false);
  }, [courseSectionData, sectionId, subsectionId]);


  const isLastLecture = () => {
     const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
      const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection) => subsection._id === subsectionId);
      if (currentSubsectionIndex === courseSectionData[currentSectionIndex]?.subSection?.length - 1  && currentSectionIndex === courseSectionData?.length - 1) {
        // console.log("last lecture");
        return true;
      }else {
        // console.log("not last lecture");
        return false;
      }
  }
  
  
  const isFirstLecture = () => {
    const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
    const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection) => subsection._id === subsectionId);
    if (currentSubsectionIndex === 0  && currentSectionIndex === 0) {
      // console.log("first lecture");
      return true;
    }else {
      // console.log("not first lecture");
      return false;
    }
  }

  const nextLecture = () => {
    if (isLastLecture()) {
      return;
    }
    const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
    const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection) => subsection._id === subsectionId);
    if (currentSubsectionIndex === courseSectionData[currentSectionIndex]?.subSection.length - 1) {
      const nextSectionId = courseSectionData[currentSectionIndex + 1]?._id;
      const nextSubsectionId = courseSectionData[currentSectionIndex + 1]?.subSection[0]._id;
      navigate(`/dashboard/enrolled-courses/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubsectionId}`);
    }else {
      const nextSectionId = courseSectionData[currentSectionIndex]._id;
      const nextSubsectionId = courseSectionData[currentSectionIndex].subSection[currentSubsectionIndex + 1]._id;
      navigate(`/dashboard/enrolled-courses/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubsectionId}`);
    }
  }

  const previousLecture = () => {
    if (isFirstLecture()) {
      return;
    }
    const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
    const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection) => subsection._id === subsectionId);
    if (currentSubsectionIndex === 0) {
      const previousSectionId = courseSectionData[currentSectionIndex - 1]._id;
      const previousSubsectionId = courseSectionData[currentSectionIndex - 1]?.subSection[courseSectionData[currentSectionIndex - 1].subSection.length - 1]._id;
      navigate(`/dashboard/enrolled-courses/view-course/${courseId}/section/${previousSectionId}/sub-section/${previousSubsectionId}`);
    }else {
      const previousSectionId = courseSectionData[currentSectionIndex]?._id;
      const previousSubsectionId = courseSectionData[currentSectionIndex]?.subSection[currentSubsectionIndex - 1]._id;
      navigate(`/dashboard/enrolled-courses/view-course/${courseId}/section/${previousSectionId}/sub-section/${previousSubsectionId}`);
    }
  }
 
   
  return (
    <div className='md:w-[calc(100vw-320px)] w-screen p-3'>
      {
        !videoData ? <h1>Loading...</h1> :
        (
          <div>
            <img className="w-full relative"
              
              src={videoData.imageUrl}
              
            ></img>
              
            
          </div>
        )
      }
    
    </div>
  )
}

export default VideoDetails