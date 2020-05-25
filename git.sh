#!/bin/bash
echo Easy Github push generator
echo Enter Commit Title:
read commit

git add . && git commit -m "$commit"