from flask import Flask, render_template, request
app = Flask(__name__)

# Example URL http://127.0.0.1:5000/hello/John

@app.route('/')
def home():
     return 'Hello, JTC!'

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