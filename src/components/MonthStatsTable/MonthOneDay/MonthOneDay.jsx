import { useState } from "react";
import { DaysGeneralStats } from "../../DaysGeneralStats/DaysGeneralStats";
import css from "./MonthOneDay.module.css";


export const MonthOneDay = ({
  day,
}) => {

  const { date, servings, amountWaterPerDay, daylyNorm, percent } = { ...day };

  const [dayInfoShowed, setDayInfoShowed] = useState({status: false, left: true})

  const hideDayInfo = () => {
    setDayInfoShowed({ status: false, left: true });
  }
  const showDayInfo = (e) => {
    const elementCoordinate = e.currentTarget.getBoundingClientRect();
    const parentCoordinate =
      e.currentTarget.parentElement.getBoundingClientRect();

    const positionLeft =
      elementCoordinate.left <
      parentCoordinate.left + parentCoordinate.width / 2;
    setDayInfoShowed({ status: true, left: positionLeft });
  }

  return (
    <div
      className={css.item}
      onMouseLeave={hideDayInfo}
      onMouseEnter={showDayInfo}
    >
      {dayInfoShowed.status ? (
        <DaysGeneralStats
          servings={servings}
          daylyNorm={daylyNorm}
          percent={percent}
          showedLeft={dayInfoShowed.left}
        />
      ) : (
        <></>
      )}
      <div
        className={`${css.day} ${
          amountWaterPerDay < daylyNorm
            ? `${css.completed}`
            : `${css.uncompleted}`
        }`}
      >
        <p className={css.date}>{date.split("-")[2]}</p>
      </div>
      <p className={css.progress}>{percent}%</p>
    </div>
  );
};