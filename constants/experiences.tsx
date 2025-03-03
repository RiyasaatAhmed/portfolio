import {
  A_LEON_COMPANY_URL,
  MZ_TECH_CORP_URL,
  POOL_OFFICE_MANAGER_URL,
  RED_MATTER_TECHNOLOGIES_URL,
} from "@/constants/urls";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  url: string;
  description: React.ReactNode[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Lead React.js Developer",
    company: "Pool Office Manager.",
    duration: "January 2023 - Present",
    url: POOL_OFFICE_MANAGER_URL,
    description: [
      <p key="pool-office-manager-1" className="mb-4">
        🚀 Developed a UI Library of pixel-perfect, well-tested, reusable, and
        functional web components which
        <strong className="text-primary"> {" reduced bugs by 20% "} </strong>
        and
        <strong className="text-primary">
          {" improved performance by 30% "}
        </strong>
        in the app.
      </p>,
      <p key="pool-office-manager-2" className="mb-4">
        🚀 Migrated two critical entities from RestAPI to GraphQL,
        <strong className="text-primary">
          {" improving data fetching efficiency by 35% "}
        </strong>
        by reducing over-fetching and under-fetching, enhancing API performance,
        and simplifying the front-end data query structure.
      </p>,
      <p key="pool-office-manager-3" className="mb-4">
        🚀 Mentoring junior developers, providing guidance on resolving
        <strong className="text-primary"> {" technical debt "} </strong>
        thus improving the overall
        <strong className="text-primary">{" team productivity "}</strong>
        and ensuring
        <strong className="text-primary">{" code quality "}</strong>
        by reviewing pull requests (PRs), helping them adhere to best practices
        and coding standards.
      </p>,
      <p key="pool-office-manager-4" className="mb-4">
        🚀 Collaborating closely with Product Managers, UI designers, and the
        CEO to <strong className="text-primary">{" improve "}</strong> the
        app&apos;s
        <strong className="text-primary">{"  user experience, "}</strong>
        ensuring alignment between business goals and user needs, resulting in
        more
        <strong className="text-primary">
          {" intuitive and engaging interfaces. "}
        </strong>
      </p>,
    ],
  },
  {
    title: "Next.js Developer",
    company: "A Leon Company.",
    duration: "January 2022 - December 2022",
    url: A_LEON_COMPANY_URL,
    description: [
      <p key="a-leon-company-1" className="mb-4">
        🚀 Managed, designed, and executed front-end development projects for
        multiple clients generating
        <strong className="text-primary">{" substantial revenue, "}</strong>
        which included designing highly responsive user interfaces for digital
        platforms and customer websites, bug fixes, and adding new features to
        existing multiple projects.
      </p>,
      <p key="a-leon-company-2" className="mb-4">
        🚀 Changed page rendering technique which
        <strong className="text-primary">
          {" reduced the built time from 45 minutes to 2 minutes "}
        </strong>
        and <strong className="text-primary">{" scaled "}</strong> the project
        in a way that would serve up to
        <strong className="text-primary">{" 500k pages "}</strong> with
        blazing-fast render time.
      </p>,
      <p key="a-leon-company-3" className="mb-4">
        🚀 Solved a next.js specific problem which allowed us to use
        SSR/SSG/ISR/On-DemandISR interchangeably on specific pages thus we can
        maintain, modify, refactor, and
        <strong className="text-primary">
          {" scale all of our client projects "}
        </strong>
        through multitenant e-commerce app in
        <strong className="text-primary">{" one single codebase. "}</strong>
      </p>,
      <p key="a-leon-company-4" className="mb-4">
        🚀 Implemented all the features by myself, which
        <strong className="text-primary">{" reduced "}</strong> the number of
        <strong className="text-primary">
          {" npm packages from 35 to 10 "}
        </strong>
        which
        <strong className="text-primary">
          {" improved initial load time by 40%. "}
        </strong>
      </p>,
      <p key="a-leon-company-5" className="mb-4">
        🚀 Implemented new and complex features to improve the frontend
        project&apos;s functionality across browsers and mobile devices, which
        <strong className="text-primary">{" eliminated "}</strong> recurring
        <strong className="text-primary">{" bugs "}</strong> and improved and
        enhanced
        <strong className="text-primary">{" customer experience "}</strong> by
        <strong className="text-primary">{" 30%. "}</strong>
      </p>,
    ],
  },
  {
    title: "MERN Stack Developer ",
    company: "Red Matter Technologies Ltd.",
    duration: "Sept 2021  - Oct 2022",
    url: RED_MATTER_TECHNOLOGIES_URL,
    description: [
      <p key="red-matter-technologies-1" className="mb-4">
        🚀 Refactored the workspace (one of the app&apos;s major features)
        component achieving
        <strong className="text-primary">{" 3x faster "}</strong> speed in user
        operations, which resulted in a better user experience and reduced the
        chances of the browser being frozen during cell analysis.
      </p>,
      <p key="red-matter-technologies-2" className="mb-4">
        🚀 Reorganized the previously implemented React Components resulting in
        the <strong className="text-primary">{" reduction "}</strong> of the
        number of <strong className="text-primary">{" rerenders "}</strong> by
        the utmost <strong className="text-primary">{" 7x times "}</strong>
        which took away the lagging after any user interaction.
      </p>,
      <p key="red-matter-technologies-3" className="mb-4">
        🚀 Redesigned the frontend architecture and data model which decreased
        <strong className="text-primary">{" time complexity "}</strong> from
        <strong className="text-primary">{" O(n^3) to O(1) "}</strong> of some
        of the features enabling better speed and performance of the app.
      </p>,
      <p key="red-matter-technologies-4" className="mb-4">
        🚀 Changed the UI design from open vertical boxes to a table with
        collapsable rows and thus we were able to display up to
        <strong className="text-primary">{" 50 FCS files from 5 FCS "}</strong>
        files in a single screen frame resulting in a better user experience.
      </p>,
      <p key="red-matter-technologies-5" className="mb-4">
        🚀 Wrote Unit tests for the analysis feature and achieved
        <strong className="text-primary">{" 60% of test coverage "}</strong>
        strengthening the base of our codebase resulting in fewer bugs and no
        dead screens in the production environment.
      </p>,
    ],
  },
  {
    title: "Junior Full Stack Engineer",
    company: "MzTech Software Development Corporation.",
    duration: "Jan 2021  - Aug 2021",
    url: MZ_TECH_CORP_URL,
    description: [
      <p key="mztech-software-development-1" className="mb-4">
        🚀 Developed the feature of
        <strong className="text-primary">{" multiple video uploading "}</strong>
        from the web and hosted them on AWS S3, with the help of the Lamda
        function.
      </p>,
      <p key="mztech-software-development-2" className="mb-4">
        🚀 Built the entire
        <strong className="text-primary">{" chat module including "}</strong>
        Video-Audio Calls, Screenshare, Active now, Last Seen, P2P chats, Text
        Seen and all the advanced features of a messenger.
      </p>,
      <p key="mztech-software-development-3" className="mb-4">
        🚀 Built the official website of MzTech Corp.
      </p>,
    ],
  },
];
