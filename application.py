from flask import (
    Flask,
    redirect, 
    render_template,
    request,
    session, 
    url_for
)
from werkzeug.utils import redirect

app = Flask(__name__)
app.secret_key = 'somesecretkeythatonlyisshouldknow'

class User:
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __repr__(self):
        return f'<User: {self.username}>'

users = []

users.append(User(id=1, username='Fabricio', password='password'))
users.append(User(id=2, username='Arian', password='secret'))

@app.route('/login', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        session.pop('user_id', None)

        username = request.form['username']
        password = request.form['password']

        user = [x for x in users if x.username == username][0]
        if user and user.password == password:
            session['user_id'] = user.id
            return redirect(url_for('profile'))

        return redirect(url_for('login')) 

    return render_template("index.html")

@app.route('/profile')
def profile():
    return render_template('Formulario.html')

@app.route('/cv')
def curriculum():
    return render_template('Curriculum_Vitae.html')