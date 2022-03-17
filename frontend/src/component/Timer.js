import { differenceInSeconds } from "date-fns";
import { useMemo, useState, useEffect } from "react";

export default function Timer(props) {
  const { deadline, fontStyle, prefix, bgColor } = props;

  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const diffInSeconds = differenceInSeconds(deadline, currentTime);

  const getCoundown = () => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor(
      (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
    );
    const seconds =
      diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const countdown = useMemo(getCoundown, [currentTime]);
  const style = `${fontStyle} ${bgColor}`;

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);
  }, []);

  return (
    <div className='text-white d-flex'>
      <div className='col' style={{'paddingLeft': '15px'}}>
        <div className='timer-pad font-40 text-center'>
          {countdown.days.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>
        <p className='small-text-color text-center content-container mt-3'>
          DAY
        </p>        
      </div>
      <div className='col'>
        <div className='timer-pad font-40 text-center'>
          {countdown.hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div> 
        <p className='small-text-color text-center content-container mt-3'>
          HOURS
        </p>       
      </div>
      <div className='col'>
        <div className='timer-pad font-40 text-center'>
          {countdown.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>    
        <p className='small-text-color text-center content-container mt-3'>
          MINUTES
        </p>    
      </div>
      <div className='col'>
        <div className='timer-pad font-40 text-center'>
          {countdown.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>   
        <p className='small-text-color text-center content-container mt-3'>
          SECONDS
        </p>     
      </div>
    </div>
  );
}