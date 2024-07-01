# ToDo-App-Flask
 Assignment Repo for JTC TechPath S'24

 This assignment is to incorporate two new elements to the "To Do" list
 application/webpage we went over in class this week.

 Based on the breakout room discussion, I have elected to incorporate
 the following two new functions:

1). The 'Nuke It From Orbit' Button:
 A "Delete All!" button which will entirely clear the To Do list
 with the following caveat:
 I am doing this without iterating over each list item.
 But, I am also checking to make sure the process completes
 correctly because, the internet being what it is,
 sometimes "Things" happen.
 So, there's a little error handler that will return
 if the process, for whatever reason, doesn't
 complete properly or as expected.

2). A Light Side / Dark Side appearance toggle:
I first became fascinated with the "transition" CSS function to go from one color to another. That's just cool!
That got me thinking...
All too often in the Zoom meetings, I have noticed that
there is a distinctive line between those who prefer an
interface with a "Light" appearance and those who prefer
one with a "Dark" appearance.
This is an option I wanted to include as, I am not any
younger and I experience eyestrain when looking at GUI's
with brighter elements...kind of like a slow retinal burn-in
that leads to fatigue and unneeded stress.

So, I did some research on what that would take to incorporate...
...it's kind of a pain in the butt.

If you have the 'todo' app running from the in-class session from
Thursday, June 27th (W7D4), you only have to make the following changes/updates/additions:

Setup:
Changed files:
- This file: 'README.md' located in the root path of the repo.
- 'todo.py' located in the /Flask/ path of the repo.
- 'styles.css' located in the /Flask/static/ path of the repo.
- 'index.html' located in the /Flask/templates/ path of the repo.

The only addition(s) for the project from the base
project files used in the classroom session are:
- an optional 'favicon.ico' in the root directory to stop Python/Flask from complaining with a 404 that there is no favicon.ico file found.
- the 'script.js' file, which is saved in the '/Flask/static/' directory/folder


Project Report:
I had to make changes to just about all of the files involved with serving up the data that have been crafted this past week.
The 'todo.py' adds a new path for nuking the list contents.
I also had to create a new JavaScript file (/static/script.js) to incorporate a feature I later wanted to allow the toggle button to change what it reads instead
of always displaying something like "Toggle Dark Mode."
 - The default appearance is "Light Mode" and is basically the HTML/CSS
 that we built these files with.
 - In order to change the appearance from "Light Mode" to "Dark Mode", I
 simply needed to incorporate a button.
 I considered making the mode switch an "On Hover" type toggle and then would've hidden a whole bunch of them throughout the page, but that's just too much work for me this week, and it would have been more annoying than creative.

 Changes made from original files:

 Python (/Flask/todo.py)
 - Added a route ("/delete_all") and the function for the todo list clearing button to work.
 
 CSS (/Flask/static/styles.css)
 - Adding the Delete All! button was a simple process. I copied the basic code from the Submit ("Do The Thing!") button for the To Do List and came up with my preferred colors for it. That's it.

 - In order to make the "Light Mode" / "Dark Mode" button work, I created a whole new set of CSS styles for the page to reflect the appearance of most of the screen elements. (Thankfully, this was accomplished mostly through copy/paste operations and consistent renaming.)

HTML (/Flask/templates/index.html)
- Incorporating the "Delete All!" button was more of a pain than I thought it would be. I had to end up going into the python code and creating a new route for the button to operate properly. I had initially thought I might be able to "cheat" it and just make the button initialize a new blank list...but the page behaved unpredictably, sometimes keeping what I suppose was a cached copy or something and not showing a blank list or entries showing up or not showing up after hitting the "Do The Thing!" button.
It didn't work.
So, instead of trying to make the "Create" of CRUD operate as a "Delete", I caved in and went with a proper "Delete" method.

- The Light Mode / Dark Mode process was actually pretty easy - In addition to the extra button in the HTML, I also wanted to have the button change its text, so had to include a simple JavaScript script tag pointing to the script.js file in the static folder/dir.
I discovered the 'static' folder is where you should put files such as the css and any jscript or helper html files. I'm not sure all the reasons why, but the /static path is treated somewhat differently than the stuff in the base Flask directory.

script.js
This is the only file I added to the project (aside from a "favicon.ico" in the root path), and is only there to make the Light/Dark mode button update its text from "Dark Mode" to "Light Mode" whenever the mode is in opposition to it.
I had to consult with ChatGPT on how to get this formatted in a cleaner manner than I had started with. My first few attempts weren't working. I knew I wanted/needed to implement the toggle method but was unable to come up with a clean way to do it in the time that I had to complete the assignment. ChatGPT gave a pretty direct solution, after I constrained it to stop generating differently named variables in the .js code every time I prompted it.