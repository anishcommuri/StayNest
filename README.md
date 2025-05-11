# StayNest 🏡

**StayNest** is a modern web application built using **Angular** for the frontend and **Node.js** for the backend. It is designed to simplify and streamline the process of booking homestays and vacation rentals.

The project integrates **Razorpay** for secure online payments and is deployed using **GitHub Pages** for the frontend and **Render** for the backend.

## 🌟 Features

- Browse and book beautiful homestays with ease
- User-friendly interface with responsive design
- Secure online payments using Razorpay
- Seamless integration between Angular and Node.js
- RESTful API architecture
- Hosted frontend and backend for live use

## 🚀 Live Demo

- **Frontend (Angular)**: [StayNest Frontend](https://anishcommuri.github.io/StayNest/)
- **Backend (Node.js)**: [StayNest Backend](https://staynest-iejd.onrender.com)

## 🛠️ Tech Stack

- **Frontend**: Angular, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Payment Integration**: Razorpay
- **Database**: (Pluggable — currently none in use)
- **Deployment**:
  - Frontend: GitHub Pages
  - Backend: Render

## 📂 Project Structure

staynest-angular/ → Angular frontend application
staynest-backend/ → Node.js Express backend server


## 🧑‍💻 Getting Started

### Prerequisites

- Node.js and npm
- Angular CLI
- Git

```bash
### Clone the Repository
git clone https://github.com/YOUR-USERNAME/StayNest.git

cd StayNest
--
Frontend Setup (Angular)
cd staynest-angular
npm install
ng serve
--
To build for production:
ng build --configuration production --base-href "https://YOUR-USERNAME.github.io/StayNest/"

Then publish using:
npx angular-cli-ghpages --dir=dist/staynest-angular

Backend Setup (Node.js)
cd staynest-backend
npm install
node server.js
Or use Render for deployment (as already configured).

```
💳 Payment Integration (Razorpay)
The app creates orders via the /create-order endpoint on the backend.

Razorpay Checkout is integrated in the Angular component using the generated order_id.

Test credentials are used and can be updated to live ones for production use.

🧾 API Endpoints
Method	Endpoint	Description
POST	/create-order	Creates a Razorpay order

🙌 Contributors
👩‍💻 Main Contributor
SakshiK91

👨‍💻 Sub Contributor
ashishcommuri

We thank all contributors for their valuable efforts!

📜 License
This project is licensed under the The Unlicense License - see the LICENSE file for details.
