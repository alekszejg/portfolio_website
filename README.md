DEVELOPMENT STAGE GOALS:
- Homepage: Profile description needs right padding (change left margin to padding)
- Homepage: Make better design of contact popup, ensure it fits
- Homepage: On desktop try increasing headers to 2xl
- Homepage: After font change raise height of desktop stack to height obtained from largest description
- Homepage: Reduce project previews a littlebit and add buttons to them
- Homepage: more formal profile image needed

- Interactive CV: Move education palces to the left so they were aligned like about me or contact details
- Interactive CV: General section needs to have an earlier breakpoint for margin/padding so headers didnt extend so much
- Interactive CV: Programming approaches with closed accordion need to have larger width like ones with opened accordions (list has limited width currently)
- Interactive CV: more formal profile image needed
- Interactive CV: simplify props logic and 'styling' object

- All Projects Page: Needs to have ultrawide support
- All Projects Page: Leftmost pixels of lamp icon in header need to have same left alignment as project grid
- All Projects Page: (Repeated) Project previews need better buttons styling

- Individual Project Pages: add mobile styling (aka vertical version but slightly more creative) to hero and overview sections
- Individual Project Pages: add gap between image and text for project features

- Portfolio Website Page: add text content for its UI/UX features
- Portfolio Website Page: add photos at the end when almost done

- (CLEANUP) Admin Page: data fetching inside choosePostCategory can be added as async util, while its JSX can be added into PostCreator. This is because functionality for obtaining all blogpost categories will be re-used to make client-side blogpost filters 

- (CLEANUP) Blogpost and Message components: make reusable util for converting UTC data into Local Time for reusability and shorter code in both pages


BEFORE PRODUCTION STAGE GOALS: 
- Ensure website compatibility with Chrome, Safari, Firefox (firefox styling differs for some reason)

- Ensure SSL certificates compatibility with Chrome, Safari, Firefox (firefox doesnt recognize Lets Encrypt)

- Ensure colors are as bright as intended on mobile systems and other computers, since changing my monitor contrast significantly changed how colors are shown 

- Nginx: calculate total HTTP requests per page and get rate limiting to work

AFTER PRODUCTION STAGE GOALS:
- Homepage: background art could use deeper 3D effect

- Navbar Logo: make lighter or change it completely

- Next-chat Project Page: needs to be made

- Log Management: do some research and start applying knowledge 

AFTER PRODUCTION STAGE (OPTIONAL GOALS): 
- Pages for specific blogposts should show posts from same category, if nothing [] then show recent posts

- Make post links as search params instead of dynamic routes (/blogposts/?post=ID) 

- View more button for blogposts can be replaced with load on scroll 






