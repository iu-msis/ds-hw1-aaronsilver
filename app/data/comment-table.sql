# -------------
# --  Comments  --
# -------------
DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR(31) NOT NULL
);

INSERT INTO Comments (id, comment) VALUES (1, 'Hello world');
INSERT INTO Comments (id, comment) VALUES (2, 'D&S is awesome');
INSERT INTO Comments (id, comment) VALUES (3, 'Smile Face');
