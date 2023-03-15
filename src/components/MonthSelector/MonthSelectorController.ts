import MonthState from './MonthSelectorModel';

class MonthSelectorController {
  private month: number;
  private year: number;

  constructor(date: Date | undefined = undefined) {
    if (date === undefined) {
      // get current date and increment by 1 month
      const initialDate = this.addMonthsToDate(new Date(), 1);
      this.month = initialDate.getMonth();
      this.year = initialDate.getFullYear();
    } else {
      this.month = date.getMonth();
      this.year = date.getFullYear();
    }
  }

  private getInternalDate = (): Date => new Date(this.year, this.month);

  private addMonthsToDate = (date: Date, monthsNo: number): Date => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + monthsNo);
    return newDate;
  };

  private getMonthName(date: Date = this.getInternalDate()): string {
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  }

  private getNoOFMonths = (endDate: Date): number => {
    const startDate = this.getCurrentDateWithTrimmedDays();
    if (startDate.getDate() <= endDate.getDate()) {
      return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())
      );
    }

    return -1;
  };

  public increment(): MonthState {
    const internalDate = this.getInternalDate();
    const newDate = this.addMonthsToDate(internalDate, 1);

    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      noOfMonths: this.getNoOFMonths(newDate),
      monthName: this.getMonthName(newDate),
    };
  }

  private getCurrentDateWithTrimmedDays(): Date {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth());
  }

  private isFutureDate(date: Date): boolean {
    const noOfMonths = this.getNoOFMonths(date);
    return noOfMonths >= 1;
  }

  public decrement(): MonthState {
    const internalDate = this.getInternalDate();
    const newDate = this.addMonthsToDate(internalDate, -1);
    if (this.isFutureDate(newDate)) {
      return {
        year: newDate.getFullYear(),
        month: newDate.getMonth(),
        noOfMonths: this.getNoOFMonths(newDate),
        monthName: this.getMonthName(newDate),
      };
    }
    // return the same data
    return {
      year: this.year,
      month: this.month,
      noOfMonths: 1,
      monthName: this.getMonthName(),
    };
  }

  public getInitialState(): MonthState {
    return {
      year: this.year,
      month: this.month,
      noOfMonths: 1,
      monthName: this.getMonthName(),
    };
  }
}

export default MonthSelectorController;
