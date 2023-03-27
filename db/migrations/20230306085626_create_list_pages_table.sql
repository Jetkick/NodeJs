-- migrate:up
CREATE TABLE list_pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  detail_page_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (detail_page_id) REFERENCES detail_pages (id)
)

-- migrate:down
DROP TABLE list_pages
