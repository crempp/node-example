# Nodejs Dockerized Web Application

[![CircleCI](https://circleci.com/gh/crempp/node-example.svg?style=svg)](https://circleci.com/gh/crempp/node-example)

This is a simple dockerized node web app used for testing.

## Building the Image
Go to the root directory of this project and run the following command to build
the Docker image. The -t flag lets you tag your image so it's easier to find
later using the docker images command:

```
$ docker build -t node-example .
```

Your image will now be listed by Docker:
```
$ docker images

REPOSITORY             TAG                 IMAGE ID            CREATED             SIZE
node-example           latest              acf98d459910        37 seconds ago      660MB
node                   boron               3d258692b9fa        3 days ago          656MB
```

## Run the image

Running your image with -d runs the container in detached mode, leaving the
container running in the background. The -p flag redirects a public port to a
private port inside the container. Run the image you previously built:

```
$ docker run -p 49160:8080 -d node-example
```

To stop the docker container 
```
$ docker stop <container-id>
```

To remove the docker image
```
$ docker rmi node-example
```
