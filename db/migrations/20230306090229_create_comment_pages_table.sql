-- migrate:up
CREATE TABLE comment_pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(500) NULL,
  user_id INT NOT NULL,
  detail_page_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (detail_page_id) REFERENCES detail_pages (id)
)

-- migrate:down
DROP TABLE comment_pages
