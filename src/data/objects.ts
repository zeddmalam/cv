import { CvCareerStep, CvSkillGroup, PersonalData } from "@/data/interfaces";

const NEXT_PUBLIC_PERSONAL_DATA_PHONE = process.env.NEXT_PUBLIC_PERSONAL_DATA_PHONE;
const NEXT_PUBLIC_PERSONAL_DATA_ADDRESS = process.env.NEXT_PUBLIC_PERSONAL_DATA_ADDRESS;
const NEXT_PUBLIC_PERSONAL_DATA_EMAIL = process.env.NEXT_PUBLIC_PERSONAL_DATA_EMAIL;
const NEXT_PUBLIC_PERSONAL_DATA_BIRTHDAY = process.env.NEXT_PUBLIC_PERSONAL_DATA_BIRTHDAY;

export const careerHistory: Array<CvCareerStep> = [
    {
        startYear: 2002,
        endYear: 2004,
        companyName: 'Mykolaiv Administration',
        position: 'Application Developer',
        positionDescription: 'Development and support of applications for financial department, application for masterclasses.',
        skills: ['COM objects', 'Client-Server', 'OOP', 'DB', 'Delphi', 'MS Office integrations', 'etc']
    },
    {
        startYear: 2004,
        endYear: 2005,
        companyName: 'Oxygen works',
        position: 'Junior Web-developer',
        positionDescription: 'Development of websites, development of applications for Mykolayiv Alumina Refinery, Websites administrating.',
        skills: ['OOP', 'DB', 'MVC', 'PHP', 'ASP', 'mysql', 'javascript', 'mssql', 'smarty', 'etc']
    },
    {
        startYear: 2005,
        endYear: 2006,
        companyName: 'Template Rover',
        position: 'Web-developer',
        positionDescription: 'Development and support of websites, Developing of site analyser tools, Search engine optimisation.',
        skills: ['OOP', 'DB', 'MVC', 'OS-Commerce', 'php', 'mysql', 'javascript', 'etc']
    },
    {
        startYear: 2006,
        endYear: 2007,
        companyName: 'Tira Wireless',
        position: 'Mobile Developer',
        positionDescription: 'Development of mobile applications for J2ME, BREW platforms. Porting them for wide ranges of phone models, Developing plugins to optimise development process.',
        skills: ['J2ME', 'BREW', 'Ant', 'Elf', 'SVN', 'CVS', 'etc']
    },
    {
        startYear: 2007,
        endYear: 2009,
        companyName: 'GeeksForLess',
        position: 'Java EE, JavaME Developer',
        positionDescription: 'Development and support of J2ME (for blackberry), JEE applications, Administration of servers, organising environment for team.',
        skills: ['Agile', 'Continuous Integration', 'J2ME', 'JEE', 'Ant', 'Client-Server', 'Ant', 'SVN', 'etc']
    },
    {
        startYear: 2009,
        endYear: 2010,
        companyName: 'Smaknews Inc.',
        position: 'Senior Web-developer',
        positionDescription: 'Development and support of web-applications, administration of dedicated servers, Quality assurance, scaling, optimisation, team management.',
        skills: ['PHP', 'AJAX', 'SVN', 'javascript', 'web content analysis', 'OOP', 'DB', 'etc']
    },
    {
        startYear: 2010,
        endYear: 2012,
        companyName: 'GFL Inc.',
        position: 'Senior Web-developer',
        positionDescription: 'Development and support of web-applications, administration of servers.',
        skills: ['PHP', 'AJAX', 'SVN', 'javascript', '00P', 'DB', 'Java', 'AWS', 'Web-services', 'Spring Framework', 'Mercurial', 'etc']
    },
    {
        startYear: 2012,
        endYear: 2016,
        companyName: 'LuxiMax, Inc.',
        position: 'Senior Software Engineer',
        positionDescription: 'Development and support of web-applications, administration of servers, scaling, team management.',
        skills: ['AJAX', 'SVN', 'javascript', 'jQuery', 'OOP', 'MongoDB', 'Redis', 'Java', 'AWS', 'RESTful', 'Spring Framework', 'NodeJS', 'Google maps API', 'etc']
    },
    {
        startYear: 2016,
        endYear: 2017,
        companyName: 'WeRide GmbH',
        position: 'Backend Engineer',
        positionDescription: 'Development and support of micro-services, maintenance, OSRM integration.',
        skills: ['git', 'NodeJS', 'JavaScript', 'jQuery', 'OOP', 'AWS', 'RESTful', 'etc']
    },
    {
        startYear: 2017,
        companyName: 'Zalando SE',
        position: 'Senior Software Engineer',
        positionDescription: 'Application life cycle management, development and support of Career websites https://jobs.zalando.com, Developer Console https://dev.zalando.net, Recruiting business process automation, Migration to Workday.',
        skills: ['git', 'NodeJS', 'Python', 'podman', 'Kubernetes', 'AWS', 'RESTful', 'Postgres', 'etc']
    },
];

