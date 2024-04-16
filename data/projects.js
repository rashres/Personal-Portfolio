const projectSections = [

    {
      title: "Projects",
      details: "Completed projects so far :) ",
      data: [
        {
          tags: ["Nextjs", "React", "chakra-ui", "AWS", "CSS", "LaTeX"],
          bgImage: "https://necesimgs.s3.amazonaws.com/og_image_index.png",
          description: `Spent the last few months creating a website that serves as a comprehensive directory for all the projects I've completed so far, as well as hosting my resume. The resume itself is created using a LaTeX template that I designed.`,
          title: "Portfolio",
          buttons: [
            {
              href: "https://github.com/rashres",
              type: "github",
            },
          ],
        },
        {
          tags: ["Java", "MySQL", "SwingUI", "Spring Boot", "JDBC", "Git"],
          bgImage: "https://necesimgs.s3.amazonaws.com/bms.png",
          description: `One of my fun projects! Virtual Bank Management System. 
  
                Built with Java and MySQL, this system provides a user-friendly platform for managing accounts, transactions, and customer data, utilizing Spring Framework and Hibernate for efficient ORM. JSON/XML facilitates seamless data exchange, while Git, Maven, and Gradle streamline collaborative development and project management.`,
          title: "Bank Management System",
          buttons: [
            {
              href: "https://github.com/rashres/Bank-Management-System",
              type: "github",
            },
          ],
        },
        {
          tags: ["Java", "Git", "SwingUI"],
          title: "ARM Machines Instructions",
          bgImage:
          "https://necesimgs.s3.amazonaws.com/abc.png",
          description: `An engaging university project involving complex Java-based GUI development.
          
          Features input fields for ARM mnemonic instructions, with encoding functionality to convert instructions into binary and hexadecimal formats, along with decoding capability. Ensured user-friendly interaction with validation for input conformity, clear error messaging, and separate display fields for encoded results.`,
          buttons: [
            {
              href: "https://github.com/rashres/ARM-Machines-Instructions",
              type: "github",
            },
          ],
        },
        {
          tags: ["Java", "MySQL"],
          title: "Email Administration Toolkit",
          bgImage:
          "https://necesimgs.s3.amazonaws.com/mitt.jpeg",
          description: `Developed a Mail Administration project to reinforce OOP principles and other Java concepts, integrating MySQL for data management.`,
          buttons: [
            {
              type: "github",
              href: "https://github.com/rashres/Mail-Administration-Toolkit",
            },
          ],
        },
        {
          tags: ["Java", "SwingUI"],
          title: "Minesweeper",
          bgImage:
          "https://necesimgs.s3.amazonaws.com/mns.png",
          description: `A personal initiative to improve my skills in board representation, user interaction, and game logic through a Java-based side project.`,
          buttons: [
            {
              type: "github",
              href: "https://github.com/rashres/Minesweeper",
            },
          ],
        },
      ],
    }, 
  ];
  
  export default projectSections;
