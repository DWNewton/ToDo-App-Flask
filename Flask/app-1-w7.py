from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
     return 'Hello JTC!'

@app.route('/hello/<name>')
def hello(name):
     return render_template('hello.html', name=name)

@app.route('/about')
def about():
        return 'This is the about page.'

@app.route('/user/<username>')
def show_user_profile(username):
    return f'User {username}'

if __name__ == '__main__':
    app.run(debug=True)