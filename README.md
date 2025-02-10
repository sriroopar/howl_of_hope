# "Howl Of Hope" by Mystic 4ce

## Inspiration

As international students working as student employees in dining halls, we encounter disposal of excessive food - consumable food on a regular basis. We have also come across peers among us who have faced food insecurities during their study. This derives the inspiration for our project - we want to ensure that students are aware of all resources that the University provides and channelize usage of excessive food resources. Our goal is to progress towards United Nation's goal of eradicating food insecurity by 2030.

## What it does

### Student Perspective

* Our app allows students to maintain a anonymous profile, similar to reddit. It will allow them to post about their food findings and different offices of the university to share useful information about food resources across university. 

* It also displays the available food pantry products with longer shelf life that they access from a source like Feed the Pack.

* We are planning to connect with dining halls to manage everyday excess of food, and let volunteers pack the food and maintain inventory of perishable food stock for temperature maintained, university approved time windows and distribute it to users of the app who claim the food based on their decided limits of the week. (e.g. : A student with Pack Essential plan, will be able to access this dining hall food only 2 times a week, while a student with SNAP can access this resource 4 times a week).

* An option to keep track of their Pack Essentials pass for meal plan is also provided.

### Volunteer Perspective

*  Peers with interest in volunteering will fill out a form that will be evaluated using an LLM agent in order to pick out volunteers with the best interest for our cause.
* Volunteers will record availability of selected menu items and distributing it to students claiming them.
*  They can incentivize their volunteering hours, and pay their reward forward or use them for their interest.

## Dining Administration Perspective

* Admin users will be able to alter inventory items, update any new additions to the daily menu.
* They can also view user feedback to improve this process.

## How we built it

1. For student status and university association verification, we use firebase authentication (SSO)Login using ".edu" account.
2. We trained the RAG set up Lang Chain agent with data across dining halls like menu options, pantry inventory and user database is maintained privately across each user with information like Nutrition Plan n, dietary restrictions and other preferences.
3. MongoDB is used for maintaining all of the above data within a database, that can be updated across various users with various restrictions.
4. Express and React.js was used to set up the web interface for the project deployment.

## Challenges we ran into

* Defining the scope of prototyping within 24 hours was a hiccup that we had to tackle. It helped us to become close as team while discussing and assigning priorities across various implementations and approaches.
* We had incorporated various components which each required stand alone dependencies that's needed various requirements. While collaborating, reproducing the environment took a considerable amount of time as individual components.

## Accomplishments that we're proud of

* We are glad to be able to serve for such a cause that will positively impact student community across various universities.
*  As a team, we were able to successfully work in a collaborated environment across GitHub, and work on individual components using the tech stack that we are aware of and across other team mates interests.
* We have set up a web page, a chat assistant powered by OpenAI (Generative Agent), a cloud hosted database on MongoDB Atlas for this project.

## What we learned

* We are more familiar with working in collaborative environments that require different dependencies.
* We learned a lot of things about food insecurity plans effectively making us provide more information on that to our app users.

## What's next for Mystic 4ce
 We look forward to pitch this idea to our University's Essentials program in order to make the app available for people facing food insecurities to leverage.

# Team Members

- Saikrishna Rajaraman
- Chandana Mallu
- Sri Roopa
- Bala Logesh Sudalaimuthu Pandian

# Setup and run application

## Frontend

- cd frontend
- npm install
- npm run dev

## Backend

- cd backend
- npm install
- nodemon index.js

## Chat Bot

- cd chat_agent
- python3 -m venv venv
- source venv/bin/active
- pip3 install -r requirements.txt
- streamlit run chat_agent.py

# Testing the application

## Frontend

- Open http://localhost:5173 on a browser

## Backend

- Open http://localhost:3000 on a browser

## Chat Bot

- Open http://localhost:8501 on a browser
