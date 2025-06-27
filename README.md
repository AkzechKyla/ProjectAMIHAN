## Installation & Setup

1. Clone the repository
```
git clone git@github.com:AkzechKyla/ProjectAMIHAN.git
```
```
cd ProjectAMIHAN
```
2. Setup frontend
```
cd client
```
3. Create `.env` file in the `client` directory
```
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GOOGLE_MAPS_MAP_ID=your_google_maps_map_id
```
4. Install dependencies and start the development server
```
npm install
```
```
npm run dev
```
5. Setup backend
```
cd server
```
6. Activate virtual environment
```
python -3.10 -m venv venv
```
```
venv\Scripts\activate
```
7. Install dependencies
```
pip install -r requirements.txt
```
8. Start server
```
python main.py
```
