export interface EventData {
    title: string;
    date: string;
    sortDate: string;
    status: "OPEN" | "EXPIRED";
    image: string;
    description: string;
    registrationLink?: string;
}

export const events: EventData[] = [
    {
        title: "InnovateHer",
        date: "09-03-2026",
        sortDate: "2026-03-09",
        status: "EXPIRED",
        image: "/events/InnovateHer.jpeg",
        description:
            "A women-centric innovation challenge celebrating creativity and leadership in tech. Teams pitched ideas to solve real-world problems with a focus on gender inclusivity.",
    },
    {
        title: "Kottayam Cluster Level Hackathon",
        date: "14-02-2026",
        sortDate: "2026-02-14",
        status: "EXPIRED",
        image: "/events/KTMCLUSTERHCKTHN.jpeg",
        description:
            "A regional hackathon bringing together the brightest minds from Kottayam cluster colleges to build innovative solutions in a time-bound competitive format.",
    },
    {
        title: "Wednesday Cafe - 18.02.2026",
        date: "18-02-2026",
        sortDate: "2026-02-18",
        status: "EXPIRED",
        image: "/events/WEDCAFE1802.jpeg",
        description:
            "An informal weekly gathering fostering open conversations around entrepreneurship, technology, and career growth over a cup of coffee.",
    },
    {
        title: "Wednesday Cafe - 11.02.2026",
        date: "11-02-2026",
        sortDate: "2026-02-11",
        status: "EXPIRED",
        image: "/events/WEDCAFE1102.jpeg",
        description:
            "A vibrant midweek session where students discuss startup ideas, share experiences, and learn from peers in a relaxed café-style setting.",
    },
    {
        title: "RELEVANT",
        date: "06, 07 Feb 2026",
        sortDate: "2026-02-07",
        status: "EXPIRED",
        image: "/events/RELEVANT.jpeg",
        description:
            "A two-day flagship event featuring workshops, panel discussions, and hands-on sessions exploring the most relevant technologies and industry practices.",
    },
    {
        title: "Ui/Ux Week",
        date: "Jan 19-23 2026",
        sortDate: "2026-01-23",
        status: "EXPIRED",
        image: "/events/UiUxWeek.jpeg",
        description:
            "A five-day intensive bootcamp on UI/UX design principles, wireframing, prototyping, and user research methods using industry-standard tools.",
    },
    {
        title: "Smart India Hackathon 2025",
        date: "09-08-2025",
        sortDate: "2025-08-09",
        status: "EXPIRED",
        image: "/events/SIH25.jpeg",
        description:
            "India's premier nationwide hackathon where student teams tackle problem statements from government and industry to build impactful solutions.",
    },
    {
        title: "Prayana - Alumni Entrepreneur Meetup",
        date: "23-08-2025",
        sortDate: "2025-08-23",
        status: "EXPIRED",
        image: "/events/PRAYANA2025.jpg",
        description:
            "An inspiring meetup connecting current students with successful alumni entrepreneurs, sharing real-world startup journeys and mentorship.",
    },
    {
        title: "Wednesday Cafe - 13.08.2025",
        date: "13-08-2025",
        sortDate: "2025-08-13",
        status: "EXPIRED",
        image: "/events/WEDCAFE1308.jpg",
        description:
            "A weekly café session featuring guest speakers and open discussions on emerging tech, innovation strategies, and student-led initiatives.",
    },
    {
        title: "Build And Ship",
        date: "05-08-2025",
        sortDate: "2025-08-05",
        status: "EXPIRED",
        image: "/events/BUILDANDSHIP.jpg",
        description:
            "A fast-paced build-a-thon challenging participants to conceive, develop, and ship a working product within a limited timeframe.",
    },
    {
        title: "INSENDIUM 10.0",
        date: "04-08-2025",
        sortDate: "2025-08-04",
        status: "EXPIRED",
        image: "/events/INSENDIUM10.0.jpg",
        description:
            "The tenth edition of IEDC's flagship innovation summit — a day of keynotes, workshops, competitions, and networking with industry leaders.",
    },
    {
        title: "Techy Pedia",
        date: "31-07-2025",
        sortDate: "2025-07-31",
        status: "EXPIRED",
        image: "/events/Techypedia.jpg",
        description:
            "An interactive tech quiz and knowledge-sharing event testing participants on the latest trends in software, hardware, and digital innovation.",
    },
    {
        title: "Wednesday Cafe with Shaheen Hyder",
        date: "15-01-2025",
        sortDate: "2025-01-15",
        status: "EXPIRED",
        image: "/events/event3.jpg",
        description:
            "A special edition of Wednesday Cafe featuring Shaheen Hyder, sharing insights on entrepreneurship, creative thinking, and building impactful ventures.",
    },
];

// Sort events by date, latest first
export const sortedEvents = [...events].sort(
    (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
);