export const personalData: PersonalData = {
    phone: {
        value: NEXT_PUBLIC_PERSONAL_DATA_PHONE ?? '',
        category: 'Phone'
    },
    address: {
        value: NEXT_PUBLIC_PERSONAL_DATA_ADDRESS ?? '',
        category: 'Address',
        url: ''
    },
    website: {
        value: 'www.dmytro.bukhanets.de',
        category: 'Website',
        url: 'http://dmytro.bukhanets.de'
    },
    github: {
        value: 'github.com/zeddmalam',
        category: 'Github',
        url: 'https://github.com/zeddmalam'
    },
    email: {
        value: NEXT_PUBLIC_PERSONAL_DATA_EMAIL ?? '',
        category: 'Email',
        url: 'mailto:dmytro.bukhanets@gmail.com'
    },
    birthday: {
        value: NEXT_PUBLIC_PERSONAL_DATA_BIRTHDAY ?? '',
        category: 'Birthday',
    },
};

export const skills: Array<CvSkillGroup> = [
    {
        title: 'HIGHLIGHTS',
        description: `I work as part of a multi-disciplinary Engineering team. In this role, I act beyond the team's scope and gain visibility vis-à-vis other teams and Engineering Management through alignment of solution designs and ownership of significant deliverables in cross-team projects. I play a key role in the design, development, and deployment of those by assessing the technical and computational complexity based on the functional and non-functional requirements and data volumes. I closely collaborate with Product Management (and other roles) to refine the functional requirements and build test cases to be verified during development and feature release. Overall, I continuously ship solutions having impact for the customers of the built product and enable the whole team to do so as well.<br/>
            <br/>
            I'm a guardian of operational excellence and managing technical debt within the team. I suggest and with the help of the team implement solutions that simplify the technical architecture of individual services or pay down technical debt. My suggestions are initiated and supported by crisp narratives and technical solution designs, which have been peer-reviewed by other Senior Engineers within and outside of the team. I also play a crucial role in training and mentoring other engineers on my team and beyond. As my scope continues to increase, I focus on:<br/>`,
        skills: [
            {
                title: 'Analytical thinking and problem solving',
                description: `I think and act beyond my team's scope. I understand requirements (performance, data, ownership of feature) between different systems and can translate this into technical designs that consider technical and non-technical constraints and balance for business value, simplicity, mitigation of technical risks and performance at scale.`
            },
            {
                title: 'Customer focus',
                description: `<strong>Always put yourself in our customer's shoes</strong><br/>
                Everything starts with the customer. We always ask: are we delivering our customer promises? Are we creating memorable moments?<br/><br/>
                <strong>Solve something that matters</strong><br/>
                We start with an experience worth creating and then work backwards. To achieve desired outcomes, we focus on critical inputs that we can control.<br/><br/>
                <strong>Put purpose first, ego second</strong><br/>
                We stay humble and trust that our personal success comes from making the best decisions for the customer.`
            },
            {
                title: 'Leadership',
                description: `I have a high sense of ownership of the features built and supported by the team. I proactively help in the growth of juniors and peers in my team and beyond.`
            },
            {
                title: 'Entrepreneurship',
                description: `<strong>Start with "yes"</strong><br/>

                Optimism creates opportunities. We focus more on what can be gained than what can be lost. And while we start with yes, we don't necessarily end on yes. We separate real priorities from noise.<br/><br/>
                
                <strong>Act like an owner</strong><br/>
                
                "Ownership” is about being responsible to our customers, partners and colleagues, not about being entitled. We own our destiny and are not stopped by circumstances: Zalando is what you make of it.<br/><br/>
                
                <strong>Fly high and dive deep</strong><br/>
                
                We keep the big picture in mind. At the same time, we stay in touch with reality, always ready to dive into details when necessary without getting stuck there.<br/><br/>
                
                <strong>Don't meet because it's "Thursday"</strong><br/>
                
                The measure of a good day is accomplishment, not activity. We challenge our routines. We never justify our approach with “that's how things are done around here".`
            },
            {
                title: 'Communication and collaboration',
                description: 'I act as a representative of the team in alignments with other delivery teams, customers, or Engineering Managers. I seek and provide advice and criticism for technical approaches and methods, meaning I include others in discussions and designs.'
            },
            {
                title: 'Proficiency and expertise',
                description: `I work regularly with others to ensure the right software/engineering design approaches and methodologies are applied. I can assess the severity/impact of bugs quickly to help set priority and align this with Product and Engineering Management. I automate solutions and provide lasting/systematic fixes to issues and architecture deficiencies. I review and improve code/data/systems at the team and service level.`
            },
            {
                title: 'Operational excellence',
                description: 'I prepare and lead production readiness reviews for my team thus ensuring quality for operational artifacts (e.g. alerts, metrics, post-mortems, or playbooks). Through review and technical design, I own and plan for elements such as availability / quality / performance / security risks for my team and area.'
            },
        ]
    },
    {
        title: 'PROGR. LANGS.',
        description: '',
        skills: [
            {
                title: 'NodeJS',
                description: ''
            },
            {
                title: 'Python',
                description: ''
            },
            {
                title: 'Java',
                description: ''
            },
            {
                title: 'PHP',
                description: ''
            },
            {
                title: 'C#',
                description: ''
            },
            {
                title: 'C++',
                description: ''
            },
        ]
    },
    {
        title: 'DATABASES',
        description: '',
        skills: [
            {
                title: 'Postgres',
                description: ''
            },
            {
                title: 'MySQL',
                description: ''
            },
            {
                title: 'Oracle',
                description: ''
            },
            {
                title: 'MongoDB',
                description: ''
            },
            {
                title: 'DynamoDB',
                description: ''
            },
            {
                title: 'Redis',
                description: ''
            },
        ]
    },
    {
        title: 'PLATFORMS',
        description: '',
        skills: [
            {
                title: 'OSX',
                description: ''
            },
            {
                title: 'Linux',
                description: ''
            },
            {
                title: 'RaspberryPI',
                description: ''
            },
            {
                title: 'Arduino',
                description: ''
            },
            {
                title: 'Blackberry',
                description: ''
            },
            {
                title: 'PalmOS',
                description: ''
            },
            {
                title: 'Windows',
                description: ''
            },
        ]
    },
    {
        title: 'LANGUAGES',
        description: '',
        skills: [
            {
                title: 'Ukrainian',
                level: 'native'
            },
            {
                title: 'English',
                level: 'fluent'
            },
            {
                title: 'German',
                level: 'basic'
            },
            {
                title: 'Russian',
                level: 'native'
            },
        ]
    },
];
