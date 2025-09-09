

#  Parcel Management System (Angular Frontend)

The **Parcel Management System** is a web application built using **Angular** that provides parcel booking, tracking, history management, and officer-side controls for handling booking requests and pickup/drop operations.  
The system is designed with a clean, responsive UI and role-based navigation for **Customers** and **Officers**.

---

##  Features

###  Customer Module
- **Home Dashboard**: Entry point with navigation to all customer services.
- **Booking Service**: Allows customers to book a new parcel delivery.
- **Tracking**: Customers can track parcels by entering a tracking ID.
- **Booking History**: Displays all past bookings in a tabular format.
- **Support**: Quick link to contact support.

### Officer Module
- **Home Dashboard**: Entry point with officer-specific navigation.
- **Tracking**: Officers can track parcels and update status.
- **Booking History**: View all past bookings across customers.
- **Pickup & Drop Management**: Officers can manage parcel pickups and drop-off operations.
- **Booking Requests**: Officers can see new booking requests and approve/reject them.

---

##  Tech Stack

- **Frontend Framework**: [Angular 18+](https://angular.io/) (Standalone Components)
- **Styling**: CSS (custom responsive styles)
- **Forms Handling**: Angular FormsModule
- **Routing**: Angular Router
- **State Management**: Component-level state (dummy data for now)
- **Build Tool**: Angular CLI

---

##  Project Structure:



src/  
├── app/  
│ ├── components/  
│ │ ├── customer-home/  
│ │ │ ├── customer-home.ts  
│ │ │ ├── customer-home.html  
│ │ │ └── customer-home.css  
│ │ ├── booking-customer/  
│ │ ├── tracking-customer/  
│ │ ├── booking-history-customer/  
│ │ ├── officer-home/  
│ │ ├── tracking-officer/  
│ │ ├── booking-history-officer/  
│ │ ├── pickup-drop/  
│ │ └── booking-requests/  
│ ├── navbar-customer/  
│ │ ├── navbar-customer.ts  
│ │ ├── navbar-customer.html  
│ │ └── navbar-customer.css  
│ ├── navbar-officer/  
│ │ ├── navbar-officer.ts  
│ │ ├── navbar-officer.html  
│ │ └── navbar-officer.css  
│ └── app.routes.ts  
├── assets/  
├── index.html  
└── main.ts


---

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (installed globally)

### Clone Repository
```bash
git clone https://github.com/your-username/parcel-management-system.git
cd parcel-management-system
````

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
ng serve
```

App will be available at **`http://localhost:4200/`**

---

##  Components Overview

### Customer-Side Components

- `CustomerHome` – Dashboard with links
    
- `BookingCustomer` – Booking service form
    
- `TrackingCustomer` – Parcel tracking with result display
    
- `BookingHistoryCustomer` – Table of past bookings
    

### Officer-Side Components

- `OfficerHome` – Officer dashboard
    
- `TrackingOfficer` – Track and update parcel status
    
- `BookingHistoryOfficer` – All customer booking records
    
- `PickupDrop` – Manage parcel pickups and drop-offs
    
- `BookingRequests` – Approve/reject booking requests
    

###  Shared Components

- `NavbarCustomer` – Blue navigation bar for customer routes
    
- `NavbarOfficer` – Green navigation bar for officer routes
    

---

##  Sample Data

Currently, the application uses **hardcoded sample data** for:

- Tracking Results
    
- Booking History
    
- Booking Requests
    
    
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
