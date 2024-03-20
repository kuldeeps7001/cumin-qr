

// import SocialShareLinks from "@/app/components/SocialShareLinks";
// import { CheckIcon } from "@chakra-ui/icons";
// import {
//   Avatar,
//   Badge,
//   Box,
//   Center,
//   CircularProgress,
//   CircularProgressLabel,
//   Container,
//   Divider,
//   HStack,
//   Heading,
//   VStack,
//   useClipboard,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Script from "next/script";
// import { useEffect, useState } from "react";

// const BlogPost = ({ params }: { params: any }) => {
//   console.log("params: ", params);

//   const { hasCopied, onCopy } = useClipboard(
//     `${process.env.NEXT_PUBLIC_SITE_URL}/${params.slug}`
//   );

//   const { slug } = params;

//   const [isLessThan1180px] = useMediaQuery("(max-width: 1180px)");
//   console.log("slug: ", slug);
//   const [height, setHeight] = useState(0);
//   const [sideContentVisibility, setSideContentVisibility] = useState("none");

//   useEffect(() => {
//     let handleProgress = () => {
//       const totalScroll =
//         document.documentElement.scrollTop -
//         document.getElementById("head-content")?.clientHeight;
//       const windowHeight =
//         document.getElementById("blog-content")?.clientHeight;
//       const scroll = `${totalScroll / windowHeight}`;
//       setHeight(scroll);
//     };

//     window.addEventListener("scroll", handleProgress);
//     return () => {
//       window.removeEventListener("scroll", handleProgress);
//     };
//   }, []);

//   // Auto-hide the side content visibility after progress reaches 100%
//   useEffect(() => {
//     if (Math.floor(height * 100) > 102) {
//       setSideContentVisibility("none");
//     } else {
//       setSideContentVisibility("block");
//     }
//   }, [height]);

//   return (
//     <Container maxW={"7xl"}>
//       <VStack>
//         <Box id={"head-content"}>
//           <HStack
//             alignSelf={"flex-start"}
//             textTransform={"uppercase"}
//             mt={7}
//             mb={5}
//             fontSize={"sm"}
//           >
//             {/* Last updated */}
//             <Box>Last updated:{" 22 Fev a03023 "}</Box>
//             <Center>{"•"}</Center>

//             {/* Read time */}
//             <Box textTransform={"uppercase"}>{"5 Minutes"}</Box>
//           </HStack>

//           {/* Featured image */}
//           <Image
//             src={"/static/blogHero.png"}
//             height={"200"}
//             width={"600"}
//             alt="Blog post featured image"
//           />

//           <HStack alignSelf={"flex-start"} py={5} spacing={4}>
//             {/* Author image */}
//             <Avatar
//               name={"Kuldeep Sharam"}
//               // src=""
//             />
//             <VStack spacing={0}>
//               {/* Author name */}
//               <HStack>
//                 <Box color={"brand.50"}>{"Kuldeep Sharam"}</Box>
//                 <Badge colorScheme={"green"} w={"max-content"}>
//                   Author
//                 </Badge>
//               </HStack>

//               {/* Published date */}
//               <Box alignSelf={"flex-start"} fontSize={"small"}>
//                 {"22 Fev 2023"}
//               </Box>
//             </VStack>
//           </HStack>

//           {/* Social media sharing links on devices whose resolution is less than 780px */}
//           {isLessThan1180px && (
//             <Center>
//               <HStack my={2}>
//                 <SocialShareLinks
//                   toolTipPlacement={"top"}
//                   onCopy={onCopy}
//                   hasCopied={hasCopied}
//                   title={"post.title"}
//                   slug={"post.slug"}
//                 />
//               </HStack>
//             </Center>
//           )}

