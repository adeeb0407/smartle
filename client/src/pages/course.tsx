import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GradBlobBlueTR from '../components/atom/GradBlobBlueTR';
import GradBlobResp from '../components/atom/GradBlobResp';
import GradBlobRespBlue from '../components/atom/GradBlobRespBlue';
import GradBlobTRSm from '../components/atom/GradBlobTRSm';
import { Banner, StatsCard, Curriculum, CustTimeline } from '../components/sections/course';
import CourseCTA from '../components/sections/course/CourseCTA';
import Instructor from '../components/sections/course/Instructor';
import { getCourse, getInstructor } from '../util/api';
import { isNull } from '../util/helpers';

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<any>(undefined);
  const [fail, setFail] = useState<string | undefined>(undefined);
  const [instructor, setInstructor] = useState<any>(undefined);
  const [isEnterprise, setIsEnterprise] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      try {
        var data: any = [];
        if (id === 'chemistry' || id === 'mathematics' || id === 'physics' || id === 'biology') {
          data = getCourse(id, "slug", true);
          setIsEnterprise(true);
          document.documentElement.style.setProperty('--scrollBarColor', '#5290F2');
          let lclCourse = { ...data[0] };
          delete lclCourse.grade;
          delete lclCourse.timeline;
          lclCourse['timeline'] = {};
          data.forEach((d:any) => {
            lclCourse['timeline'][d.grade] = d.timeline;
          })
          Object.fromEntries(Object.entries(lclCourse['timeline']).sort((a, b) => {
            return parseInt(a[0].replace("Grade ", "")) - parseInt(b[0].replace("Grade ", ""))
          }))
          data = lclCourse;
        } else {
          data = getCourse(id);
          setInstructor(data.instructor);
        }
        if (isNull(data)) return;
        setCourse(data);
      } catch (e: any) {
        setFail(e.message);
      }
    })();
  }, [id])

  return (<>
    {
      !isEnterprise ? (<>
        <div className="hidden md:block overflow-y-hidden h-full">
      <GradBlobTRSm />
    </div>
    <div className="md:hidden block"><GradBlobResp /></div>
      </>) : (<>
          <div className="md:hidden block"><GradBlobRespBlue /></div>
          <div className="hidden md:block"><GradBlobBlueTR /></div>
      </>)
    }
    {
      !isNull(course) && (isEnterprise || !isNull(instructor)) && !fail ? (<>
        <div className="mx-auto w-10/12 mt-12 ">
          <Banner course={course} isEnterprise={isEnterprise} />
          {
            !isEnterprise ? (<>
              <StatsCard
                stats={course.stats}
                text={course.statsText}
              />
              {course.self_paced ? (<Curriculum curr={Object.values(course.timeline)} />) : (<CustTimeline list={course.timeline} />)}
            </>) : (<div className="mt-32 z-20 relative">
                <Curriculum enterprise={course.enterprise} curr={course.timeline} />
            </div>)
          }
        </div>
        {/* {
          !course.self_paced && (<Instructor instructor={instructor} />)
        } */}
        <CourseCTA isEnterprise={isEnterprise} courseId={course.id} />
      </>) : (
        <div style={{ marginTop: '40vh', textAlign: 'center' }}>
          <CircularProgress color="secondary" />
          <div className="w-full">
            <div className="my-10">Looks like there is some problem!</div>
            <Link to={'/courses'} className='px-14 py-4 text-white bg-color-400 font-bold rounded-md'>Explore Other Courses</Link>
          </div>
        </div>
      )
    }
  </>);
}

export default Course;
