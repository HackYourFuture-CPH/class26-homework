# Note Taker

## Initialization

1. [Create React App](https://legacy.reactjs.org/docs/create-a-new-react-app.html)
2. [Setup Tailwind CSS](https://tailwindcss.com/docs/installation)
3. Add Font Awesome icons to HTML preamble: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`
4. Edit HTML title and Favicon

## Components and styles

### Home page (pages/Home.jsx)

Background (div): flex h-screen flex-col items-center px-8 py-16 bg-gray-100

Header (h1): text-5xl font-bold text-indigo-600 mb-6

Content (p): text-lg text-gray-800 max-w-md text-center mb-8

Link to /notes: bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition

### Navbar (components/Navbar.jsx)

Background (div): flex justify-between gap-10 items-center bg-[#fbbd04b0] py-4 px-3 text-white

Header (h4): font-mono font-bold text-3xl

Header icon (i): fa fa-sticky-note

### Search Bar (components/Search.jsx)

Search bar has a callback function to handle the change of the search text

Background (div): flex gap-3 bg-[#e9e9e9] rounded-lg p-2 items-start

Search icon (i): fa fa-search

Text input (input type="text"): bg-transparent w-full outline-none font-poppins text-sm

### Notes Page (pages/Notes.jsx)

Notes page manages the state for the notes and search bar.

Background (div): flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto

Search bar component

Create note component

Notes grid (div): grid md:grid-cols-2 grid-cols-1 gap-4

If there are notes, display them here. If not, display the following:

No notes added text (div): empty-notes-wrapper

### Note (components/Note.jsx)

A note has an id, text, date and a callback function to handle deleting the note

Background (div): bg-[#fef68a] rounded-lg p-3 flex flex-col shadow-lg shadow-gray-600/10

Note text (h5): note-title min-h-[130px] font-poppins

Note footer (div): flex gap-10 justify-between items-center

Note date (small): font-roboto

Delete icon: fa fa-trash-o

### Create Note (components/CreateNote.jsx)

Create note component has a callback function that manages the addition of the note

Background (div): bg-[#67d7cc] rounded-lg p-3 shadow-lg mt-2

8 x 10 Text Area (textarea): bg-transparent placeholder-gray-700 text-gray-800 w-full outline-none font-poppins

Footer (div): flex gap-10 justify-between items-center font-roboto

Characters remaining (small)

Save button (button): save

### App (App.js)

Router

Navbar

Routes

Route path to /notes goes to element Notes

Route path to / goes to element Home

Route path to * goes to element `<h1>404 Not Found</h1>`
