import React from "react";
import styles from "./ResumeTemplates.module.css";
import { useSelector } from "react-redux";
import projects from "../../redux/reducers/projects";

const ResumeTemplate2 = () => {
	const recumeInfo = useSelector((state) => state.resume);
	const {
		basicInfo: {
			jobTitle,
			firstName,
			lastName,
			email,
			phone,
			country,
			city,
			summary,
		},
		employmentHistory,
		educations,
		skills,
		projects,
		languages,
	} = recumeInfo;

	return (
		<div className={styles.ResumeWrapper}>
			<div className={styles.Container}>
				<div className={styles.ResumeHeding}>
					<h1 className={styles.ResumeTitle}>{`${firstName} ${lastName}`}</h1>
					<p className={styles.ResumeSubtitle}>{jobTitle}</p>
					<div className={styles.ContactsContainer}>
						<div className={styles.ContactItem}>
							<div className={`${styles.Map} ${styles.Icon}`}></div>
							<p className={styles.ContactText}>{`${city}, ${country}`}</p>
						</div>
						<div className={styles.ContactItem}>
							<div className={`${styles.Phone} ${styles.Icon}`}></div>
							<p className={styles.ContactText}>{phone}</p>
						</div>
						<div className={styles.ContactItem}>
							<div className={`${styles.Mail} ${styles.Icon}`}></div>
							<p className={styles.ContactText}>{email}</p>
						</div>
					</div>
				</div>
				<div className={styles.ResumeBody}>
					<div className={styles.column1}>
						<div>
							<div>
								<h2 className={styles.BoxName}>PROFILE</h2>
								<p className={styles.BoxText}>{summary}</p>
							</div>
							{!!employmentHistory.length && (
								<div>
									<h2 className={styles.BoxName}>EMPLOYMENT HISTORY</h2>
									{employmentHistory.map((el) => (
										<div key={`${el.jobTitle}, ${el.employer}, ${el.city}`}>
											<h3 className={styles.BoxTitle}>
												{`${el.jobTitle}, ${el.employer}, ${el.city}`}
											</h3>
											<p
												className={styles.BoxSubtitle}
											>{`${el.start} - ${el.end}`}</p>
											<p className={styles.BoxText}>
												{el.description}
												{/* <li className={styles.UlItem}>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											tetur ipsa labore pariatur!
										</li>
										<li className={styles.UlItem}>
											Voluptate eius praesentium error. Sapiente quod ratione
											upti provident asperiores?
										</li>
										<li className={styles.UlItem}>
											Iusto deleniti delectus perferendis repellat. Accusantium
											rem fuga, eius incidunt nam provident dolores
										</li>
										<li className={styles.UlItem}>
											Rerum, ipsa repellendus omnis saepe eos excepturi quis
											maxime magnam itaque vel neque,
										</li> */}
											</p>
										</div>
									))}
								</div>
							)}
							{!!educations.length && (
								<div>
									<h2 className={styles.BoxName}>education</h2>
									{educations.map((el) => (
										<div
											key={`${el.school}, ${el.degree}`}
											className={styles.EducationItem}
										>
											<h3
												className={styles.BoxTitle}
											>{`${el.school}, ${el.degree}`}</h3>
											<p
												className={styles.BoxSubtitle}
											>{`${el.start} - ${el.end}`}</p>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
					<div className={styles.column2}>
						{!!skills.length && (
							<div>
								<h2 className={styles.BoxName}>SKILLS</h2>
								<ul className={styles.ScillsList}>
									{skills.map((el) => (
										<li key={el.skill}>{el.skill}</li>
									))}
								</ul>
							</div>
						)}
						{!!projects.length && (
							<div>
								<h2 className={styles.BoxName}>projects</h2>
								{projects.map((el) => (
									<div key={el.projectTitle}>
										<h3 className={styles.BoxTitle}>{el.projectTitle}</h3>
										<p className={styles.BoxSubtitle}>{el.company}</p>
										<p className={styles.BoxText}>{el.description}</p>
									</div>
								))}
							</div>
						)}
						{!!languages.length && (
							<div>
								<h2 className={styles.BoxName}>languages</h2>
								{languages.map((el) => (
									<div key={el.language} className={styles.EducationItem}>
										<h3 className={styles.BoxTitle}>{el.language}</h3>
										<p className={styles.BoxSubtitle}>{el.level}</p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeTemplate2;
