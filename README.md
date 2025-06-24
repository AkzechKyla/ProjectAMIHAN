cd client
create .env file:
VITE_GOOGLE_MAPS_API_KEY={YOUR API KEY}
VITE_GOOGLE_MAPS_MAP_ID={YOUR MAP ID}
npm install
npm run dev

cd server
create .env file:
GOOGLE_MAPS_API_KEY={YOUR API KEY}
pip install flask flask-cors python-dotenv
python main.py
