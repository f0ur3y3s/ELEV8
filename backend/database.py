import sqlite3

class Database:
    def __init__(self, db):
        self.conn = sqlite3.connect(db)
        self.cur = self.conn.cursor()
        self.cur.execute("CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY, name text, bodypart text, reps integer, weight integer)")
        self.cur.execute("""
            INSERT INTO workouts (name, bodypart, reps, weight)
            SELECT 'Squats', 'Legs', 10, 50
            WHERE NOT EXISTS (SELECT 1 FROM workouts WHERE name = 'Squats')
        """
        )
        self.cur.execute("""
            INSERT INTO workouts (name, bodypart, reps, weight)
            SELECT 'Bench Press', 'Chest', 10, 50
            WHERE NOT EXISTS (SELECT 1 FROM workouts WHERE name = 'Bench Press')
        """
        )
        self.cur.execute("""
            INSERT INTO workouts (name, bodypart, reps, weight)
            SELECT 'Deadlifts', 'Back', 10, 50
            WHERE NOT EXISTS (SELECT 1 FROM workouts WHERE name = 'Deadlifts')
        """
        )
        self.cur.execute("""
            INSERT INTO workouts (name, bodypart, reps, weight)
            SELECT 'Overhead Press', 'Shoulders', 10, 50
            WHERE NOT EXISTS (SELECT 1 FROM workouts WHERE name = 'Overhead Press')
        """
        )
        self.conn.commit()

    def insert(self, name, bodypart, sets, weight):
        self.cur.execute("INSERT INTO workouts VALUES (NULL, ?, ?, ?, ?)", (name, bodypart, sets, weight))
        self.conn.commit()

    def view(self):
        self.cur.execute("SELECT * FROM workouts")
        rows = self.cur.fetchall()
        return rows

    # def search(self, title="", author="", year="", isbn=""):
    def search(self, name="", bodypart="", sets="", weight=""):
        self.cur.execute("SELECT * FROM workouts WHERE name=? OR bodypart=? OR sets=? OR weight=?", (name, bodypart, sets, weight))
        # self.cur.execute("SELECT * FROM book WHERE title=? OR author=? OR year=? OR isbn=?", (title, author, year, isbn))
        rows = self.cur.fetchall()
        return rows

    def delete(self, id):
        # self.cur.execute("DELETE FROM book WHERE id=?", (id,))
        self.cur.execute("DELETE FROM workouts WHERE id=?", (id,))
        self.conn.commit()

    # def update(self, id, title, author, year, isbn):
    def update(self, id, name, bodypart, sets, weight):
        self.cur.execute("UPDATE workouts SET name=?, bodypart=?, sets=?, weight=? WHERE id=?", (name, bodypart, sets, weight, id))
        self.conn.commit()

    def __del__(self):
        self.conn.close()