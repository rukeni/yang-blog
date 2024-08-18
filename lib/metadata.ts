import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "양승민",
  handle: "@rukeni",
  socialProfiles,
  email: "rukeni@naver.com",
  website: "https://nextjs.org",
  jobTitle: "프론트엔드 개발자 & 스타트업 잡부",
  company: "작가 주식회사",
  availableForWork: true,
  location: {
    city: "서울",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = "양블로그";
const defaultDescription = `안녕하세요. 저는${defaultAuthor.name}입니다. 솔직하기도하고 이것저것 관심있기도하고... 합리적으로 추론 하되 직관적으로 의사결정을 하는 성격입니다. 예.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/rukeni/yang-blog",
  // newsletterProvider: "mailerlite",
  // newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  // announcement: {
  //   buttonText: "Support on DevHunt →",
  //   link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  // },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
