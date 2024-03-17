import Head from "next/head";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ResumeHeading } from "../Components/resume/ResumeHeading";
import fs from "fs";
import { load } from "js-yaml";
import { join } from "path";
import { ExperienceItem } from "../Components/resume/ExperienceItem";
import { ResumeTop } from "../Components/resume/ResumeTop";
import { useState } from "react";
import ResumeEditor from "../Components/resume/ResumeEditor";

export default function Resume({ resumeData }) {
  const { isOpen: isEditing, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  const [selectedTags, setSelectedTags] = useState(resumeData.defaultTags);

  const textItem = (item) => {
    const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));
    return isSelected ? item.name : null;
  };

  const itemsToText = (items) =>
    items
      ?.map(textItem)
      .filter((t) => t !== null)
      .join(", ");

  const MiscSection = [
    { name: "Awards", items: itemsToText(resumeData.awards) },
    { name: "Interests", items: itemsToText(resumeData.interests) },
    { name: "Skills", items: itemsToText(resumeData.languages) },
    { name: "Technologies", items: itemsToText(resumeData.technologies) },
  ].filter((s) => s.items?.length > 0);

  // const MiscTitle = joinStrings(MiscSection.map((s) => s.name));
  const MiscTitle = "Skills & Technologies";

  return (
    <Box>
      <Head>
        <title>Rahul Shrestha</title>
        <meta
          name="description"
          content="Hey! I'm Rahul Shrestha, a coder in the southwest. Here's my resumé :)"
        />
        <meta property="og:url" content="https://shres.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rahul Shrestha: My resumé" />
        
      </Head>

      <main>
        <style>{`
        @media print {
          html, body {
            background-color: #fff;
            max-height: 100vh;
            overflow: hidden;
          }
          .resume-page {
            margin-top: -10px;
          }
        }
        `}</style>
        <Flex justifyContent={"center"}>
          <Box px={6} pb={20} w={1000} maxW={"100%"} mt={3} className={"resume-page"}>
            <ResumeEditor
              data={resumeData}
              tags={[selectedTags, setSelectedTags]}
              isEditing={isEditing}
              onOpen={onOpen}
              onClose={onClose}
            />
            <ResumeTop isEditing={isEditing} />
            <ResumeHeading as={"h2"}>Education</ResumeHeading>
            {resumeData.education.map((item, index) => (
              <ExperienceItem
                selectedTags={selectedTags}
                item={item}
                key={"education-" + index}
                isEditing={isEditing}
              />
            ))}
            <ResumeHeading as={"h2"}>Skills</ResumeHeading>
            <Box px={2} pb={1}>
              {MiscSection.filter((a, i) => i > 0).map((s) => (
                <Text fontSize={12} p={0} key={s.items} fontWeight={200}>
                  <Text as={"span"} p={0} fontWeight={400}>
                    {s.name}:
                  </Text>{" "}
                  {s.items}
                </Text>
              ))}
            </Box>
            <ResumeHeading as={"h2"}>Projects</ResumeHeading>
            {resumeData.gapYear.map((item, index) => (
              <ExperienceItem
                selectedTags={selectedTags}
                item={item}
                key={"work-" + index}
                isEditing={isEditing}
              />
            ))}

            <ResumeHeading as={"h2"}>Experience</ResumeHeading>
            {resumeData.highSchool.map((item, index) => (
              <ExperienceItem
                selectedTags={selectedTags}
                item={item}
                key={"work-" + index}
                isEditing={isEditing}
              />
            ))}

            <ResumeHeading as={"h2"}>Memberships</ResumeHeading>
            {resumeData.projects.map((item, index) => (
              <ExperienceItem
                selectedTags={selectedTags}
                item={item}
                key={"work-" + index}
                isEditing={isEditing}
                locationFirst
              />
            ))}
          </Box>
        </Flex>
      </main>
    </Box>
  );
}

export const getStaticProps = () => {
  const yaml = fs.readFileSync(join(process.cwd(), "./data/resume.yaml"), "utf8");
  const resumeData = load(yaml);
  return {
    props: { resumeData },
  };
};