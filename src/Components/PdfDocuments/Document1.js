import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import font from "./font/montserrat-v14-latin-500.ttf";

const Document1 = ({ resume }) => {
  const {
    basicInfo,
    employmentHistory,
    skills,
    educations,
    languages,
    projects,
  } = resume;

  return (
    <Document>
      <Page size="A4" style={styles.body} wrap={true}>
        <View style={styles.section}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>
              {basicInfo.firstName} {basicInfo.lastName}
            </Text>
            <Text style={styles.subtitle}>{basicInfo.jobTitle}</Text>
          </View>
          {/* <View style={styles.contentBox}> */}
          <View style={styles.viewBox}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Info</Text>
              <View style={styles.border}></View>
              <Text style={styles.infoSubTitle}>Address</Text>
              <Text style={styles.textInfo}>
                {basicInfo.city}, {basicInfo.country}
              </Text>
              <Text style={styles.infoSubTitle}>phone</Text>
              <Text style={styles.textInfo}>{basicInfo.phone}</Text>
              <Text style={styles.infoSubTitle}>E-mail</Text>
              <Text style={styles.emailInfo}>{basicInfo.email}</Text>
              <Text style={styles.infoTitle}>Skills</Text>
              <View style={styles.border}></View>
              <View>
                {skills.map((el) => (
                  <Text style={styles.skillInfo} key={el.skill}>
                    {el.skill}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.profileBox}>
              <Text style={styles.infoTitle}>Profile</Text>
              <View style={styles.border}></View>
              <Text style={styles.profileInfo}>{basicInfo.summary}</Text>
              <Text style={styles.infoTitle}>employment history</Text>
              <View style={styles.border}></View>
              <View style={styles.historyBox}>
                <View>
                  {employmentHistory.map((el) => (
                    <View key={el.employer}>
                      <View style={styles.companyBox}>
                        <View>
                          <Text style={styles.infoSubTitle}>
                            {el.jobTitle}, {el.employer}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.textInfoCity}>{el.city}</Text>
                        </View>
                      </View>
                      <Text style={styles.dataInfo}>
                        {el.start}1111-1111 {el.end}
                      </Text>
                      <Text style={styles.textInfo}>{el.description}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <Text style={styles.infoTitle}>Education</Text>
              <View style={styles.border}></View>

              <View>
                {educations.map((el) => (
                  <View key={el.school}>
                    <View style={styles.companyBox}>
                      <Text style={styles.infoSubTitle}>{el.school}</Text>
                      <Text style={styles.dataInfo}>
                        {el.start}-{el.end}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
              <Text style={styles.infoTitle}>projects</Text>
              <View style={styles.border}></View>
              <View>
                {projects.map((el) => (
                  <View key={el.projectTitle}>
                    <View>
                      <Text style={styles.infoSubTitle}>
                        {el.projectTitle}, {el.company}
                      </Text>
                    </View>
                    <Text style={styles.textInfo}>{el.description}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.infoTitle}>languages</Text>
              <View style={styles.border}></View>
              <View>
                {languages.map((el) => (
                  <View key={el.language}>
                    <View>
                      <Text style={styles.infoSubTitle}>{el.language}</Text>
                    </View>
                    <Text style={styles.textInfo}>{el.level}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}

        <View style={styles.pageNumberBox}>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
            bottom
          />
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  format: "truetype",
  src: font,
});

const styles = StyleSheet.create({
  body: {
    paddingVertical: 50,
    paddingHorizontal: 50,
  },

  section: {
    width: "100%",
  },
  titleBox: {
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  title: {
    fontSize: 48,
    fontStyle: "normal",
    textAlign: "left",
    fontFamily: "Oswald",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  // contentBox: {
  //   borderColor: "#d3d3d3",
  //   borderTopWidth: 1,
  //   borderTopStyle: "solid",
  // },

  subtitle: {
    fontSize: 14,
    fontFamily: "Oswald",
    textTransform: "uppercase",
    fontWeight: 100,
    marginBottom: 40,
  },
  text: {
    fontSize: 14,
    fontFamily: "Oswald",
    color: "grey",
  },
  viewBox: {
    display: "flex",
    flexDirection: "row",
  },
  infoTitle: {
    fontWeight: 500,
    fontSize: 20,
    textTransform: "uppercase",
  },
  infoSubTitle: {
    fontSize: 14,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  textInfo: {
    fontSize: 14,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 40,
  },
  skillInfo: {
    fontSize: 14,
    fontFamily: "Oswald",
    color: "black",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  historyText: {
    paddingRight: 10,
  },
  emailInfo: {
    fontSize: 14,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 40,
    textDecoration: "underline",
  },
  profileInfo: {
    fontSize: 14,
    fontFamily: "Oswald",
    color: "grey",
    paddingBottom: 40,
    marginBottom: 40,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  border: {
    backgroundColor: "black",
    width: 40,
    height: 4,
    marginTop: 4,
    marginBottom: 40,
  },
  infoBox: {
    borderColor: "#d3d3d3",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    paddingTop: 40,
    paddingRight: 50,
    width: 150,
  },
  profileBox: {
    paddingTop: 40,
    paddingLeft: 30,
  },
  historyBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 8,
  },
  companyBox: {
    // flexDirection: "row",
    // alignItems: "flex-start",
    // justifyContent:"space-between"
  },
  textInfoCity: {
    // left: 65,
    fontSize: 14,
    fontFamily: "Oswald",
    color: "grey",
    marginBottom: 8,
  },

  dataInfo: {
    fontSize: 14,
    color: "black",
    marginBottom: 16,
  },
  pageNumberBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  pageNumber: {
    fontSize: 12,
    textAlign: "center",
    color: "grey",
  },
});

export default Document1;
