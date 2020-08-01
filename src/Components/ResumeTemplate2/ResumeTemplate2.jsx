import React from "react";
import styles from "./ResumeTemplates.module.css";

const ResumeTemplate2 = () => {
	return (
		<div className={styles.ResumeWrapper}>
			<div className={styles.Container}>
				<div className={styles.ResumeHeding}>
					<h1 className={styles.ResumeTitle}>DANIEL JONSON</h1>
					<p className={styles.ResumeSubtitle}>FRONT-END DEVELOPER</p>
					<div className={styles.ContactsContainer}>
						<div className={styles.ContactItem}>
							<div className={`${styles.Map} ${styles.Icon}`}></div>
							<p className={styles.ContactText}>Kyiv, Ukraine</p>
						</div>
						<div className={styles.ContactItem}>
							<div className={`${styles.Phone} ${styles.Icon}`}></div>
							<p className={styles.ContactText}>+380 000 000 00</p>
						</div>
						<div className={styles.ContactItem}>
							<div className={`${styles.Mail} ${styles.Icon}`}></div>
							<p className={styles.ContactText}>email.com</p>
						</div>
					</div>
				</div>
				<div className={styles.ResumeBody}>
					<div className={styles.column1}>
						<div>
							<div>
								<h2 className={styles.BoxName}>PROFILE</h2>
								<p className={styles.BoxText}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
									provident asperiores excepturi enim iure deleniti sequi saepe
									iusto facilis. At, ipsa id, quasi saepe assumenda, obcaecati
									nulla recusandae corrupti voluptatum a maxime numquam placeat
									consequuntur reiciendis quo voluptates perferendis accusantium
								</p>
							</div>
							<div className="EMPLOYMENT_HISTORY">
								<h2 className={styles.BoxName}>EMPLOYMENT HISTORY</h2>

								<div>
									<h3 className={styles.BoxTitle}>
										Lorem ipsum dolor sit amet consectetur.
									</h3>
									<p className={styles.BoxSubtitle}>Lorem, ipsum dolor.</p>
									<ul className={styles.ItrmList}>
										<li className={styles.UlItem}>
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
										</li>
									</ul>
								</div>
								<div>
									<h3 className={styles.BoxTitle}>
										Lorem ipsum dolor sit amet consectetur.
									</h3>
									<p className={styles.BoxSubtitle}>Lorem, ipsum dolor.</p>
									<ul className={styles.ItrmList}>
										<li className={styles.UlItem}>
											Esse error suscipit quisquam blanditiis, praesentium quasi
											totam, nobis consequuntur unde fugit
										</li>
										<li className={styles.UlItem}>
											Rem, omnis? Distinctio voluptates, fuga reiciendis
											deserunt inventore sequi voluptatibus .
										</li>
										<li className={styles.UlItem}>
											Esse molestiae laborum ratione alias animi blanditiis ab.
											Minus quas expedita labore ipsa
										</li>
										<li className={styles.UlItem}>
											Ad debitis magnam molestias quam, odit amet animi
											explicabo autem nihil
										</li>
									</ul>
								</div>
							</div>
							<div className="education">
								<h2 className={styles.BoxName}>education</h2>
								<div className={styles.EducationItem}>
									<h3 className={styles.BoxTitle}>Lorem ipsum dolor sit.</h3>
									<p className={styles.BoxSubtitle}>Lorem, ipsum dolor.</p>
								</div>

								<div className={styles.EducationItem}>
									<h3 className={styles.BoxTitle}>Lorem ipsum dolor sit.</h3>
									<p className={styles.BoxSubtitle}>Eius, sit ex.</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.column2}>
						<div>
							<h2 className={styles.BoxName}>SKILLS</h2>
							<ul className={styles.ScillsList}>
								<li>Lorem.</li>
								<li>Iure?</li>
								<li>Perspiciatis!</li>
								<li>Quia.</li>
								<li>Voluptate.</li>
								<li>Vitae.</li>
								<li>Eligendi.</li>
								<li>Delectus!</li>
								<li>Esse.</li>
								<li>Dignissimos.</li>
								<li>Dicta.</li>
								<li>Ipsa.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeTemplate2;
