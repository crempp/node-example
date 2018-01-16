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
# WARNING!!!
# This deploy script is potentially dangerous. The way the variables are
# passed to the remote host they will be expanded by the local shell, which
# means the content of the variable would be interpreted as shell code by the
# remote shell, which means it introduces a command injection vulnerability.
# So generally it's discouraged to do so.
#
# Adapted from:
#   - http://mutanatum.com/posts/2016-10-05-DockerCI-to-Droplet.html
###############################################################################

ssh -o StrictHostKeyChecking=no root@$1 <<ENDSSH
   docker login -u gitlab-ci-token -p $2 registry.gitlab.com
   docker stop $3
   docker rm $3
   docker pull $4
   docker run --name $3 -p $5 -d $4
ENDSSH
