curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
      --header "Content-Type: application/json" \
      --header "Authorization: Token token=${TOKEN}" \
      --data '{
  "game": {
    "cell": {
      "index": 1,
      "value": "x"
    },
    "over": true
  }
}'
echo
