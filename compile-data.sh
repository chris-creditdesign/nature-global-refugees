#! /usr/bin/env bash
RED=`tput setaf 1`
GREEN=`tput setaf 2`
NOCOLOR=`tput sgr0`

echo "${RED}Download CSV file from github ${NOCOLOR}"
curl -o assets/data/refugees.csv https://raw.githubusercontent.com/NikolaSander/global-refugees/gh-pages/refugees.csv

echo ""

echo "${GREEN}Column Names in refugees.csv: ${NOCOLOR}"
csvcut -n assets/data/refugees.csv

echo ""

echo "${RED}Remove 2015 & 2017 data & save as refugees-nature.csv ${NOCOLOR}"
csvcut -c 1,2,3,4,6,8,9,10,11,12,14 assets/data/refugees.csv > assets/data/refugees-nature.csv

echo ""

echo "${GREEN}Column Names in refugees-nature.csv: ${NOCOLOR}"
csvcut -n assets/data/refugees-nature.csv

echo ""

echo "${RED}Compile into JSON with cmp-compile as refugee-data-nature.json ${NOCOLOR}"
csvcut -c 1,2,3,4,6,8,9,10,11,12,14 assets/data/refugees.csv > assets/data/refugees-nature.csv

echo ""

cmp-compile assets/data/refugees-nature.csv > assets/data/refugee-data-nature.json --regions Northamerica,Africa,Europe,FmrUSSR,Westasia,Southasia,Eastasia,Southeastasia,Stateless,Latinamerica


