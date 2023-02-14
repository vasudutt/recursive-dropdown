# Recursive Dropdown - Zorp Assignment

Requirements:

- Build a recursive dropdown using the provided JSON structure.
- Include a save button that is only enabled when a value is selected in the last dropdown.
- When the user selects all dropdowns and clicks the save button, print all selected values in the correct order.
- If using a database to store the JSON and fetching it through a backend API, additional points will be awarded.

Solution :

The project is set up to use json-server as a proxy backend instead of an actual backend. This means that the data is being served from a local `data.json` file.

To run the project, you can use the command `npm run dev` which will not only start the front-end server but also start the json-server. This command is set up in the package.json file and will allow you to run the project on your local machine.

Once the server is up and running, you should be able to view the recursive dropdown on http://localhost:5173 and interact with it as per the instructions provided.
