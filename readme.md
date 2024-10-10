# Developer Technical Test

The project has two folders one for the frontend and one for the backend, you'll need 2 terminals, one for each folder, to run them you can use:

## FrontEnd
To run the frontend you need to add the `.env` file following the `.env.example` file 

Inside frontend folder install the dependencies

    pnpm install

Then just run

    pnpm run dev

## Backend

To run the frontend you need to add the `.env` file following the `.env.example` file

  inside the backend folder install the dependencies

    pnpm install

  Then just run 
   
    pnpm run dev

Happy coding :)

Note: I had a problem with the JSON, I don't know if it was intended or not, but if I render the original JSON it has no changes matching any of the string (originalTextBrief or updatedTextBrief) so I ended up editing the changes to match the strings so it will make sense... (Fixing the spaces to make it work)

I tried different methods to make it with coding but it was not reliable to work with other JSONs in case of you wanted to check with other files so my solution was to fix the strings...