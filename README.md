# HRnet

HRnet is a human resources management application developed using React and Vite.

## INSTALLATION

Before installing HRnet, make sure you have Node.js installed on your machine. You will also need to have Vite installed globally in order to run the development server. If you haven't installed Vite yet, you can do so by running the following command:

```bash
npm install -g vite
```

To install HRnet execute the following commands in your terminal:

```bash
npm install
npm run dev
```

This will install the necessary dependencies and launch the application in development mode. By default, HRnet runs on port 5173. You can access http://localhost:5173 in your browser to see HRnet in action.
If the port is already in use, Vite will automatically choose a different available port.

## USAGE

### Creating Employees
Fill out the form on the homepage by entering the first name, last name, date of birth, start date, address and department of the employees.
Click the "Save" button to save the employee's data.
You can also view the current list of employees by clicking the "View current employees" button.

### Viewing Employee List
On the "View current employees" page, you can see a paginated list of currently registered employees.
Use the search function to filter employees by their name or other information.
Click on the arrows in the table header to sort employees by column.

### Features
- Creating, viewing, and managing employees.
- Sorting and searching employees for easy navigation.

## INTEGRATING React Ball Modal
To enhance the user experience, HRnet now includes the React Ball Modal component for modal dialogs.

### Installation
HRnet integrates with React Ball Modal, a customizable modal component for React applications. For detailed information on how to use React Ball Modal, please refer to its README.
You can install it via npm:

```bash
npm install react-ball-modal
```

### Usage
Once installed, you can import and use the Modal component from react-ball-modal in your HRnet project:

```jsx
import Modal from 'react-ball-modal/src/components/Modal'

// Example usage
<Modal isOpen={isOpen} onClose={handleCloseModal} message="Choose your content!" />
```

The Modal component provides a customizable modal dialog with a sleek ball design, enhancing the visual appeal of your application.

## LICENSE
HRnet is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.