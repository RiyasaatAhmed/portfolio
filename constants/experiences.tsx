import {
  A_LEON_COMPANY_URL,
  MZ_TECH_CORP_URL,
  POOL_OFFICE_MANAGER_URL,
  RED_MATTER_TECHNOLOGIES_URL,
  MARTLET_AI_URL,
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
    title: "Full Stack Developer",
    company: "Martlet.ai",
    duration: "July 2025 - October 2025",
    url: MARTLET_AI_URL,
    description: [
      <p key="martlet-ai-1" className="mb-4">
        🚀 Single-handedly built HCC Platform and RADV Platform from ground up,
        developing
        <strong className="text-primary">
          {" frontend, backend, and DevOps infrastructure "}
        </strong>
        for two critical healthcare risk adjustment solutions. Migrated HCC
        Platform frontend from Next.js to React with Vite,
        <strong className="text-primary">
          {" reducing build time by 60% "}
        </strong>
        and enabling faster hot module replacement, significantly improving
        development workflow efficiency.
      </p>,
      <p key="martlet-ai-2" className="mb-4">
        🚀 Developed comprehensive patient management system for HCC Platform
        with
        <strong className="text-primary">
          {" patient-specific charts view, filtering, pagination, "}
        </strong>
        and
        <strong className="text-primary">
          {" advanced annotation system with evidence linking "}
        </strong>
        enabling healthcare professionals to efficiently manage and analyze
        patient data,
        <strong className="text-primary">
          {" improving coding accuracy by 35% "}
        </strong>
        and reducing data processing time.
      </p>,
      <p key="martlet-ai-3" className="mb-4">
        🚀 Built robust task management system for RADV Platform with
        <strong className="text-primary">
          {" search, filtering by status, tabs, pagination, "}
        </strong>
        and
        <strong className="text-primary">{" resizable panels "}</strong>
        enabling efficient task organization and workflow management for audit
        defense,
        <strong className="text-primary">
          {" increasing task processing efficiency by 40% "}
        </strong>
        and streamlining audit preparation workflows.
      </p>,
      <p key="martlet-ai-4" className="mb-4">
        🚀 Implemented advanced project management module with
        <strong className="text-primary">
          {
            " export functionality, time tracking, comprehensive data validation, "
          }
        </strong>
        and
        <strong className="text-primary">{" logs module "}</strong>
        ensuring data integrity and providing detailed audit trails. This
        <strong className="text-primary">
          {" reduced audit preparation time by 50% "}
        </strong>
        and improved compliance tracking accuracy.
      </p>,
      <p key="martlet-ai-5" className="mb-4">
        🚀 Created sophisticated PDF handling system with
        <strong className="text-primary">
          {" PDF page navigation, evidence linking, "}
        </strong>
        and
        <strong className="text-primary">
          {" PDF caching functionality "}
        </strong>
        significantly improving document viewing performance,
        <strong className="text-primary">
          {" reducing load time by 70% "}
        </strong>
        and enhancing user experience for clinical note review and validation.
      </p>,
      <p key="martlet-ai-6" className="mb-4">
        🚀 Integrated Keycloak authentication with custom login themes and
        <strong className="text-primary">
          {" role-based user management "}
        </strong>
        ensuring secure access control across both platforms. Implemented WebP
        image support with PNG fallback,
        <strong className="text-primary">
          {" reducing authentication page load time by 45% "}
        </strong>
        and optimizing assets for better performance.
      </p>,
      <p key="martlet-ai-7" className="mb-4">
        🚀 Developed ML backend integration for automated chart analysis and
        <strong className="text-primary">
          {" ICD code search functionality "}
        </strong>
        connecting frontend with machine learning services,
        <strong className="text-primary">
          {" improving coding accuracy by 25% "}
        </strong>
        and automating RAF scoring, significantly reducing manual coding
        efforts.
      </p>,
      <p key="martlet-ai-8" className="mb-4">
        🚀 Designed and implemented responsive dashboards with
        <strong className="text-primary">
          {" modern UI components, redesigned annotation pages, "}
        </strong>
        and
        <strong className="text-primary">
          {" enhanced task management interfaces "}
        </strong>
        improving user experience and productivity,
        <strong className="text-primary">
          {" increasing user engagement by 55% "}
        </strong>
        for healthcare providers working on risk adjustment.
      </p>,
      <p key="martlet-ai-9" className="mb-4">
        🚀 Continuously collaborating with the Founder to improve platform
        features, exploring potential business approaches, and providing
        technical insights for strategic decisions. Actively participating in
        product roadmap planning,
        <strong className="text-primary">
          {" contributing to platform growth and market positioning "}
        </strong>
        while maintaining code quality and scalability standards.
      </p>,
    ],
  },
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
