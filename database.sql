CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "haiku" (
    "id" SERIAL PRIMARY KEY,
    "word" VARCHAR (80) NOT NULL,
    "line1" VARCHAR (200) NOT NULL,
    "line2" VARCHAR (200) NOT NULL,
    "line3" VARCHAR (200) NOT NULL,
    "date" DATE,
    "user_id" INT REFERENCES "user"
);


INSERT INTO "user" ("username", "password") VALUES ($1, $2) RETURNING id;