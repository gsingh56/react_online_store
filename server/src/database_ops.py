import mysql.connector
from mysql.connector import Error
HOST = 'localhost'
DATABASE_NAME = 'ecommerce'
USER = 'root'
PASSWORD = 'PindDalla1?'


def get_users():

    try:
        connection = mysql.connector.connect(host=HOST,
                                             database=DATABASE_NAME,
                                             user=USER,
                                             password=PASSWORD)
        mySql_insert_query = """SELECT * FROM users """

        cursor = connection.cursor()
        cursor.execute(mySql_insert_query)
        records = cursor.fetchall()
        return records

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()


def add_refresh_token(value):
    try:
        connection = mysql.connector.connect(host=HOST,
                                             database=DATABASE_NAME,
                                             user=USER,
                                             password=PASSWORD)
        mySql_insert_query = 'INSERT INTO refreshtokens (refreshtokens) VALUES ("%s") ' % value

        cursor = connection.cursor()
        cursor.execute(mySql_insert_query)
        connection.commit()

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()


def show_refresh_token():
    try:
        connection = mysql.connector.connect(host=HOST,
                                             database=DATABASE_NAME,
                                             user=USER,
                                             password=PASSWORD)
        mySql_insert_query = """SELECT * FROM refreshtokens """

        cursor = connection.cursor()
        cursor.execute(mySql_insert_query)
        records = cursor.fetchall()
        for row in records:
            print(row)

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

def get_products():
    try:
        connection = mysql.connector.connect(host=HOST,
                                             database=DATABASE_NAME,
                                             user=USER,
                                             password=PASSWORD)
        mySql_insert_query = """SELECT * FROM products """

        cursor = connection.cursor(dictionary=True)
        cursor.execute(mySql_insert_query)
        records = cursor.fetchall()
        return records

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()


def get_product(id):
    try:
        connection = mysql.connector.connect(host=HOST,
                                             database=DATABASE_NAME,
                                             user=USER,
                                             password=PASSWORD)
        mySql_insert_query = """SELECT * FROM products WHERE id = %s""" % id

        cursor = connection.cursor(dictionary=True)
        cursor.execute(mySql_insert_query)
        records = cursor.fetchall()
        return records

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()


