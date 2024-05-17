# E-Commerce Backend

## Project Setup
### Step 1:
Go to the backend directory.
```
cd backend
```

### Step 2:
Create virtual environment and activate
#### Windows
Create
```
py -m venv my_virtual_env_name
```
Activate
```
my_virtual_env_name\Scripts\activate
```

#### Unix/MacOS
Create
```
python -m venv my_virtual_env_name
```
Activate
```
source my_virtual_env_name/bin/activate
```

[Reference](https://github.com/rkshaon/software-engineering-preparation/tree/master/languages/Python/000_environment)

### Step 3:
Install depencies
```
pip install -r requirements.txt
```

### Step 4:
Migrate
```
python manage.py makemigrations
```
This will make migrations for all the application models.

```
python manage.py migrate
```
This will migrate all the application models.


### Step 5:
Create super user
```
python manage.py createsuperuser
```
Then prompt will ask username, email, and password for the super user.

### Step 6:
Run the project
```
python manage.py runserver
```
This will run the project on `localhost:8000` or `127.0.0.1:8000` address. Open this address on your web browser.