Run client and server at the same time

cd client
create .env file:
VITE_GOOGLE_MAPS_API_KEY={YOUR_API_KEY}
VITE_GOOGLE_MAPS_MAP_ID={YOUR_MAP_ID}
npm install
npm run dev

cd server
pip install flask flask-cors python-dotenv requests
python main.py