//           {/* Post reading completion progress indicator */}
//           {!isLessThan1180px && (
//             <Box
//               id={"side-content"}
//               pos={"fixed"}
//               top={{ base: 60, "2xl": 60 }}
//               right={{ base: 40, "2xl": 80 }}
//               display={sideContentVisibility}
//             >
//               <CircularProgress
//                 value={
//                   Math.floor(height * 100) < 0 ? 0 : Math.floor(height * 100)
//                 }
//                 color={
//                   Math.floor(height * 100) >= 100 ? "green.400" : "brand.50"
//                 }
//               >
//                 <CircularProgressLabel>
//                   {Math.floor(height * 100) >= 100 ? (
//                     <CheckIcon color={"green.400"} fontSize={"lg"} />
//                   ) : Math.floor(height * 100) < 0 ? (
//                     `${0}%`
//                   ) : (
//                     `${Math.floor(height * 100)}%`
//                   )}
//                 </CircularProgressLabel>
//               </CircularProgress>

//               {/* Social media sharing links */}
//               <VStack mt={4}>
//                 <Box fontWeight={"bold"}>SHARE</Box>
//                 <SocialShareLinks
//                   toolTipPlacement={"right"}
//                   onCopy={onCopy}
//                   hasCopied={hasCopied}
//                   title={"post.title"}
//                   slug={"post.slug"}
//                 />
//               </VStack>
//             </Box>
//           )}

//           <Divider />

//           <Script
//             src={
//               "https://proxy.beyondwords.io/npm/@beyondwords/audio-player@latest/dist/module/iframe-helper.js"
//             }
//             type={"text/javascript"}
//             strategy={"beforeInteractive"}
//           />

//           {/* Post title */}
//           <Heading as={"h1"} py={5}>
//             {"Title"}
//           </Heading>
//         </Box>

//         {/* Post content */}
//         <Box
//           lineHeight={1.8}
//           letterSpacing={"wide"}
//           color={"gray.800"}
//           id={"blog-content"}
//           width={"100%"}
//         >
//           {`Does your company struggle to create a modern, high-performance, cross-platform web app? Do you desire cost-effective development without compromising future software quality? Many web development teams utilize Angular to build complicated single-page apps. Hiring Angular programmers is difficult.

// How To Hire Angular Developers

// Finding a skilled Angular developer who applies best practices and innovative approaches to satisfy high-quality coding standards is vital to a smooth development process, even though there are many possibilities. One can even hire angular developers from top tech companies, they can build highly responsive and dynamic web applications with their experience and skill set.

// This article lists the most important skills and information that will help you hire a professional Angular developer for your development.

// What is Angular?
// Angular is a cutting-edge MVC framework and platform used for developing HTML and TypeScript-based corporate SPAs. It provides mandatory and elective features as a collection of TypeScript libraries that may be used in your applications. By incorporating structure and design principles, Angular enables developers to build more robust and updatable web applications.

// What is the Need for Angular?
// Top Fortune 500 companies like Microsoft, Samsung, and Paypal use Angular web platforms. Now, 30.7% of workers use different versions of Angular for user interfaces, and Angular's use in development has grown by 50% since 2019. Here are a few of the main advantages of Angular:

// Readability: Newer versions of Angular use Typescript, a programming language that makes it easier to change and work with the original JavaScript. Developers will get more done if they can understand the code they write.
// Components are separated: Angular tries to loosen the connections between the different parts of a program. The injection works like NodeJS, and switching out different parts is easy.
// Test-Friendly: Parts of an application are easy to handle, and testing is easy because units or elements can work independently. In an orderly way, you can check and improve the performance of each program at the minor level.
// Maintainable and Consistent: Consistent Code is a must to reduce mistakes and keep up speed. Angular uses a simple MVC (model-view-controller)design that doesn't need extra code to connect controllers or components. Less code makes things lighter and faster, and for every 100 milliseconds it takes for a page to load, your sales will increase by 1%.
// Why Hire Angular Developers?
// Angular is a well-liked framework built on TypeScript. An Angular developer is a good option if you want to create a polished web app with an interactive interface. The whole development of web applications may be given more structure and consistency with Angular, which greatly contributes to the applications' scalability and maintainability.

