# Nodejs Dockerized Web Application

This is a simple dockerized node web app used for testing.

## Building the Image
Go to the root directory of this project and run the following command to build
the Docker image. The -t flag lets you tag your image so it's easier to find
later using the docker images command:

```
$ docker build -t node-example/web-app-production -f Dockerfile.production .
$ docker build -t node-example/web-app-test -f Dockerfile.test .
```

Your image will now be listed by Docker:
```
$ docker images

REPOSITORY                        TAG                 IMAGE ID            CREATED             SIZE
node-example/web-app-test         latest              d37834339740        26 seconds ago      723MB
node-example/web-app-production   latest              071425154b3e        2 minutes ago       691MB
node                              carbon              b87c2ad8344d        12 days ago         676MB
```

## Run the image

Running your image with -d runs the container in detached mode, leaving the
container running in the background. The -p flag redirects a public port to a
private port inside the container. Run the image you previously built:

```
$ docker run -p 49160:8080 -d node-example/web-app-test
```

To stop the docker container 
```
$ docker stop <container-id>
```

To remove the docker image
```
$ docker rmi node-example/web-app
```
