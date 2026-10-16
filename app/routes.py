from flask import Blueprint, render_template, request

routes = Blueprint('routes', __name__)


@routes.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@routes.route('/submit', methods=['POST'])
def enviar():
    nombre = request.form.get('nombre', '').strip()
    interes = request.form.get('interes', '').strip()

    
    if not nombre or not interes:
        return render_template('index.html', error='Completa tu nombre y selecciona un interés.'), 400

    return render_template('gracias.html', nombre=nombre, interes=interes)
