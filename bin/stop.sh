#! /bin/bash
ps -ef|grep Dflag=${PLATFORM2_NAME}|grep -v grep|grep -v tail|awk 'BEGIN{printf "kill "}{printf "%s ", $2}'|bash
echo "${PLATFORM2_NAME} stopped!"