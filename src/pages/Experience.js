import React from 'react'
import { VerticalTimeline,
VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon  from '@material-ui/icons/Work'



function Experience() {
  return (
    <div className='experience'>
     <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='January 2008- June 2009'
      iconStyle={{background:'#3e497a', color:"#fff"}}
      icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Columbus State Community College, 
        Columbus Ohio</h3>
        <p>General Education Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--Work'
      date='January 2023- June 2023'
      iconStyle={{background: "#e9d35b", color:"#fff"}}
      icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Color Coded Labs, 
        Columbus Ohio</h3>
        <p>Full-Stack JavaScript Certificate</p>
      </VerticalTimelineElement>


      <VerticalTimelineElement className='vertical-timeline-element--Work'
      date='July 2020- June 2023'
      iconStyle={{background: "#e9d35b", color:"#fff"}}
      icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Happy New Day LTD, 
        Columbus Ohio</h3>
        <p>Web Developer</p>
      </VerticalTimelineElement>


      <VerticalTimelineElement className='vertical-timeline-element--Work'
      date='January 2018- September 2022'
      iconStyle={{background: "#e9d35b", color:"#fff"}}
      icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Columbus Metropolitan Library 
        Columbus Ohio</h3>
        <p>Customer Services Specialist</p>
      </VerticalTimelineElement>




     </VerticalTimeline>
    </div>
  )
}

export default Experience
