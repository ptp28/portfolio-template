export default interface ContentPaneProps {
    aboutSectionData?: {
        firstName: string;
        lastName: string;
        email: string;
        text: string;
        contactLinks: {
            phone?: string,
            email?: string,
            linkedin?: string,
            github?: string,
            x?: string,
            facebook?: string,
            instagram?: string
        }
    };
    workSectionData?: {
        companyName: string;
        workDetails: {
            duration: string,
            role: string,
            description: string[]
        }[];
    }[];
    educationSectionData?: {
        instituteName: string;
        degree: string;
        duration: string;
        description: string;
        grade?: string;
    }[];
    projectsSectionData?: {
        projectName: string;
        projectTags: string;
        description: string;
        links?: {
            title: string,
            url: string
        }[]
    }[];
    publicationSectionData?: {
        googleScholarProfileLink?: string;
        publications: {
            title: string;
            presentedAt: string;
            year: string;
            description: string;
            links?: {
                title: string,
                url: string,
            }[];
        }[]
    };
}