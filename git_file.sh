#!/bin/bash
echo Easy Github push generator
echo Enter File Path:
read file
echo Enter Commit Title:
read commit

git add $file && git commit -m "$commit"