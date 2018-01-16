#!/usr/bin/env bash
###############################################################################
# node_example deploy script
#
# This script takes five arguments
#   deploy.sh deploy_host ci_build_token image_name repository port_mapping
#
# deploy_host: The host where we are deploying to, either an IP or dns name
# ci_build_token: The Gitlab token for logging into the registry
# image_name: The name to give the running container
# repository: The Docker repository
# port_mapping: The port mapping to give to the running container
#   e.g. "80:8080"
#
# Adapted from:
#   - http://mutanatum.com/posts/2016-10-05-DockerCI-to-Droplet.html
###############################################################################

echo $1
echo $2
echo $3
echo $4
echo $5

ssh -o StrictHostKeyChecking=no root@$1 <<-'ENDSSH'
   docker login -u gitlab-ci-token -p $2 registry.gitlab.com
   docker stop $3
   docker rm $3
   docker pull $4
   docker run --name $3 -p $5 -d $4
ENDSSH
