import css from "./MonthStatsTable.module.css";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

export const MonthStatsTable = ({
  monthData,
  month,
  year,
  setMonthNumber,
  monthNumber,
  setYear,
}) => {

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const disableNextMonthButton = currentMonth <= monthNumber && currentYear >= year;

  const setPrevMonth = () => {
    if (monthNumber - 1 < 0) {
      setMonthNumber(11);
      setYear(year - 1);
      return;
    }
    setMonthNumber(monthNumber - 1);
  };

  const setNextMonth = () => {
    if (monthNumber + 1 > 11) {
      setMonthNumber(0);
      setYear(year + 1);
      return;
    }
    setMonthNumber(monthNumber + 1);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h2 className={css.title}>Month</h2>
        <div className={css.pagination}>
          <button className={css.paginationBtn} onClick={setPrevMonth}>
            <HiOutlineChevronLeft />
          </button>
          <p className={css.paginationMonth}>
            {month}, {year}
          </p>
          <button
            className={css.paginationBtn}
            onClick={setNextMonth}
            disabled={disableNextMonthButton}
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
      <div className={css.calendar}>
        {monthData.map((day, index) => (
          <div key={index} className={css.item}>
            <div
              key={index}
              className={`${css.day} ${
                day.amountWaterPerDay < day.daylyNorm
                  ? `${css.completed}`
                  : `${css.uncompleted}`
              }`}
            >
              <p className={css.date}>{day.date.split("-")[2]}</p>
            </div>
            <p className={css.progress}>{day.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
