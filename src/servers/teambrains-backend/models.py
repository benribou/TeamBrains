from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    userType = db.Column(db.String(50), nullable=False)
    nom = db.Column(db.String(100), nullable=False)
    prenom = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(300), nullable=False)
    typeDeDeveloppeur = db.Column(db.String(100), nullable=True)
    # Pour les technologies, puisqu'il s'agit d'une liste, nous devons gérer cela différemment.
    # Une approche consiste à stocker les technologies comme une chaîne de texte séparée par des virgules.
    technologies = db.Column(db.String(255), nullable=True)

    def set_password(self, password):
        # Ajoutez ici la logique pour hacher le mot de passe et stocker le hachage
        pass

    def check_password(self, password):
        # Ajoutez ici la logique pour vérifier le mot de passe
        pass
