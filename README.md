Tom tosseyn be
======


# convert png to jpg
mogrify -format jpg static/images/*/*.png


cp static/images/2880_WIDTH/*.jpg static/images/1440-WIDTH/
cp static/images/1800_HIGH/*.jpg static/images/900_HIGH/

# copy larger images to smaller folder

mogrify -quality 90 -resize x900 900_HIGH/*.jpg
mogrify -quality 90 -resize 1440x 1440-WIDTH/*.jpg

# move to final

cp static/images/900_HIGH/*.jpg static/images/final/ && cp static/images/1440-WIDTH/*.jpg static/images/final/

