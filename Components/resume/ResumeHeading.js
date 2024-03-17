import { Box, Heading } from "@chakra-ui/react";

const borderBottom = "1px solid rgba(0,0,0, 0.75)";

export const ResumeHeading = ({ children, ...props }) => (
  <Box borderBottom={borderBottom} display={"flex"} pb={0} mt={1.5} mb={0.5}>
    <Heading
      mr={1}
      fontWeight={600}
      fontSize={14}
      fontFamily={"Inter, Lato, Poppins, Inter, sans-serif"}
      {...props}>
      {children}
    </Heading>
  </Box>
);