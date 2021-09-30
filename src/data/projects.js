const projects = {
    featuredProjects: [
        {
            id: '0',
            title: 'MERN Social Media',
            thumbnailPath: './images/social media thumbnail.png',
            bulletPoints: [
                "REST Api with Node Express & MongoDB/Mongoose",
                "Modern React with routing, hooks, context, and some material-ui",
                "Real-time messenger with Socket.io",
                "Encryption & security with bcrypt and helmet",
                "Http requests with axios and modern timestamps with timeago.js"
            ],
            videoPath: '../videos/social media demo.mp4',
            repoUrl: 'https://github.com/DanielMatu/Social-Media',
            website: 'https://dmatu-social-media.herokuapp.com'
        },

        {
            id: '1',
            title: 'React Tarot',
            thumbnailPath: './images/react tarot thumbnail.png',
            bulletPoints: [
                "Modern React with routing, hooks & context Api",
                "Node & Firebase backend & authentication with JWT",
                "SASS/SCSS precompiler",
                "Webpack used with several webpack plugins (e.g. DefinePlugin)",
                "Secure API key management with dotenv "
            ],
            videoPath: '../videos/tarot%20preview.mp4',
            repoUrl: 'https://github.com/DanielMatu/React-Tarot',
            website: 'https://dmatu-react-tarot.herokuapp.com'
        }
    ],
    projects: [
        {
            id: '2',
            title: 'Expensify',
            thumbnailPath: './images/expensify thumbnail.png',
            bulletPoints: [
                'React with Redux',
                'Jest & Enzyme Testing',
                'Node & Firebase back end'
            ],
            videoPath: '../videos/expensify preview.mp4',
            repoUrl: 'https://github.com/DanielMatu/react-expensify-app-udemy-',
            website: 'https://dmatu-react-expensify-udemy.herokuapp.com/'

        },
        {
            id: '4',
            title: 'Node Chat App',
            thumbnailPath: './images/chat app thumbnail.png',
            bulletPoints: [
                "Real-time chat room with Socket.io ",
                "Deployed with Heroku",
                "Version control with GIT and source tree",
                "Runs on Express Node server"
            ],
            videoPath: '../videos/chat app preview.mp4',
            repoUrl: 'https://github.com/DanielMatu/node-chat-app',
            website: 'https://dmatu-chat-app.herokuapp.com/'
        },
        {
            id: '5',
            title: 'Node Weather App',
            thumbnailPath: './images/weather app thumbnail.png',
            bulletPoints: [
                'Integrated external Apis (Mapbox & Weatherstack)',
                'Runs on Express Node server',
                'Managed views with handlebars.js'
            ],
            videoPath: '../videos/weather preview.mp4',
            repoUrl: 'https://github.com/DanielMatu/nodejs-weather-website-udemy',
            website: 'https://dmatu-weather-application.herokuapp.com/'
        },
        {
            id: '3',
            title: 'Task Manager (API ONLY)',
            thumbnailPath: './images/favicon.ico',
            bulletPoints: [
                'Back end testing with Supertest',
                'REST Api with express node ',
                'JWT Authentication'
            ],
            videoPath: 'none',
            repoUrl: 'https://github.com/DanielMatu/task-manager-api'
        }
    ]
}

module.exports = projects