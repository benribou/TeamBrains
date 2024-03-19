from flask import Flask
from flask_cors import CORS
import logging
from models import db, User  # Importez db ici aussi
from routes.auth import auth

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
app.register_blueprint(auth, url_prefix='/auth')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://teambrains:teambrains@database/teambrains'

db.init_app(app)

with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
