#!/usr/bin/env bash

domain=`cat domain`

brew install gnu-sed
brew tap jondot/tap
brew install hygen

mkcert -cert-file ./out/$domain.crt -key-file ./out/$domain.key $domain

sudo sh ./patch-hosts add $domain