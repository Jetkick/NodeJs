-- migrate:up
CREATE TABLE bulletin_likes (
  user_id INT NOT NULL,
  detail_page_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (detail_page_id) REFERENCES  detail_pages (id)
)

-- migrate:down
DROP TABLE bulletin_likes
