import React from "react";
import { useSelector } from "react-redux";
import classes from "./Template_1.module.css";

const Template_1 = () => {
  const resume = useSelector((state) => state.resume);

  const {
    firstName,
    lastName,
    city,
    phone,
    email,
    country,
    summary,
    jobTitle,
  } = resume.basicInfo;

  const { employmentHistory, educations, languages, projects, skills } = resume;

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_title}>
        <h1
          className={`${classes.name} ${classes.text_primary}`}
        >{`${firstName} ${lastName}`}</h1>
        <p className={`${classes.job} ${classes.text_secondary}`}>{jobTitle}</p>
      </div>

      <div className={classes.wrapper_columns}>
        {/**----------------------------column Left-------------------------------------- */}

        <div className={classes.wrapper_column_left}>
          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              info
            </h2>

            <p className={`${classes.subtitle} ${classes.text_primary}`}>
              Address
            </p>
            <p className={`${classes.text_secondary} ${classes.info_text}`}>
              {`${city}, ${country}`}
            </p>
            <p className={`${classes.subtitle} ${classes.text_primary}`}>
              phone
            </p>
            <p className={`${classes.text_secondary} ${classes.info_text}`}>
              {phone}
            </p>
            <p className={`${classes.subtitle} ${classes.text_primary}`}>
              E-mail
            </p>

            <a
              className={`${classes.text_secondary} ${classes.info_text} ${classes.info_email}`}
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>

          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Skills
            </h2>
            {skills.map((el) => (
              <p
                className={`${classes.text_primary} ${classes.skill_text} `}
                key={el.skill}
              >
                {el.skill}
              </p>
            ))}
          </div>
        </div>

        {/**----------------------------------column Right-------------------------------- */}

        <div className={classes.wrapper_column_right}>
          {/**--------------------------profile------------------------------ */}

          <div
            className={`${classes.wrapper_column} ${classes.section_profile}`}
          >
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Profile
            </h2>
            <p className={`${classes.text_secondary}`}>{summary}</p>
          </div>

          {/** ================================================================*/}

          {/**--------------------------Employment history-------------------- */}

          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Employment history
            </h2>
            {employmentHistory.map((el) => (
              <div key={employmentHistory}>
                <div className={`${classes.employment_history_title}`}>
                  <p className={`${classes.text_primary}`}>
                    {`${el.jobTitle}, ${el.employer}`}
                  </p>
                  <p className={`${classes.text_secondary}`}>{el.city}</p>
                </div>
                <p
                  className={`${classes.text_primary} ${classes.employment_history_data}`}
                >
                  {`${el.start} - ${el.end}`}
                </p>
                <p className={`${classes.text_secondary}`}>{el.description}</p>
              </div>
            ))}
          </div>

          {/** ================================================================*/}

          {/**--------------------------Education----------------------------- */}

          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Education
            </h2>
            {educations.map((el) => (
              <div key={educations}>
                <div className={`${classes.employment_history_title}`}>
                  <p
                    className={`${classes.text_primary}`}
                  >{`${el.school}, ${el.degree}`}</p>
                </div>

                <p
                  className={`${classes.text_primary} ${classes.employment_history_data}`}
                >
                  {`${el.start} - ${el.end}`}
                </p>
              </div>
            ))}
          </div>

          {/** ================================================================*/}

          {/**--------------------------languages----------------------------- */}

          <div className={classes.wrapper_column}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Languages
            </h2>
            {languages.map((el) => (
              <div key={languages} className={classes.languages_wrapper}>
                <p
                  className={`${classes.text_primary} ${classes.skill_text} ${classes.languages_language}`}
                >
                  {`${el.language} - ${el.level}`}
                </p>
              </div>
            ))}
          </div>

          {/** ================================================================*/}

          {/**--------------------------projects------------------------------ */}

          <div className={`${classes.wrapper_column} `}>
            <h2 className={`${classes.title_columns} ${classes.text_primary}`}>
              Projects
            </h2>
            {projects.map((el) => (
              <div key={projects}>
                <p
                  className={`${classes.text_primary} ${classes.projects_title}`}
                >
                  {`${el.projectTitle}, ${el.company}`}
                </p>

                <p className={`${classes.text_secondary}`}>{el.description}</p>
              </div>
            ))}
          </div>

          {/** ================================================================*/}
        </div>
      </div>
    </div>
  );
};

export default Template_1;
