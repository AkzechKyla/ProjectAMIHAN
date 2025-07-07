
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="client/src/assets/Logo.png" alt="Logo" height="80">
  </a>

  <h3 align="center">Project AMIHAN</h3>

  <p align="center">
    Web Application for Project AMIHAN: Adaptive Model for Inundation Height Analysis using Neuro-Fuzzy
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
![image](https://github.com/user-attachments/assets/ed59001e-6290-405b-a053-842fe961f68f)

**Project AMIHAN** is a web application that implements an AI model to predict flood heights in the Philippines—a country highly susceptible to flooding.

The goal is to make flood height predictions accessible and user-friendly through a web interface. This project was also developed as a final requirement for our Introduction to AI course.

### Built With

* React.js
* Python Flask
* Google Maps API
* Open Elevation API
* Open Meteo API

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- **Node.js** and **npm**
- **Python 3.10 – 3.11**

### Installation
Clone the repo:
   ```sh
   git clone git@github.com:AkzechKyla/ProjectAMIHAN.git
   cd ProjectAMIHAN
   ```

### Configuration
Create a `.env` file in the `client` folder with:
   ```ini
    VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    VITE_GOOGLE_MAPS_MAP_ID=your_google_maps_map_id
   ```

### Running the App
1. Frontend
   ```sh
   cd client
   npm install
   npm run dev
   ```
2. Backend
   ```sh
   cd server
   pip install -r requirements.txt
   python main.py
   ```

<!-- USAGE EXAMPLES -->
## Usage
1. Open the frontend in your browser.
2. Click a location on the map.
3. Input or verify:
   * Latitude, Longitude
   * Elevation
   * Precipitation
4. Click the "Submit" button to see the results:
   * Flood height level prediction
   * Risk level & category
   * Elevation & precipitation level

![image](https://github.com/user-attachments/assets/8353939c-f3c8-4acb-b171-fef1777936ef)
![image](https://github.com/user-attachments/assets/fd34666e-b962-43fe-8110-5d33406f76de)

<!-- ROADMAP -->
## Roadmap

- [ ] Refactor code
- [ ] Add search bar
- [ ] Add PAGASA Rainfall Advisory
- [ ] Add reset button
- [ ] Add loading screen

### Contributors:
<table border="1">
  <tr>
    <th>Name</th>
    <th>Role</th>
    <th>Contributions</th>
  </tr>
  <tr>
    <td><a href="https://github.com/akzechkyla">AkzechKyla</a></td>
    <td>Full-Stack Developer</td>
    <td>Developed both frontend and backend systems, integrated third-party APIs, and handled application architecture.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/kylavaloria">Kyla Valoria</a></td>
    <td>UI Developer</td>
    <td>Designed the overall user interface and created the landing page.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/lloydlegaspi">John Lloyd Legaspi</a></td>
    <td>AI Model Developer</td>
    <td>Researched, designed, and implemented the Neuro-Fuzzy AI model that predicts flood heights based on geographical and meteorological data inputs.</td>
  </tr>
</table>
