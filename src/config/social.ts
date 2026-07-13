import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/subaru323",
        linkTitle: `Follow Subaru katayama on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:sbr070218@gmail.com",
        linkTitle: `Send an email to Subaru katayama`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=shannon",
        linkTitle: `Subaru katayama on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-1825-0097",
        linkTitle: `Subaru katayama on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/claude-shannon-123456789/",
        linkTitle: `Subaru katayama on LinkedIn`,
        isActive: true, // Assuming Subaru doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};