import React from "react";
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment";
import { connect, useSelector, useDispatch } from "react-redux";
import { setEducation } from "../../redux/actions/educations";

const EducationItem = ({
	school,
	index,
	degree,
	start,
	end,
	open,
	toggle,
	handleRemoveClick,
}) => {
	const remove = (index) => {
		handleRemoveClick(index);
	};

	const dispatch = useDispatch();

	const handleSchool = (e) => {
		dispatch(
			setEducation(index, {
				school: e.target.value,
				degree: degree,
				start: start,
				end: end,
			})
		);
	};

	const handleDegree = (e) => {
		dispatch(
			setEducation(index, {
				school: school,
				degree: e.target.value,
				start: start,
				end: end,
			})
		);
	};

	const handleStart = (data) => {
		dispatch(
			setEducation(index, {
				school: school,
				degree: degree,
				start: data,
				end: end,
			})
		);
	};

	const handleEnd = (data) => {
		dispatch(
			setEducation(index, {
				school: school,
				degree: degree,
				start: start,
				end: data,
			})
		);
	};

	const theme = useSelector((state) => state.theme);

	return (
		<div>
			<div
				className={
					theme === "dark"
						? `${style.degree} ${style.degreeDark}`
						: style.degree
				}
			>
				<div className={style.degreeSchool}>
					<h2
						className={
							theme === "dark"
								? `${style.schoolLabel} ${style.schoolLabelDark}`
								: style.schoolLabel
						}
					>{`${!!school ? school : "School"} ${
						!!degree ? degree : "degree"
					}`}</h2>
					<div className={style.degreeEdits}>
						<button
							onClick={toggle}
							className={
								theme === "dark"
									? `${style.degreeEditsHover} ${style.degreeEditIcon} ${style.degreeEditsHoverDark} ${style.degreeEditIconDark}`
									: `${style.degreeEditsHover} ${style.degreeEditIcon}`
							}
						>
							Edit
						</button>
						<button
							onClick={remove}
							className={
								theme === "dark"
									? `${style.degreeEditsHover} ${style.degreeDeleteIcon} ${style.degreeEditsHoverDark} ${style.degreeDeleteIconDark}`
									: `${style.degreeEditsHover} ${style.degreeDeleteIcon}`
							}
						>
							Delete
						</button>
						<button
							className={`${style.degreeEditsHover} ${
								!!open
									? style.degreeTreeangle
									: theme === "dark"
									? `${style.degreeTreeangleRotate} ${style.degreeTreeangleRotateDark}`
									: style.degreeTreeangleRotate
							}`}
							onClick={toggle}
						></button>
					</div>
				</div>

				<div className={style.degreeDates}>
					<p
						className={
							theme === "dark" ? style.degreeTextDark : style.degreeText
						}
					>
						Start
					</p>
					<p
						className={
							theme === "dark" ? style.degreeDateDark : style.degreeDate
						}
					>
						{start ? `${moment(start).format("l")}` : "mm/yy"}
					</p>
					<p
						className={
							theme === "dark" ? style.degreeTextDark : style.degreeText
						}
					>
						End
					</p>
					<p
						className={
							theme === "dark" ? style.degreeDateDark : style.degreeDate
						}
					>
						{end ? `${moment(end).format("l")}` : "mm/yy"}
					</p>
				</div>
			</div>

			{open && (
				<div
					className={
						theme === "dark"
							? `${style.fillIn} ${style.fillInDark}`
							: style.fillIn
					}
				>
					<input
						type="text"
						placeholder="School"
						name="school"
						className={style.inputSpace}
						// value={school}
						onChange={handleSchool}
						// onChange={handleChange}
					/>
					<input
						type="text"
						placeholder="Degree"
						name="degree"
						className={style.inputSpace}
						// value={degree}
						onChange={handleDegree}
					/>

					<div className={style.fillInDate}>
						{/* <input type="date" placeholder="Start date" name="startDate" /> */}
						<DatePicker
							selected={moment(start)._d}
							onChange={handleStart}
							className={style.inputDate}
							dateFormat="MM/yyyy"
							showMonthYearPicker
						/>
						<DatePicker
							selected={moment(end)._d}
							onChange={handleEnd}
							className={style.inputDate}
							dateFormat="MM/yyyy"
							showMonthYearPicker
						/>
						{/* <input type="date" placeholder="End date" name="endDate" className={style.inputDate}/> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default withToggle(EducationItem);
