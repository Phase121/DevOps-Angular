# DevOps_Angular

This is a simple Angular application that displays the current URL and port on the home page.

## Features

- Displays the current URL and port.
- Easy to set up and run.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (install globally using `npm install -g @angular/cli`)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Phase121/DevOps_Angular.git
cd DevOps_Angular
```

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Running the Application

To run the application, use the following command:

```bash
ng serve
```

By default, the application will run on `http://localhost:4200`.

### Changing the Port

If you want to run the application on a different port, you can specify the port using the `--port` option. For example, to run the application on port 3000, use:

```bash
ng serve --port 3000
```

### Accessing the Application

Open your web browser and navigate to `http://localhost:4200` (or the port you specified) to view the application.

## Project Structure

```
DevOps_Angular/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Conclusion

You now have an updated `README.md` file for your project named `DevOps_Angular`. This documentation will help users understand how to set up and run your Angular application. If you have any further questions or need additional modifications, feel free to ask!