// 6 Steps to Hire an Angular Developer?
// Figure out the Right Method of Hiring
// The number of developers you need, your budget, the project deadline, and whether you need full-time or part-time employees play a role in determining the best strategies for you. Outsourcing, staffing, independent hiring, and vendor-assisted hiring are all options.

// Examine Your Staffing Requirements
// Workload estimates indicate how many software engineers you'll need to finish your project. With three or four developers, your product may be ready in three months, compared to six months with one or two. Thus, hiring front-end and back-end programmers or full-stack programmers to oversee all development plan areas is best.

// Define Qualification Details for Your Potential Candidates
// You need to know what hard and soft skills your ideal Angularjs developer should have to be able to find one. To get the best Angular programmer for your project, you need to make a detailed list of their required and preferred skills. You can save time and effort by using this list to quickly eliminate unqualified applicants before scheduling interviews.

// How to Go About Hiring
// You can now outsource or manage employment. Independent hiring is ideal for small businesses. But using a vendor eliminates the need to search resume databases, read applicant profiles, contact them, schedule interviews, and go through the results to discover the best engineers. Use an IT staffing firm to outsource hiring. Consider the vendor's pricing, customer service response time, time zone availability, and staff English proficiency before choosing.

// Create a Candidate Database
// If you need to fill a position for an Angular programmer, start by sorting through resumes to find the best applicants. Expert recruiters compile a database of qualified applicants for you to peruse. All of its resumes have been verified for authenticity and subjected to pre-screening interviews to rule out unqualified applicants.

// Hold Job Interviews
// The last step is to interview the people who made it through the first round of hiring. Before hiring someone, the employer needs to know them personally. It can be done through a face-to-face meeting or an online interview. This allows the employer to check the candidate's skills and test their hard and soft skills.

// The recruitment process ends when the best candidate is hired after several interviews and practical tests. You’re all set to welcome the new member.

// Where to Find Angular Developers?
// CodinGame Sourcing: Check out CodinGame Sourcing first of all. It will put you in touch with top AngularJS writers who are likely to want to work on your project.

// Generic programming Q&A websites: There are a lot of AngularJS developers with a lot of knowledge in the AngularJS sections of more general programming Q&A sites.

// Networking in person and from afar: If you want to hire more than one AngularJS developer, you should go to events where tech people meet and talk.

// Social Media: LinkedIn, Upwork, and other job portals are the best way to quickly find the best AngularJS developers on social media.

// `}
//         </Box>
//         <Divider py={5} />
//       </VStack>
//     </Container>
//   );
// };

// export default BlogPost;

import blogs from "@/data/blogs.json";

import React from "react";
import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const {slug} = params;
 
  return {
    title: `${slug}`,
  }
}

function Post({ post }: { post: any }) {
  return (
    <Container maxW={"7xl"}>
    <Box p={4} borderRadius="lg" my={4} >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h2" size="lg">
          {post.title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          Author: {post.author}
        </Text>
      </Flex>
      <Box>
        <Image height={300} width={400} src={post.image} alt={post.title}   />
        <Text mt={6} fontSize="sm" color="gray.600">
          Read Time: {post.readTime}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Creation Date: {post.creationDate}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Last Update Date: {post.lastUpdateDate}
        </Text>
        {/* Render HTML content using dangerouslySetInnerHTML */}
        <Box mt={4} fontSize={'16px'} lineHeight={'1.6rem'} dangerouslySetInnerHTML={{ __html: post.content }} />
      </Box>
    </Box>
    </Container>
  );
}

function BlogPost({ params }:  Props ) {
  const { slug } = params;

  const post = blogs.filter((post) => post.url == slug)[0];

  return <Post post={post} />;
}

export default BlogPost;
