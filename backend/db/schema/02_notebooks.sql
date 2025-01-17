DROP TABLE IF EXISTS notebooks CASCADE;
CREATE TABLE notebooks (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) DEFAULT 'New Notebook' NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);