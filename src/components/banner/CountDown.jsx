import { useTimer } from 'react-timer-hook';
import { useTranslation } from "react-i18next";

export default function CountDown() {

  const [t, i18n] = useTranslation("home")

  const expiryTimestamp = new Date('06/17/23');
  const { seconds, minutes, hours, days } = useTimer({
      expiryTimestamp,
  });

  return (
      <div className='gap-x-4 text-white text-2xl font-medium grid grid-cols-4 h-full'>
        <span className='rounded-xl grid gap-y-2 h-fit text-center'>
          {days < 10 && '0'}
          {days}
          <span className='text-base text-center'>{t("banner.days")}</span>
        </span>
        <span className='rounded-xl grid gap-y-2 h-fit text-center'>
          {hours < 10 && '0'}
          {hours}
          <span className='text-base text-center'>{t("banner.hours")}</span>
        </span>
        <span className='rounded-xl grid gap-y-2 h-fit text-center'>
          {minutes < 10 && '0'}
          {minutes}
          <span className='text-base text-center'>{t("banner.minutes")}</span>
        </span>
        <span className='rounded-xl grid gap-y-2 h-fit text-center'>
          {seconds < 10 && '0'}
          {seconds}
          <span className='text-base text-center'>{t("banner.seconds")}</span>
        </span>
    </div>
  )
  }
  