import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const Document1 = ({ resume }) => {
  const { basicInfo, employmentHistory, skills, educations } = resume;

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.section}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>
              {basicInfo.firstName} {basicInfo.lastName}
            </Text>
            <Text style={styles.subtitle}>{basicInfo.jobTitle}</Text>
          </View>
          <View style={styles.contentBox}>
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
                  {skills.map((el, i) => (
                    <Text style={styles.skillInfo} key={i}>
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
                  <Text style={styles.infoSubTitle}>
                    {employmentHistory[0].jobTitle},
                    {employmentHistory[0].employer}
                  </Text>
                  <Text style={styles.textInfoCity}>
                    {employmentHistory[0].city}
                  </Text>
                </View>
                <Text style={styles.dataInfo}>
                  {employmentHistory[0].start}-{employmentHistory[0].end}
                </Text>
                <Text style={styles.textInfo}>
                  {employmentHistory[0].description}
                </Text>
                <Text style={styles.infoTitle}>Education</Text>
                <View style={styles.border}></View>
                <View style={styles.historyBox}>
                  <Text style={styles.infoSubTitle}>
                    {educations[0].school}, {educations[0].degree}
                  </Text>
                </View>
                <Text style={styles.dataInfo}>
                  {educations[0].start}-{educations[0].end}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={styles.pageNumberBox}>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
            bottom
          />
        </View> */}
      </Page>
    </Document>
  );
};

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
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
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontStyle: "normal",
    textAlign: "left",
    fontFamily: "Oswald",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  contentBox: {
    borderColor: "#d3d3d3",
    borderTopWidth: 1,
    borderTopStyle: "solid",
  },

  subtitle: {
    fontSize: 14,
    fontFamily: "Oswald",
    textTransform: "uppercase",
    // fontStyle: "normal",
    fontWeight: 100,
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
  textInfoCity: {
    left: 65,
    fontSize: 14,
    fontFamily: "Oswald",
    color: "grey",
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
