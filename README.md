# swg-manage

Simple Web UI for managing SWG Servers. (I think)

# Plan (original component ideas)

- Connection info - like wss://localhost:8080
- Logs
  - Just text based, will be periodically appending to the end
- Accounts
  - Query by username, view: username (string), access level (string), banned (boolean)
- Settings
  - Key-value, key is the configurations.txt entry, value is on the right side
  - Full list of configuration keys can be sent by the server
- Control
  - Start/Stop server
  - View uptime
