import {
	DateFormatter,
	getLocalTimeZone,
	CalendarDate,
	type DateValue,
} from "@internationalized/date";

export const useDatePicker = () => {
	const df = new DateFormatter("en-US", { dateStyle: "long" });
	const value = ref<DateValue>();

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const years = Array.from(
		{ length: 100 },
		(_, i) => new Date().getFullYear() - i
	);

	const selectedMonth = ref<string>(months[new Date().getMonth()]);
	const selectedYear = ref<number>(new Date().getFullYear());

	const handleMonthChange = (month: string | number) => {
		selectedMonth.value = String(month);
		updateCalendarDate();
	};

	const handleYearChange = (year: string | number) => {
		selectedYear.value = Number(year);
		updateCalendarDate();
	};

	const updateCalendarDate = () => {
		const monthIndex = months.indexOf(selectedMonth.value) + 1;
		const day = value.value ? value.value.day : 1;
		value.value = new CalendarDate(selectedYear.value, monthIndex, day);
	};

	watch(value, (newVal) => {
		if (newVal) {
			selectedYear.value = newVal.year;
			selectedMonth.value = months[newVal.month - 1];
		}
	});

	return {
		df,
		value,
		months,
		years,
		selectedMonth,
		selectedYear,
		handleMonthChange,
		handleYearChange,
		updateCalendarDate,
		getLocalTimeZone,
	};
};
