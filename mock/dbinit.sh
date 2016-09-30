#!/bin/bash
postgres
./root/wait-for-it.sh localhost:5432 -t 60
createdb -h 127.0.0.1 -p 5432 -U postgres -w -e sandbar_dev
pg_restore -h localhost -d postgres -U postgres ~/dump.pg