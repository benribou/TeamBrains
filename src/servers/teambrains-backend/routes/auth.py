from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import generate_password_hash
from models import db, User  # Importez db ici aussi

# Créez un Blueprint
auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    current_app.logger.info(data)
    
    # Vérifiez si l'email existe déjà
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({'message': 'Email déjà utilisé'}), 400
    
    hashed_password = generate_password_hash(data['password'])
    
    # Préparez les technologies comme une chaîne séparée par des virgules
    technologies_str = ','.join(data['technologies']) if 'technologies' in data and data['technologies'] else ''
    
    # Créez une nouvelle instance de l'objet User
    new_user = User(
        userType=data['userType'],
        nom=data['nom'],
        prenom=data['prenom'],
        email=data['email'],
        password_hash=hashed_password,
        typeDeDeveloppeur=data.get('typeDeDeveloppeur', None),  # Utilisez .get pour les clés qui pourraient ne pas exister
        technologies=technologies_str
    )
    
    # Ajoutez le nouvel utilisateur à la base de données
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({'message': 'Utilisateur enregistré avec succès'}), 201
    except Exception as e:
        db.session.rollback()
        current_app.logger.error('Erreur lors de l\'enregistrement de l\'utilisateur : %s', e)
        return jsonify({'message': 'Erreur lors de l\'enregistrement de l\'utilisateur'}), 500

@auth.route('/login', methods=['POST'])
def login():
    # Logique de connexion
    return jsonify({'message': 'Connecté avec succès'})
