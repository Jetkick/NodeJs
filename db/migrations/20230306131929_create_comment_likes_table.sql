-- migrate:up
CREATE TABLE comment_likes (
  user_id INT NOT NULL,
  comment_page_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (comment_page_id) REFERENCES comment_pages (id)
)

-- migrate:down
DROP TABLE comment_likes
