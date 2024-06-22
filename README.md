# My Portfolio Site
## About
### Summary
I want to be able to bring my ideas to the world quickly and at low cost, so I'm building myself a portfolio site in the MERN stack. This project will give me a custom platform to share information with the world. Simultaneously, I'm developing the skills I need to rapidly prototype and ship future software products.

### Status
I'm now **moving my site to Next.js.** The framework I started on, Create React App, has been deprecated and was breaking my builds.

Once I'm finished rebuilding, I'll move on to  **Stage 2.1**: "Implement a MERN backend to retrieve data for the Projects and Blogs pages."

### Goals
My ambitions for this project are to:
1. Create a place where I can share my projects, research, and knowledge with interested people.
2. Develop strong fundamental web development skills, and explore interesting advanced topics.
3. Hone my project management skills for self-directed projects. I want to perform self-directed machine learning research for my next project, so it's important to learn highly efficient, structured workflow practices.
4. Inspire other students to pursue their own self-directed learning.
5. Demonstrate a technical competency to future employers.

### Technologies
I am using the MERN stack for this project. I chose this stack because it has
- Strong support from large companies, giving it a long expected lifetime.
- High-quality learning resources on Coursera, my platform of choice.
- Ease of use and high development velocity.
- Strong demand in the global job market.
- Extensive package support.

| Name          | Usage             | Implemented yet?  |
|:-             |-                  |:-:                |
| React         | Frontend          | Yes               |
| Next.js       | React Framework   | No                |
| Bootstrap     | Styling           | Yes               |
| Node JS       | Backend           | Yes               |
| Express JS    | Backend API       | No                |
| MongoDB       | Database          | No                |

### Development cycle
I'm following the Waterfall development cycle for a couple of reasons:
1. I've followed Agile at Chubb, UniMate, and in several uni courses, but I have little experience with Waterfall. I'd like to experience the benefits and drawbacks of both.
2. I don't expect the project requirements to evolve much with user feedback.
3. I don't want to ship a public-facing representation of myself if it's not finished.
4. I want to give myself time to explore, evaluate, test, and implement these unfamiliar technologies. Efficiency is not a primary goal this time around.

## Project Plan
### Stage 1: Setup, Design and Placeholder Implementation
1. Find some frontend design inspiration. ✅
2. Build the app structure. ✅
3. Draft the app's key pages and components: ✅
    - Landing page. ✅
    - Header component. ✅
    - Footer component. ✅
    - Projects page. ✅
    - Contact page. ✅
4. Add internal navigation/routing using React Router. ✅
5. Complete some basic interface improvements: ✅
    - Write example content for the Blog page and Contact page. ✅
    - Add placeholder shapes, logos, and links to all components. ✅
6. Take blog notes on the development process, particularly focusing on: problems I've faced during development; how I've overcome them; and what I learned through these challenges. ✅
7. Write a formal project plan and README. ✅
8. Refactor my Stage 1 work, to implement
    - SOLID design principles. ✅ - This will require more reviews as we go. It looks OK for now.
    - Newest, minimal Bootstrap syntax. ❌ - Decided not to, for now. It would obscure the interface I am programming to.
    - Self-documenting, or docstring'd, code. ✅
    - Particularly, refactor:
        - Blogs. ✅
        - Contact. ✅
        - Header. ✅
        - Footer. ✅
        - Landing. ✅
        - Nav panel. ✅
        - Projects. ✅

### Stage 2: Backend and Content Addition
1. Design and build a MERN backend to retrieve data for the Projects, Blogs, and Email List pages.
    - Design the databases. ✅
        - Specify the database requirements. Justify your choices. ✅
        - Choose a technology. Justify your choice. ✅
        - Design a NoSQL database structure for user services. ✅
        - Design a second NoSQL database structure for logging. ✅
    - Design the backend.
        - Design the API using the ExpressJS framework on NodeJS, following the database structure and
            - Observer pattern for user subscription and termination.
            - Chain of Responsibility pattern for logging.
        - Write failing unit tests for the API.
        - Write failing integration tests.
            - Backend-server interaction.
            - Routing.
            - Error handling.
            - Logging.
        - Implement the API using NodeJS.
            - Mock up in PostMan.
            - Make unit tests pass.
        - Implement the server.
            - Upload test data.
            - Make integration tests pass.
    - Secure the backend.
        - Research backend security issues.
        - Design security features.
        - Implement security features.
2. Add data to the Projects database.
    - UniMate.
    - This site.
    - Sumobots.
3. Add to the Blogs database.
4. Add a Professional Experience page.
    - Embed a non-scrapable CV, or LinkedIn.
    - Link my GitHub.
5. Take blog notes on the development process so far.

### Stage 3: User Interface and User Experience
1. You're (kind-of) half-way through! Make a social media post about the development process so far.
2. Implement a responsive interface.
3. Order a professional design review (cowboy-themed!).
4. Add a bug reporting feature.
5. Add a search feature to the Blogs and Projects pages.
6. Add a blog mailing list, including
    - User contact data collection and storage.
    - Simple mailing list mass-contact method.
7. Implement the professional design review's recommendations.
8. Create a simple, interesting animation for the landing page.
9. Start promoting the site launch on social media.
10. Add user interactivity to the projects page, including
    - Embedded Jupyter notebooks.
    - System diagrams with onHover popouts.
    - Algorithm demonstrations, akin to the phone apps I have.
11. Take blog notes on the development process so far.

### Stage 4: Deployment and Maintenance
1. Set up a basic monitoring system.
2. Set up a basic analytics system.
3. Promote the project some more on social media.
4. Set up CI/CD, including
    - Use generative AI to write Jest tests.
5. Review security and patch any vulnerabilities.
    - Get a friend or freelancer to pen test the site.
6. Promote the launch on social media.
7. Buy a domain (see GitHub deals) and hosting service.
8. Go live.
    - Announce the launch on social media.
    - Promote user-interactive elements.
9. Write a capstone blog about the development process, including
    - How I like the new technologies I've used.
    - What I did well.
    - What I could do better.
    - What are my next steps with this project.
    - What did I want to do but skipped, and why.

## References
Thank you to the authors and maintainers of these resources!

### Courses
https://www.coursera.org/professional-certificates/meta-front-end-developer

### Optimisation
https://www.linkedin.com/advice/0/how-can-you-optimize-mern-stack-application-performance-mzdhf

### UI
https://www.wix.com/ (for prototype UI design inspiration)



Thanks for reading! 🤠

©️ Stephen Elliott 2024. All rights reserved.
